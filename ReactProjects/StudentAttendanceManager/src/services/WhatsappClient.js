const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");

const client = new Client({
    authStrategy: new LocalAuth, webVersionCache: {
        type: "remote",
        remotePath:
            "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    }
})

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: "true" })
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    try {
        if (msg.from != "status@broadcast") {
            const contact = await msg.getContact();
            console.log(contact, msg.body);
            if (msg.body == '!ping') {
                msg.reply('pong');
            }
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = client;

// {
//     "phoneNumber":"919891062743@c.us",
//     "message":"test message from node"
// }