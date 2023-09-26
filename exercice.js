let chaussures = [
  {
    marque: 'Nike',
    titre: 'Jordan Air',
    collector: true,
    taillesDispo: [28, 29, 30],
    prix: 300,
    elements: {
      lacets: 'rouge',
      corps: 'blanc',
      semelle: 'bleu',
    },
  },
  {
    marque: 'Vans',
    titre: 'Old Skool',
    collector: false,
    taillesDispo: [34, 36, 38],
    prix: 70,
    elements: {
      lacets: 'noir',
      corps: 'marron',
    },
  },
  {
    marque: 'Adidas',
    titre: 'Stan Smith',
    collector: false,
    taillesDispo: [40, 42, 44],
    prix: 100,
    elements: {
      lacets: 'vert',
      corps: 'blanc',
    },
  },
  {
    marque: 'Nike',
    titre: 'Air Force',
    collector: true,
    taillesDispo: [36, 37, 38],
    prix: 200,
    elements: {
      lacets: 'bleu',
      corps: 'marron',
    },
  },
  {
    marque: 'Nike',
    titre: 'Air Max',
    collector: true,
    taillesDispo: [36, 38, 40],
    prix: 900,
    elements: {
      lacets: 'jaune',
      corps: 'vert',
    },
  },
  {
    marque: 'Vans',
    titre: 'Era',
    collector: false,
    taillesDispo: [30, 32, 40],
    prix: 40,
    elements: {
      lacets: 'bleu',
      corps: 'noir',
    },
  },
  {
    marque: 'Vans',
    titre: 'Sk8',
    collector: false,
    taillesDispo: [28, 30, 26],
    prix: 40,
    elements: {
      lacets: 'bleu',
      corps: 'noir',
      languette: 'rouge',
    },
  },
  {
    marque: 'Vans',
    titre: 'Old Skool',
    collector: false,
    taillesDispo: [36, 28, 60],
    prix: 60,
    elements: {
      lacets: 'blanc',
      corps: 'noir',
      languette: 'noir',
    },
  },
  {
    marque: 'Nike',
    titre: 'Nike SB',
    collector: false,
    taillesDispo: [30, 31, 32],
    prix: 50,
    elements: {
      lacets: 'blanc',
      corps: 'noir',
    },
  },
  {
    marque: 'Adidas',
    titre: 'Old Skool',
    collector: false,
    taillesDispo: [29, 30, 32],
    prix: 70,
    elements: {
      lacets: 'rouge',
      corps: 'bleu',
    },
  },
];

// 1. Faire une boucle sur tout le tableau et de log les chaussures une par une

chaussures.filter((chaussure) => true).forEach((chaussure) => {
  console.log(chaussure);
});

// 2. Log un tableau de toutes les Nikes

var chaussuresNike = [];
for (var i = 0; i < chaussures.length; i++) {
  if (chaussures[i].marque === "Nike") {
    chaussuresNike.push(chaussures[i]);
  }
}
console.log(chaussuresNike);

// 3. Log du prix des Vans "Old Skool"

for (var i = 0; i < chaussures.length; i++) {
  if (chaussures[i].marque === "Vans" && chaussures[i].titre === "Old Skool") {
    console.log(`Prix de Vans Old Skool : ${chaussures[i].prix}`);
  }
}

// 4. Log un tableau de toutes les chaussures collector

var chaussuresCollector = [];
for (var i = 0; i < chaussures.length; i++) {
  if (chaussures[i].collector === true) {
    chaussuresCollector.push(chaussures[i]);
  }
}
console.log(chaussuresCollector);

// 5. Log couleur lacets de la vans Sk8

for (var i = 0; i < chaussures.length; i++) {
  if (chaussures[i].marque === "Vans" && chaussures[i].titre === "Sk8") {
    console.log(`Couleurblacets Vans Sk8 : ${chaussures[i].elements.lacets}`);
    break;
  }
}

// 6. Changer la couleur de la vans Sk8 en violet et log la chaussure

for (var i = 0; i < chaussures.length; i++) {
  if (chaussures[i].marque === "Vans" && chaussures[i].titre === "Sk8") {
    chaussures[i].elements.lacets = "violet";
    chaussures[i].elements.corps = "violet";
    chaussures[i].elements.languette = "violet";
    console.log("Vans Sk8 maj :");
    console.log(chaussures[i]);
    break;
  }
}

// 7. Plus compliqué : Log le montant total de Toutes les Nikes

var montantTotalNike = 0;
for (var i = 0; i < chaussures.length; i++) {
  if (chaussures[i].marque === "Nike") {
    montantTotalNike += chaussures[i].prix;
  }
}
console.log(`montant total Nike : ${montantTotalNike}`);