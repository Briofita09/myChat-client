const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    webPreferences: { nodeIntegration: false, contextIsolation: true },
  });
  //win.loadFile("build/index.html");
  win.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);
