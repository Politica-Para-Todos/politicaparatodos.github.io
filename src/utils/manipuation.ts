import { Party } from "../dtos/party-dto";

export const slugify = (expression: string) => {
  expression = expression.replace(/^\s+|\s+$/g, '');

  // Make the stringing lowercase
  expression = expression.toLowerCase();

  // Remove accents, swap ñ for n, etc
  var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
  for (var i = 0, l = from.length; i < l; i++) {
    expression = expression.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  // Remove invalid chars
  expression = expression.replace(/[^a-z0-9 -]/g, '')
    // Collapse whitespace and replace by _
    .replace(/\s+/g, '_')
    // Collapse dashes
    .replace(/-+/g, '_');

  return expression;
}

export interface PartyCircle {
  value: string,
  label: string
}

export const circles: PartyCircle[] = [
  {
    value: "all",
    label: "Todos"
  },
  {
    value: "acores",
    label: "Açores"
  },
  {
    value: "aveiro",
    label: "Aveiro"
  },
  {
    value: "beja",
    label: "Beja"
  },
  {
    value: "braga",
    label: "Braga"
  },
  {
    value: "braganca",
    label: "Bragança"
  },
  {
    value: "castelo-branco",
    label: "Castelo Branco"
  },
  {
    value: "coimbra",
    label: "Coimbra"
  },
  {
    value: "evora",
    label: "Évora"
  },
  {
    value: "europa",
    label: "Europa"
  },
  {
    value: "faro",
    label: "Faro"
  },
  {
    value: "fora-da-europa",
    label: "Fora da Europa"
  },
  {
    value: "guarda",
    label: "Guarda"
  },
  {
    value: "leiria",
    label: "Leiria"
  },
  {
    value: "lisboa",
    label: "Lisboa"
  },
  {
    value: "madeira",
    label: "Madeira"
  },
  {
    value: "portalegre",
    label: "Portalegre"
  },
  {
    value: "porto",
    label: "Porto"
  },
  {
    value: "santarem",
    label: "Santarém"
  },
  {
    value: "setubal",
    label: "Setúbal"
  },
  {
    value: "viana-do-castelo",
    label: "Viana do Castelo"
  },
  {
    value: "vila-real",
    label: "Vila Real"
  },
  {
    value: "viseu",
    label: "Viseu"
  }
];

// Shuffle array
export function shuffleParties(parties: Party[]) {
  const shuffledParties: Party[] = [...parties];

  shuffledParties.forEach((party, index) => {
    const random = Math.floor(Math.random() * (index + 1));
    [shuffledParties[index], shuffledParties[random]] = [shuffledParties[random], shuffledParties[index]];
  });
  return shuffledParties;
}

// Sort array by key
export function sortArrayByKey(array: any[], key: string): any[] {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
