module.exports = ({
    name: "unban",
    aliases: ['unban','UnBan'],
    code: `$title[**__New UnBan__**]
    $description[User: $username[$mentioned[1]]
Reason: $noMentionMessage
Adminsitrator: $username]
    $footer[Date: $dateStamp | ExecutionTime: $addTimestamp]
    $color[39ff14]
    $unban[$mentioned[1];$noMentionMessage;1000]
    $deletecommand
    $useChannel[776147432165605466]
    $onlyIf[$mentioned[1;no]!=;$username You need to menton someone to Unban.]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]
    `
})