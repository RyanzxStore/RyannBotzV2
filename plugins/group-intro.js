let handler = async (m, { conn }) => {


let krtu = `ᴍᴇᴍʙᴇʀ ʙᴀʀᴜ ᴡᴀᴊɪʙ ɪɴᴛʀᴏ !!!
ɴᴀᴍᴀ : 
ᴀsᴋᴏᴛ :
ᴋᴇʟᴀs :
http://bīt.ly/ᯤ
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
