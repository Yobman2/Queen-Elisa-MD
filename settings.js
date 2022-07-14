/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█      
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█      
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█      


 █░░▒█   ▄█░
 ▒█▒█░   ░█░
 ░▀▄▀░   ▄█▄
 
 𝙌𝙪𝙚𝙚𝙣 𝙀𝙡𝙞𝙨𝙖 𝙈𝘿 𝘽𝙮 𝘿𝙖𝙧𝙠 𝙈𝙖𝙠𝙚𝙧 
 𝙋𝙪𝙗𝙡𝙞𝙘 𝘿𝙖𝙩𝙚 - 2022 / 07 / 03 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙧𝙤 𝙂𝙤𝙟𝙤 𝙎𝙖𝙩𝙤𝙧𝙪
 
 𝙏𝙝𝙖𝙣𝙠𝙨 𝙏𝙤
           𝘼𝙡𝙡 𝙃𝙚𝙡𝙥𝙚𝙧𝙨 💞
*/



const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['0714092765'] // Owner number , (  رقم مبرمج البوت 0777765558 )
global.pemilik = ['0714092765'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['0714092765'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'bot elhamdaoui' // Your name  yobman 4 
global.botnma = '💃 bot yobman 💃' // Your bot name , bot elhamdaoui
global.ownernma = 'ayoub elhamdaoui' //ownernama,ownername
global.packname = 'botyobman  ' // Sticker package name 
global.author = 'sticker yobman ' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage , ඔබේ බොගේ alive massage  එක මෙහි ඇති ` ` මෙම ලකුනු ඇතුලේ ඔබට අවශ්‍ය ඔනිම දෙයක් Type කරන්න.💃
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`مرحبا معكم بوت yobman اتمنا ان يعجبكم وشكرا ❤️

جاري تحميل الفيدو ياصديقي إنتظر قليلا ارجوك 🤗 .yt 
Thanks fro using...`
// Welcome massage  ඔබට කැමති නම් මෙයට ඔබෙ welcome massage  එක යොදන්න 
global.welcome = `مرحبا بك صديقي معك bot yobman `
🌀 Thanks Fro using sl zim bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`
// Caption 
global.cap = `© 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐐𝐮𝐞𝐞𝐧 𝐄𝐥𝐢𝐬𝐚 𝐌𝐃`
global.mess = {
    success: '✅ Done!',
    admin: 'المبرمج أيوب الحمداوي من يملك حق استعمال الامر 🙂!',
    botAdmin: 'Bot must be admin neh!',
    owner: 'مرحبا رقم مبرمج البوت هوا  0777765558',
    group: 'إنضم للمجموعة ربما سيتم حظرك! https://chat.whatsapp.com/IXDkeu7UEcE7VxiF2CDtGl',
    private: 'goossssh it can only used in dms!',
    bot: 'bot yobman online',
    wait: 'إنتظر قليلا ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
