function getAttributes(){

	var selNode 		= selection.selectedNode(0)
	
/*
	var writePath = node.getAttr(selNode, 1,  "Movie path")

	MessageLog.trace(writePath)

	*/

/*
	var writePath = node.getTextAttr( selNode, 1, "MOVIE PATH")

MessageLog.trace(writePath)
	*/


	


var attrNames 	= node.getAllAttrNames(selNode)

	MessageLog.trace(attrNames.length + " attributes found for : " + selNode )



	
	for( n in attrNames ){
		MessageLog.trace("\t" + n + " : " + attrNames[n])
	}

}