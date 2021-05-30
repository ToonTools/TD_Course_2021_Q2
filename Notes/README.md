# Additional Notes
## Helpers for writing .md (markdown) documents
* [[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)] 
* [[html cheatsheet](https://htmlcheatsheet.com/)]

---
## Day 4 
### Modify the image tooltip
`<img alt="image tooltip" src="path to image file" >`

---

## Day 5
### Scripted-Action node
* [[source tweet from Adam Phillips / chluaid](https://twitter.com/chluaid/status/1393084785455554565)]
* local TB documentaiton
  `C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\Plugins\ParticleModuleLib\ParticleJavascript\resources\Documentation\html`)]`

### Storyboard Pro

* [[Import Scripts .fdp](https://learn.toonboom.com/modules/script-and-captions/topic/importing-scripts)]
* [[Corey Barnes Storyboard Pro scripts](https://gumroad.com/myanimewaifu)]
* [[track changes](https://docs.toonboom.com/help/storyboard-pro-6/storyboard/reference/dialogs/track-changes-window.html)]

--- 
## Day 7
### command line for Harmony

`HarmonyPremium -help` and `ControlCenter -help` to get intitial help and check paths are working

### You can use a helper function like this to print the output message to your context
This will not work on ControlCenter -runStageScript commands, you will either need to figure out what the message output fommand for that is, or write the inforamtion to a text log file somwehere. See [[TD_6-2_makeAndRead_textFile.js](https://github.com/ToonTools/TD_Course_2021_Q2/blob/main/TD_6-2_makeAndRead_textFile.js)] for help on that.
``` javascript
function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}
```

#### Harmony Standalone execute on 1 file:
``` javascript
HarmonyPremium -compile <script full path> <.xstage file full path>
``` 
```javascript
HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" "C:\Users\chris\Documents\BlueZoo\testHarmony\colourSpaceTest\colourSpaceTest.xstage"
```  

#### Control Center execute on 1 file:
```javascript
HarmonyPremium -compile <script full path> -env <environment name> -job <job name> -scene <scene name>
``` 
```javascript
HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" -env TCH_TheCatch -job TCH_101_Pilot -scene 010_001A
```

#### Control Center execute on all scenes in a job
```
Controlcenter -runStageScript <qsa_script_name> -env <environment name> -job <job name>
```
```javascript
Controlcenter -runStageScript "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-2_listWriteNodesInScene.js" -env TCH_TheCatch -job TCH_101_Pilot
```
---
## Day 8
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
