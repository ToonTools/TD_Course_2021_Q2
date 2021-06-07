var uiUtilLib    = require(specialFolders.resource+"/scripts/utilities/ui/TB_UiUtil.js");

function initView()
{
  try
  {
    var scriptedView = ScriptManager.getView("TD21Q2_customWindow");
    scriptedView.minimumWidth = UiLoader.dpiScale(375);
    scriptedView.setPreferredLayoutSize(UiLoader.dpiScale(320), UiLoader.dpiScale(380));
    
    var ui = ScriptManager.loadViewUI(scriptedView, "./TD21Q2_customWindow.ui");
   
    var customFunction_1 = function(){
      MessageBox.information("This is the action for tool button 1");
    }
    var customFunction_2 = function(){
      MessageBox.information("This is the action for tool button 2");
    }
    
    ui.toolButton_1.clicked.connect(this, customFunction_1);
    ui.toolButton_2.clicked.connect(this, customFunction_2);

    ui.show();
  }
  catch(error)  {
    var errorMessage = "ERROR : TD21Q2_customWindow : initView() :" + error   
    MessageLog.trace(errorMessage);
    print(errorMessage);
  }
}

exports.initView = initView;