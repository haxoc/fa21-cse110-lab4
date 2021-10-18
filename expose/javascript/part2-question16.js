let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

let loop = function(obj) {
  for (let cat in obj) {
    if (cat.startsWith('r') || obj[cat] % 2 == 1) {
      console.log(obj[cat]);
    }
  }
}

loop(statistics)
