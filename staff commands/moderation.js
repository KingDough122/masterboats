module.exports = ({
    name: "moderation",
    aliases: ['moderation'],
    code: `$title[**__Moderation CommandList__**]
    $description[**・ Kick UserID | @User ( Reason ) **
    - Kicks the stated User, UserID & Or Mentioned User.
    ** ・ Ban UserID | @User ( Reason ) **
    - Bans the stated user, UserID & Or Mentioned User.
    ** ・ Mute UserID | @User ( Reason ) **
    - Mutes the stated user, Note timed.
    ** ・ Unmute UserID | @User ( Reason ) **
    - Unmutes the stated user for the provided reason.
    ** ・ Unban UserID ( Reason ) **
    - Unbans the stated UserID for the provided reasoning. 
    ** ・ Clear ( Message Amount ) **
    - Clears the amount of messages stated from the current channel.
    ** ・ Report @User ( Reason ) **
    - Sends a message report in the " Report " Channel for Administrators to see.
    ** ・ Warn @User | UserID ( Reason )
    - Warns the stated User|ID for the provided reasoning, logs in #・ modlog.
    ** ・ clearwarn @User | UserID ( Reaon )
    - Removes a warning from the stated user for the provided reasoning. ["Limited to Administrators"]
    ** ・ clear ( Message Amount )
    - Clears the chat of the stated amount of messages, cannot be greater than 2+ Days.
    ** ・ Unmentionable UserID 
    - Changes the stated user to Unmentionable | 2 Random characteristics. 
    ** ・ nick UserID | @User ( Name ) 
- Changes the username of the stated user with the provided name ["Adminsitrator Permissions only."]
    ** ・ RestartMod ( Reason ) **
    - Restarts the bot's Moderation Shard for better performance. [" Bot Developer Usage Only "]
    $deletecommand
    $footer[$username has requested for the moderation commands.]
    $color[0f3163]
    $onlyForRoles[776107934907891753;You must have " Bot Reviewer " Role +, Permissions to perform this command!]`
})