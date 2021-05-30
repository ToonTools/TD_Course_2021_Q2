function addAndUseDisplays(){

	scene.beginUndoRedoAccum("addAndUseDisplays()")
	MessageLog.trace("\t -- started: addAndUseDisplays()")

	// get current selection, reject if nothing is selected
	var userSelection = selection.selectedNodes()
	if(userSelection.length <= 0){
		MessageLog.trace("nothing selected, will end process")
		return
	}
	// validate that current selection can have composite attached
	// this is where we add the exclude types
	// warn user if composite can not be attached

	// we now know our current selection is valid, we can grab some information from the first node

	var firstNodeInSelection 	= userSelection[0]
	var firstNodeName 			= node.getName(firstNodeInSelection)
	var firstNodeParent			= node.parentNode(firstNodeInSelection)


	// calculate average x pos of selection
	// calulcate min y pos of selection
	var total_x = 0
	var min_y 	= -999

	for( n in userSelection ){

		var sel_x 	= node.coordX(userSelection[n])
		
		total_x 	+= sel_x // same as writing : total_x = total_x + sel_x

		var sel_y = node.coordY(userSelection[n])
		if( sel_y > min_y ){
			min_y = sel_y
		}
	}

	var average_x = total_x/userSelection.length

	var nodeParent = firstNodeParent + "/"
	// create name for composite
	var compName = firstNodeName + "_COMPOSITE"
	// create new composite

	var offset_y = 100

	var comp_x = average_x
	var comp_y = min_y + offset_y
	var comp_z = 0

	var newCompositeNode = node.add(nodeParent, compName, "COMPOSITE", comp_x, comp_y, comp_z)


	//sort the origina user selection
	var sortedSelection = userSelection.sort(function(a, b) {
		return parseFloat(node.coordX(a)) - parseFloat(node.coordX(b));
	});

	// connect source nodes to destination composite
	for( k in sortedSelection ){
		node.link(sortedSelection[k], 0 , newCompositeNode , 0, false, true)
	}

	// get name for diplay node
	var newDisplayName = firstNodeName + "_DISPLAY"
	var newDisplayPath = firstNodeParent + "/" + newDisplayName

	// Top/myDisplay

	// check that the name is unique, if not make the name unique
	function checkNameIsUnique(nodePath){
		if (node.getName(nodePath) != "" ){
			return false
			//MessageBox.information(nodePath + "\n\nthis name already exists, you need to use somethign else")
		}
		return true
	}

	/*
	 TODO this is currently making a unique display name correctly, if we wanted to improve it we could:
	 	take the last value of the string
		 if it is an integer, add one to it
		 convert it back to a strin again and assing it to the name
	 */
	while( !checkNameIsUnique(newDisplayPath)){
		newDisplayName += "_1"
		newDisplayPath += "_1"
	}

	// create a diplay node
	// put diplay node under composite
	var display_x = comp_x
	var display_y = comp_y + offset_y
	var display_z = 0

	var newDisplayNode = node.add(nodeParent, newDisplayName, "DISPLAY", display_x, display_y,display_z )

	// connect display to composite
	node.link(newCompositeNode, 0, newDisplayNode, 0)
	// set display as curent display
	node.setAsGlobalDisplay(newDisplayNode)

	MessageLog.trace("\t -- completed: addAndUseDisplays()")

	scene.endUndoRedoAccum()
}
