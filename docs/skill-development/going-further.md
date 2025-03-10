---
title: Going further
sidebarDepth: 6
tags:
- widget
- device
- node red
- nr
- css
- api
- structure
---

# Intro
Ok, so far so good, you've discovered many aspects of a skill. The good news is that this is a never ending learning experience, and we've implemented far more features for your skill to be as useful as possible!

## Widgets
Widgets are little tiles that a user can add to the interface home screen. They provide a quick overview or functions to your skills. Think a Philips Hue lamp adding a widget for every lamp the user has connected, allowing the user to click on the widget to toggle the light state. Or a widget for a shopping list displaying what's currently in your list. Or a widget displaying the temperature at your Netatmo devices. Or... Well, you got it I guess?

### Widgets structure
Widgets come embedded with your skill. They are not mandatory but can be a nice addition for users using the interface. You can add more than one widget per skill, and the user decides which ones to use. To add a widget you must create the following structure in your existing skill structure, our HelloWorld skill:

```text
.
├─ widgets
│  └─ css
│     └─ Helloworld.css
│  └─ img
│     └─ .gitkeep
│  └─ js
│     └─ Helloworld.js
│  └─ lang
│     └─ Helloworld.lang.json
│  └─ templates
│     └─ Helloworld.html
│  └─ __init__.py
│  └─ HelloWorldWidget.py
```

Let's break down this structure!

#### css/Helloworld.css
This is your widget dedicated css file! The default content should be as follows:

```css
.Helloworld {
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
}
```

#### img
If your widgets uses image files, such as backgrounds, you could place them here, for organisation's sake.

#### js/Helloworld.js
The engine of your widget! If your widget is interactive, you can code whatever you want in there! A basic file should look like:

```js
class Helloworld_Helloworld extends Widget {

  constructor(uid, widgetId) {
    super(uid, widgetId);
  }
}
```

Ok, so guidance here...

First you should know that users can add your widget as many times as they want on the same page. If you've ever done some HTML and/or javascript, you can immediately think about id collisions. Project Alice overcomes this issue by doing some magic for you, given you've followed the structure very strictly.

