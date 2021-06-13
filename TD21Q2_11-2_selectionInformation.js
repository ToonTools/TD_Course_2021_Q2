// user selects a node
// message log outputs information on:
//			node name
// 			node type

function getSelectionInformation(){

    var mySelection = selection.selectedNodes()

    if( mySelection.length <= 0 ){
        MessageLog.trace( " I have nothing selected " )
        return
    }

    // otherwise, I must have at least 1 node selected
    for(var i = 0 ; i < mySelection.length ; i++ ){
			
        var nodeName = mySelection[i]     
        var nodeType = node.type(nodeName)   

        // also give bitmap/pass through information if the selection is a composite
        if(node.type(nodeName) == "COMPOSITE"){
            compType = node.getTextAttr(nodeName, 1, "COMPOSITE_MODE")
            nodeType += "[" + compType + "]"	
		}

        var myMessage = "--"+i+"--"+ nodeName + "---" + nodeType
        MessageLog.trace(myMessage)
    }
	return
}