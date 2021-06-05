var uiUtilLib = require(specialFolders.resource+"/scripts/utilities/ui/TB_UiUtils.js")

function initView(){
    try{
        var scriptedView            = ScriptManager.getView("TD_2021_Q2_customWindow")
        scriptedView.minimumWidth   = UiLoader.dpiScale(375)
        scriptedView.setPreferredLayoutSize(UiLoader.dpiScale(320),UiLoader.dpiScale(375))

        var ui = ScriptManager.loadViewUI(scriptedView, "./TD_2021_Q2_customWindow.ui")

        var customFunction_1 = function(){
            MessageBox.information("this is the function for button 1")
        }
        var customFunction_1 = function(){
            MessageBox.information("this is the function for button 1")
        }

        ui.myButton_1.clicked.connect(this, customFunction_1)
        ui.myButton_2.clicked.connect(this, customFunction_2)

        ui.show()

    }
    catch(error){
        MessageLog.trace("ERROR : " + error)
        print("Error : " + error)
    }
}

exports.initView = initView