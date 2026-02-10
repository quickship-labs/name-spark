export interface PetNameCategory {
  species: string;
  personalities: Record<string, string[]>;
}

export const petNames: Record<string, PetNameCategory> = {
  dog: {
    species: 'Dog',
    personalities: {
      playful: [
        'Bouncer', 'Bubbles', 'Buddy', 'Chase', 'Cooper', 'Dash', 'Fido', 'Flash',
        'Frisbee', 'Happy', 'Jolly', 'Joy', 'Jumper', 'Lucky', 'Paws', 'Peppy',
        'Rocket', 'Scout', 'Skip', 'Sparky', 'Speedy', 'Sport', 'Sunny', 'Zippy',
      ],
      loyal: [
        'Ace', 'Bear', 'Boss', 'Champ', 'Chief', 'Duke', 'Faith', 'Guardian',
        'Hero', 'Honor', 'King', 'Knight', 'Major', 'Max', 'Noble', 'Prince',
        'Rex', 'Ranger', 'Shadow', 'Soldier', 'Tank', 'Thor', 'Titan', 'Zeus',
      ],
      cuddly: [
        'Angel', 'Baby', 'Bean', 'Biscuit', 'Coco', 'Cookie', 'Cuddles', 'Daisy',
        'Honey', 'Lily', 'Love', 'Muffin', 'Peanut', 'Pearl', 'Penny', 'Rosie',
        'Ruby', 'Snuggles', 'Sugar', 'Sweet Pea', 'Teddy', 'Waffles',
      ],
      smart: [
        'Einstein', 'Sherlock', 'Watson', 'Newton', 'Darwin', 'Tesla', 'Archie',
        'Atlas', 'Brains', 'Einstein', 'Genius', 'Maestro', 'Professor', 'Sage',
        'Scholar', 'Smarty', 'Socrates', 'Whisper', 'Wisdom',
      ],
    },
  },
  cat: {
    species: 'Cat',
    personalities: {
      independent: [
        'Athena', 'Cleopatra', 'Empress', 'Gatsby', 'Jazz', 'Luna', 'Midnight',
        'Mystery', 'Nyx', 'Phantom', 'Queen', 'Rebel', 'Salem', 'Shadow', 'Smokey',
        'Spirit', 'Storm', 'Twilight', 'Velvet', 'Whisper', 'Willow', 'Zorro',
      ],
      playful: [
        'Bandit', 'Boots', 'Bouncy', 'Chaos', 'Dash', 'Felix', 'Frisky', 'Jazz',
        'Jinx', 'Mischief', 'Mittens', 'Paws', 'Pixel', 'Pounce', 'Rascal', 'Socks',
        'Sparkle', 'Tango', 'Tigger', 'Whiskers', 'Zippy',
      ],
      lazy: [
        'Bagel', 'Biscuit', 'Butterball', 'Chubby', 'Cloud', 'Cozy', 'Donut',
        'Dumpling', 'Fluffy', 'Garfield', 'Lazy', 'Marshmallow', 'Mochi', 'Muffin',
        'Napper', 'Puff', 'Pudge', 'Sleepy', 'Snooze', 'Yawn',
      ],
      elegant: [
        'Anastasia', 'Bella', 'Chloe', 'Crystal', 'Diamond', 'Duchess', 'Grace',
        'Ivory', 'Jasmine', 'Lady', 'Lux', 'Pearl', 'Princess', 'Sasha', 'Silk',
        'Stella', 'Symphony', 'Tiffany', 'Vienna', 'Zara',
      ],
    },
  },
  bird: {
    species: 'Bird',
    personalities: {
      chatty: [
        'Babble', 'Chatter', 'Echo', 'Gabby', 'Gossip', 'Jabber', 'Kiwi', 'Mango',
        'Parrot', 'Peaches', 'Peanut', 'Pepper', 'Polly', 'Squawk', 'Tango',
        'Tweety', 'Whistle', 'Yapper',
      ],
      colorful: [
        'Azure', 'Bluebell', 'Coral', 'Emerald', 'Flame', 'Goldie', 'Jade', 'Kiwi',
        'Mango', 'Papaya', 'Peaches', 'Rainbow', 'Ruby', 'Sapphire', 'Scarlet',
        'Skittles', 'Sunny', 'Topaz',
      ],
      sweet: [
        'Angel', 'Cherry', 'Coco', 'Cookie', 'Honey', 'Jellybean', 'Lemon', 'Lolly',
        'Muffin', 'Peanut', 'Pippin', 'Sugar', 'Sweetie', 'Taffy', 'Toffee',
      ],
    },
  },
  fish: {
    species: 'Fish',
    personalities: {
      active: [
        'Bubbles', 'Dart', 'Flash', 'Flipper', 'Gill', 'Jet', 'Neptune', 'Nemo',
        'Rocket', 'Speedy', 'Splash', 'Swift', 'Torpedo', 'Zoom',
      ],
      peaceful: [
        'Aqua', 'Azure', 'Blue', 'Calm', 'Coral', 'Crystal', 'Flow', 'Harmony',
        'Ocean', 'Pearl', 'River', 'Serenity', 'Stream', 'Tide', 'Wave', 'Zen',
      ],
      colorful: [
        'Amber', 'Blaze', 'Copper', 'Dory', 'Flame', 'Glimmer', 'Gold', 'Goldie',
        'Marble', 'Neon', 'Orange', 'Rainbow', 'Scarlet', 'Shimmer', 'Sparkle',
        'Sunset', 'Tiger',
      ],
    },
  },
  rabbit: {
    species: 'Rabbit',
    personalities: {
      energetic: [
        'Binky', 'Bounce', 'Bunny', 'Cottontail', 'Dash', 'Flash', 'Hop', 'Hopper',
        'Jumper', 'Pepper', 'Rocket', 'Skip', 'Speedy', 'Spring', 'Zippy',
      ],
      cuddly: [
        'Biscuit', 'Butterscotch', 'Caramel', 'Cinnamon', 'Clover', 'Cocoa', 'Cookie',
        'Cotton', 'Cuddles', 'Daisy', 'Flopsy', 'Honey', 'Marshmallow', 'Muffin',
        'Peanut', 'Snuggles', 'Snowball', 'Thumper', 'Velvet',
      ],
    },
  },
  hamster: {
    species: 'Hamster',
    personalities: {
      active: [
        'Bolt', 'Cheeks', 'Dash', 'Dizzy', 'Hammy', 'Nibbles', 'Peanut', 'Pepper',
        'Rocket', 'Scurry', 'Speedy', 'Spinner', 'Whiskers', 'Zippy',
      ],
      cuddly: [
        'Bean', 'Biscuit', 'Butterball', 'Chip', 'Cookie', 'Fuzzy', 'Marshmallow',
        'Mochi', 'Muffin', 'Nugget', 'Puff', 'Snuggles', 'Teddy',
      ],
    },
  },
};
