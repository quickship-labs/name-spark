import { businessPrefixes, businessSuffixes, businessModifiers } from '@/data/business-words';
import { adjectives, nouns, verbs, techWords } from '@/data/username-parts';
import { fantasyRaces } from '@/data/fantasy-races';
import { teamAdjectives, teamAnimals, teamNouns, sportsThemes, workThemes, triviaThemes } from '@/data/team-words';

class SeededRandom {
  private seed: number;

  constructor(seed: number = Date.now()) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  pick<T>(array: T[]): T {
    return array[Math.floor(this.next() * array.length)];
  }

  shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(this.next() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}

export function generateBusinessNames(keywords: string[], count: number = 10): string[] {
  const random = new SeededRandom();
  const names: string[] = [];
  const usedNames = new Set<string>();

  while (names.length < count) {
    let name = '';
    const style = Math.floor(random.next() * 6);

    switch (style) {
      case 0: // Prefix + Keyword
        if (keywords.length > 0) {
          name = `${random.pick(businessPrefixes)}${random.pick(keywords)}`;
        } else {
          name = `${random.pick(businessPrefixes)}${random.pick(businessSuffixes)}`;
        }
        break;
      case 1: // Keyword + Suffix
        if (keywords.length > 0) {
          name = `${random.pick(keywords)}${random.pick(businessSuffixes)}`;
        } else {
          name = `${random.pick(businessPrefixes)}${random.pick(businessSuffixes)}`;
        }
        break;
      case 2: // Prefix + Keyword + Suffix
        if (keywords.length > 0) {
          name = `${random.pick(businessPrefixes)}${random.pick(keywords)} ${random.pick(businessSuffixes)}`;
        } else {
          name = `${random.pick(businessPrefixes)} ${random.pick(businessSuffixes)}`;
        }
        break;
      case 3: // Keyword1 + Keyword2
        if (keywords.length >= 2) {
          const k1 = random.pick(keywords);
          const k2 = random.pick(keywords.filter(k => k !== k1));
          name = `${k1}${k2}`;
        } else if (keywords.length > 0) {
          name = `${random.pick(keywords)} ${random.pick(businessSuffixes)}`;
        } else {
          name = `${random.pick(businessPrefixes)}${random.pick(businessSuffixes)}`;
        }
        break;
      case 4: // Modifier + Keyword
        if (keywords.length > 0) {
          name = `${random.pick(businessModifiers)} ${random.pick(keywords)}`;
        } else {
          name = `${random.pick(businessModifiers)} ${random.pick(businessSuffixes)}`;
        }
        break;
      case 5: // Just combinations
        name = `${random.pick(businessPrefixes)}${random.pick(businessSuffixes)}`;
        break;
    }

    const normalized = name.trim();
    if (normalized && !usedNames.has(normalized)) {
      usedNames.add(normalized);
      names.push(normalized);
    }
  }

  return names;
}

export function generateUsernames(style: string = 'random', count: number = 10): string[] {
  const random = new SeededRandom();
  const names: string[] = [];
  const usedNames = new Set<string>();

  while (names.length < count) {
    let name = '';

    switch (style) {
      case 'adjective-noun':
        name = `${random.pick(adjectives)}${random.pick(nouns)}`;
        break;
      case 'adjective-noun-number':
        name = `${random.pick(adjectives)}${random.pick(nouns)}${Math.floor(random.next() * 100)}`;
        break;
      case 'verb-noun':
        name = `${random.pick(verbs)}${random.pick(nouns)}`;
        break;
      case 'tech':
        name = `${random.pick(techWords)}${random.pick(nouns)}${Math.floor(random.next() * 1000)}`;
        break;
      case 'cool':
        name = `${random.pick(adjectives)}_${random.pick(nouns)}`;
        break;
      default: // random
        const patterns = [
          `${random.pick(adjectives)}${random.pick(nouns)}`,
          `${random.pick(adjectives)}${random.pick(nouns)}${Math.floor(random.next() * 100)}`,
          `${random.pick(verbs)}${random.pick(nouns)}`,
          `${random.pick(adjectives)}_${random.pick(nouns)}`,
        ];
        name = random.pick(patterns);
    }

    if (name && !usedNames.has(name)) {
      usedNames.add(name);
      names.push(name);
    }
  }

  return names;
}

export function generateGamertags(style: string = 'epic', count: number = 10): string[] {
  const random = new SeededRandom();
  const names: string[] = [];
  const usedNames = new Set<string>();

  const epicAdjectives = adjectives.filter(a =>
    ['Epic', 'Legendary', 'Mighty', 'Dark', 'Shadow', 'Thunder', 'Storm', 'Cosmic', 'Phantom'].includes(a)
  );
  const funnyAdjectives = ['Crazy', 'Silly', 'Wacky', 'Dancing', 'Happy', 'Fluffy'];
  const funnyNouns = ['Pickle', 'Banana', 'Noodle', 'Potato', 'Waffle', 'Muffin', 'Burrito'];

  while (names.length < count) {
    let name = '';

    if (style === 'epic') {
      const patterns = [
        `${random.pick(epicAdjectives.length > 0 ? epicAdjectives : adjectives)}${random.pick(nouns)}`,
        `${random.pick(adjectives)}${random.pick(nouns)}${Math.floor(random.next() * 999) + 1}`,
        `xX${random.pick(nouns)}Xx`,
        `${random.pick(verbs)}${random.pick(nouns)}`,
      ];
      name = random.pick(patterns);
    } else if (style === 'funny') {
      const patterns = [
        `${random.pick(funnyAdjectives)}${random.pick(funnyNouns)}`,
        `${random.pick(funnyNouns)}${Math.floor(random.next() * 100)}`,
        `${random.pick(funnyAdjectives)}${random.pick(nouns)}`,
      ];
      name = random.pick(patterns);
    } else {
      name = `${random.pick(adjectives)}${random.pick(nouns)}${Math.floor(random.next() * 100)}`;
    }

    if (name && !usedNames.has(name)) {
      usedNames.add(name);
      names.push(name);
    }
  }

  return names;
}

export function generateFantasyNames(race: string = 'elf', count: number = 10): string[] {
  const random = new SeededRandom();
  const names: string[] = [];
  const usedNames = new Set<string>();

  const raceData = fantasyRaces[race.toLowerCase()];
  if (!raceData) {
    return [];
  }

  while (names.length < count) {
    let name = '';

    if (raceData.pattern === 'first-last') {
      const first = random.pick(raceData.syllables.first);
      const last = random.pick(raceData.syllables.last);
      name = `${first}${last}`;
    } else if (raceData.pattern === 'first-middle-last' && raceData.syllables.middle) {
      const first = random.pick(raceData.syllables.first);
      const middle = random.pick(raceData.syllables.middle);
      const last = random.pick(raceData.syllables.last);
      name = `${first}${middle}${last}`;
    }

    if (name && !usedNames.has(name)) {
      usedNames.add(name);
      names.push(name);
    }
  }

  return names;
}

export function generateTeamNames(theme: string = 'sports', count: number = 10): string[] {
  const random = new SeededRandom();
  const names: string[] = [];
  const usedNames = new Set<string>();

  while (names.length < count) {
    let name = '';

    if (theme === 'sports') {
      const patterns = [
        `${random.pick(teamAdjectives)} ${random.pick(teamAnimals)}`,
        `${random.pick(teamAnimals)}`,
        `The ${random.pick(teamAnimals)}`,
        `${random.pick(teamAdjectives)} ${random.pick(teamNouns)}`,
      ];
      name = random.pick(patterns);
    } else if (theme === 'work') {
      name = random.pick(workThemes);
    } else if (theme === 'trivia') {
      name = random.pick(triviaThemes);
    } else {
      // Random theme
      name = `${random.pick(teamAdjectives)} ${random.pick(teamAnimals)}`;
    }

    if (name && !usedNames.has(name)) {
      usedNames.add(name);
      names.push(name);
    }
  }

  return names;
}
