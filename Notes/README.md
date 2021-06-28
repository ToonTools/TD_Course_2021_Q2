- [Additional Notes](#additional-notes)
  - [Helpers for writing .md (markdown) documents](#helpers-for-writing-md-markdown-documents)
- [Day 4](#day-4)
  - [Modify the image tooltip](#modify-the-image-tooltip)
- [Day 5](#day-5)
  - [Scripted-Action node](#scripted-action-node)
    - [Storyboard Pro](#storyboard-pro)
- [Day 7](#day-7)
  - [command prompt for Harmony](#command-prompt-for-harmony)
  - [Using Command Prompt](#using-command-prompt)
  - [You can use a helper function like this to print the output message to your context](#you-can-use-a-helper-function-like-this-to-print-the-output-message-to-your-context)
    - [Harmony Standalone execute on 1 file:](#harmony-standalone-execute-on-1-file)
    - [Control Center execute on 1 file:](#control-center-execute-on-1-file)
    - [Control Center execute on all scenes in a job](#control-center-execute-on-all-scenes-in-a-job)
- [Day 8](#day-8)
- [Day 10](#day-10)
  - [Expressions](#expressions)
      - [Multiply Value](#multiply-value)
      - [Use as a handle](#use-as-a-handle)
      - [linear translation of rotation](#linear-translation-of-rotation)
- [Day 11](#day-11)
      - [Responder List](#responder-list)
      - [Action List](#action-list)
- [Day 12](#day-12)
      [[Responder List](https://docs.toonboom.com/help/harmony-20/scripting/script/classAction.html#a4c23808879fd406368c2ecfe46e0799c)]
      [[Action List](https://docs.toonboom.com/help/harmony-20/scripting/script/classAction.html#ad9b65553c0959c0b7295a448f7bd1e3e)]
- [Day 12](#day-12)



# Additional Notes
## Helpers for writing .md (markdown) documents
* [[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)] 
* [[html cheatsheet](https://htmlcheatsheet.com/)]

---
# Day 4 
## Modify the image tooltip
`<img alt="image tooltip" src="path to image file" >`

---

# Day 5
## Scripted-Action node
* [[source tweet from Adam Phillips / chluaid](https://twitter.com/chluaid/status/1393084785455554565)]
* local TB documentaiton
  `C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\Plugins\ParticleModuleLib\ParticleJavascript\resources\Documentation\html`)]`

### Storyboard Pro

* [[Import Scripts .fdp](https://learn.toonboom.com/modules/script-and-captions/topic/importing-scripts)]
* [[Corey Barnes Storyboard Pro scripts](https://gumroad.com/myanimewaifu)]
* [[track changes](https://docs.toonboom.com/help/storyboard-pro-6/storyboard/reference/dialogs/track-changes-window.html)]

--- 
# Day 7
## command prompt for Harmony

`HarmonyPremium -help` and `ControlCenter -help` to get intitial help and check paths are working

## Using Command Prompt
You dont HAVE to set up your environment variables before doing this, but its easiest if you set your Harmony Path to an environment variable. This way you can launch command prompt from any context and the Harmony processes will be available.

Some of the services that could be useful to use from command line are: ( the `-help` flag will display all available flags for that command )

* `harmonyPremium` Harmony launcher
* `utransform` rasterise image
<br> e.g.
convert a .tvg file to a .png file
``` python
utransform -outformat PNG4 -outfile "C:\Users\chris\Desktop\TEMP\sketchOut.png"  "C:\Users\chris\Desktop\TEMP\HAR_004_sketch_sketch-1.tvg"
```
* `pix2vec` vectorise image
* `setdef` Set render environments and machines
* `ControlCenter` Control Center[[Control Center class reference](https://docs.toonboom.com/help/harmony-20/scripting/dbscript/classControlCentre.html)] [[Control Center scripting introduction](https://docs.toonboom.com/help/harmony-20/scripting/dbscript/index.html)]
* `ControlCenter -help` 
```python
Controlcenter -runScript <script_file> -user <user_name>

ControlCenter -runScript "C:\Users\chris\Documents\ToonBoom_Projects\TD Course 2021 Q2\Demo_Files\D3\ccScript_demo.js" -user usabatch
```



## You can use a helper function like this to print the output message to your context
This will not work on ControlCenter -runStageScript commands, you will either need to figure out what the message output fommand for that is, or write the inforamtion to a text log file somwehere. See [[TD_6-2_makeAndRead_textFile.js](https://github.com/ToonTools/TD_Course_2021_Q2/blob/main/TD_6-2_makeAndRead_textFile.js)] for help on that.
``` javascript
function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}
```

### Harmony Standalone execute on 1 file:
``` javascript
HarmonyPremium -compile <script full path> <.xstage file full path>
``` 
```javascript
HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" "C:\Users\chris\Documents\BlueZoo\testHarmony\colourSpaceTest\colourSpaceTest.xstage"
```  

### Control Center execute on 1 file:
```javascript
HarmonyPremium -compile <script full path> -env <environment name> -job <job name> -scene <scene name>
``` 
```javascript
HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" -env TCH_TheCatch -job TCH_101_Pilot -scene 010_001A
```

### Control Center execute on all scenes in a job
```
Controlcenter -runStageScript <qsa_script_name> -env <environment name> -job <job name>
```
```javascript
Controlcenter -runStageScript "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" -env TCH_TheCatch -job TCH_101_Pilot
```
---
# Day 8
modify shortcuts file here
```
C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\resources\shortcuts.xml
```
Make a backup before you edit it as it is difficult to fix without reinstalling harmony.

``` javascript
// TD_custom
<category id="TD_custom" text ="TD_custom">
  <shortcut checkable="false" id="getAttributes" longDesc="list the attributes and their value for the selected node" order="256" slot="onActionExecuteScript(QString)" responder="scriptResponder" itemParameter="getAttributes in TD_7-3_getAttributes.js" text="get attributes" value="`" >
</category>
```

# Day 10
## Expressions
For Freeze transformations, set them to 0 or 1.

#### Multiply Value
```
input       = value("Square-Y")
multiplier  = 3
output      = input * multiplier
```

#### Use as a handle
```
max = 5
min = 0

handle_Y = value("handle-P_Pos_y")

if( handle_Y <= min){
  handle_Y = min
}

if( handle_Y >= max){
  handle_Y = max
}
```

#### linear translation of rotation
```
angle = value("Circle-P_Angle_z")
radius = 3

value = radius * sin(angle)
```


# Day 11

#### [Responder List](https://docs.toonboom.com/help/harmony-20/scripting/script/classAction.html#a4c23808879fd406368c2ecfe46e0799c)
``` javascript
var rList = Action.getResponderList();
```

#### [Action List](https://docs.toonboom.com/help/harmony-20/scripting/script/classAction.html#ad9b65553c0959c0b7295a448f7bd1e3e)

```javascript
var aList = Action.getActionList("Node View");
```
```javascript
function availableActionsInContext(selContext){
  var aList = Action.getActionList(selContext);
  for(var i=0; i < aList.length; ++i)
  {
    MessageLog.trace( selContext +" action " + i + " : " rList[i] );
  }
}
availableActionsInContext("Camera")
```


---
# Day 12

[[Scripting Extended Creating a Tool](https://docs.toonboom.com/help/harmony-20/scripting/extended/tutorial-tool-creation.html)]
[[QMouseEvent](https://doc.qt.io/qt-5/qmouseevent.html)]