function findUnconnectedNodes(){
    scene.beginUndoRedoAccum(findUnconnectedNodes.name)
    MessageLog.trace("\t--- " + findUnconnectedNodes.name + " STARTED ---")

    try{
    // get user selection

    // go inside any groups in the selection

    // collect all nodes in an array

    // go inside that array and check if each node has output and inpuut links

    // user dialog box

    // give the the option to delete the unconnected nodes


        MessageLog.trace("\t--- " + findUnconnectedNodes.name + " SUCCESS ---")
    }
    catch(error){
        MessageLog.trace("ERROR: " + error )
		MessageLog.trace("\t--- " + findUnconnectedNodes.name + " FAILED ---")
    }
    finally{
        scene.endUndoRedoAccum()
    }
}
