import {FaStar} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './style.css'

const imageUrl = import.meta.env.VITE_IMG;

export function MovieCard({movie, showLink = true}){
    return(
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>

            {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
        </div>
    )
}
