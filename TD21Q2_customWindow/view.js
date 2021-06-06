var uiUtilLib    = require(specialFolders.resource+"/scripts/utilities/ui/TB_UiUtil.js");

function initView()
{
  try
  {
    var scriptedView = ScriptManager.getView("TD21Q2_customWindow");
    scriptedView.minimumWidth = UiLoader.dpiScale(375);
    scriptedView.setPreferredLayoutSize(UiLoader.dpiScale(320), UiLoader.dpiScale(380));
    
    var ui = ScriptManager.loadViewUI(scriptedView, "./TD21Q2_customWindow.ui");
   
    var customFunction = function(){

      MessageBox.information("This is the action for button1 !");

    }

    ui.button1.clicked.connect(this, customFunction);

    ui.show();
  }
  catch(error)  {
    var errorMessage = "ERROR : TD21Q2_customWindow : initView() :" + error   
    MessageLog.trace(errorMessage);
    print(errorMessage);
  }
}

exports.initView = initView;