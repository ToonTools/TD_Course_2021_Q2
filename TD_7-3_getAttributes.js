function getAttributes(){

	//applies to first selected node
	var selNode 		= selection.selectedNode(0)
	
	var attrNames 		= node.getAllAttrNames(selNode)


	MessageLog.trace(attrNames.length + " attributes found for : " + selNode )
	
	for( n in attrNames ){
		MessageLog.trace("\t" + n + " : " + attrNames[n])
	}

}