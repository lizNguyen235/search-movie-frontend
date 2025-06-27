import tmdbLogo from "./assets/tmdb.svg";
import { Movie } from "./Movie";

// Khởi tạo movie instance dùng đúng tên thuộc tính
let movie = new Movie(
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
);

function App() {
  return <MyBody />;
}
export default App;
export function MyBody() {
  return (
    <div
      className="bg-cover min-h-screen"
      style={{ backgroundImage: `url(${movie.backgroundImage})` }}
    >
      <MyOuterContainer movie={movie} />
    </div>
  );
}

export function MyOuterContainer({ movie }) {
  return (
    <div className="flex flex-row justify-center my-fade min-h-screen px-4">
      <MyContainer movie={movie} />
    </div>
  );
}

export function MyContainer({ movie }) {
  return (
    <div className="my-8">
      <MyColumn movie={movie} />
    </div>
  );
}

export function MyColumn({ movie }) {
  return (
    <div className="h-full">
      <MyContent movie={movie} />
    </div>
  );
}

export function MyContent({ movie }) {
  return (
    <div className="">
      <MyRowTitle />
      <MyMovie movie={movie} />
      <MyFooter />
    </div>
  );
}

export function MyRowTitle() {
  return (
    <div className="">
      <MyRowTitleContent />
    </div>
  );
}

export function MyRowTitleContent() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="w-40 ">
        <img src={tmdbLogo} alt="TMDB Logo" />
      </div>
      <div className="md:w-[530px] w-full">
        <input
          className="hover:outline-none outline-none text-white w-full border-b-1"
          placeholder="Search Movie..."
        />
      </div>
    </div>
  );
}

export function MyMovie({ movie }) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-start bg-black md:w-[920px] md:h-[574px] h-fit  mt-4">
      <div className="h-full aspect-2/3 w-fit">
        <img src={movie.posterImage} alt="Movie Poster" className="h-full " />
      </div>
      <MovieInfo movie={movie} />
    </div>
  );
}

export function MovieInfo({ movie }) {
  return (
    <div className="text-white p-4 flex flex-col justify-start">
      <h1 className="uppercase text-[34px]">{movie.title}</h1>
      <span className="text-[18px] text-[#00fc87] block">
        {movie.introduction}
      </span>
      <p className="mt-4 mb-8">{movie.overview}</p>
      <AdditionalDetail movie={movie} />
    </div>
  );
}

export function AdditionalDetail({ movie }) {
  return (
    <div>
      <div>
        <span className="text-[#00fc87] text-[25px]">
          {movie.genre.join(", ")}
        </span>
      </div>
      <div>
        <span>{movie.productions.join(", ")}</span>
      </div>
      <MyDetailInfo />
    </div>
  );
}

export function MyDetailInfo() {
  return (
    <div className="text-white py-4 grid grid-cols-2 grid-rows-2 gap-4">
      <div>
        <strong className="block">Release Date:</strong>{" "}
        <span className="text-[#00fc87]">{movie.originRelease}</span>
      </div>
      <div>
        <strong className="block">Runtime:</strong>{" "}
        <span className="text-[#00fc87]">{movie.runtime} mins</span>
      </div>
      <div>
        <strong className="block">Box Office:</strong>{" "}
        <span className="text-[#00fc87]">{movie.boxOffice}</span>
      </div>
      <div>
        <strong className="block">Vote Average:</strong>{" "}
        <span className="text-[#00fc87]">{movie.voteAverage} / 10</span>
      </div>
    </div>
  );
}

export function MyFooter() {
  return (
    <footer className="text-center text-white my-8 ">
      <div className="hover:text-[#00fc87] ">
        <a href=""> Designed & developed by Nguyen Vinh Hung</a>
      </div>
      <div className="hover:text-[#00fc87]">
        <i class="fa-brands fa-github"></i> <a href=""> View Code</a>
      </div>
      <div className="hover:text-[#00fc87]">
        <i class="fa-brands fa-android"></i>
        <a href=""> Developer Google Play Store</a>
      </div>
      <div className="hover:text-[#00fc87]">
        <i class="fa-brands fa-apple"></i>
        <a href=""> Developer Apple App Store</a>
      </div>
    </footer>
  );
}
