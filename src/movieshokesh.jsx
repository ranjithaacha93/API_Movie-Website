import './movieshokesh.css';
import { IoCloseCircleSharp } from "react-icons/io5";
import picone from './images/pic-1.jpg'
import pictow from './images/pic-2.jfif'
import picthree from './images/pic-3.jpg'
import picfove from './images/pic-4.jfif'
import picfive from './images/pic-5.jpg'
import picsix from './images/pic-6.webp'
import picseven from './images/pic-7.jpg'
import piceait from './images/pic-8.jpg'
import picnain from './images/pic-9.jfif'

export default function Sokesh({ setshokesh, movie }) {
    if (!movie) return null;

    return (
        <>
            <div className="shokesh">
                <div className="close">
                    <span onClick={() => setshokesh(false)}>
                        <IoCloseCircleSharp />
                    </span>
                </div>
                <div className="flex">
                    <div className="left">
                        <div className="path-poster">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{movie.title}</h1>
                        <p><strong>Popularity : </strong> {movie.popularity}</p>
                        <p>{movie.overview}</p>
                        <div className="cast">
                            <img src={picone} alt="actor"/>
                            <img src={pictow} alt="actor"/>
                            <img src={picthree} alt="actor"/>
                            <img src={picfove} alt="actor"/>
                            <img src={picfive} alt="actor"/>
                            <img src={picsix} alt="actor"/>
                            <img src={picseven} alt="actor"/>
                            <img src={piceait} alt="actor"/>
                            <img src={picnain} alt="actor"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
