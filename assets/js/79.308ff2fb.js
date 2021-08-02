(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{487:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"intro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),a("p",[t._v("Ok, so far so good, you've discovered many aspects of a skill. The good news is that this is a never ending learning experience, and we've implemented far more features for your skill to be as useful as possible!")]),t._v(" "),a("h2",{attrs:{id:"widgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[t._v("#")]),t._v(" Widgets")]),t._v(" "),a("p",[t._v("Widgets are little tiles that a user can add to the interface home screen. They provide a quick overview or functions to your skills. Think a Philips Hue lamp adding a widget for every lamp the user has connected, allowing the user to click on the widget to toggle the light state. Or a widget for a shopping list displaying what's currently in your list. Or a widget displaying the temperature at your Netatmo devices. Or... Well, you got it I guess?")]),t._v(" "),a("h3",{attrs:{id:"widgets-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-structure"}},[t._v("#")]),t._v(" Widgets structure")]),t._v(" "),a("p",[t._v("Widgets come embedded with your skill. They are not mandatory but can be a nice addition for users using the interface. You can add more than one widget per skill, and the user decides which ones to use. To add a widget you must create the following structure in your existing skill structure, our HelloWorld skill:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ widgets\n│  └─ css\n│     └─ Helloworld.css\n│  └─ img\n│     └─ .gitkeep\n│  └─ js\n│     └─ Helloworld.js\n│  └─ lang\n│     └─ Helloworld.lang.json\n│  └─ templates\n│     └─ Helloworld.html\n│  └─ __init__.py\n│  └─ HelloWorldWidget.py\n")])])]),a("p",[t._v("Let's break down this structure!")]),t._v(" "),a("h4",{attrs:{id:"css-helloworld-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-helloworld-css"}},[t._v("#")]),t._v(" css/Helloworld.css")]),t._v(" "),a("p",[t._v("This is your widget dedicated css file! The default content should be as follows:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Helloworld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"img"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#img"}},[t._v("#")]),t._v(" img")]),t._v(" "),a("p",[t._v("If your widgets uses image files, such as backgrounds, you could place them here, for organisation's sake.")]),t._v(" "),a("h4",{attrs:{id:"js-helloworld-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-helloworld-js"}},[t._v("#")]),t._v(" js/Helloworld.js")]),t._v(" "),a("p",[t._v("The engine of your widget! If your widget is interactive, you can code whatever you want in there! A basic file should look like:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Helloworld_Helloworld")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Widget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" widgetId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" widgetId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Ok, so guidance here...")]),t._v(" "),a("p",[t._v("First you should know that users can add your widget as many times as they want on the same page. If you've ever done some HTML and/or javascript, you can immediately think about id collisions. Project Alice overcomes this issue by doing some magic for you, given you've followed the structure very strictly.")]),t._v(" "),a("ul",[a("li",[t._v("Your widget is a "),a("code",[t._v("class")])]),t._v(" "),a("li",[t._v("The class name is of that type: "),a("code",[t._v("Skillname_Widgetname")]),t._v(". This is "),a("strong",[t._v("very important")])]),t._v(" "),a("li",[t._v("The class extends an inbuilt "),a("code",[t._v("Widget")]),t._v(" class. You can find it "),a("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAlice/blob/1.0.0-b5/core/webApi/static/Widget.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". It is served through our "),a("a",{attrs:{href:"https://api.projectalice.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),a("OutboundLink")],1),t._v(". The widget class is evolving, but for now offers\n"),a("ul",[a("li",[t._v("Easy access to the widget's "),a("strong",[t._v("main div")]),t._v(" with "),a("code",[t._v("this.myDiv")]),t._v(". It then accepts "),a("code",[t._v("querySelectors")]),t._v(" from javascript.")]),t._v(" "),a("li",[t._v("Easy way and hassle-free method to connect your widget to Alice's Mqtt server: Your widget calls "),a("code",[t._v("this.subscribe('hermes/dialog/sessionStarted', this.myCallbackFunction)")]),t._v(". As soon as something is published on "),a("code",[t._v("'hermes/dialog/sessionStarted'")]),t._v(" your widget's "),a("code",[t._v("myCallbackFunction")]),t._v(" will be called with the mqtt "),a("code",[t._v("message")]),t._v(" as argument.")]),t._v(" "),a("li",[t._v("Easy access to Alice's settings with "),a("code",[t._v("this.aliceSettings")])]),t._v(" "),a("li",[t._v("Alice API calls with "),a("code",[t._v("this.mySkill()")]),t._v(" (see "),a("a",{attrs:{href:"#widgets-calls-to-alice-core"}},[t._v("Widgets calls to Alice Core")]),t._v(")")])])]),t._v(" "),a("li",[t._v("The class constructor receives 2 immutable arguments:\n"),a("ul",[a("li",[a("code",[t._v("uid")]),t._v(": This uid is generated by the interface when loading the widgets. This uid is going to be appended to your widget main "),a("code",[t._v("div")])]),t._v(" "),a("li",[a("code",[t._v("widgetId")]),t._v(": A reference to the widget row insert id from Alice's database.")])])])]),t._v(" "),a("p",[t._v("Apart from that, you are free to do what you want!")]),t._v(" "),a("h4",{attrs:{id:"lang-helloworld-lang-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang-helloworld-lang-json"}},[t._v("#")]),t._v(" lang/Helloworld.lang.json")]),t._v(" "),a("p",[t._v("This file can be used if your widget displays texts, such as html field labels, buttons or whatever that has text that should be translated. Remember what languages you made your skill compatible with! Your widget should support them too! The structure is the following:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello all"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"de"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hallo zusammen"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello à tous"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"templates-helloworld-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templates-helloworld-html"}},[t._v("#")]),t._v(" templates/Helloworld.html")]),t._v(" "),a("p",[t._v("This is what is rendered on the home page, it's your widget! A basic widget file looks like:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("fas fa-biohazard"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Helloworld_Helloworld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("widget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("We first define a "),a("code",[t._v("widget")]),t._v(" as container and set its "),a("code",[t._v("icon")]),t._v(" tp "),a("code",[t._v("fas fa-biohazard")]),t._v(". You can get other icons, from the "),a("strong",[t._v("free")]),t._v(" icons, on "),a("a",{attrs:{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fontawesome"),a("OutboundLink")],1),t._v(". These custom tags will be removed when parsed by Alice. What stays is the "),a("code",[t._v("div")]),t._v("of class "),a("code",[t._v("Helloworld")]),t._v(". It's important to note that there's "),a("strong",[t._v("no id")]),t._v(", but a "),a("strong",[t._v("data-ref")]),t._v(" following the same naming convention as your javascript class! This is used by Alice to identify the widget instance and gets the "),a("code",[t._v("uid")]),t._v(" appended.")]),t._v(" "),a("p",[t._v("Also, do you remember the language file? Using automatic translation isn't that hard! Instead of hardcoding your language string, simply replace it by "),a("code",{pre:!0},[t._v("{{ lang.yourStringIndex }}")]),t._v(". This will automatically be replaced by, if your Alice instance runs in english, "),a("code",[t._v("HelloWorldWidget.json['en']['yourStringIndex']")])]),t._v(" "),a("h4",{attrs:{id:"helloworldwidget-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helloworldwidget-py"}},[t._v("#")]),t._v(" HelloWorldWidget.py")]),t._v(" "),a("p",[t._v("This is what makes your widget be loaded by Alice! A raw widget python file would be:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sqlite3\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Widget\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WidgetSizes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WidgetSizes\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Helloworld")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n\tDEFAULT_SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WidgetSizes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w_small\n\tDEFAULT_OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sqlite3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Let's take a little look at this!")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SIZE: Defines the size your widget is going to render, in pixels:")]),t._v(" "),a("ul",[a("li",[t._v("w_tiny: 50x50")]),t._v(" "),a("li",[t._v("w_tiny_wide: 100x50")]),t._v(" "),a("li",[t._v("w_tiny_tall: 50x100")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w_small: 100x100")]),t._v(" "),a("li",[t._v("w_small_wide: 200x100")]),t._v(" "),a("li",[t._v("w_small_tall: 100x200")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w: 200x200")]),t._v(" "),a("li",[t._v("w_wide: 300x200")]),t._v(" "),a("li",[t._v("w_tall: 200x300")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w_large: 300x300")]),t._v(" "),a("li",[t._v("w_large_wide: 400x300")]),t._v(" "),a("li",[t._v("w_large_tall: 300x400")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w_extralarge: 500x500")]),t._v(" "),a("li",[t._v("w_extralarge_wide: 700x500")]),t._v(" "),a("li",[t._v("w_extralarge_tall: 500x700")])])]),t._v(" "),a("li",[a("p",[t._v("OPTIONS")]),t._v(" "),a("ul",[a("li",[t._v("To be implemented, but will allow widget options")])])])]),t._v(" "),a("h3",{attrs:{id:"widgets-calls-to-alice-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-calls-to-alice-core"}},[t._v("#")]),t._v(" Widgets calls to Alice Core")]),t._v(" "),a("p",[t._v("Beside the API we also have the possibility for your widgets to call functions on the core directly! You want to know the best? It's very simple! Simply code your python function in your widget python file and make it return a string. In the example below, the function is "),a("code",[t._v("getLocks")]),t._v(", in your skill directory")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n\tDEFAULT_SIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WidgetSizes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w_wide\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLocks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" device "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("skillInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myDevices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("In your JS, you can access this python function asynchronously just by calling")]),t._v(" "),a("p",[a("code",[t._v("self.mySkill().getLocks")])]),t._v(" "),a("p",[t._v("This returns a promise, which you can handle with "),a("code",[t._v("then()")]),t._v(" such as")]),t._v(" "),a("p",[a("code",[t._v("self.mySkill().getLocks.then(response => response.json()).then(data => {console.log(data})")])]),t._v(" "),a("h3",{attrs:{id:"built-in-css-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-css-rules"}},[t._v("#")]),t._v(" Built-in css rules")]),t._v(" "),a("p",[t._v("The interface loads our css rules, and these are available at all time! Let me try to list the ones that are most important for you as a widget dev!")]),t._v(" "),a("h4",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("p",[t._v("We have some variables set for you to use in your widgets:")]),t._v(" "),a("h5",{attrs:{id:"hover-color-of-a-link-when-hovered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hover-color-of-a-link-when-hovered"}},[t._v("#")]),t._v(" --hover : Color of a link when hovered")]),t._v(" "),a("h5",{attrs:{id:"mainbg-main-color-of-the-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mainbg-main-color-of-the-background"}},[t._v("#")]),t._v(" --mainBG : Main color of the background")]),t._v(" "),a("h5",{attrs:{id:"windowbg-color-of-windows-above-the-main-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windowbg-color-of-windows-above-the-main-background"}},[t._v("#")]),t._v(" --windowBG : Color of windows above the main background")]),t._v(" "),a("h5",{attrs:{id:"secondary-secondary-color-of-windows-above-the-main-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secondary-secondary-color-of-windows-above-the-main-background"}},[t._v("#")]),t._v(" --secondary : Secondary color of windows above the main background")]),t._v(" "),a("h5",{attrs:{id:"accent-accentuated-color-for-items-that-need-to-draw-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accent-accentuated-color-for-items-that-need-to-draw-attention"}},[t._v("#")]),t._v(" --accent : Accentuated color, for items that need to draw attention")]),t._v(" "),a("h5",{attrs:{id:"text-texts-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-texts-color"}},[t._v("#")]),t._v(" --text : Texts color")]),t._v(" "),a("h5",{attrs:{id:"normal-normal-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normal-normal-font"}},[t._v("#")]),t._v(" --normal: Normal font")]),t._v(" "),a("h5",{attrs:{id:"light-light-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#light-light-font"}},[t._v("#")]),t._v(" --light: Light font")]),t._v(" "),a("h5",{attrs:{id:"medium-medium-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#medium-medium-font"}},[t._v("#")]),t._v(" --medium: Medium font")]),t._v(" "),a("h5",{attrs:{id:"bold-bold-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bold-bold-font"}},[t._v("#")]),t._v(" --bold: Bold font")]),t._v(" "),a("h5",{attrs:{id:"italic-italic-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#italic-italic-font"}},[t._v("#")]),t._v(" --italic: Italic font")]),t._v(" "),a("h5",{attrs:{id:"lightitalic-light-italic-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightitalic-light-italic-font"}},[t._v("#")]),t._v(" --lightItalic: Light italic font")]),t._v(" "),a("h5",{attrs:{id:"mediumitalic-medium-italic-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mediumitalic-medium-italic-font"}},[t._v("#")]),t._v(" --mediumItalic: Medium italic font")]),t._v(" "),a("h5",{attrs:{id:"bolditalic-bold-italic-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bolditalic-bold-italic-font"}},[t._v("#")]),t._v(" --boldItalic: Bold italic font")]),t._v(" "),a("h5",{attrs:{id:"monospace-monospace-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monospace-monospace-font"}},[t._v("#")]),t._v(" --monospace: Monospace font")]),t._v(" "),a("h4",{attrs:{id:"classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),a("p",[t._v("Some reusable classes")]),t._v(" "),a("h5",{attrs:{id:"tilecontainer-if-you-need-to-create-a-tile-system-this-is-used-for-the-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tilecontainer-if-you-need-to-create-a-tile-system-this-is-used-for-the-container"}},[t._v("#")]),t._v(" .tileContainer : If you need to create a tile system, this is used for the container")]),t._v(" "),a("h5",{attrs:{id:"tile-if-you-create-tiles-use-this-class-for-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tile-if-you-create-tiles-use-this-class-for-them"}},[t._v("#")]),t._v(" .tile : If you create tiles, use this class for them")]),t._v(" "),a("h5",{attrs:{id:"red-red-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#red-red-color-for-texts"}},[t._v("#")]),t._v(" .red : Red color for texts")]),t._v(" "),a("h5",{attrs:{id:"disabled-red-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabled-red-color-for-texts"}},[t._v("#")]),t._v(" .disabled : Red color for texts")]),t._v(" "),a("h5",{attrs:{id:"warning-red-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warning-red-color-for-texts"}},[t._v("#")]),t._v(" .warning : Red color for texts")]),t._v(" "),a("h5",{attrs:{id:"green-green-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#green-green-color-for-texts"}},[t._v("#")]),t._v(" .green : Green color for texts")]),t._v(" "),a("h5",{attrs:{id:"saved-green-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saved-green-color-for-texts"}},[t._v("#")]),t._v(" .saved : Green color for texts")]),t._v(" "),a("h5",{attrs:{id:"yellow-yellow-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yellow-yellow-color-for-texts"}},[t._v("#")]),t._v(" .yellow : Yellow color for texts")]),t._v(" "),a("h5",{attrs:{id:"active-yellow-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-yellow-color-for-texts"}},[t._v("#")]),t._v(" .active : Yellow color for texts")]),t._v(" "),a("h5",{attrs:{id:"saving-yellow-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saving-yellow-color-for-texts"}},[t._v("#")]),t._v(" .saving : Yellow color for texts")]),t._v(" "),a("h5",{attrs:{id:"hidden-display-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidden-display-none"}},[t._v("#")]),t._v(" .hidden : Display None")]),t._v(" "),a("h5",{attrs:{id:"button-if-you-use-buttons-use-this-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-if-you-use-buttons-use-this-class"}},[t._v("#")]),t._v(" .button : If you use buttons, use this class")]),t._v(" "),a("h2",{attrs:{id:"nodered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodered"}},[t._v("#")]),t._v(" Nodered")]),t._v(" "),a("p",[t._v("WIP")]),t._v(" "),a("h2",{attrs:{id:"devices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#devices"}},[t._v("#")]),t._v(" Devices")]),t._v(" "),a("p",[t._v("WIP\nIf you want to include custom devices into your skill, the folders structure is enhanced by a devices folder:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ devices\n│  ├─ img\n|  |  ├─ customImage.png\n│  |  └─ yourDevice.png\n|  ├─ __init__.py\n|  ├─ yourDevice.config.template\n│  └─ yourDevice.py\n")])])]),a("p",[t._v("The default image is always named like your device and has a png-extension. You can provide different images by overwriting the method getDeviceIcon.\nFor now only .png is possible")]),t._v(" "),a("p",[t._v("yourDevice.py must extend Device and include at least a redefinition for:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@classmethod")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeviceTypeDefinition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deviceTypeName'")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yourDevice'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Must match your class name")]),t._v("\n\t\t         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'perLocationLimit'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# How many devices are allowed per location, with 0 being unlimited")]),t._v("\n\t\t         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'totalDeviceLimit'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# How many devices are allowed in total, again 0 being unlimited")]),t._v("\n\t\t         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'allowLocationLinks'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Are links from the device to a location allowed")]),t._v("\n\t\t         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'allowHeartbeatOverride'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Is it possible to set a custom Heartbeat per device?")]),t._v("\n\t\t         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heartbeatRate'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The default heart rate for the device type")]),t._v("\n\t\t         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abilities'")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DeviceAbility"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NONE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The list of abilities the device type has")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("yourDevice.config.template contains the per device set-able configuration:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deviceConfigs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"someValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataType"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"boolean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSensitive"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Some description to show as help for the user"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"someFreeTextInput"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultValue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"They can be prefilled!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataType"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isSensitive"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Even more types are possible, try sensitive for passwords!"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);