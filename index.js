const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      devTools: true,
    },
  });
  //win.loadFile("build/index.html");
  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);
