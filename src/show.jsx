import { useEffect, useState } from 'react';
import './show.css';
import { IoCloseCircleSharp } from "react-icons/io5";

export default function Show({ setwatch, movieId }) {
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=323e3fe5a8237f5319c4b400fb4bd2d9&language=en-US`
                );
                const data = await response.json();
                const trailer = data.results.find(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );
                if (trailer) {
                    setVideoKey(trailer.key);
                }
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };

        if (movieId) {
            fetchTrailer();
        }
    }, [movieId]);

    return (
        <div className="show">
            <div className="show-box">
                <div className='close'>
                    <span><IoCloseCircleSharp onClick={() => setwatch(false)} /></span>
                </div>
                {videoKey ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p>Loading trailer...</p>
                )}
            </div>
        </div>
    );
}
