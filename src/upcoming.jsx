import { useEffect, useState } from 'react';
import './upcoming.css';
import Shokesh from './movieshokesh';

export default function Upcoming({shokesh , setshokesh}) {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchUpcomingMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&language=en-US&page=5`);
            const data = await response.json();
            setUpcomingMovies(data.results || []);
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    };

    useEffect(() => {
        fetchUpcomingMovies();
    }, []);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        setshokesh(true);
    };

    return (
        <>
        <div className="upcoming">
            <h1>Upcoming</h1>
            <div className="upflex">
                {upcomingMovies.map((movie, index) => (
                    <div key={movie.id || index} className="upcome" onClick={() => handleMovieClick(movie)}>
                        <div className='img'>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                        <div>
                            <p>Up Coming </p>
                        </div>
                        </div>
                        <h3>{movie.title}</h3>
                        <p>Release Date: {movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>

        {shokesh && <Shokesh setshokesh={setshokesh} movie={selectedMovie} />}
        </>
    );
}