- Your widget is a `class`
- The class name is of that type: `Skillname_Widgetname`. This is **very important**
- The class extends an inbuilt `Widget` class. You can find it [here](https://github.com/project-alice-assistant/ProjectAlice/blob/1.0.0-b5/core/webApi/static/Widget.js). It is served through our [API](https://api.projectalice.io/). The widget class is evolving, but for now offers
  - Easy access to the widget's **main div** with `this.myDiv`. It then accepts `querySelectors` from javascript.
  - Easy way and hassle-free method to connect your widget to Alice's Mqtt server: Your widget calls `this.subscribe('hermes/dialog/sessionStarted', this.myCallbackFunction)`. As soon as something is published on `'hermes/dialog/sessionStarted'` your widget's `myCallbackFunction` will be called with the mqtt `message` as argument.
  - Easy access to Alice's settings with `this.aliceSettings`
  - Alice API calls with `this.mySkill` (see [Widget calls to Alice Core](#widget-calls-to-alice-core))
- The class constructor receives 2 immutable arguments:
  - `uid`: This uid is generated by the interface when loading the widgets. This uid is going to be appended to your widget main `div`
  - `widgetId`: A reference to the widget row insert id from Alice's database.
  
Apart from that, you are free to do what you want!

#### lang/Helloworld.lang.json
This file can be used if your widget displays texts, such as html field labels, buttons or whatever that has text that should be translated. Remember what languages you made your skill compatible with! Your widget should support them too! The structure is the following:

```json
{
	"en": {
		"title": "Hello all"
	},
	"de": {
		"title": "Hallo zusammen"
	},
	"fr": {
		"title": "Hello à tous"
	}
}
```

#### templates/Helloworld.html
This is what is rendered on the home page, it's your widget! A basic widget file looks like:

```html
<widget>
  <icon>fas fa-biohazard</icon>
  <div class="Helloworld" data-ref="Helloworld_Helloworld"></div>
</widget>
```

We first define a `widget` as container and set its `icon` tp `fas fa-biohazard`. You can get other icons, from the **free** icons, on [Fontawesome](https://fontawesome.com/). These custom tags will be removed when parsed by Alice. What stays is the `div`of class `Helloworld`. It's important to note that there's **no id**, but a **data-ref** following the same naming convention as your javascript class! This is used by Alice to identify the widget instance and gets the `uid` appended.

Also, do you remember the language file? Using automatic translation isn't that hard! Instead of hardcoding your language string, simply replace it by <code v-pre>{{ lang.yourStringIndex }}</code>. This will automatically be replaced by, if your Alice instance runs in english, `HelloWorldWidget.json['en']['yourStringIndex']`

#### HelloWorldWidget.py
This is what makes your widget be loaded by Alice! A raw widget python file would be:

```python
import sqlite3

from core.webui.model.Widget import Widget
from core.webui.model.WidgetSizes import WidgetSizes


class Helloworld(Widget):

	DEFAULT_SIZE = WidgetSizes.w_small
	DEFAULT_OPTIONS: dict = dict()

	def __init__(self, data: sqlite3.Row):
		super().__init__(data)
```

Let's take a little look at this!

- SIZE: Defines the size your widget is going to render, in pixels:
  - w_tiny: 50x50
  - w_tiny_wide: 100x50
  - w_tiny_tall: 50x100
  -
  - w_small: 100x100
  - w_small_wide: 200x100
  - w_small_tall: 100x200
  -
  - w: 200x200
  - w_wide: 300x200
  - w_tall: 200x300
  -
  - w_large: 300x300
  - w_large_wide: 400x300
  - w_large_tall: 300x400
  -
  - w_extralarge: 500x500
  - w_extralarge_wide: 700x500
  - w_extralarge_tall: 500x700

- OPTIONS
  - To be implemented, but will allow widget options


### Widget calls to Alice Core
Beside the API we also have the possibility for your widgets to call functions on the core directly! You want to know the best? It's very simple! Simply code your python function in your widget python file and make it return a dict (that will become a JS json object). In the example below, the function is `getLocks`, in your widget script

```python
class Lock(Widget):

	DEFAULT_SIZE = WidgetSizes.w_wide

	def getLocks(self) -> dict:
		return {device.uid: device.toDict() for device in self.skillInstance.myDevices.values()}
```


In your JS, you can access this python function asynchronously just by calling

`self.mySkill.getLocks()`

This returns a promise, which you can handle with `then()` such as

`self.mySkill.getLocks().then(response => response.json()).then(data => {console.log(data})`

You can also pass arguments directly:

`self.mySkill.toggleLock({'uid': uid})` will call its python counterpart

```python
	def toggleLock(self, uid: str):
		self.skillInstance.toggleLock(uid=uid)
```
### Widget JS methods invoked by Alice
During display of a widget there a few methods Alice will call to keep everything clean and updated. The following chapter will handle these methods

#### refresh()

Called when the widgets settings are changed after the settings window is closed.
Use this to direcly react to new settings. Reload new informations, adjust the display - you know best what changes are required for your new settings!

#### onResize(target, width, height, delta, direction)

Called while the widget is resized by the user.
Use this to reorganize the widget, add more information to use the new space, or simplyfy it, when there is not that much space left.

#### stop()

Called when the page is switched in the UI and all widgets have to stop their execution.
Usually you want to stop all periodic jobs and refreshes when stop() is called.


### Built-in css rules

The interface loads our css rules, and these are available at all time! Let me try to list the ones that are most important for you as a widget dev!

#### Variables
We have some variables set for you to use in your widgets:

##### --hover : Color of a link when hovered
##### --mainBG : Main color of the background
##### --windowBG : Color of windows above the main background
##### --secondary : Secondary color of windows above the main background
##### --accent : Accentuated color, for items that need to draw attention
##### --text : Texts color
##### --normal: Normal font
##### --light: Light font
##### --medium: Medium font
##### --bold: Bold font
##### --italic: Italic font
##### --lightItalic: Light italic font
##### --mediumItalic: Medium italic font
##### --boldItalic: Bold italic font
##### --monospace: Monospace font

#### Classes
Some reusable classes

##### .tileContainer : If you need to create a tile system, this is used for the container
##### .tile : If you create tiles, use this class for them
##### .red : Red color for texts
##### .disabled : Red color for texts
##### .warning : Red color for texts
##### .green : Green color for texts
##### .saved : Green color for texts
##### .yellow : Yellow color for texts
##### .active : Yellow color for texts
##### .saving : Yellow color for texts
##### .hidden : Display None
##### .button : If you use buttons, use this class


## Nodered
WIP

## Devices
WIP
If you want to include custom devices into your skill, the folders structure is enhanced by a devices folder:
```text
.
├─ devices
│  ├─ img
|  |  ├─ customImage.png
│  |  └─ yourDevice.png
|  ├─ __init__.py
|  ├─ yourDevice.config.template
│  └─ yourDevice.py
```
The default image is always named like your device and has a png-extension. You can provide different images by overwriting the method getDeviceIcon.
For now only .png is possible

yourDevice.py must extend Device and include at least a redefinition for:
```python
	@classmethod
	def getDeviceTypeDefinition(cls) -> dict:
		return { 'deviceTypeName'        : 'yourDevice',			# Must match your class name
		         'perLocationLimit'      : 0,					# How many devices are allowed per location, with 0 being unlimited
		         'totalDeviceLimit'      : 0,					# How many devices are allowed in total, again 0 being unlimited
		         'allowLocationLinks'    : True,				# Are links from the device to a location allowed
		         'allowHeartbeatOverride': True,				# Is it possible to set a custom Heartbeat per device?
		         'heartbeatRate'         : 2700,				# The default heart rate for the device type
		         'abilities'             : [DeviceAbility.NONE]			# The list of abilities the device type has
		}
```
yourDevice.config.template contains the per device set-able configuration:
```json
{
	"deviceConfigs": {
		"someValue": {
			"defaultValue": true,
			"dataType"    : "boolean",
			"isSensitive" : false,
			"description" : "Some description to show as help for the user"
		},
		"someFreeTextInput": {
			"defaultValue": "They can be prefilled!",
			"dataType"    : "string",
			"isSensitive" : false,
			"description" : "Even more types are possible, try sensitive for passwords!"
		}
	}
}
```
