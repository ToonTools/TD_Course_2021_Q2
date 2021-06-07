function TD_helloWorld(){

	//figure out if shift is being pressed
	var shiftCheck = KeyModifiers.IsShiftPressed()

	// if shift is pressed then write this:
	if ( shiftCheck ){
		MessageBox.warning( "Shift is pressed")
	}

	// if shift is NOT pressed then write this:
	else{
		MessageBox.information( "Shift has NOT been pressed")
	}
}
