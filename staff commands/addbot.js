module.exports = ({
    name: "addbot",
    aliases: ['addbot'],
    code: `$title[**__New Discord Bot request__**]
    $description[
        BotID: $message[1]
        Bot Prefix: $message[2]
        Bot Name: <@$message[1]>
        Bot invite: $getBotInvite[$message[1]]
        Author: $username

    $useChannel[776147413659418654]
    $deletecommand
    $onlyIf[$message[1]!=;$username please provide the porper information, Client ID/BotID and Bots Prefix]
    $onlyIf[$message[2]!=;$username please provide the porper information, Client ID/BotID and Bots Prefix]
    `
})