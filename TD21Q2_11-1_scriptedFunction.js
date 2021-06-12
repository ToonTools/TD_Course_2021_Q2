// following https://docs.toonboom.com/help/harmony-20/premium/master-controller/function-wizard-customize-function.html

function onPoint2dValueChanged(params, point2dVal)
{
  MessageLog.trace("START");
  var targetAttr = params.targetAttrs[0];

  for(var i=0; i<params.targetNodes.length; ++i)
  {
    var targetNode = params.targetNodes[i];
    var pos_x = node.getTextAttr(targetNode, frame.current(), "OFFSET.X");
    var pos_y = node.getTextAttr(targetNode, frame.current(), "OFFSET.Y");

    MessageLog.trace("Node Index:" + i);
    MessageLog.trace("pos_x:" + pos_x);
    MessageLog.trace("pos_y:" + pos_y);


  }


  MessageLog.trace("END");
}


include(fileMapper.toNativePath(specialFolders.resource+"/scripts/utilities/ui/functionWizard/mcs/mcPoint2dFunction.js"))