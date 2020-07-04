const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**x!help"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Criano**__")
            .setDescription(`
            
            __**Segurança**__
            
            **x!backup**          Criar & colocar backups em seus servidores
            
            __**Outros**__
            
            **x!help**            Mostra essa mensagem
            **x!info**            Informação do bot 
            `)
            .setFooter(`Use \`**x!help [comandod]\` para mais informações do comando.
           E também pode usar \`**x!help [category]\` para mais informações da categoria.`)
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**x!backup**

                    Criar & colocar backups em seus servidores

__**Comandos**__
`)
                    .setDescription(`
                x!backup criar      Criar um backup do servidor
                x!backup deletar    Deleta um de seus backups
                x!backup info       Pega informação de um backup
                x!backup lista      Lista de todos os backups
                x!backup load       Coloca um backup do servidor
                x!backup purge      Deleta todos os backups`)
                    .addBlankField()
                    .setFooter(`Use \`x!help [comando]\` para mais informações de um comando
E também pode usar \`x!help [category]\` para mais informações de uma categoria`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**x!help [comando]**")
                    .setDescription("Mostra essa mensagem")
                    .addBlankField()
                    .setFooter(`Use \`x!help [comando]\` para informações de um comando.
E também pode usar \`x!help [categoria]\` para mais informações da categoria.`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**x!info**")
                    .setDescription("Para mais informações do bot")
                    .addBlankField()
                    .setFooter(`Use \`x!help [comando]\` para mais informações do comando.
E também pode usar \`x!help [categoria]\` para mais informações da categaria.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

          
         

        


        

        }catch(e) {
            throw e;
        }
    }
}
