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
    var readNodes   = node.getNodes(["READ"])

    for ( var i = 0 ; i < readNodes.length ; i++ ){
        var sel_readNode    = readNodes[i]
        var sel_column      = node.linkedColumn(sel_readNode, "DRAWING.ELEMENT")

        MessageLog.trace("current read node = " + sel_readNode)

        for( var f = shotStart ; f < shotEnd ; f++){
            var sel_drawing = column.getEntry(sel_column, 1, f)
            var actionMessage = ""

            if( drawingToBeReplaced(sel_drawing) ){
                var replacementDrawingName = "HIGH"
                column.setEntry(sel_column, 1,f, replacementDrawingName)

                actionMessage += " ==> " + replacementDrawingName
            }else{
                actionMessage += "---"
            }

            MessageLog.trace("\tf-" + f + " : " + sel_drawing + " : " + actionMessage)
        }
    }
    MessageLog.trace("\n --- swapDrawing() completed successfully --- \n")
    scene.endUndoRedoAccum()
}