function getAttributes(){

	var selNode 			= selection.selectedNode(0)
	var attrNames 		= node.getAllAttrNames(selNode)
	var attrKeyword	= node.getAllAttrKeywords(selNode)
	var frame				= 1

	MessageLog.trace(attrNames.length + " attributes found for : " + selNode )
	
	for( n in attrNames ){

		var attrVal = node.getTextAttr(selNode,frame,attrKeyword[n])

		//MessageLog.trace("\t" + n + " : " + attrNames[n] + " : " + attrKeyword[n] + " : " + attrVal)
		MessageLog.trace('\t[ ' + attrVal + ' ]\t ' + attrNames[n] + ' (' + attrKeyword[n] + ') ')


	}

}