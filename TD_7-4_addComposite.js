//  https://docs.toonboom.com/help/harmony-20/scripting/script/classnode.html#a1ba4b761c5527117a403fb2f4d0e977e

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


	// create a composite
	var myCompName = "temp name"
	node.add("Top", myCompName , "COMPOSITE", 0, 0, 0)

	// name composite


	// link composite to drawing node

	// move composite to good location

	MessageLog.trace("\n --- addComposite() completed successfully --- \n")
}
