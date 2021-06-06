## Creating a package that enables a custom window
The content of this folder should be moved into the resources/packages location of your harmony build so that it is initialised when Harmony launches.
```
C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 20 Premium\Plugins\ScriptingInterfaces\resources\packages
```
The packages location typically needs admin priveleges, so it is easiest to make the package somewhere else and then move it to the packages location when ready to test.
```
packages/
└── TD21Q2_customWindow/
    ├── configure.js
    ├── TD21Q2_customWindow.ui
    ├── view.js
    └── README.md
```

Use [QT Designer](https://build-system.fman.io/qt-designer-download) to edit and view the .ui file, the rest can be edited in any text editor.

