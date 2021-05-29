// get current scene name

// get user selection

// return current scene name & user selection

function consoleWrite(message){
	MessageLog.trace(message)
	System.println(message)
}


function getSceneSelectionInformation(){
	
	MessageBox.information("testing that this is working")
	
	
	var sceneName 	= scene.currentScene()
	var projectPath = scene.currentProjectPath()
		
	consoleWrite("sceneName : " 	+ sceneName) 
	consoleWrite("projectPath : " 	+ projectPath) 
	
	var selTotal = selection.numberOfNodesSelected()
	if( selTotal <= 0 ){
		consoleWrite("Nothing is selected, so I will list everything") 
		
		selection.selectAll()	
	}
	
	/*  slightly briefer way to write the same if statement
	if( selection.numberOfNodesSelected() <= 0 ){
		consoleWrite("Nothing is selected") 
	}
	*/
	
	/*
	for( var n = 0; n < selTotal; n++ ){
		var selNode = selection.selectedNode(n)
		consoleWrite("Node "+ n + " : " + selNode)
	}
	*/
	
	for( n in selection.selectedNodes() ){
		consoleWrite("Node " + n + " : " + selection.selectedNode(n) )
	}

}


getSceneSelectionInformation()

