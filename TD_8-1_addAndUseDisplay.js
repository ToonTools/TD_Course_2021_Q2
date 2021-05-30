function addAndUseDisplays(){

	MessageLog.trace("\t -- started: addAndUseDisplays()")

	// get current selection
	var userSelection = selection.selectedNodes()
	if(userSelection.length <= 0){
		MessageLog.trace("nothing selected, will end process")
		return
	}
	// validate that current selection can have composite attached
	// this is where we add the exclude types
	// warn user if composite can not be attached

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

		MessageLog.trace(userSelection[n] + ": x=" + sel_x + "     y=" + sel_y)
	}

	var average_x = total_x/userSelection.length

	MessageLog.trace("average_x = " + average_x)
	MessageLog.trace("min_y = " + min_y)


	// create name for composite

	// create new composite

	// connect source nodes to destination composite

	// get name for diplay node

	// create a diplay node

	// put diplay node under composite

	// connect display to composite

	// set display as curent display


	MessageLog.trace("\t -- completed: addAndUseDisplays()")
}
