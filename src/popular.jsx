import { useEffect, useState } from 'react';
import './popular.css';
import Sokesh from './movieshokesh';

export default function Popular({ shokesh, setshokesh }) {
    const [popularMovies, setPopularMovies] = useState([]);
    const [popular, setPopular] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchPopularMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=497f7ef199938587c9594677b97818f2&page=2&language=en-US`);
            const data = await response.json();
            setPopularMovies(data.results || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const PopularMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=497f7ef199938587c9594677b97818f2&page=3&language=en-US`);
            const data = await response.json();
            setPopular(data.results || []);
            console.log(data.results )
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
        PopularMovies();
    }, []);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setshokesh(true);
    };

    return (
        <>
            <div className="popular">
                <h1>Popular Movies</h1>
                <div className="popin">
                    {popularMovies.map((movie) => (
                        movie && (
                            <div key={movie.id} className="pop" onClick={() => handleMovieClick(movie)}>
                                <div className='hov'>
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    </div>
                                    <h3>{movie.title}</h3>
                                    <p>Release Date: {movie.release_date}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <div className="popin">
                    {popular.map((mov) => (
                        mov && (
                            <div key={mov.id} className="pop" onClick={() => handleMovieClick(mov)}>
                                <div className='hov'>
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt={mov.title} />
                                    </div>
                                    <h3>{mov.title}</h3>
                                    <p>Release Date: {mov.release_date}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>

            {shokesh && <Sokesh setshokesh={setshokesh} movie={selectedMovie} />}
        </>
    );
}
