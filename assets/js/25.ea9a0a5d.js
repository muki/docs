(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{411:function(e,i,n){"use strict";n.r(i);var t=n(18),l=Object(t.a)({},(function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("Achtung!")]),e._v(" "),n("p",[e._v("Es handelt sich um eine Alpha Version! Es kann jederzeit zu größeren Änderungen in desem Abschnitt kommen. Die Zielgruppe sollte ein grundlegendes Verständnis ihrer Geräte haben, Linux und eventuell Programmierkenntenisse besitzen, sowie Python module installieren können.")])]),e._v(" "),n("ul",[n("li",[e._v("Download unseres vorgefertigten Raspbian Buster image:\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/releases/tag/v1.0.0-a1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direkter Download"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Diese Image enthält nicht mehr als Project Alice, mit allen Abhängigkeiten, sowie Hermes Led Control")]),e._v(" "),n("li",[e._v("Einen Einblick erhälst du in der "),n("a",{attrs:{href:"preinstalled"}},[e._v("Sektion Vorinstallierte Pakete")])])])])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),n("p",[e._v("Du benötigst den Skill AliceSatellite auf deiner Haupteinheit installiert!")])]),e._v(" "),n("ul",[n("li",[e._v("Flashe das image auf deine SD card")]),e._v(" "),n("li",[n("strong",[e._v("Platziere keine wpa_supplicant.conf oder ssh Datei in /boot")])]),e._v(" "),n("li",[n("strong",[e._v("Starte deinen Raspberry NICHT bevor die folgenden Schritte ausgeführt hast!!")])]),e._v(" "),n("li",[n("strong",[e._v("Bearbeite die /boot/ProjectAliceSatellite.yaml Datei")]),e._v(". Wenn es keine ProjectAliceSatellite.yaml auf deiner /boot Partition geben sollte, schnapp dir hier die neuste Version: "),n("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/blob/master/ProjectAliceSatellite.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProjectAliceSatellite.yaml"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Konfiguriere sie entsprechend deiner Informationen und Bedürfnisse. Alle Konfigurationen haben eine kurze Erklärung, das meiste sollte aber selbsterklärend sein.")]),e._v(" "),n("li",[e._v("Gehe sicher, dass du überall ein Leerzeichen nach den Doppelpunkten hast:\n"),n("ul",[n("li",[e._v("Falsch: "),n("code",[e._v("forceRewrite:yes")])]),e._v(" "),n("li",[e._v("Richtig: "),n("code",[e._v("forceRewrite: yes")])])])]),e._v(" "),n("li",[e._v("Wenn der Wert Sonderzeichen enthält, schließe den kompletten Wert mit Anführungszeichen ein:\n"),n("ul",[n("li",[e._v("Falsch: "),n("code",[e._v("mqttPassword: a:%qJi")])]),e._v(" "),n("li",[e._v("Richtig: "),n("code",[e._v('mqttPassword: "a:%qJi"')])])])]),e._v(" "),n("li",[e._v("Speichern, SD Karte abziehen und in den Raspberry Pi einstecken.")]),e._v(" "),n("li",[e._v('Frage Alice: "Füge einen neuen Satelliten '),n("em",[e._v("im Wohnzimmer")]),e._v(' hinzu"')]),e._v(" "),n("li",[e._v("Starte jetzt deinen Satelliten")]),e._v(" "),n("li",[e._v("Alice sollte sich selbst starten, mit deinem WLAN verbinden, Updates installieren, die Konfiguration einrichten und hochfahren. Das kann eine Weile dauern.")]),e._v(" "),n("li",[e._v('Wenn Alice auch nach 5 Minuten noch keinen Satelliten gefunden hat, wird sie dir das mitteilen. In dem Fall frag sie einfach nochmal, "Füge einen Satelliten hinzu". Je nach Hardware, kann die Installation auch mal über 5 Minuten benötigen.')]),e._v(" "),n("li",[e._v("Der SSH Benutzername ist "),n("code",[e._v("pi")]),e._v(" und das Passwort ist "),n("code",[e._v("umbrella")]),e._v(". "),n("strong",[e._v("Ändere das Kennwort nach einer erfolgreichen Installation ab!")])])]),e._v(" "),n("p",[e._v("Wenn alles funktioniert hat, bestätigt dir Alice das erfolgreiche Hinzufügen eines neuen Satelliten! Alice kümmert sich darum, dass dein Hotword und Wakeword, genau wie auf der Haupteinheit, auch auf dem Satelliten verfügbar ist.")]),e._v(" "),n("h4",{attrs:{id:"hast-du-ein-problem-mit-alice-sie-hort-dich-nicht-sie-scheint-nichtmal-zu-starten"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hast-du-ein-problem-mit-alice-sie-hort-dich-nicht-sie-scheint-nichtmal-zu-starten"}},[e._v("#")]),e._v(" Hast du ein Problem mit Alice? Sie hört dich nicht? Sie scheint nichtmal zu starten?")]),e._v(" "),n("p",[e._v("Wirf einen Blick in unseren "),n("a",{attrs:{href:"troubleshooting"}},[e._v("Troubleshooting Guide")]),e._v("!")])])}),[],!1,null,null,null);i.default=l.exports}}]);