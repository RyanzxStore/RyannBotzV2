let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `ᴊᴏɪɴ ᴋᴇ ɢʀᴜᴘ ʙᴏᴛ*\n\n\n━━━〔 ᴊᴏɪɴ ɴᴀᴘᴀ ᴊᴀɴ ᴍᴀᴋᴇ ʙᴏᴛ ᴅᴏᴀɴɢ 〕━━━`,
	rows: [
	    {title: '💌 › ɢʀᴏᴜᴘ ʀʏᴀɴ ʙᴏᴛᴢ ᴠ2', description: "ɢʀᴜᴘ ᴜᴛᴀᴍᴀ ᴏᴡɴᴇʀ x ʙᴏᴛ", rowId:".gcbot"}
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "ᴋʟɪᴋ ᴅɪsɪɴɪ",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler