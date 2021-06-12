
## specifications
```html
<specs>
  <ports>
    <in type="IMAGE"/>
    <out type="IMAGE"/>
  </ports>
  <attributes>
    <attr type="BOOL" name="checkbox_value"
value="false" tooltip="Checkbox ON/OFF value."/>
  </attributes>
</specs>

```

## UI Script
```javascript
include(scene.currentProjectPath() + "/scripts/myScript.js")
```

## UI data
```javascript

```

## myScript.js
```javascript
Controller.onShowControl = function(){
    
    MessageLog.trace("my custom master controller is shown")

    Controller.controls = []
    var valAttr = node.getAttr(Controller.node, frame.current(), "checkbox_value")
    var checkBox = new  CheckboxWidget({ 

        data: valAttr,
           position : Point2d(0.,0.),
           screen_space : false,
           outer_color : ColorRGBA(0,0,0,255),
           on_color : ColorRGBA(0,255,0,128),
           off_color : ColorRGBA(255,0,0,128),
           size : 1
   });

   checkBox.valueChanged.connect(toggleValue);
 
    Controller.controls = [checkBox];
}

Controller.onHideControl = function(){  

    MessageLog.trace("my custom master controller is hidden");
    node.setTextAttr(Controller.node, "checkbox_value",  frame.current(), false);
 }


function showDeformers(){
    var type = ["CurveModule","FreeFormDeformation","BendyBoneModule"]
    var nodesToShow = node.getNodes(type)
    for ( var i = 0 ; i < nodesToShow.length ; i++){
        selection.addNodeToSelection(nodesToShow[i])
    }
    Action.perform("onActionShowSelectedDeformers()", "miniPegModuleResponder");
    selection.clearSelection()
}

function hideDeformers(){
    selection.clearSelection()
    selection.addNodeToSelection(Controller.node)
    Action.perform("onActionShowSelectedDeformers()", "miniPegModuleResponder");
}


function enableAllDrawings(){
    var type = ["READ"]
    var nodesToEnable = node.getNodes(type)
    for ( var i = 0 ; i < nodesToEnable.length ; i++){
        // how do we enable nodes
        MessageLog.trace("52 will enable : " + nodesToEnable[i])

        node.setEnable( nodesToEnable[i], true )
    }
}
function disableAllDrawings(){
    var type = ["READ"]
    var nodesToDisable = node.getNodes(type)
    for ( var i = 0 ; i < nodesToDisable.length ; i++){
        // how do we enable nodes
        MessageLog.trace("64 will disable : " + nodesToDisable[i])
        node.setEnable( nodesToDisable[i], false )
    }
}



 function toggleValue(valAttr){

    try{
        MessageLog.trace("Button is now : " + valAttr)

        var shiftCheck = KeyModifiers.IsShiftPressed()
        // if shift is clicked: show/hide deformers, otherwise show/hide read nodes

        if(shiftCheck){ 
            // show/hide deformers
            if(valAttr){  showDeformers()
            }else{    hideDeformers() }

        }else{
            // show/hide read nodes
            if(valAttr){   enableAllDrawings()
            }else{    disableAllDrawings()}
        }

    }
    catch(error){
        MessageLog.trace("Error : " + error )
    }
 }
```