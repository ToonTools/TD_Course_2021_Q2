// get current scene name

// get user selection

// return current scene name & user selection


function getSceneSelectionInformation(){
	
	var sceneName 	= scene.currentScene()
	var projectPath = scene.currentProjectPath()
		
	MessageLog.trace("sceneName : " 	+ sceneName) 
	MessageLog.trace("projectPath : " 	+ projectPath) 
	
	var selTotal = selection.numberOfNodesSelected()
	if( selTotal <= 0 ){
		MessageLog.trace("Nothing is selected, so I will list everything") 
		
		selection.selectAll()	
	}
	
	/*  slightly briefer way to write the same if statement
	if( selection.numberOfNodesSelected() <= 0 ){
		MessageLog.trace("Nothing is selected") 
	}
	*/
	
	/*
	for( var n = 0; n < selTotal; n++ ){
		var selNode = selection.selectedNode(n)
		MessageLog.trace("Node "+ n + " : " + selNode)
	}
	*/
	
	for( n in selection.selectedNodes() ){
		MessageLog.trace("Node " + n + " : " + selection.selectedNode(n) )
	}

}

