/*
Input : speciffic scene
Output: message output of scene, its path & all node names in the scene

How to use: 
    within Harmony :  add listWriteNodesInScene() as a button and press it in the scene. output will me in message log.
    Command Prompt :    HarmonyPremium -compile <this script path> <Harmony scene path>
                        HarmonyPremium -compile "C:\Github\ToonTools\TD_Course_2021_Q2\TD_7-1_sceneSelectionInformation.js" "C:\Users\chris\Documents\BlueZoo\testHarmony\colourSpaceTest\colourSpaceTest.xstage"

See Notes/Readme.md for more information on executing command prompt in harmony/control center
*/

// helper function so that messages output through command prompt or through message log ( wherever the script is being run )
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
	/*  briefer way to write lines 29-30
	if( selection.numberOfNodesSelected() <= 0 ){
	*/
	
	for( n in selection.selectedNodes() ){
		consoleWrite("Node " + n + " : " + selection.selectedNode(n) )
	}
	/* more verbose way to write lines  38-40
	for( var n = 0; n < selTotal; n++ ){
		var selNode = selection.selectedNode(n)
		consoleWrite("Node "+ n + " : " + selNode)
	}
	*/
}

getSceneSelectionInformation()
