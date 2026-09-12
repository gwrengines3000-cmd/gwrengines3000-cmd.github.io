import {useState} from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = () => {
    const [initialRating, setInitialRating] = useState(0);

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <span key={index} onClick={() => setInitialRating(ratingValue)}>
                        {initialRating >= ratingValue ? <FaStar /> : <FaRegStar />}
                    </span>
                );
            }
        )}
        </div>

    );
}
export default StarRating;