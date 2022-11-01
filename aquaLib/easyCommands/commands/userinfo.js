const Discord = require('discord.js');
const app = require('../../../config/app.json'), config = require('../../../config/config.js')

const sendMessage = require('../../easyBot/MessageCreator/sendMessage.js')

module.exports = (Client, message) => {
    if (!Client || !message) throw "AquaLib : EasyCommands : Les arguments Client et message lors de l'appel de la fonction sont obligatoires."
    const args = message.content.trim().split(/ +/g);
    if (config.autoCallMessageDelete == true) message.delete()
    if (message.mentions.members.first()) {
        const embedusermention = new Discord.EmbedBuilder()
            .setFooter({ text: "Par " + app.name, iconURL: app.iconURL })
            .setTimestamp()
            .setThumbnail(message.mentions.members.first().displayAvatarURL())
            .setColor(app.botColor)
            .setTitle('**__Ses informations discord sont :__**\n \n  ')
            .addFields(
                { name: '**Son tag discord :**', value: `${message.mentions.members.first().user.tag}`, inline: false },
                { name: '**Il a créer son compte le : **', value: `${message.mentions.members.first().user.createdAt.toLocaleString()}`, inline: false },
                { name: '**Il a rejoint le serveur le :**', value: `${message.mentions.members.first().joinedAt.toLocaleString()}`, inline: false },
                { name: '**Ses rôles sont :**', value: `${message.mentions.members.first().roles.cache.map(role => role.name).join(',  ')}`, inline: false },
                { name: '**Son ID :**', value: `${message.mentions.members.first().id}`, inline: false },
            )
        message.channel.send({ embeds: [embedusermention] })

    } else {
        const embeduser = new Discord.EmbedBuilder()
            .setFooter({ text: "Par " + app.name, iconURL: app.iconURL })
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL())
            .setColor(app.botColor)
            .setTitle('**__Vos informations discord sont :__**\n \n  ')
            .addFields(
                { name: '**Ton tag discord :**', value: `${message.author.tag}`, inline: false },
                { name: '**Tu as créé ton compte le :**', value: `${message.member.user.createdAt.toLocaleString()}`, inline: false },
                { name: '**Tu as rejoint le serveur le :**', value: `${message.member.joinedAt.toLocaleString()}`, inline: false },
                { name: '**Tes rôles sont :**', value: `${message.member.roles.cache.map(role => role.name).join(',  ')}`, inline: false },
                { name: '**Ton ID :**', value: `${message.member.id}`, inline: false },
            )
        message.channel.send({ embeds: [embeduser] })
    }
}