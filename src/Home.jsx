import { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoIosPlay } from "react-icons/io";

export default function Home({ setwatch, setSelectedMovieId }) {
    const [movies, setMovies] = useState([]);
    const [logos, setLogos] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [show , setshow] = useState({});

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&page=10&language=en-US`);
            const data = await response.json();

            if (data.results) {
                setMovies(data.results);
                fetchAllLogos(data.results);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const fetchAllLogos = async (movieList) => {
        const logoMap = {};
        for (const movie of movieList) {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=323e3fe5a8237f5319c4b400fb4bd2d9`);
                const data = await res.json();
                const englishLogo = data.logos.find(logo => logo.iso_639_1 === 'en');
                if (englishLogo) {
                    logoMap[movie.id] = `https://image.tmdb.org/t/p/original${englishLogo.file_path}`;
                }
            } catch (error) {
                console.error(`Error fetching logo for movie ID ${movie.id}:`, error);
            }
        }
        setLogos(logoMap);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if (movies.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [movies]);

    return (
        <>
        <div className="home">
            {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <div
                        key={movie.id}
                        className={`homeIn ${index === currentIndex ? "active" : ""}`}
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
                        }} onClick={()=>{setSelectedMovieId(movie.id);setwatch(true)}}
                    >
                        <div className="shadow">
                            <div className='contact'>
                                <div>
                                {logos[movie.id] ? (
                                    <img src={logos[movie.id]} alt={movie.title} />
                                ) : (
                                    <h1>{movie.title}</h1>
                                )}
                                </div>
                                <p className='p1'>{movie.overview}</p>
                                <p>
                                    <span>vote_count : {movie.vote_count}</span> | {" "}
                                    <span>vote_average : {movie.vote_average}</span>
                                </p>
                                <button className='btn1' onClick={()=>{setSelectedMovieId(movie.id);setwatch(true)}}> <span className='icon'><IoIosPlay /></span> Watch </button>
                                <button className='btn2'> <span className='icon'><FaPlus/></span> Add List </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading movies...</p>
            )}
        </div>
        </>
    );
}
