function swapDrawing(){
    scene.beginUndoRedoAccum("swapDrawing()")
    MessageLog.trace("\n\n --- swapDrawing() called --- ")

    var shotStart   = 1
    var shotEnd     = frame.numberOf();
    
    // select every drawing node in the scene
    var readNodes = node.getNodes(["READ"])

    for ( var i = 0 ; i < readNodes.length ; i++ ){
        var sel_readNode    = readNodes[i]
        var sel_column      = node.linkedColumn(sel_readNode, "DRAWING.ELEMENT")

        MessageLog.trace("current read node = " + sel_readNode)

        for( var f = shotStart ; f < shotEnd ; f++){
            var sel_drawing = column.getEntry(sel_column, 1, f)

            MessageLog.trace("\tf-" + f + " : " + sel_drawing)
        }

        // for each node figure out what the name of current drawing is
        
    }


    
    // // if the drawing name is REJECT then see if we can REPLACE it
    // // // if we can replace it then lets do so


    





    MessageLog.trace("\n --- swapDrawing() completed successfully --- \n")
    scene.endUndoRedoAccum()
}