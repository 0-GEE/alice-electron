const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 950,
        autoHideMenuBar: true
    })
    win.loadFile('index.html')
    win.setTitle('PhaseTel')

    win.on('page-title-updated', (event) => {
        event.preventDefault();
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
