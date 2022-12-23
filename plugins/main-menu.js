// MADE BY BOCHILGAMING
// RECODE BY FANGZ 

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `

%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'store', 'virus', 'thnks']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'edukasi': 'Edukasi',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  'store': 'Store Menu',
  'virus': '𐐪-〚 Virtex 〛-𐑂',
  'thnks': 'Thanks To',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
 if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
 }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
 }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'virus') tags = {
    'virus': '𐐪-〚 Virtex 〛-𐑂'
 }
  if (teks == 'thnks') tags = {
    'thnks': '𐐪-〚 Thanks To 〛-𐑂'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `${htki} 𝖲𝖳𝖠𝖳𝖴𝖲 」 ${htka}`,
	rows: [
	    {title: `📛 ɪɴғᴏ ʙᴏᴛ`, rowId: ".botinfo", description: "✧ ɪɴғᴏ ʙᴏᴛ"},
	    {title: `💌 ᴏᴡɴᴇʀ`, rowId: ".owner", description: "✧ ᴏᴡɴᴇʀ ᴀᴛᴀᴜ ᴘᴇᴍɪʟɪᴋ ʙᴏᴛ"},
            {title: `🗣 ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ`, rowId: ".request", description: "✧ ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ ᴍᴇɴᴀʀɪᴋ ᴋᴇ ʙᴏᴛ"},
            {title: `📊 ᴛᴇs ᴋᴇᴄᴇᴘᴀᴛᴀɴ ʙᴏᴛ`, rowId: ".testspeed", description: "✧ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴋᴇᴄᴇᴘᴀᴛᴀɴ ɪɴsᴛᴀʟʟ ʙᴏᴛ"},
	{title: `⚡sᴘᴇᴇᴅ`, rowId: ".speed", description: "✧ ᴋᴇᴄᴇᴘᴀᴛᴀɴ ʀᴇsᴘᴏɴ ʀʏᴀɴ ʙᴏᴛᴢ ᴠ2"},
	]
    },{
	title: `${htki} 𝖢𝖠𝖳𝖤𝖦𝖮𝖱𝖸 」 ${htka}`,
	rows: [
	    {title: `🔖 『 sᴇᴡᴀ ʙᴏᴛ 』`, rowId: ".sewabot", description: "✧ ʜᴀʀɢᴀ sᴇᴡᴀ ʙᴏᴛ ᴜɴᴛᴜᴋ ᴅɪ ᴍᴀsᴜᴋᴋᴀɴ ᴋᴇ ɢʀᴜᴘ ᴋᴀᴍᴜ"},
	    {title: `🌟  『 ᴜᴘɢʀᴀᴅᴇ ᴋᴇ ᴘʀᴇᴍɪᴜᴍ 』`, rowId: ".sewabot", description: "✧ ʟɪsᴛ ʜᴀʀɢᴀ ᴜᴘ ᴘʀᴇᴍɪᴜᴍ"},
	    {title: `🥞  『 ɢᴇᴛ ʜᴀᴅɪᴀʜ 』`, rowId: ".daily", description: '✧ ᴀᴍʙɪʟ ʜᴀᴅɪᴀʜ ᴍᴜ...'},
	    {title: `💰 ᴅᴏɴᴀᴛᴇ`, rowId: ".donasi", description: '✧ sᴜᴘᴘᴏʀᴛ ʙᴏᴛ ᴀɢᴀʀ ᴛᴇᴛᴀᴘ ᴏɴ 24 ᴊᴀᴍ'},
	{title: `✨ 〉ɞ 『 ʀᴀᴛɪɴɢ 』`, rowId: ".rate", description: '✧ ʙᴇʀɪ ɴɪʟᴀɪ ᴋᴇᴘᴀᴅᴀ ʙᴏᴛ'},    
	{title: `🗳️ 〉ɞ 『 ᴘʀᴏғɪʟᴇ sᴀʏᴀ 』`, rowId: ".profile", description: '✧ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴘʀᴏғɪʟ sᴀʏᴀ'},
	]
	},{
	title: `${htki} 𝖬𝖤𝖭𝖴 ${htka}`,
	rows: [
	    {title: `〚 ᴀʟʟ ᴍᴇɴᴜ 〛-𐑂`, rowId: ".? all", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sᴇʟᴜʀᴜʜ ғɪᴛᴜʀ ʙᴏᴛ"},
	    {title: `〚 ʀᴘɢ 〛-𐑂`, rowId: ".? rpg", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ʀᴘɢ ᴍᴇɴᴜ"},
	{title: `〚 ᴇxᴘ 〛-𐑂`, rowId: ".? xp", description: "ᴇxᴘ ᴅɪɢᴜɴᴀᴋᴀɴ ᴜɴᴛᴜᴋ ʟᴇᴠᴇʟᴜᴘ"},
	{title: `〚 Game 〛-𐑂`, rowId: ".? game", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ɢᴀᴍᴇ"},
	{title: `〚 ғᴜɴ ᴍᴇɴᴜ 〛-𐑂`, rowId: ".? fun", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ғᴜɴ"},
	{title: `〚 ᴋᴇʀᴀɴɢ ᴀᴊᴀɪʙ 〛-𐑂`, rowId: ".? kerangajaib", description: "ʙᴜᴀᴛ ɴᴀɴʏᴀ ᴋᴇ ᴋᴇʀᴀɴɢ ᴀᴊᴀɪʙ"},
	{title: `〚 ǫᴏᴜᴛᴇs 〛-𐑂`, rowId: ".? quotes", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ǫᴏᴜᴛᴇs"},
	{title: `〚 ᴀɴɪᴍᴇ 〛-𐑂`, rowId: ".? anime", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴀɴɪᴍᴇ"},
	{title: `〚 ɴsғᴡ 〛-𐑂`, rowId: ".? nsfw", description: "ғɪᴛᴜʀ ɪɴɪ ᴀɢᴀᴋ ᴇʀʀᴏʀ !"},
	{title: `〚 ᴇᴅᴜᴋᴀsɪ 〛-𐑂`, rowId: ".? edukasi", description: "ғɪᴛᴜʀ ᴍᴀsɪʜ ᴅɪ ᴋᴇᴍʙᴀɴɢᴋᴀɴ."},
	{title: `〚 ᴘʀᴇᴍɪᴜᴍ 〛-𐑂`, rowId: ".? premium", description: "ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴍᴇᴍʙᴇʀ ᴘғᴇᴍɪᴜᴍ ᴀᴛᴀᴜ ᴠɪᴘ."},
	{title: `〚 ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ 〛-𐑂`, rowId: ".? anonymous", description: "ɴʏᴀʀɪ ᴛᴇᴍᴇɴ ᴅɪsɪɴɪ ᴀᴊᴀ ʙɢ"},
	{title: `〚 ɪsʟᴀᴍɪᴄ 〛-𐑂`, rowId: ".? quran", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ɪsʟᴀᴍɪ"},
	{title: `〚 ɪɴᴛᴇʀɴᴇᴛ 〛-𐑂`, rowId: ".? internet", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ɪɴᴛʀɴᴇᴛ"},
	{title: `〚 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 〛-𐑂`, rowId: ".? downloader", description: "ᴍᴇɴᴜ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴀsɪʜ ᴀɢᴀᴋ ᴇʀʀᴏʀ ^-^"},
	{title: `〚 sᴛɪᴄᴋᴇʀ 〛-𐑂`, rowId: ".? stiker", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ sᴛɪᴄᴋᴇʀ"},
	{title: `〚 ɴᴜʟɪs 〛-𐑂`, rowId: ".? nulis", description: "ᴍᴇɴᴜ ɴᴜʟɪs"},
	{title: `〚 ᴀᴜᴅɪᴏ 〛-𐑂`, rowId: ".? audio", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴊ ᴀᴜᴅɪᴏ"},
        {title: `〚 sᴏᴜɴᴅ 〛-𐑂`, rowId: ".soundmenu", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ sᴏᴜɴᴅ"},
	{title: `〚 ᴘʀᴇsᴇᴛ ᴀᴍ 〛-𐑂`, rowId: ".presetmenu", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴘʀᴇsᴇᴛ ᴀᴍ"},
	{title: `〚 ɢʀᴏᴜᴘ 〛-𐑂`, rowId: ".? group", description: "ᴍᴇɴᴜ ᴜɴᴛᴜᴋ sᴇᴛᴛɪɴɢ ɢʀᴜᴘ"},
	{title: `〚 ᴀᴅᴍɪɴ 〛-𐑂`, rowId: ".? admin", description: "-"},
	{title: `〚 ᴅᴀᴛᴀʙᴀsᴇ 〛-𐑂`, rowId: ".? database", description: "ᴍᴇɴᴜ ᴅᴀᴛᴀʙᴀsᴇ ʏᴀɴɢ ᴛᴇʀsɪᴍᴘᴀɴ"},
	{title: `〚 ᴛᴏᴏʟs 〛-𐑂`, rowId: ".? tools", description: "ᴍᴇɴᴜ ᴛᴏᴏʟs"},
	{title: `️️〚 ɪɴғᴏ 〛-𐑂`, rowId: ".? info", description: "."},
	{title: `〚 ᴍᴇɴᴜ ᴏᴡɴᴇʀ 〛-𐑂`, rowId: ".? owner", description: "ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ"},
	{title: `〚 ᴍᴀᴋᴇʀ 〛-𐑂`, rowId: ".? maker", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴍᴀᴋᴇʀ"},
	{title: `〚 sᴛᴏʀᴇ 〛-𐑂`, rowId: ".? store", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴊ sᴛᴏʀᴇ //ᴋʜᴜsᴜs ᴅɪ ɢʀᴜᴘ!"},
	{title: `〚 ᴠɪʀᴛᴇx 〛-𐑂`, rowId: ".? virus", description: "ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ᴠɪʀᴛᴇx"},
	]
    },{
	title: `${htki} 𝖨𝖭𝖥𝖮 」 ${htka}`,
	rows: [
	    {title: ` » ᴋᴏᴅᴇ ʀᴇғᴇʀᴀʟ «`, rowId: ".ref", description: "✧ ʙᴀɢɪᴋᴀɴ ᴋᴏᴅᴇ ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀᴘᴀᴛ ʜᴀᴅɪᴀʜ.."},
	    {title: ` » ʀᴜʟᴇs «`, rowId: ".rules", description: `✧ ᴘᴇʀᴀᴛᴜʀᴀɴ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ\nᴜsᴇʀ ᴅɪʟᴀʀᴀɴɢ ʙᴇʀᴋᴀᴛᴀ ᴋᴀsᴀʀ ᴀᴛᴀᴜ ᴋᴏᴛᴏʀ\nᴅɪʟᴀʀᴀɴɢ ᴛᴇʟᴘᴏɴ ᴀᴛᴀᴜ ᴠᴄ ʙᴏᴛ\nᴊɪᴋᴀ ᴍᴇʟᴀɴɢɢᴀʀ ᴀᴋᴀɴ ᴅɪ ʙᴀɴɴᴇᴅ ᴅᴀɴ ᴅɪ ʙʟᴏᴋɪʀ ᴏʟᴇʜ ʙᴏᴛ,ɪɴғᴏ ʟᴇʙɪʜ ʟᴇɴɢᴋᴀᴘ ᴄᴇᴋ ʟɪɴᴋ ᴅɪʙᴀᴡᴀʜ ${namebot}`},
	  {title: `» ʀᴀᴛɪɴɢ «`, rowId: ".rate", description: '✧ ʙᴇʀɪ ɴɪʟᴀɪ ᴋᴇᴘᴀᴅᴀ ʙᴏᴛ'},
	  {title: ` ∫ » ɢʀᴏᴜᴘ ᴏғғɪᴄɪᴀʟ «`, rowId: ".groupbot", description: '✧ ʀᴀᴍᴇɪɴ ᴅᴏɴɢ ᴊᴀɴɢᴀɴ ᴄᴜᴍᴀ ᴍᴀᴋᴇ ᴅᴏᴀɴɢ\nᴋᴀʟᴀᴜ ᴍᴀsᴜᴋ ɢʀᴜᴘ ʙɪsᴀ ᴛᴀɴʏᴀ ᴊɪᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʏᴀɴɢ ᴅɪᴍᴇɴɢᴇʀᴛɪ'},
      ]
    },
]

let usrs = db.data.users[m.sender]
/**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
let tek = `    ⟪ *ᴜsᴇʀ ɪɴғᴏ* ⟫ 
 
    ◉  ɴᴀᴍᴇ :  *${await conn.getName(m.sender)}*
    ◉  ᴘʀᴇᴍɪᴜᴍ : *${usrs.premiumTime > 1 ? 'Yes': 'No'}* 
    ◉  sᴛᴀᴛᴜs : *${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}* 
    
    ⟪  ʜᴀʀɪ ɪɴɪ  ⟫ 
    
    ◉ ᴡɪʙ : *${moment.tz('Asia/Jakarta').format('HH:mm:ss')}*
    ◉ ᴡɪᴛᴀ : *${moment.tz('Asia/Makassar').format('HH:mm:ss')}*
    ◉ ᴡɪᴛ : *${moment.tz('Asia/Jayapura').format('HH:mm:ss')}*
    ◉ ᴅᴀᴛᴇ : *${new Date().toLocaleDateString()}*
    
    ⟪ ᴅᴀᴛᴀʙᴀss ⟫ 
    
    ◉  ᴜᴘᴛɪᴍᴇ : *${mpt}*
    ◉  ʀᴇɢɪsᴛᴇʀ :  *${Object.keys(global.db.data.users).length}*
    ◉  ᴜɴʀᴇɢ: *${Object.values(global.db.data.users).filter(user => user.registered == true).length}*
    ◉  ᴏs ᴘʟᴀᴛғʀᴏᴍ : *${os.platform()}*`
const listMessage = {
  text: tek,
  footer: '© ʀʏᴀɴ ʙᴏᴛᴢ ᴠ2 | ʙʏ ʀʏᴀɴ ᴀᴅɪᴛʏᴀ ᴘʀᴀᴛᴀᴍᴀ',
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `ᴘɪʟɪʜ ᴍᴇɴᴜ`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
    
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender) 
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { day: 'numeric' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝘛 𝘐 𝘔 𝘌 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': thumb
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    const _0x187932 = _0x5c09;

function _0x5c09(_0x28b840, _0x244043) {
	const _0x1766bb = _0x1766();
	return _0x5c09 = function(_0x5c09dc, _0x158321) {
		_0x5c09dc = _0x5c09dc - 0x1bb;
		let _0x4031df = _0x1766bb[_0x5c09dc];
		return _0x4031df;
	}, _0x5c09(_0x28b840, _0x244043);
}(function(_0x1c9e83, _0x2eef01) {
	const _0x5e85ab = _0x5c09, _0x179660 = _0x1c9e83();
	while ( !! []) {
		try {
			const _0x4c7814 = -parseInt(_0x5e85ab(0x1d0)) / 0x1 * (-parseInt(_0x5e85ab(0x1bd)) / 0x2) + parseInt(_0x5e85ab(0x1c4)) / 0x3 * (parseInt(_0x5e85ab(0x1bf)) / 0x4) + parseInt(_0x5e85ab(0x1cc)) / 0x5 * (-parseInt(_0x5e85ab(0x1d1)) / 0x6) + parseInt(_0x5e85ab(0x1c1)) / 0x7 * (parseInt(_0x5e85ab(0x1bc)) / 0x8) + parseInt(_0x5e85ab(0x1cd)) / 0x9 * (-parseInt(_0x5e85ab(0x1c7)) / 0xa) + parseInt(_0x5e85ab(0x1cb)) / 0xb * (-parseInt(_0x5e85ab(0x1be)) / 0xc) + parseInt(_0x5e85ab(0x1ce)) / 0xd;
			if (_0x4c7814 === _0x2eef01) break;
			else _0x179660['push'](_0x179660['shift']());
		} catch (_0x2b3360) {
			_0x179660['push'](_0x179660['shift']());
		}
	}
}(_0x1766, 0x70ad5));
let buttonMessage = {
	'document': {
		'url': sig
	},
	'mimetype': td,
	'fileName': global['hiasan'],
	'fileLength': fsizedoc,
	'pageCount': fpagedoc,
	'contextInfo': {
		'forwardingScore': 0x22b,
		'isForwarded': !! [],
		'externalAdReply': {
			'mediaUrl': global['sig'],
			'mediaType': 2,
			'previewType': _0x187932(0x1c9),
			'title': wm,
			'body': global['bottime'],
			'thumbnail': await (await fetch(thumb)).buffer(),
			'sourceUrl': sig
		}
	},
	'caption': text,
	'footer': dmenuf,
	'buttons': [{
		'buttonId': '.report',
		'buttonText': {
			'displayText': 'ʀᴇᴘᴏʀᴛ ʙᴜɢ'
		},
		'type': 1
	}, {
		'buttonId': '.testspeed',
		'buttonText': {
			'displayText': 'ᴛᴇs ᴋᴇᴄᴇᴘᴀᴛᴀɴ'
		},
		'type': 1
	}, {
		'buttonId': '.sc',
		'buttonText': {
			'displayText': 'sᴄʀɪᴘᴛ ʙᴏᴛ'
		},
		'type': 1
	}],
	'headerType': 6
};
/*
await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)], buttonMessage, {
	'quoted': m,
	'mentionedJid': [m[_0x187932(0x1c3)]]
});
*/

	/** Baru */
	let imgr = flaaa.getRandom()
	let img = fs.readFileSync('./thumbnail.jpg')
	let img2 = fs.readFileSync('./img/bawah.png')
	return conn.sendButton(m.chat, bottime, text, `${imgr + 'ᴍᴇɴᴜ'}`, [["ᴋᴏᴅᴇ ʀᴇғᴇʀᴀʟ", _p + "ref"], ["ᴅᴏɴᴀᴛᴇ", _p + "donasi"], ["ᴏᴡɴᴇʀ", _p + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://www.youtube.com/@ryanstore",
                mediaType: "VIDEO",
                title: `Hallo👋 ${name} ${ucpn}`,
                body: `RUNTIME: ${mpt}`,
                previewType: 0,
                thumbnail: img
            }
        }
    })


function _0x1766() {
	const _0x1c60e8 = ['3ezQcUH', '.nameown', '.cekversi', '725770ccnUBU', 'sgc', 'pdf', 'buffer', '305624SHQwwY', '233195fjGJSZ', '72BjUaMS', '2869867kBKaey', 'chat', '6NokiEm', '72PsFaxu', '🎐Sewa Bot', '1832yREmVQ', '205026IsvCrH', '132IBvmfp', '3329164htczQJ', '🌹Author', '7315FCLnNH', 'sendMessage', 'sender'];
	_0x1766 = function() {
		return _0x1c60e8;
	};
	return _0x1766();
}
//-------DOC TEMPLATE
    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\n⚡ sᴜᴘᴘᴏʀᴛᴇᴅ ʙʏ ʀʏᴀɴ sᴛᴏʀᴇ',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://chat.whatsapp.com/I47cTfEwzIC391KPBjbTPq'
                    }
                },
                {
                    urlButton: {
                        displayText: 'ɢʀᴏᴜᴘ ᴏғғɪᴄɪᴀʟ',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'sᴇᴡᴀ ʙᴏᴛ',
                        id: '.sewa'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'ᴀᴜᴛʜᴏʀ',
                        id: '.nameown'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'ᴠᴇʀsɪ ʙᴏᴛ',
                        id: '.versibot'
                    }
                },
            ]
        }
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    //conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4', [['Ping', '.ping'],['Owner', '.owner'],['Donasi', '.donasi']],ftoko, { gifPlayback: true, contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
    
  } catch (e) { 
     conn.reply(m.chat, 'Maaf, menu sedang error', m) 
     throw e 
   } 
 } 
 handler.command = /^(siuuu|siuuuu|\?)$/i 
  
 handler.register = true
  
 export default handler
//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat DiniHari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return res
}
