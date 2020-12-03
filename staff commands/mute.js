module.exports = ({
    name: "mute",
    aliases: ['mute','tempmute','Mute','Tempmute'],
    code: `$title[**__New Mute__**]
    $description[User: $username[$mentioned[1]]
Reason: $noMentionMessage
Moderator: $username]
    $footer[Date: $dateStamp | ExecutionTime: $addTimestamp]
    $color[b41214]
    $deletecommand
    $useChannel[776147432165605466]
    $giveRoles[$mentioned[1];776143502694023178]
    $onlyIf[$mentioned[1;no]!=;$username You need to menton someone to mute.]
    $onlyIf[$noMentionMessage!=;$username You must provide a " VALID " reasoning to mute someone.]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]
    `
})