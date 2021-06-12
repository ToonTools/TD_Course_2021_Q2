
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

 function toggleValue(valAttr){
    MessageLog.trace("button has been pressed")
 }
 
```