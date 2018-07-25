const {app, BrowserWindow} = require('electron');

function createWindow () {
	var BrowserWindowArray = [];
	for (var i = 0; i < 5; i++) {
		BrowserWindowArray.push(new BrowserWindow({ width: 800, height: 600 }))
		BrowserWindowArray[i].loadURL('https://test.topspeedgolf.com/');
	}
}

app.on('ready', createWindow);