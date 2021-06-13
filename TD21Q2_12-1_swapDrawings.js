function nameStartsWith(needle, haystack, caseSensetive){
    if(!caseSensetive){
        needle      = needle.toUpperCase()
        haystack    = haystack.toUpperCase()
    }
    if( haystack.slice(0, needle.length) == needle){
        return true
    }
    return false
}

function drawingToBeReplaced( drawingName ){
    // check if this drawing name is a REJECT name
    var removePrefix = "LOW"

    if(nameStartsWith(removePrefix ,drawingName, false )){
        return true
    }
    return false
}


function swapDrawing(){
    scene.beginUndoRedoAccum("swapDrawing()")
    MessageLog.trace("\n\n --- swapDrawing() called --- ")

    var shotStart   = scene.getStartFrame()
    var shotEnd     = scene.getStopFrame()
    
    // select every drawing node in the scene
    var readNodes = node.getNodes(["READ"])

    for ( var i = 0 ; i < readNodes.length ; i++ ){
        var sel_readNode    = readNodes[i]
        var sel_column      = node.linkedColumn(sel_readNode, "DRAWING.ELEMENT")

        MessageLog.trace("current read node = " + sel_readNode)

        // for each node figure out what the name of current drawing is
        for( var f = shotStart ; f < shotEnd ; f++){
            var sel_drawing = column.getEntry(sel_column, 1, f)

            // // if the drawing name is REJECT then see if we can REPLACE it
            if( drawingToBeReplaced(sel_drawing) ){
                // // // if we can replace it then lets do so
                MessagLog.trace("I want to replace this drawing")
            }

            MessageLog.trace("\tf-" + f + " : " + sel_drawing)
        }
    }


    MessageLog.trace("\n --- swapDrawing() completed successfully --- \n")
    scene.endUndoRedoAccum()
}