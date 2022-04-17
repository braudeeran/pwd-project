import { useEffect, useState } from "react";
import "./Rating.css";

interface RatingCardProps {
    rating: any;
}

function Rating(props: RatingCardProps): JSX.Element {

const [stars, setStars] = useState<string>('');

const rate = Math.round(props.rating);
console.log(rate);


useEffect(() => {

    let stars:string = '';
    for (let i = 0; i < rate; i++){
        stars += '⭐';
    }
    console.log(stars);
    setStars(stars);

}, []);


    return (
        <div className="Rating">
			{Math.round(rate)}
            {stars}
        </div>
    );
}

export default Rating;
