const Discord = require('discord.js')
const app = require('../../../config/app.json');
const config = require('../../../config/config.js');
const Element = require('../../../Elements.js')
const desc = require('./desc.js')

let row;
let rowFirst = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder().setLabel("▶").setCustomId('BtnHelpCommandRight').setStyle(Discord.ButtonStyle.Primary))
let rowLast;
let buttons;

let commands = [];
let titles = [];
for(let i in Element) {
    if(Element[i].active) {commands.push(i); titles.push(Element[i].title)} else {}
}

module.exports.initHelp = (Client, message) => {
    if(!message.content.startsWith(app.prefix + Element.HelpCommand.title.valueOf())) return;
    if(Element.HelpCommand.active == false) return;
    if (config.autoCallMessageDelete == true) message.delete()

    message.channel.send("‎").then((message) => {
        message.edit({content: "", embeds: desc.HelpCommand.embed, components: [rowFirst]})
    })

    /*for(let i = 0; i != commands.length; i++) {
        let embed = desc[commands[i]]
        message.channel.send(embed.embed)
    }*/
}

module.exports.buttonGestionner = (Client, interaction) => {
    if(interaction.customId.startsWith("BtnHelpCommand")){
        commandIndex = titles.indexOf(interaction.message.embeds[0].data.title.toLowerCase())
        let element = titles[commandIndex].toLowerCase()
        if (element === titles[0] || element !== titles[titles.length-2]) {
            row = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder().setCustomId("BtnHelpCommandLeft").setLabel('◀').setStyle(Discord.ButtonStyle.Primary))
            .addComponents(new Discord.ButtonBuilder().setCustomId("BtnHelpCommandRight").setLabel('▶').setStyle(Discord.ButtonStyle.Primary))
        }
        if(interaction.customId === "BtnHelpCommandRight") {
            if (element === titles[titles.length-2]){
                row = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder().setCustomId("BtnHelpCommandLeft").setLabel('◀').setStyle(Discord.ButtonStyle.Primary))
            }
            let embed = desc[commands[commandIndex+1]]
            interaction.update({embeds: embed.embed, components: [row]})
        }
        if(interaction.customId === "BtnHelpCommandLeft") {
            if(element === titles[1].toLowerCase()){
                row = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder().setCustomId("BtnHelpCommandRight").setLabel('▶').setStyle(Discord.ButtonStyle.Primary))
            }
            let embed = desc[commands[commandIndex-1]]
            interaction.update({embeds: embed.embed, components: [row]})
        }
    }
}