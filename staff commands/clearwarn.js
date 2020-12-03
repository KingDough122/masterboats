module.exports = ({
    name:"clearwarn",
     code:`
     $setUserVar[warn;$sub[$getUserVar[warn;$mentioned[1]];$noMentionMessage];$mentioned[1]]]
     $title[**__Warnings Removed__**]
     $description[I have removed $noMentionMessage Warning/s from $username[$metioned[1;yes]]
     Warnings: They have $getUserVar[warn;$sub[$getUserVar[warn;$mentioned[1;yes]];$noMentioneMessage];$mentioned[1;yes]] Warning/s.
     Administrator: $username]
     $footer[Removed by $username | $addTimestamp]
     $addTimestamp
     $color[39ff14]
     $useChannel[776147432165605466]
     $onlyIf[$noMentionMessage<5;$username The amount of warnings that can only be removed is 5 at max.]
     $onlyIf[$noMentionMessage>0;$username Please provide an valid amount of warnings to clear | remove, 1 - 5 at a time can be removed.]
     $onlyAdmin[Must be an " Administrator " to run this command.]
     
     `
})