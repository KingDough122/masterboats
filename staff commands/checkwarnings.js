module.exports = ({
    name: "checkwarn",
    aliases: ['warnings'],
    code: `$title[**__$username[$mentioned[1;yes]] Warnings__**]
    $description[$username[$mentioned[1;yes]]'s Warnings
Warnings: $getUserVar[warn;$mentioned[1;yes]]]
    $deletecommand
    $color[0f3163]
    $onlyForRoles[776108157223043073;You must have " Moderator " Role +, Permissions to perform this command!]`
})