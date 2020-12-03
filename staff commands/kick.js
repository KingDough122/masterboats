module.exports = ({
    name: "kick",
    aliases: ['Kick','kick'],
    code: `$title[**__New Kick__**]
    $description[User: $username[$mentioned[1]]
Reason: $noMentionMessage
Moderator: $username]
    $footer[Date: $dateStamp | ExecutionTime: $addTimestamp]
    $color[b41214]
    $kick[$mentioned[1];$noMentionMessage]
    $deletecommand
    $useChannel[776147432165605466]
    $onlyIf[$mentioned[1;no]!=;$username You need to menton someone to ban.]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]
    `
})