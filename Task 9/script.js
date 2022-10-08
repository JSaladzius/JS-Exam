/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 100000000 ? true : false;
  }
}

const movie_1 = new Movie ("Sunshine", "Danny Boyle", 26000000);
const movie_2 = new Movie ("28 Weeks Later","Juan Carlos Fresnadillo",150000000);

console.log(movie_1.wasExpensive());
console.log(movie_2.wasExpensive());
