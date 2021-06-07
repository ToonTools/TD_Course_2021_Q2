//  https://docs.toonboom.com/help/harmony-20/scripting/script/classnode.html#a1ba4b761c5527117a403fb2f4d0e977e
/*
Input : one node in a scene
Output: adds a composite node to that element

How to use: 
    within Harmony :  add addComposite() as a button. Select a node. Press the button, composite will be added

Note: very minimal validation in this script so there will be many use cases where this does not work
*/

function addComposite(){

	MessageLog.trace("\n\n --- addComposite() called --- ")

	// ignore any selection that is not 1 node
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

	// get the source node x & y coordinates and use them to set the comp x & y coordinates
	var selNode_x 	= node.coordX( selNode)
	var selNode_y 	= node.coordY( selNode)
	var offset 		= 200 
	var comp_x 		= selNode_x 
	var comp_y 		= selNode_y + offset

	// create a new composite name based on the source node selected
	var selNodeName = node.getName(selNode)
	var myCompName 	= selNodeName + "_COMPOSITE"

	// create a composite
	var compNode	= node.add("Top", myCompName , "COMPOSITE", comp_x, comp_y, 0)

	MessageLog.trace("compNode Created = " + compNode )

	// link composite to drawing node
	node.link(selNode,0, compNode,0,true, true)

	MessageLog.trace("\n --- addComposite() completed successfully --- \n")
}
