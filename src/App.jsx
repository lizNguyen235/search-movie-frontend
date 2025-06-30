import tmdbLogo from "./assets/tmdb.svg";
import { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";
// Khởi tạo movie instance dùng đúng tên thuộc tính
function App() {
  return <MyBody />;
}
export default App;
export function MyBody() {
  const movies = useContext(MovieContext);
  const [chooseIndex, setChooseIndex] = useState(0);
  const movie = movies[chooseIndex]; // Assuming you want to display the first movie for
  return (
    <div
      className="bg-cover min-h-screen"
      style={{ backgroundImage: `url(${movie.backgroundImage})` }}
    >
      <MyOuterContainer setChooseIndex={{ chooseIndex, setChooseIndex }} />
    </div>
  );
}

export function MyOuterContainer({ setChooseIndex }) {
  return (
    <div className="flex flex-row justify-center my-fade min-h-screen px-4">
      <MyContainer setChooseIndex={setChooseIndex} />
    </div>
  );
}

export function MyContainer({ setChooseIndex }) {
  return (
    <div className="my-8">
      <MyColumn setChooseIndex={setChooseIndex} />
    </div>
  );
}

export function MyColumn({ setChooseIndex }) {
  return (
    <div className="h-full">
      <MyContent setChooseIndex={setChooseIndex} />
    </div>
  );
}

export function MyContent({ setChooseIndex }) {
  return (
    <div className="">
      <MyRowTitleContent setChooseIndex={setChooseIndex.setChooseIndex} />
      <MyMovie choose={setChooseIndex.chooseIndex} />
      <MyFooter />
    </div>
  );
}

export function MyRowTitleContent({ setChooseIndex }) {
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState([]);
  function handleSearch(e) {
    setIsSearching(true);
    const searchQuery = e.target.value.trim().toLowerCase();
    if (searchQuery) {
      // Simulate a search result
      setQuery([
        { title: "Avengers: Endgame", id: 0 },
        { title: "Avengers: Infinity War", id: 1 },
        { title: "Avengers: Age of Ultron", id: 2 },
      ]);
    } else {
      setQuery([]);
      setIsSearching(false);
    }
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center ">
      <div className="w-40 ">
        <img src={tmdbLogo} alt="TMDB Logo" />
      </div>
      <div className="md:w-[530px] w-full relative">
        <input
          className="hover:outline-none outline-none text-white w-full border-b-1"
          placeholder="Search Movie..."
          onChange={handleSearch}
        />
        {isSearching && (
          <SearchResult results={query} chooseClick={setChooseIndex} />
        )}
      </div>
    </div>
  );
}

function SearchResult({ results, chooseClick }) {
  return (
    <div className="bg-black/50 text-white  mt-2 absolute w-full">
      {results.length > 0 ? (
        results.map((item) => (
          <div
            key={item.id}
            onClick={() => chooseClick(item.id)}
            className="p-2 hover:bg-[#00fc87] hover:text-black cursor-pointer"
          >
            {item.title}
          </div>
        ))
      ) : (
        <div className="p-2">No results found</div>
      )}
    </div>
  );
}

export function MyMovie({ choose }) {
  const movies = useContext(MovieContext);
  const movie = movies[choose]; // Assuming you want to display the first movie for now
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
      <MyDetailInfo movie={movie} />
    </div>
  );
}

export function MyDetailInfo({ movie }) {
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
