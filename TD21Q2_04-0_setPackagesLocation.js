//this function will set your script packages folder to a speciffic "desiredFolder"

function setPackages(){

	MessageLog.trace("about to set packages")
	
	desiredFolder = "C:/_dev/scriptPackages"	

	preferences.setString("TB_EXTERNAL_SCRIPT_PACKAGES_FOLDER", desiredFolder)

	pref_result = 	preferences.getString("TB_EXTERNAL_SCRIPT_PACKAGES_FOLDER","")


	if ( desiredFolder == pref_result ){
		MessageLog.trace("they are the same")
	}
	else{
		MessageLog.trace("they are not the same")
	}

	MessageLog.trace("packages should be set to : " + pref_result)
}

