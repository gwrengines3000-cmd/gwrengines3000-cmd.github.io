import { FaStar, FaRegStar } from 'react-icons/fa'

const StarRating = ({ rating, color }) => {

    const [initialRating, setInitialRating] = useState(rating);
    const displayRating = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= initialRating) {
                stars.push(<FaStar key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
        }
        return stars;
    }
}

export default StarRating