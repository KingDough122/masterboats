module.exports = ({
    name: "ban",
    aliases: ['ban','Ban'],
    code: `$title[**__New Ban__**]
    $description[User: $username[$mentioned[1]]
Reason: $noMentionMessage
Adminsitrator: $username]
    $footer[Date: $dateStamp | ExecutionTime: $addTimestamp]
    $color[b41214]
    $ban[$mentioned[1];$noMentionMessage;1000]
    $deletecommand
    $useChannel[776147432165605466]
    $onlyIf[$mentioned[1;no]!=;$username You need to menton someone to ban.]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]
    `
})