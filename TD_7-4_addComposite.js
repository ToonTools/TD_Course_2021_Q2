function addComposite(){

	MessageLog.trace("\n\n --- addComposite() called --- ")


	if( selection.numberOfNodesSelected()<= 0){
		MessageLog.trace("can't do anythign with no nodes selected")	
		return
	}
	else if ( selection.numberOfNodesSelected() > 1){
		MessageLog.trace("I can't handle more than one node selected yet")	
		return
	}

	// user selection
	var selNode = selection.selectedNode(0)
	MessageLog.trace("selNode = " + selNode)


	// reject if more than one node is selected

	// create a composite

	// name composite


	// link composite to drawing node

	// move composite to good location

	MessageLog.trace("\n --- addComposite() completed successfully --- \n")
}
