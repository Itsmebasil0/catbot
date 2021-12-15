/* Codded by @basilser
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - basilser bot
*/

const catbot = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Catbot = require('../catbot');
const Config = require('../config');
const need = "*type some word after command"

if (Config.WORKTYPE == 'private') {

   catbot.addCommand({pattern: 'makermenu', fromMe: true}, (async (message, match) => {    

    await message.sendMessage('```❤❤❤❤❤❤❤❤❤❤❤\n\n\n\n👑ᴄᴀᴛʙᴏᴛ 𝚃𝚁𝚇𝚃𝙼𝙰𝙺𝙴𝚁👑```\n_~*coded by basilser*~_\n\n\n\n❤❤❤❤❤❤❤❤❤❤\n\n\n\nClick..👉👉👉 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n❤\n🌺Usage: *.freefire*\n♻️Desc: Enters the text as the caption for a freefire themed logo.\n🍁 Example : *.freefire basilser*\n\n🌺Usage: *.cslogo*\n♻️Desc: Enters the text as the caption for a cs go themed logo.\n🍁 Example : *.cslogo basilser*\n\n🌺Usage: *.crosslogo*\n♻️Desc: Enters the text as the caption for a cross themed logo.\n🍁 Example : *.crosslogo basilser*\n\n🌺Usage: *.bpink*\n♻️Desc: Enters the text as the caption for a blackpink themed logo.\n🍁 Example : *.bpink basilser*\n\n🌺Usage: *.ninjalogo*\n♻️Desc: Enters the text as the caption for a ninja themed logo.\n🍁 Example : *.ninjalogo basilser*\n\n🌺Usage: *.logopubg*\n♻️Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logopubg basilser;Moder*\n\n🌺Usage: *.water2color*\n♻️Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.water2color basilser;Moder*\n\n🌺Usage: *.snowwrite*\n♻️Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.snowwrite basilser;Moder*\n\n🌺Usage: *.logowolf*\n♻️Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logowolf basilser;Moder*\n\n🌺Usage: *.sparkling*\n♻️Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.sparkling basilser;Moder*\n\n🌺Usage: *.phub*\n♻️Desc: Converts the text into phub logo.\n🍁 Example : *.phub basilser/BOT*\n\n🌺Usage: *.1neon*\n♻️Desc: Converts the text into neon themed image.\n🍁 Example : *.1neon basilser*\n\n🌺Usage: *.naruto*\n♻️Desc: Converts the text into naruto themed image.\n🍁 Example : *.naruto basilser*\n\n🌺Usage: *.blueneon*\n♻️Desc: Converts the text into blueneon themed image.\n🍁 Example : *.blueneon basilser*\n\n🌺Usage: *.2hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.2hacker basilser*\n\n🌺Usage: *.3hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.3hacker basilser*\n\n🌺Usage: *.breakwall*\n♻️Desc: Converts the text into breakwall themed image.\n🍁 Example : *.breakwall basilser*\n\n🌺Usage: *.dropwater*\n♻️Desc: Converts the text into dropwater themed image.\n🍁 Example : *.dropwater basilser*\n\n🌺Usage: *.flowertext*\n♻️Desc: Converts the text into flowertext themed image.\n🍁 Example : *.flowertext basilser*\n\n🌺Usage: *.sliktext*\n♻️Desc: Converts the text into sliktext themed image.\n🍁 Example : *.sliktext basilser*\n\n🌺Usage: *.flame*\n♻️Desc: Converts the text into flame themed image.\n🍁 Example : *.flame basilser*\n\n🌺Usage: *.1glow*\n♻️Desc: Converts the text into 1glow themed image.\n🍁 Example : *.1glow basilser*\n\n🌺Usage: *.skytext*\n♻️Desc: Converts the text into skytext themed image.\n🍁 Example : *.skytext basilser*\n\n🌺Usage: *.smoke*\n♻️Desc: Converts the text into smoke themed image.\n🍁 Example : *.smoke basilser*\n\n🌺Usage: *.lithgtext*\n♻️Desc: Converts the text into lithgtext themed image.\n🍁 Example : *.lithgtext basilser*\n\n🌺Usage: *.sfire*\n♻️Desc: Converts the text into sfire themed image.\n🍁 Example : *.sfire basilser*\n\n🌺Usage: *.sandw*\n♻️Desc: Converts the text into sandw themed image.\n🍁 Example : *.sandw basilser*\n\n🌺Usage: *.gplay*\n♻️Desc: Converts the text into gplay themed image.\n🍁 Example : *.gplay basilser*\n\n🌺Usage: *.splay*\n♻️Desc: Converts the text into splay themed image.\n🍁 Example : *.splay basilser*\n\n🌺Usage: *.3dbox*\n♻️Desc: Converts the text into 3dbox themed image.\n🍁 Example : *.3dbox basilser*\n\n🌺Usage: *.leave*\n♻️Desc: Converts the text into leave themed image.\n🍁 Example : *.leave basilser*\n\n🌺Usage: *.blood*\n♻️Desc: It Sends a blood image of the text provided.\n🍁 Example : *.blood basilser*\n\n🌺Usage: *.cloud*\n♻️Desc: It Sends a sky image of the text provided\n🍁 Example : *.cloud basilser*\n\n🌺Usage: *.glue*\n♻️Desc: it makes 3D Glue text\n🍁 Example : *.glue basilser*\n\n🌺Usage: *.watercolour*\n♻️Desc: Converts the text into a watercolour themed image.\n🍁 Example : *.watercolor basilser*\n\n🌺Usage: *.neonlight*\n♻️Desc: Converts the text into a neonlight themed image.\n🍁 Example : *.neonlight basilser*\n\n🌺Usage: *.3dtext*\n♻️Desc: Converts the provided text into a 3D style image.\n🍁 Example : *.3dtext basilser*\n\n🌺Usage: *.galaxy*\n♻️Desc: it makes metal galaxy text\n🍁 Example : *.galaxy basilser/BOT*\n\n🌺Usage: *.skull*\n♻️Desc: it makes skull logo\n🍁 Example : *.skull basilser*\n\n🌺Usage: *.robot*\n♻️Desc: it makes Robot logo\n🍁 Example : *.robot basilser*\n🌺Usage: *.toxic*\n♻️Desc: it makes Toxic logo\n🍁 Example : *.toxic basilser*\n\n🌺Usage: *orangeglass*\n♻️Desc: it makes gradient text\n🍁 Example : *.orangeglass basilser*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*ᴄᴀᴛʙᴏᴛ*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷···\n');

    }));
    catbot.addCommand({ pattern: '1neon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'naruto ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'blueneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '2hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'breakwall ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '3hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'dropwater ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'flowertext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'sliktext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'flame ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '1glow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'somke ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'skytext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'cslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'xmas ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'sfire ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'sandw ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'gplay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'splay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '3dbox ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'bpink ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'leave ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({pattern: 'logowolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
    catbot.addCommand({pattern: 'logopubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
    catbot.addCommand({pattern: 'snowwrite ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
   catbot.addCommand({pattern: 'water2color ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
    
}

else if (Config.WORKTYPE == 'public') {

    catbot.addCommand({pattern: 'makermenu', fromMe: false,}, (async (message, match) => {    

    await message.sendMessage('```👑𝙱𝙰𝙳𝙱𝙾𝚈 𝚃𝚁𝚇𝚃𝙼𝙰𝙺𝙴𝚁👑```\n_~*coded by basilser*~_\n\n🌺Usage: *.freefire*\n♻️Desc: Enters the text as the caption for a freefire themed logo.\n🍁 Example : *.freefire basilser*\n\n🌺Usage: *.cslogo*\n♻️Desc: Enters the text as the caption for a cs go themed logo.\n🍁 Example : *.cslogo basilser*\n\n🌺Usage: *.crosslogo*\n♻️Desc: Enters the text as the caption for a cross themed logo.\n🍁 Example : *.crosslogo basilser*\n\n🌺Usage: *.bpink*\n♻️Desc: Enters the text as the caption for a blackpink themed logo.\n🍁 Example : *.bpink basilser*\n\n🌺Usage: *.ninjalogo*\n♻️Desc: Enters the text as the caption for a ninja themed logo.\n🍁 Example : *.ninjalogo basilser*\n\n🌺Usage: *.logopubg*\n♻️Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logopubg basilser;Moder*\n\n🌺Usage: *.water2color*\n♻️Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.water2color basilser;Moder*\n\n🌺Usage: *.snowwrite*\n♻️Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.snowwrite basilser;Moder*\n\n🌺Usage: *.logowolf*\n♻️Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logowolf basilser;Moder*\n\n🌺Usage: *.sparkling*\n♻️Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.sparkling basilser;Moder*\n\n🌺Usage: *.phub*\n♻️Desc: Converts the text into phub logo.\n🍁 Example : *.phub basilser/BOT*\n\n🌺Usage: *.1neon*\n♻️Desc: Converts the text into neon themed image.\n🍁 Example : *.1neon basilser*\n\n🌺Usage: *.naruto*\n♻️Desc: Converts the text into naruto themed image.\n🍁 Example : *.naruto basilser*\n\n🌺Usage: *.blueneon*\n♻️Desc: Converts the text into blueneon themed image.\n🍁 Example : *.blueneon basilser*\n\n🌺Usage: *.2hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.2hacker basilser*\n\n🌺Usage: *.3hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.3hacker basilser*\n\n🌺Usage: *.breakwall*\n♻️Desc: Converts the text into breakwall themed image.\n🍁 Example : *.breakwall basilser*\n\n🌺Usage: *.dropwater*\n♻️Desc: Converts the text into dropwater themed image.\n🍁 Example : *.dropwater basilser*\n\n🌺Usage: *.flowertext*\n♻️Desc: Converts the text into flowertext themed image.\n🍁 Example : *.flowertext basilser*\n\n🌺Usage: *.sliktext*\n♻️Desc: Converts the text into sliktext themed image.\n🍁 Example : *.sliktext basilser*\n\n🌺Usage: *.flame*\n♻️Desc: Converts the text into flame themed image.\n🍁 Example : *.flame basilser*\n\n🌺Usage: *.1glow*\n♻️Desc: Converts the text into 1glow themed image.\n🍁 Example : *.1glow basilser*\n\n🌺Usage: *.skytext*\n♻️Desc: Converts the text into skytext themed image.\n🍁 Example : *.skytext basilser*\n\n🌺Usage: *.smoke*\n♻️Desc: Converts the text into smoke themed image.\n🍁 Example : *.smoke basilser*\n\n🌺Usage: *.lithgtext*\n♻️Desc: Converts the text into lithgtext themed image.\n🍁 Example : *.lithgtext basilser*\n\n🌺Usage: *.sfire*\n♻️Desc: Converts the text into sfire themed image.\n🍁 Example : *.sfire basilser*\n\n🌺Usage: *.sandw*\n♻️Desc: Converts the text into sandw themed image.\n🍁 Example : *.sandw basilser*\n\n🌺Usage: *.gplay*\n♻️Desc: Converts the text into gplay themed image.\n🍁 Example : *.gplay basilser*\n\n🌺Usage: *.splay*\n♻️Desc: Converts the text into splay themed image.\n🍁 Example : *.splay basilser*\n\n🌺Usage: *.3dbox*\n♻️Desc: Converts the text into 3dbox themed image.\n🍁 Example : *.3dbox basilser*\n\n🌺Usage: *.leave*\n♻️Desc: Converts the text into leave themed image.\n🍁 Example : *.leave basilser*\n\n🌺Usage: *.blood*\n♻️Desc: It Sends a blood image of the text provided.\n🍁 Example : *.blood basilser*\n\n🌺Usage: *.cloud*\n♻️Desc: It Sends a sky image of the text provided\n🍁 Example : *.cloud basilser*\n\n🌺Usage: *.glue*\n♻️Desc: it makes 3D Glue text\n🍁 Example : *.glue basilser*\n\n🌺Usage: *.watercolour*\n♻️Desc: Converts the text into a watercolour themed image.\n🍁 Example : *.watercolor basilser*\n\n🌺Usage: *.neonlight*\n♻️Desc: Converts the text into a neonlight themed image.\n🍁 Example : *.neonlight basilser*\n\n🌺Usage: *.3dtext*\n♻️Desc: Converts the provided text into a 3D style image.\n🍁 Example : *.3dtext basilser*\n\n🌺Usage: *.galaxy*\n♻️Desc: it makes metal galaxy text\n🍁 Example : *.galaxy basilser/BOT*\n\n🌺Usage: *.skull*\n♻️Desc: it makes skull logo\n🍁 Example : *.skull basilser*\n\n🌺Usage: *.robot*\n♻️Desc: it makes Robot logo\n🍁 Example : *.robot basilser*\n🌺Usage: *.toxic*\n♻️Desc: it makes Toxic logo\n🍁 Example : *.toxic basilser*\n\n🌺Usage: *orangeglass*\n♻️Desc: it makes gradient text\n🍁 Example : *.orangeglass basilser*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*ᴄᴀᴛʙᴏᴛ*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n');

    }));

    catbot.addCommand({ pattern: '1neon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'naruto ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'blueneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '2hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'breakwall ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '3hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'dropwater ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'flowertext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'sliktext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'flame ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '1glow ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'somke ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'skytext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'cslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'xmas ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'sfire ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'sandw ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'gplay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'splay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: '3dbox ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'bpink ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({ pattern: 'leave ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

    }));
    catbot.addCommand({pattern: 'logowolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
    catbot.addCommand({pattern: 'logopubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
    catbot.addCommand({pattern: 'snowwrite ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
   catbot.addCommand({pattern: 'water2color ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*ᴄᴀᴛʙᴏᴛ*' })

}));
    
    
}

