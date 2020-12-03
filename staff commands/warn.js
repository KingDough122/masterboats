module.exports = ({
    name: "warn",
    aliases: ['warn'],
    code: `$title[**__New Warn__**]
    $description[User has been warned.
    Reason: $noMentionMessage
    Staff Member: $username ]
    $deletecommand
    $color[0f3163]
    $useChannel[776147432165605466]
    $setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
    $onlyIf[$mentioned[1;no]!=;$username Please mention someone to warn.]
    $onlyIf[$noMentionMessage!=;$username Please provide a valid reasoning to warn someone.]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]`
})