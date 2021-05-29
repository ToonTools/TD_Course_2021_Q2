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

	var selNode_x 	= node.coordX( selNode)
	var selNode_y 	= node.coordY( selNode)

	var offset 		= 200 

	var comp_x 		= selNode_x 
	var comp_y 		= selNode_y + offset

	// create a composite
	// move composite to good location

	var selNodeName = node.getName(selNode)
	var myCompName = selNodeName + "_COMPOSITE"
	var compNode = node.add("Top", myCompName , "COMPOSITE", comp_x, comp_y, 0)

	MessageLog.trace("compNode Created = " + compNode )

	// link composite to drawing node
	node.link(selNode,0, compNode,0,true, true)

	MessageLog.trace("\n --- addComposite() completed successfully --- \n")
}
