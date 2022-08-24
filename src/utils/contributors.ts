export const contributors: string[] = [
  "Nuno Carneiro",
  "Rui Gonçalves",
  "Hugo Barroca",
  "Inês Rosete",
  "Ana Neves",
  "Tiago Sousa",
  "Vasco Patarata",
  "Renato Almeida",
  "Miguel Spranger",
  "Paulo Fonseca",
  "Luís Silva",
  "Nuno Cruz",
  "João Gonçalves",
  "Leonid Kholkine",
  "João Moleiro",
  "Francisco Marques",
  "Luís Neves",
  "Pedro Coelho",
  "João Romão",
  "Jorge Saco",
  "Joana Flores",
  "Francisco Frutuoso",
  "Fábio Cláudio",
  "Luis Cunha",
  "Marta Costa",
  "Vanessa Vilela",
  "Renata Henriques",
  "Domingos Ferreira",
  "Fábio Cláudio",
  "Diogo Correia",
  "Tiago Paim",
  "Catarina Tomé"
]

export const shuffleList = (contributors: string[]) => {
  const shuffledList: string[] = contributors;  
  
  shuffledList.forEach((element: string, index: number) => {
    const random = Math.floor(Math.random() * (index + 1));
    [shuffledList[index], shuffledList[random]] = [shuffledList[random], shuffledList[index]];
  })
  return shuffledList;
}
