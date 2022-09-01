const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    webPreferences: { nodeIntegration: false, contextIsolation: true },
  });
  win.loadFile("build/index.html");
  //win.loadURL(`"http://localhost:3000"`);
}

app.on("ready", createWindow);
