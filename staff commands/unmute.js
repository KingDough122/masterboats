module.exports = ({
    name: "unmute",
    aliases: ['unmute','Unmute'],
    code: `$title[**__New Unmute__**]
    $description[User: $username[$mentioned[1]]
Reason: $noMentionMessage
Moderator: $username]
    $footer[Date: $dateStamp | ExecutionTime: $addTimestamp]
    $color[39ff14]
    $deletecommand
    $useChannel[776147432165605466]
    $takeRoles[$mentioned[1];776143502694023178]
    $onlyIf[$mentioned[1;no]!=;$username You need to menton someone to Unmute.]
    $onlyIf[$noMentionMessage!=;$username You must provide a " VALID " reasoning to Unmute someone.]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]
    `
})