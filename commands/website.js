module.exports = {
    name: 'website',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('https://www.timhart.nl');
    }
}