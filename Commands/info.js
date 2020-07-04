const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "x!info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Xenon**")
         .setThumbnail("https://cdn.discordapp.com/avatars/416358583220043796/8f702ebf579bce2d7a6f0a4419ac5faf.webp?size=1024")
         .setDescription("Server Backups, Templates e mais..")
         .addField("Convite", "[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=idaqui&scope=bot&permissions=8)", true)
         .addField("Discord", "[Clique aqui](https://discord.gg/discord)")
         .addField("Prefixo", "x!", true)
         .addField("Servidores", client.guilds.size, true)
         .addField("Usuários:", client.users.size, true)
         .setFooter("Criado por ~ renegadowsz09 🗝#0017")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}