function findUnconnectedNodes(){
    /*
    Input: current selection
    Output: UI listing the unconnected nodes, call to action : do you want to delete? which will delete said nodes
    */

    scene.beginUndoRedoAccum(findUnconnectedNodes.name)
    MessageLog.trace("\t--- " + findUnconnectedNodes.name + " STARTED ---")

    function validate_userSelection(userSelection){
        /*
        Input: selection ( array of nodes )
        Output: binary : to indicate wether to continue with process
        */
        try{
            if( userSelection.length <= 0 ){
                var answer = MessageBox.warning("no nodes are selected, do you want to select the entire scene?", MessageBox.Yes , MessageBox.No )
                if( answer == MessageBox.Yes ){
                    userSelection = selection.selectAll()
                    return true
                }else{
                    MessageLog.trace("can not proceed with no selection" )
                    return false
                }
            }
            return true

        }catch(error){
            MessageLog.trace("ERROR: " + error )
            MessageLog.trace("\t--- " + validate_selection.name + " FAILED ---")
            return false
        }
    }
	function add_groupContents_toNodeCollection(userSelection){
        /*
        Input: selection ( array of nodes )
        Output: selection + speciffic nodes withing any groups ( array of nodes )
        Note: this is a recursive function ( it calls itself ) ( it is likely to cause Harmony crash if this is done incorrectly )
        */
		var userSelecton_plusGroupContent = []

		for( i in userSelection ){
			var selNode = userSelection[i]
			userSelecton_plusGroupContent.push(selNode)

			if (node.isGroup(selNode)){
				var sub_temp_array = add_groupContents_toNodeCollection( node.subNodes(selNode)  )
				for( j in sub_temp_array){
					userSelecton_plusGroupContent.push((sub_temp_array[j]))
				}
			}
		}
		return userSelecton_plusGroupContent
	}
    function validate_nodeIsConnected(selNode){
        /*
        Input: single Node
        output: boolean ( wether node is connected to other nodes or not)
        Note: as soon as a valid connection is found, true is returned
        */

        // check input ports
		for(var i = 0 ; i < node.numberOfInputPorts(selNode) ; i++ ){
			if ( node.isLinked(selNode, i) )    return true
		}

        // check output ports
		for(var j = 0 ; j < node.numberOfOutputPorts(selNode) ; j++){			
			if ( node.numberOfOutputLinks(selNode, j ) > 0 )	return true
		}

        return false // as no connections were found
    }
    function get_unconnectedNodes_fromCollection(node_array)	{
        /*
        Input: node array
        Output: node array of length <= input node array
        */

		var unconnectedNodes_array 	= []

        // if this node is unconnected then add it to the array containing all unconnected nodes
		for ( k in node_array )		{
			if ( !validate_nodeIsConnected(node_array[k]) ){	
				unconnectedNodes_array.push(node_array[k])
			}
        }
		return unconnectedNodes_array
	}
    function dialog_unconnectedNodes_deleteChoice(unconnectedNodes_collection){
        
        /*
        Input: node array 
        Action: choice to delete node collection from scene
        Output: nothing
        */

        var myDialog 		= new Dialog()
		myDialog.title 		= "You have " + unconnectedNodes_collection.length + " unconnected nodes:"

        // show the nodes that have been found that are unconnected
		var textMessage 	= ""
		for( node in unconnectedNodes_collection ){
			textMessage += unconnectedNodes_collection[node] + "\n"
		}
	
		var displayText 	= new TextEdit()
		displayText.text 	= textMessage

		var displayLabel 	= new Label;
		displayLabel.text 	= "\ndo you want to delete the above nodes?\n"

		myDialog.add( displayText)
		myDialog.add( displayLabel)

        var dialogResult = myDialog.exec() 

        // if the user wants to delete the nodes...then delete them
        if ( dialogResult == true ){
            for( i in unconnectedNodes_collection ){
                nodeToBeDeleted = unconnectedNodes_collection[i]
                MessageLog.trace("type " + typeof(nodeToBeDeleted))
                MessageLog.trace("nodeToBeDeleted = " + nodeToBeDeleted)

                MessageLog.trace("testing to see if i can get the node name = " + node.getName(nodeToBeDeleted))


                // TODO - what I think is a node is infact the path of the node ( and so harmony does not recognise it as a node )



                node.deleteNode(nodeToBeDeleted,false,false);
                //node.deleteNode(nodeToBeDeleted, false, false)
                MessageLog.trace("Deleted: " + nodeToBeDeleted)
            }
        }
        else{
            MessageLog.trace("user did not want to delete any nodes")
        }
    }
    try{
        // validate user selection // escape if nothing is selected
        if( ! validate_userSelection(selection.selectedNodes()))  return
        
        // go inside any groups in the selection and add their content to the selection
        var mySelection_deep = add_groupContents_toNodeCollection(selection.selectedNodes())
        
        // find all unconnected nodes withing the deep selection
        var unconnectedNodes = get_unconnectedNodes_fromCollection(mySelection_deep)
        
        // ask the user if they want to delete the unconnected nodes
        if ( unconnectedNodes.length >= 1 ){
            dialog_unconnectedNodes_deleteChoice(unconnectedNodes)
        }else{
            var message = "No unconnected nodes in selection"
            MessageBox.information(message)
            MessageLog.trace(message)
        }

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