import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/ec9f264b1b2ded53d1b6b.jpg`
    return conn.sendButton(m.chat, 'ᴅᴏɴᴀsɪ ᴘᴍ ᴏᴡɴᴇʀ.\n❏  :v', 'ᴛʜᴀɴᴋs ʏᴏʜ ғᴏʀ ᴅᴏɴᴀᴛᴇ', img2, [["ᴍᴇɴᴜ", usedPrefix + "menu"], ["ᴏᴡɴᴇʀ", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/ryannzx_store",
                mediaType: "VIDEO",
                title: 'ᴅᴏɴᴀᴛᴇ ғᴏʀ ʀʏᴀɴ ʙᴏᴛᴢ ᴠ2',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler