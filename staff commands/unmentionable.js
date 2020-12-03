module.exports = ({
    name: "unmentionable",
    aliases: ['unmentionable'],
    code: `$username[$noMentionMessage] has been named " Unmentionable | 2 Random Characteristics"
    $deletecommand
    $changeNickname[$noMentionMessage;Unmentionable | $randomString[2]]
    $onlyForRoles[776107934907891753;You must have " Bot Reviewer " Role +, Permissions to perform this command!]`
})