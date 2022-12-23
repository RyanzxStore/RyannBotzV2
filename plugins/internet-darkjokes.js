import fetch from 'node-fetch'
import bo from 'dhn-api'
let handler = async (m, { conn }) => {
const res = await bo.Darkjokes()
await conn.sendButton(m.chat,`ᴅᴀʀᴋ 🧐?`, wm, res, [['Darkjoke','.darkjoke']] ,m)
}
handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^(darkjoke)$/i
handler.limit = false

export default handler