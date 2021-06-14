function getAttributes(){
	MessageLog.trace("started")
	var selNode 			= selection.selectedNode(0)
	var attrNames 			= node.getAllAttrNames(selNode)
	var attrKeyword			= node.getAllAttrKeywords(selNode)
	var frame				= 1

	MessageLog.trace(attrNames.length + " attributes found for : " + selNode )
	

	for( n in attrNames ){

		var attrVal = node.getTextAttr(selNode,frame,attrKeyword[n])

		MessageLog.trace('\t[ ' + attrVal + ' ]\t ' + attrNames[n] + ' (' + attrKeyword[n] + ') ')

		if( attrVal == ""){

			var attrKeyword_x = attrKeyword[n] + ".x"
			var subAttrVal_x = node.getTextAttr(selNode,frame,attrKeyword_x)
			if(subAttrVal_x != ""){
				MessageLog.trace('\t  [' + subAttrVal_x + ']\t ' + attrKeyword_x)
			}

			var attrKeyword_y = attrKeyword[n] + ".y"
			var subAttrVal_y = node.getTextAttr(selNode,frame,attrKeyword_y)
			if(subAttrVal_y != ""){
				MessageLog.trace('\t  [' + subAttrVal_y + ']\t ' + attrKeyword_y)
			}

			var attrKeyword_z = attrKeyword[n] + ".z"
			var subAttrVal_z = node.getTextAttr(selNode,frame,attrKeyword_z)
			if(subAttrVal_z != ""){
				MessageLog.trace('\t  [' + subAttrVal_z + ']\t ' + attrKeyword_z)
			}
		}
	}
}
