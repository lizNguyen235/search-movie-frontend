import { createContext } from "react";
import { Movie } from "./Movie";
let movies = [
  new Movie(
    "Avengers: Endgame",
    "Mankind was born on Earth. It was never meant to die here.",
    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    ["Adventure", "Drama", "Science Fiction"],
    ["Legendary Pictures", "Syncopy", "Lynda Obst Productions"],
    "2014-11-07",
    169,
    "$746,606,706",
    8.455,
    "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"
  ),

  new Movie(
    "The Shawshank Redemption",
    "Hope can set you free.",
    "Two imprisoned men bond over a number of years.",
    ["Drama", "Crime"],
    ["Castle Rock Entertainment"],
    "1994-09-23",
    142,
    "$58,500,000",
    9.3,
    "https://image.tmdb.org/t/p/original/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
    "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
  ),

  new Movie(
    "Interstellar",
    "Mankind was born on Earth. It was never meant to die here.",
    "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    ["Adventure", "Drama", "Science Fiction"],
    ["Legendary Pictures", "Syncopy", "Lynda Obst Productions"],
    "2014-11-05",
    169,
    "$746,606,706",
    8.5,
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  ),
];

export const MovieContext = createContext(movies);
