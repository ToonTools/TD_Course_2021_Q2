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
function findReplacementDrawing( columnName ){
    var replacePrefix = "HIGH"
    var timings = column.getDrawingTimings( columnName )
    for( var t = 0 ; t < timings.length ; t ++) {
        var sel_timing = timings[t]
        if( nameStartsWith(replacePrefix , sel_timing , false )){
            return sel_timing
        }
    }
    return false
}
function swapDrawing(){
    scene.beginUndoRedoAccum("swapDrawing()")
    try{
        var startMessage = "\n\n --- swapDrawing() called --- "
        MessageLog.trace(startMessage)
        System.println(startMessage)

        var shotStart   = scene.getStartFrame()
        var shotEnd     = scene.getStopFrame()
        var readNodes   = node.getNodes(["READ"])

        for ( var i = 0 ; i < readNodes.length ; i++ ){
            var sel_readNode    = readNodes[i]
            var sel_column      = node.linkedColumn(sel_readNode, "DRAWING.ELEMENT")

            for( var f = shotStart ; f < shotEnd ; f++){
                var sel_drawing = column.getEntry(sel_column, 1, f)
                var actionMessage = sel_drawing

                if( drawingToBeReplaced(sel_drawing) ){
                    //var replacementDrawingName = "HIGH"
                    var replacementDrawingName = findReplacementDrawing(sel_column)
                    if( replacementDrawingName != false){
                        column.setEntry(sel_column, 1,f, replacementDrawingName)
                        actionMessage += " ==> " + replacementDrawingName
                    }
                    else{
                        actionMessage += " x unable "
                    }
                    
                }else{
                    actionMessage += " - "
                }
                var sel_frameSwapInfo = sel_readNode + " [f" +f + "]\t" + actionMessage
                MessageLog.trace(sel_frameSwapInfo)
                System.println(sel_frameSwapInfo)
            }

            // did this drawing succeed with the swaps or not
            // node, what frames swapped, from and to 

        }
        var endMessage = "\n --- swapDrawing() completed successfully --- \n"
        MessageLog.trace(endMessage)
        System.println(endMessage)
    }catch(error){
        var errorMessage = "\n --- swapDrawing() ERROR  --- \n" + error
        MessageLog.trace(errorMessage)
        System.println(errorMessage)
    }

    scene.endUndoRedoAccum()
}

swapDrawing()


// HarmonyPremium -compile C:\Github\ToonTools\TD_Course_2021_Q2\TD21Q2_12-1_swapDrawings.js "C:\Users\chris\Documents\ToonBoom_Projects\TD Course 2021 Q2\Demo_Files\D12\swapDrawings\swapDrawings.xstage"