export interface FantasyRace {
  name: string;
  syllables: {
    first: string[];
    middle?: string[];
    last: string[];
  };
  pattern: 'first-last' | 'first-middle-last';
}

export const fantasyRaces: Record<string, FantasyRace> = {
  elf: {
    name: 'Elf',
    syllables: {
      first: [
        'Ae', 'Al', 'Ara', 'Cel', 'Eil', 'El', 'Eo', 'Fae', 'Gal', 'Gil', 'Hal',
        'Im', 'Lae', 'Leg', 'Lin', 'Lor', 'Mal', 'Mir', 'Nor', 'Ril', 'Sil', 'Thal',
        'The', 'Var', 'Vil',
      ],
      last: [
        'adir', 'ador', 'aelon', 'andil', 'anor', 'arin', 'aron', 'driel', 'duil',
        'endil', 'enir', 'ethil', 'indil', 'ion', 'ithil', 'las', 'lias', 'lomin',
        'mir', 'moth', 'naeth', 'nor', 'olos', 'ondil', 'or', 'ran', 'riel', 'rond',
        'thil', 'wen',
      ],
    },
    pattern: 'first-last',
  },
  dwarf: {
    name: 'Dwarf',
    syllables: {
      first: [
        'Bal', 'Bar', 'Bof', 'Bom', 'Bor', 'Dain', 'Dal', 'Dar', 'Dor', 'Dur',
        'Dwal', 'Fal', 'Far', 'Gim', 'Glor', 'Gor', 'Grim', 'Kil', 'Mor', 'Nain',
        'Nar', 'Nor', 'Oin', 'Thor', 'Thrain', 'Thror', 'Tor',
      ],
      last: [
        'ak', 'ar', 'bek', 'bor', 'bur', 'dal', 'din', 'dor', 'ek', 'gar', 'grim',
        'i', 'in', 'ir', 'lin', 'mir', 'ok', 'or', 'rim', 'run', 'thor', 'tik',
        'ul', 'ur',
      ],
    },
    pattern: 'first-last',
  },
  orc: {
    name: 'Orc',
    syllables: {
      first: [
        'Azog', 'Bag', 'Bol', 'Bor', 'Dush', 'Gash', 'Gha', 'Ghor', 'Gob', 'Gol',
        'Gork', 'Goth', 'Gra', 'Gri', 'Gro', 'Gruk', 'Kru', 'Lug', 'Mag', 'Mok',
        'Morg', 'Moth', 'Mug', 'Nar', 'Ork', 'Raz', 'Sha', 'Sna', 'Thok', 'Ugh',
        'Urg', 'Zag', 'Zog',
      ],
      last: [
        'agh', 'ak', 'ash', 'ath', 'bak', 'bol', 'bub', 'dak', 'dog', 'duk', 'gash',
        'gok', 'goth', 'grish', 'guk', 'kil', 'mog', 'nash', 'nath', 'oth', 'ruk',
        'sha', 'snag', 'thrak', 'ug', 'uk', 'ush', 'zog',
      ],
    },
    pattern: 'first-last',
  },
  human: {
    name: 'Human',
    syllables: {
      first: [
        'Ael', 'Al', 'Ar', 'Bran', 'Cad', 'Cor', 'Ed', 'El', 'Er', 'Gar', 'Gor',
        'Hal', 'Jon', 'Kal', 'Kor', 'Mar', 'Mor', 'Ral', 'Ran', 'Rod', 'Sar', 'Tho',
        'Tor', 'Var', 'Wil',
      ],
      middle: [
        'ben', 'dan', 'der', 'di', 'dor', 'dric', 'en', 'er', 'ic', 'is', 'la',
        'lan', 'mar', 'mon', 'ric', 'rick', 'ron', 'ten', 'thor', 'van',
      ],
      last: [
        'brook', 'burg', 'dale', 'den', 'field', 'ford', 'gate', 'guard', 'ham',
        'heart', 'helm', 'hold', 'keep', 'mark', 'mere', 'shield', 'shire', 'son',
        'star', 'stone', 'ton', 'vale', 'ward', 'wick', 'wood',
      ],
    },
    pattern: 'first-middle-last',
  },
  dragon: {
    name: 'Dragon',
    syllables: {
      first: [
        'Aer', 'Anc', 'Arg', 'Bal', 'Dra', 'Faf', 'Glau', 'Grim', 'Ior', 'Kael',
        'Kor', 'Mag', 'Mord', 'Nid', 'Orm', 'Pyro', 'Rag', 'Sap', 'Scar', 'Smaug',
        'Thal', 'Thor', 'Tia', 'Verm', 'Vor', 'Wyrm', 'Zal', 'Zan',
      ],
      middle: [
        'ath', 'ex', 'gal', 'gon', 'gor', 'math', 'mor', 'nak', 'rag', 'rath',
        'thor', 'var', 'vax', 'vor', 'zan', 'zor',
      ],
      last: [
        'aath', 'agon', 'arax', 'arius', 'ath', 'athrax', 'ax', 'azaar', 'dax',
        'dorath', 'gon', 'goroth', 'mathar', 'mor', 'narax', 'nax', 'rax', 'roth',
        'thar', 'thax', 'thorax', 'vor', 'voth', 'zaar', 'zoth',
      ],
    },
    pattern: 'first-middle-last',
  },
};
