module.exports = ({
    name: "clear",
    aliases: ['clear'],
    code: `$title[**__Messages Cleared __**]
    $description[$username has cleared $noMentionMessage Message/s.]
    $deletecommand
    $clear[$noMentionMessage]
    $onlyIf[$noMentionMessage>0;$username you must state an amount of messages to clear, 1 - 100]
    $onlyIf[$noMentionMessage<101;$username the amount of messages you can clear at once is only 100.]
    $useChannel[776227308201050112]
    $onlyForRoles[776107934907891753;You must have " Bot Reviewer " Role +, Permissions to perform this command!]
    $color[0f3163]`
})