export interface BabyName {
  name: string;
  gender: 'boy' | 'girl' | 'unisex';
  origin: string;
  meaning: string;
}

export const babyNames: BabyName[] = [
  // Boys - A
  { name: 'Aiden', gender: 'boy', origin: 'Irish', meaning: 'Little fire' },
  { name: 'Alexander', gender: 'boy', origin: 'Greek', meaning: 'Defender of men' },
  { name: 'Anthony', gender: 'boy', origin: 'Latin', meaning: 'Priceless one' },
  { name: 'Andrew', gender: 'boy', origin: 'Greek', meaning: 'Strong and manly' },
  { name: 'Asher', gender: 'boy', origin: 'Hebrew', meaning: 'Happy and blessed' },
  { name: 'Austin', gender: 'boy', origin: 'Latin', meaning: 'Great, magnificent' },
  { name: 'Aaron', gender: 'boy', origin: 'Hebrew', meaning: 'Mountain of strength' },
  { name: 'Adrian', gender: 'boy', origin: 'Latin', meaning: 'From Hadria' },
  { name: 'Axel', gender: 'boy', origin: 'Scandinavian', meaning: 'Father of peace' },
  { name: 'Arthur', gender: 'boy', origin: 'Celtic', meaning: 'Bear king' },

  // Boys - B
  { name: 'Benjamin', gender: 'boy', origin: 'Hebrew', meaning: 'Son of the right hand' },
  { name: 'Brandon', gender: 'boy', origin: 'English', meaning: 'Beacon hill' },
  { name: 'Blake', gender: 'boy', origin: 'English', meaning: 'Dark or fair' },
  { name: 'Bentley', gender: 'boy', origin: 'English', meaning: 'Meadow with coarse grass' },
  { name: 'Brayden', gender: 'boy', origin: 'Irish', meaning: 'Brave' },
  { name: 'Brooks', gender: 'boy', origin: 'English', meaning: 'Of the brook' },
  { name: 'Bennett', gender: 'boy', origin: 'Latin', meaning: 'Blessed' },
  { name: 'Bryce', gender: 'boy', origin: 'Scottish', meaning: 'Speckled' },

  // Boys - C
  { name: 'Caleb', gender: 'boy', origin: 'Hebrew', meaning: 'Faithful, devoted' },
  { name: 'Carter', gender: 'boy', origin: 'English', meaning: 'Transporter of goods' },
  { name: 'Christopher', gender: 'boy', origin: 'Greek', meaning: 'Bearer of Christ' },
  { name: 'Christian', gender: 'boy', origin: 'Latin', meaning: 'Follower of Christ' },
  { name: 'Connor', gender: 'boy', origin: 'Irish', meaning: 'Lover of hounds' },
  { name: 'Cameron', gender: 'boy', origin: 'Scottish', meaning: 'Crooked nose' },
  { name: 'Charles', gender: 'boy', origin: 'German', meaning: 'Free man' },
  { name: 'Colton', gender: 'boy', origin: 'English', meaning: 'Coal town' },
  { name: 'Cooper', gender: 'boy', origin: 'English', meaning: 'Barrel maker' },
  { name: 'Cole', gender: 'boy', origin: 'English', meaning: 'Swarthy, coal-black' },

  // Boys - D
  { name: 'Daniel', gender: 'boy', origin: 'Hebrew', meaning: 'God is my judge' },
  { name: 'David', gender: 'boy', origin: 'Hebrew', meaning: 'Beloved' },
  { name: 'Dylan', gender: 'boy', origin: 'Welsh', meaning: 'Son of the sea' },
  { name: 'Dominic', gender: 'boy', origin: 'Latin', meaning: 'Belonging to the Lord' },
  { name: 'Declan', gender: 'boy', origin: 'Irish', meaning: 'Full of goodness' },
  { name: 'Diego', gender: 'boy', origin: 'Spanish', meaning: 'Supplanter' },
  { name: 'Damian', gender: 'boy', origin: 'Greek', meaning: 'To tame' },

  // Boys - E
  { name: 'Ethan', gender: 'boy', origin: 'Hebrew', meaning: 'Strong, firm' },
  { name: 'Elijah', gender: 'boy', origin: 'Hebrew', meaning: 'My God is Yahweh' },
  { name: 'Evan', gender: 'boy', origin: 'Welsh', meaning: 'Young warrior' },
  { name: 'Eli', gender: 'boy', origin: 'Hebrew', meaning: 'Ascended, uplifted' },
  { name: 'Ezra', gender: 'boy', origin: 'Hebrew', meaning: 'Helper' },
  { name: 'Emmett', gender: 'boy', origin: 'German', meaning: 'Universal' },
  { name: 'Easton', gender: 'boy', origin: 'English', meaning: 'East-facing place' },

  // Boys - F-G
  { name: 'Felix', gender: 'boy', origin: 'Latin', meaning: 'Happy, fortunate' },
  { name: 'Finn', gender: 'boy', origin: 'Irish', meaning: 'Fair' },
  { name: 'Gabriel', gender: 'boy', origin: 'Hebrew', meaning: 'God is my strength' },
  { name: 'Grayson', gender: 'boy', origin: 'English', meaning: 'Son of the gray-haired one' },
  { name: 'Gavin', gender: 'boy', origin: 'Welsh', meaning: 'White hawk' },
  { name: 'Grant', gender: 'boy', origin: 'Scottish', meaning: 'Great' },

  // Boys - H-I
  { name: 'Henry', gender: 'boy', origin: 'German', meaning: 'Estate ruler' },
  { name: 'Hudson', gender: 'boy', origin: 'English', meaning: "Hugh's son" },
  { name: 'Hunter', gender: 'boy', origin: 'English', meaning: 'One who hunts' },
  { name: 'Harrison', gender: 'boy', origin: 'English', meaning: "Harry's son" },
  { name: 'Isaac', gender: 'boy', origin: 'Hebrew', meaning: 'Laughter' },
  { name: 'Isaiah', gender: 'boy', origin: 'Hebrew', meaning: 'Salvation of the Lord' },
  { name: 'Ian', gender: 'boy', origin: 'Scottish', meaning: 'God is gracious' },

  // Boys - J
  { name: 'Jackson', gender: 'boy', origin: 'English', meaning: "Jack's son" },
  { name: 'Jacob', gender: 'boy', origin: 'Hebrew', meaning: 'Supplanter' },
  { name: 'James', gender: 'boy', origin: 'Hebrew', meaning: 'Supplanter' },
  { name: 'Joshua', gender: 'boy', origin: 'Hebrew', meaning: 'The Lord is my salvation' },
  { name: 'Joseph', gender: 'boy', origin: 'Hebrew', meaning: 'God will increase' },
  { name: 'Jonathan', gender: 'boy', origin: 'Hebrew', meaning: 'Gift of God' },
  { name: 'Julian', gender: 'boy', origin: 'Latin', meaning: 'Youthful' },
  { name: 'Jaxon', gender: 'boy', origin: 'English', meaning: "Jack's son" },
  { name: 'Josiah', gender: 'boy', origin: 'Hebrew', meaning: 'Fire of the Lord' },
  { name: 'Jeremiah', gender: 'boy', origin: 'Hebrew', meaning: 'The Lord exalts' },

  // Boys - K-L
  { name: 'Kayden', gender: 'boy', origin: 'American', meaning: 'Fighter' },
  { name: 'Kevin', gender: 'boy', origin: 'Irish', meaning: 'Handsome' },
  { name: 'Liam', gender: 'boy', origin: 'Irish', meaning: 'Strong-willed warrior' },
  { name: 'Lucas', gender: 'boy', origin: 'Latin', meaning: 'Light-giving' },
  { name: 'Logan', gender: 'boy', origin: 'Scottish', meaning: 'Small hollow' },
  { name: 'Leo', gender: 'boy', origin: 'Latin', meaning: 'Lion' },
  { name: 'Levi', gender: 'boy', origin: 'Hebrew', meaning: 'Joined, attached' },
  { name: 'Lincoln', gender: 'boy', origin: 'English', meaning: 'Town by the pool' },
  { name: 'Luke', gender: 'boy', origin: 'Greek', meaning: 'Light-giving' },
  { name: 'Landon', gender: 'boy', origin: 'English', meaning: 'Long hill' },

  // Boys - M
  { name: 'Mason', gender: 'boy', origin: 'English', meaning: 'Stone worker' },
  { name: 'Matthew', gender: 'boy', origin: 'Hebrew', meaning: 'Gift of God' },
  { name: 'Michael', gender: 'boy', origin: 'Hebrew', meaning: 'Who is like God?' },
  { name: 'Miles', gender: 'boy', origin: 'Latin', meaning: 'Soldier' },
  { name: 'Milo', gender: 'boy', origin: 'German', meaning: 'Soldier or merciful' },
  { name: 'Maverick', gender: 'boy', origin: 'American', meaning: 'Independent' },
  { name: 'Max', gender: 'boy', origin: 'Latin', meaning: 'Greatest' },

  // Boys - N
  { name: 'Noah', gender: 'boy', origin: 'Hebrew', meaning: 'Rest, comfort' },
  { name: 'Nathan', gender: 'boy', origin: 'Hebrew', meaning: 'He gave' },
  { name: 'Nolan', gender: 'boy', origin: 'Irish', meaning: 'Champion' },
  { name: 'Nicholas', gender: 'boy', origin: 'Greek', meaning: 'Victory of the people' },

  // Boys - O-P-R
  { name: 'Oliver', gender: 'boy', origin: 'Latin', meaning: 'Olive tree' },
  { name: 'Owen', gender: 'boy', origin: 'Welsh', meaning: 'Young warrior, well-born' },
  { name: 'Parker', gender: 'boy', origin: 'English', meaning: 'Park keeper' },
  { name: 'Ryan', gender: 'boy', origin: 'Irish', meaning: 'Little king' },
  { name: 'Robert', gender: 'boy', origin: 'German', meaning: 'Bright fame' },

  // Boys - S
  { name: 'Samuel', gender: 'boy', origin: 'Hebrew', meaning: 'God has heard' },
  { name: 'Sebastian', gender: 'boy', origin: 'Greek', meaning: 'Venerable' },
  { name: 'Sawyer', gender: 'boy', origin: 'English', meaning: 'Woodcutter' },
  { name: 'Simon', gender: 'boy', origin: 'Hebrew', meaning: 'He has heard' },

  // Boys - T
  { name: 'Theodore', gender: 'boy', origin: 'Greek', meaning: 'Gift of God' },
  { name: 'Thomas', gender: 'boy', origin: 'Aramaic', meaning: 'Twin' },
  { name: 'Tyler', gender: 'boy', origin: 'English', meaning: 'Tile maker' },
  { name: 'Tristan', gender: 'boy', origin: 'Celtic', meaning: 'Sorrowful' },

  // Boys - W-X-Z
  { name: 'William', gender: 'boy', origin: 'German', meaning: 'Resolute protector' },
  { name: 'Wyatt', gender: 'boy', origin: 'English', meaning: 'Brave in war' },
  { name: 'Xavier', gender: 'boy', origin: 'Arabic', meaning: 'Bright, splendid' },
  { name: 'Zachary', gender: 'boy', origin: 'Hebrew', meaning: 'The Lord has remembered' },

  // Girls - A
  { name: 'Abigail', gender: 'girl', origin: 'Hebrew', meaning: "Father's joy" },
  { name: 'Addison', gender: 'girl', origin: 'English', meaning: "Son of Adam" },
  { name: 'Amelia', gender: 'girl', origin: 'German', meaning: 'Work' },
  { name: 'Aria', gender: 'girl', origin: 'Italian', meaning: 'Air, melody' },
  { name: 'Audrey', gender: 'girl', origin: 'English', meaning: 'Noble strength' },
  { name: 'Aurora', gender: 'girl', origin: 'Latin', meaning: 'Dawn' },
  { name: 'Ava', gender: 'girl', origin: 'Latin', meaning: 'Life' },
  { name: 'Avery', gender: 'girl', origin: 'English', meaning: 'Ruler of the elves' },
  { name: 'Alice', gender: 'girl', origin: 'German', meaning: 'Noble' },
  { name: 'Anna', gender: 'girl', origin: 'Hebrew', meaning: 'Grace' },
  { name: 'Autumn', gender: 'girl', origin: 'Latin', meaning: 'Fall season' },

  // Girls - B
  { name: 'Bella', gender: 'girl', origin: 'Italian', meaning: 'Beautiful' },
  { name: 'Brooklyn', gender: 'girl', origin: 'American', meaning: 'Water' },
  { name: 'Brianna', gender: 'girl', origin: 'Irish', meaning: 'Strong, virtuous' },

  // Girls - C
  { name: 'Camila', gender: 'girl', origin: 'Latin', meaning: 'Young ceremonial attendant' },
  { name: 'Caroline', gender: 'girl', origin: 'French', meaning: 'Free man' },
  { name: 'Charlotte', gender: 'girl', origin: 'French', meaning: 'Free man' },
  { name: 'Chloe', gender: 'girl', origin: 'Greek', meaning: 'Blooming' },
  { name: 'Claire', gender: 'girl', origin: 'French', meaning: 'Clear, bright' },
  { name: 'Clara', gender: 'girl', origin: 'Latin', meaning: 'Clear, bright' },

  // Girls - D-E
  { name: 'Delilah', gender: 'girl', origin: 'Hebrew', meaning: 'Delicate' },
  { name: 'Eleanor', gender: 'girl', origin: 'Greek', meaning: 'Bright, shining one' },
  { name: 'Elena', gender: 'girl', origin: 'Spanish', meaning: 'Shining light' },
  { name: 'Eliana', gender: 'girl', origin: 'Hebrew', meaning: 'My God has answered' },
  { name: 'Elizabeth', gender: 'girl', origin: 'Hebrew', meaning: 'God is my oath' },
  { name: 'Ella', gender: 'girl', origin: 'German', meaning: 'All, completely' },
  { name: 'Ellie', gender: 'girl', origin: 'Greek', meaning: 'Shining light' },
  { name: 'Emily', gender: 'girl', origin: 'Latin', meaning: 'Rival' },
  { name: 'Emma', gender: 'girl', origin: 'German', meaning: 'Universal' },
  { name: 'Evelyn', gender: 'girl', origin: 'English', meaning: 'Desired' },
  { name: 'Eva', gender: 'girl', origin: 'Hebrew', meaning: 'Life' },

  // Girls - F-G
  { name: 'Freya', gender: 'girl', origin: 'Norse', meaning: 'Noble lady' },
  { name: 'Gabriella', gender: 'girl', origin: 'Italian', meaning: 'God is my strength' },
  { name: 'Genesis', gender: 'girl', origin: 'Greek', meaning: 'Beginning' },
  { name: 'Gianna', gender: 'girl', origin: 'Italian', meaning: 'God is gracious' },
  { name: 'Grace', gender: 'girl', origin: 'Latin', meaning: 'Charm' },

  // Girls - H
  { name: 'Hannah', gender: 'girl', origin: 'Hebrew', meaning: 'Grace' },
  { name: 'Harper', gender: 'girl', origin: 'English', meaning: 'Harp player' },
  { name: 'Hazel', gender: 'girl', origin: 'English', meaning: 'The hazel tree' },

  // Girls - I
  { name: 'Isabella', gender: 'girl', origin: 'Hebrew', meaning: 'Devoted to God' },
  { name: 'Isla', gender: 'girl', origin: 'Scottish', meaning: 'Island' },
  { name: 'Ivy', gender: 'girl', origin: 'English', meaning: 'Faithfulness' },

  // Girls - J
  { name: 'Jade', gender: 'girl', origin: 'Spanish', meaning: 'Stone of the side' },
  { name: 'Jasmine', gender: 'girl', origin: 'Persian', meaning: 'Jasmine flower' },
  { name: 'Julia', gender: 'girl', origin: 'Latin', meaning: 'Youthful' },

  // Girls - K-L
  { name: 'Kennedy', gender: 'girl', origin: 'Irish', meaning: 'Helmeted chief' },
  { name: 'Kinsley', gender: 'girl', origin: 'English', meaning: "King's meadow" },
  { name: 'Layla', gender: 'girl', origin: 'Arabic', meaning: 'Night' },
  { name: 'Leah', gender: 'girl', origin: 'Hebrew', meaning: 'Weary' },
  { name: 'Lily', gender: 'girl', origin: 'English', meaning: 'Lily flower' },
  { name: 'Luna', gender: 'girl', origin: 'Latin', meaning: 'Moon' },
  { name: 'Lucy', gender: 'girl', origin: 'Latin', meaning: 'Light' },

  // Girls - M
  { name: 'Madison', gender: 'girl', origin: 'English', meaning: "Son of Matthew" },
  { name: 'Madelyn', gender: 'girl', origin: 'English', meaning: 'High tower' },
  { name: 'Maya', gender: 'girl', origin: 'Sanskrit', meaning: 'Illusion' },
  { name: 'Mia', gender: 'girl', origin: 'Italian', meaning: 'Mine' },
  { name: 'Mila', gender: 'girl', origin: 'Slavic', meaning: 'Gracious, dear' },

  // Girls - N
  { name: 'Naomi', gender: 'girl', origin: 'Hebrew', meaning: 'Pleasantness' },
  { name: 'Natalie', gender: 'girl', origin: 'Latin', meaning: "Christmas day" },
  { name: 'Nora', gender: 'girl', origin: 'Irish', meaning: 'Light' },
  { name: 'Nova', gender: 'girl', origin: 'Latin', meaning: 'New' },

  // Girls - O
  { name: 'Olivia', gender: 'girl', origin: 'Latin', meaning: 'Olive tree' },

  // Girls - P
  { name: 'Paisley', gender: 'girl', origin: 'Scottish', meaning: 'Church' },
  { name: 'Penelope', gender: 'girl', origin: 'Greek', meaning: 'Weaver' },
  { name: 'Piper', gender: 'girl', origin: 'English', meaning: 'Flute player' },

  // Girls - R
  { name: 'Riley', gender: 'girl', origin: 'Irish', meaning: 'Courageous' },
  { name: 'Rose', gender: 'girl', origin: 'Latin', meaning: 'Rose flower' },
  { name: 'Ruby', gender: 'girl', origin: 'Latin', meaning: 'Red gemstone' },

  // Girls - S
  { name: 'Savannah', gender: 'girl', origin: 'Spanish', meaning: 'Treeless plain' },
  { name: 'Scarlett', gender: 'girl', origin: 'English', meaning: 'Red' },
  { name: 'Serenity', gender: 'girl', origin: 'Latin', meaning: 'Peaceful' },
  { name: 'Skylar', gender: 'girl', origin: 'Dutch', meaning: 'Scholar' },
  { name: 'Sofia', gender: 'girl', origin: 'Greek', meaning: 'Wisdom' },
  { name: 'Sophia', gender: 'girl', origin: 'Greek', meaning: 'Wisdom' },
  { name: 'Stella', gender: 'girl', origin: 'Latin', meaning: 'Star' },

  // Girls - V
  { name: 'Valentina', gender: 'girl', origin: 'Latin', meaning: 'Strong, healthy' },
  { name: 'Victoria', gender: 'girl', origin: 'Latin', meaning: 'Victory' },
  { name: 'Violet', gender: 'girl', origin: 'Latin', meaning: 'Purple flower' },
  { name: 'Vivian', gender: 'girl', origin: 'Latin', meaning: 'Life' },

  // Girls - W-Z
  { name: 'Willow', gender: 'girl', origin: 'English', meaning: 'Willow tree' },
  { name: 'Zoe', gender: 'girl', origin: 'Greek', meaning: 'Life' },
  { name: 'Zoey', gender: 'girl', origin: 'Greek', meaning: 'Life' },

  // Unisex Names
  { name: 'Alexis', gender: 'unisex', origin: 'Greek', meaning: 'Defender' },
  { name: 'Angel', gender: 'unisex', origin: 'Greek', meaning: 'Messenger' },
  { name: 'Ariel', gender: 'unisex', origin: 'Hebrew', meaning: 'Lion of God' },
  { name: 'Ashton', gender: 'unisex', origin: 'English', meaning: 'Ash tree town' },
  { name: 'Bailey', gender: 'unisex', origin: 'English', meaning: 'Bailiff' },
  { name: 'Blake', gender: 'unisex', origin: 'English', meaning: 'Dark or fair' },
  { name: 'Cameron', gender: 'unisex', origin: 'Scottish', meaning: 'Crooked nose' },
  { name: 'Casey', gender: 'unisex', origin: 'Irish', meaning: 'Brave in battle' },
  { name: 'Charlie', gender: 'unisex', origin: 'English', meaning: 'Free man' },
  { name: 'Dakota', gender: 'unisex', origin: 'Native American', meaning: 'Friend' },
  { name: 'Drew', gender: 'unisex', origin: 'Greek', meaning: 'Strong and manly' },
  { name: 'Dylan', gender: 'unisex', origin: 'Welsh', meaning: 'Son of the sea' },
  { name: 'Finley', gender: 'unisex', origin: 'Scottish', meaning: 'Fair-haired hero' },
  { name: 'Hayden', gender: 'unisex', origin: 'English', meaning: 'Hedged valley' },
  { name: 'Jordan', gender: 'unisex', origin: 'Hebrew', meaning: 'To flow down' },
  { name: 'Justice', gender: 'unisex', origin: 'English', meaning: 'Righteous' },
  { name: 'Kai', gender: 'unisex', origin: 'Hawaiian', meaning: 'Sea' },
  { name: 'Logan', gender: 'unisex', origin: 'Scottish', meaning: 'Small hollow' },
  { name: 'Morgan', gender: 'unisex', origin: 'Welsh', meaning: 'Sea-born' },
  { name: 'Parker', gender: 'unisex', origin: 'English', meaning: 'Park keeper' },
  { name: 'Peyton', gender: 'unisex', origin: 'English', meaning: 'Fighting man\'s estate' },
  { name: 'Quinn', gender: 'unisex', origin: 'Irish', meaning: 'Descendant of Conn' },
  { name: 'Reese', gender: 'unisex', origin: 'Welsh', meaning: 'Enthusiastic' },
  { name: 'Riley', gender: 'unisex', origin: 'Irish', meaning: 'Courageous' },
  { name: 'River', gender: 'unisex', origin: 'English', meaning: 'Flowing body of water' },
  { name: 'Rowan', gender: 'unisex', origin: 'Irish', meaning: 'Little redhead' },
  { name: 'Ryan', gender: 'unisex', origin: 'Irish', meaning: 'Little king' },
  { name: 'Sage', gender: 'unisex', origin: 'Latin', meaning: 'Wise' },
  { name: 'Sam', gender: 'unisex', origin: 'Hebrew', meaning: 'God has heard' },
  { name: 'Sawyer', gender: 'unisex', origin: 'English', meaning: 'Woodcutter' },
  { name: 'Skyler', gender: 'unisex', origin: 'Dutch', meaning: 'Scholar' },
  { name: 'Taylor', gender: 'unisex', origin: 'English', meaning: 'Tailor' },
];
