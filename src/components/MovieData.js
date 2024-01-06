const MovieData = () => {
  const moviesData = [
    {
      id: 1,
      titre: 'The Chi',
      description: `The Chi est une série télévisée dramatique américaine créée par Lena Waithe, partiellement inspirée de sa vie dans le South Side de Chicago`,
      posterURL: 'https://fr.web.img6.acsta.net/pictures/17/11/21/10/28/3277635.jpg',
      note: 4,
    },
    {
      id: 2,
      titre: 'Menace to Society',
      description: `Menace to Society (ou Menace II Society selon la graphie de l'affiche) est un film américain réalisé par Albert et Allen Hughes sorti en 1993.`,
      posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQmgVerc8NNR5FMKe_bZYd5EHDAf0jXh29U0doDHxqoAghsVrF',
      note: 6,
    },
    {
      id: 3,
      titre: 'Bad Boys',
      description: `Bad Boys : Flics de choc ou Mauvais Garçons au Québec (Bad Boys) est une comédie policière américaine réalisée par Michael Bay et sortie en 1995.`,
      posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGmVmervo24O6Bz8bjtJbkpmG5S7v390lt8gIXwmnSfxKnHDcx',
      note: 5,
    },
  ];

  return moviesData;
};

export default MovieData;