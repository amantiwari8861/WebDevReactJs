const { Client,LocalAuth } = require('whatsapp-web.js');
const msgRouter = require('../routers/MessageRouter');
let qrCode = require('qrcode');
const fs = require('fs');


// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';
let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

const client = new Client({
    session: sessionData,
    authStrategy: new LocalAuth({clientId:"amantiwari8861"}), webVersionCache: {
        type: "remote",
        remotePath:
            "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
    
});

client.on('qr', (qr) => {
    // Generate QR code and store it in a variable
    qrCode.toDataURL(qr, (err, url) => {
        qrCode = url;
    });
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

msgRouter.get('/qr', (req, res) => {
    if (qrCode) {
        res.json({ qrCode });
    } else {
        res.status(503).send('QR code not ready');
    }
});

module.exports = client;