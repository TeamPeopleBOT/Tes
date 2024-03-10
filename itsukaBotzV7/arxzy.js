const {BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType} = require('@whiskeysockets/baileys')
const {smsg, getGroupAdmins, ormatp, tanggal, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, totalcase} = require('./lib/myfunc')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const { randomBytes } = require('crypto')
const {exec, spawn, execSync} = require("child_process")
const {performance} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {TelegraPh, UploadFileUgu, webp2mp4File, floNime} = require('./lib/uploader')
const {toAudio, toPTT, toVideo, ffmpeg, addExifAvatar} = require('./lib/converter')


/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const VnArxzy = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const StickerArxzy = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const ImageArxzy = JSON.parse(fs.readFileSync('./src/media/image.json'))
const VideoArxzy = JSON.parse(fs.readFileSync('./src/media/video.json'))


/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {var ucapanWaktu = 'Selamat Malam 🏙️'}
if (waktu < "19:00:00") {var ucapanWaktu = 'Selamat Petang 🌆'}
if (waktu < "18:00:00") {var ucapanWaktu = 'Selamat Sore 🌇'}
if (waktu < "15:00:00") {var ucapanWaktu = 'Selamat Siang 🌤️'}
if (waktu < "10:00:00") {var ucapanWaktu = 'Selamat Pagi 🌄'}
if (waktu < "05:00:00") {var ucapanWaktu = 'Selamat Subuh 🌆'}
if (waktu < "03:00:00") {var ucapanWaktu = 'Selamat Tengah Malam 🌃'}

/* ~~~~~~~~~ SCRIPT & FUNCTION  ~~~~~~~~~ */
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}



/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */
module.exports = arxzy = async (arxzy, m, msg, chatUpdate, store) => {
    try {
        const {type, quotedMsg, mentioned, now, fromMe} = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa
        const isCmd = body.startsWith(prefix, '')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await arxzy.decodeJid(arxzy.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)

        /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

        /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const isAsu = body.startsWith(pric)
        const isCommand = isAsu ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
        const isAdrian = ('6289513081052@s.whatsapp.net').includes(m.sender)

        /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await arxzy.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
        const isCreator = [numberowner, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || checkPremiumUser(m.sender, premium);
        expiredPremiumCheck(arxzy, m, premium);
        expiredOwnerCheck(arxzy, m, _owner);

        /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
        async function newReply(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                arxzy.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: global.namabot,
                            body: jam(),
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./media/quoted.jpg'),
                            sourceUrl: global.link
                        }
                    },
                    text: teks
                }, {quoted: m})}
                    
    
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": namabot,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
        
        /* ~~~~~~~~~ Global Database ~~~~~~~~~ */
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 5
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = arxzy.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: arxzy.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('autosimi' in chats)) chats.autosimi = false
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('notification' in chats)) chats.notification = {}
               } else global.db.data.chats[from] = {
                  autosimi: false,
                  badword: false,
                  antilink: false,
                  antilinkgc: false,
                  notification: {
                     status: false,
                     text_left: '',
                     text_welcome:''
                  }
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('typemenu' in setting)) setting.typemenu = global.typemenu
               if (!('typereply' in setting)) setting.typereply = global.typereply
               if (!('autobio' in setting)) setting.autobio = global.autobio 
               if (!('autoread' in setting)) setting.autoread = global.autoread
               if (!('autoblok212' in setting)) setting.autoblok212 = global.autoblok212
               if (!('onlyindo' in setting)) setting.onlyindo = global.onlyindo
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: arxzy.getName(botNumber), alias: global.namabot}, owner: { nick: arxzy.getName(global.numberowner + '@s.whatsapp.net'), alias: global.numberowner}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               typemenu: global.typemenu,
               typereply: global.typereply,
               autobio: global.autobio,
               autoread: global.autoread,
               autoblock212: global.autoblock212,
               onlyindo: global.onlyindo,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: arxzy.getName(botNumber), 
                     alias: global.namabot
                  },
                  owner: {
                     nick: arxzy.getName(global.numberowner + '@s.whatsapp.net'), 
                     alias: global.numberowner
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }

        // Grup Only
        if (!m.isGroup && !isCreator && global.onlygrub ) {
            return newReply("Halo Kak, Karna Kami Ingin Mengurangi Spam Silahkan Gunakan Bot Di Group !\n\nJika Ada Kepentingan Bersama Owner Silahkan Ketik .owner")
        }
        // Private Only
        if (!isCreator && global.onlypc && m.isGroup) {
	         return newReply("Halo Kak, Jika Mau Gunakan Bot Ini Silahkan Chat Ke Pribadi Bot")
	     }
	     
        if (!arxzy.public) {
            if (isCreator && !m.key.fromMe) return
        }
        if (autoread) {
            arxzy.readMessages([m.key])
        }
        if (autobio) {
            arxzy.updateProfileStatus(`-`).catch(_ => _)
        }
        if (chatUpdate['messages.upsert']) {
            const upsert = chatUpdate['messages.upsert']
            for (let msg of upsert.messages) {
                if (msg.key.remoteJid == 'status@broadcast' && !msg.key.fromMe && !msg.message?.protocolMessage) {
                    console.log(`Lihat status ${msg.pushName} ${msg.key.participant.split('@')[0]}\n`)
                    arxzy.readMessages([msg.key])
                }
            }
        }
        if (isCommand) {
            let titida = ['composing', 'recording']
            yte = titida[Math.floor(titida.length * Math.random())]
            arxzy.sendPresenceUpdate(yte, from)
        }
        if (m.sender.startsWith('212') && global.autoblok212 === true) {
            return arxzy.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && global.onlyindo === true) {
            return arxzy.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
            list.push({
                displayName: arxzy.getName(i + '@s.whatsapp.net'),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${arxzy.getName(i + '@s.whatsapp.net')}\nFN:${arxzy.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:creator@arxzy.my.id\nitem2.X-ABLabel:Email\nitem3.URL:https://api.zeoxr.my.id\nitem3.X-ABLabel:Rest APIs\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
        if (isCommand) {
            console.log(`<================>`)
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '<\> MESSAGE </>' : '<\> COMMAND </>')), chalk.black(chalk.bgGreen(hariini)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            console.log(`<================>`)
        }
//_________________________________________________________________________________




//_____COMAND CASE PERINTAH BOT____________________________________________________________________________
        switch (isCommand) {


            case 'tagall':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                let teks = `ダ TAG FOR ADMIN ダ
 
                  *MESSAGE: ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `◈ @${mem.id.split('@')[0]}\n`
                }
                arxzy.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break









//_________________________________________________________________________________
            default:
                if (budy.startsWith('$')) {if (!isCreator) return newReply(mess.owner);exec(budy.slice(2), (err, stdout) => {if (err) return newReply(err); if (stdout) return newReply(stdout)})}
            }
//_________________________________________________________________________________
    } catch (err) {console.log(util.format(err))}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
