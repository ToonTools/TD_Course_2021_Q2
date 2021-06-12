// following https://docs.toonboom.com/help/harmony-20/premium/master-controller/function-wizard-customize-function.html
//!debug
function onPoint2dValueChanged(params, point2dVal)
{
  MessageLog.trace("START");
  var targetAttr = params.targetAttrs[0];

  for(var i=0; i<params.targetNodes.length; ++i)
  {
    var targetNode = params.targetNodes[i];
    var pos_x = node.getTextAttr(targetNode, frame.current(), "OFFSET.X");
    var pos_y = node.getTextAttr(targetNode, frame.current(), "OFFSET.Y");

    var deltaX = point2dVal.x - pos_x;
    var deltaY = point2dVal.y - pos_y;
    var angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

   node.setTextAttr(targetNode, "ROTATION.ANGLEZ", frame.current(), angle); 

  }

  MessageLog.trace("END");
}


include(fileMapper.toNativePath(specialFolders.resource+"/scripts/utilities/ui/functionWizard/mcs/mcPoint2dFunction.js"))