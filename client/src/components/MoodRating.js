import React, { useState } from 'react'

const MoodRating = () => {
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);

    const [hover, setHover] = useState(0);

    const [ratingSleep, setRatingSleep] = useState(0);
    const [ratingSocial, setRatingSocial] = useState(0);
    const [ratingFood, setRatingFood] = useState(0);
    const [ratingSport, setRatingSport] = useState(0);
    const [ratingWork, setRatingWork] = useState(0);

    console.log(ratingSleep, ratingSocial, ratingFood, ratingSport, ratingWork)
   
    return (
        <>
        <div className="mood-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                const scoreHandler = () => {
                    setRating1(index)
                    setRatingSleep(index)
                   
                }
                
                return (
                    <button
                        id="mood-button"
                        type="button"
                        key={index}
                        className={index <= (hover || rating1) ? "on" : "off"}
                        onClick={scoreHandler}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating1)}
                    >
                        <span className="square">&#9786;</span>
                    </button>
                );
            })}
        </div>
        
        <div className="mood-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                const scoreHandler = () => {
                    setRating2(index)
                    setRatingSocial(index)
                
                }
                
                return (
                    <button
                        id="mood-button"
                        type="button"
                        key={index}
                        className={index <= (hover || rating2) ? "on" : "off"}
                        onClick={scoreHandler}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating2)}
                    >
                        <span className="square">&#9786;</span>
                    </button>
                );
            })}
        </div>

        <div className="mood-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                const scoreHandler = () => {
                    setRating3(index)
                    setRatingFood(index)
                }
                
                return (
                    <button
                        id="mood-button"
                        type="button"
                        key={index}
                        className={index <= (hover || rating3) ? "on" : "off"}
                        onClick={scoreHandler}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating3)}
                    >
                        <span className="square">&#9786;</span>
                    </button>
                );
            })}
        </div>

        <div className="mood-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                const scoreHandler = () => {
                    setRating4(index)
                    setRatingSport(index)
                }
                
                return (
                    <button
                        id="mood-button"
                        type="button"
                        key={index}
                        className={index <= (hover || rating4) ? "on" : "off"}
                        onClick={scoreHandler}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating4)}
                    >
                        <span className="square">&#9786;</span>
                    </button>
                );
            })}
        </div>

        <div className="mood-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                const scoreHandler = () => {
                    setRating5(index)
                    setRatingWork(index)
                }
                
                return (
                    <button
                        id="mood-button"
                        type="button"
                        key={index}
                        className={index <= (hover || rating5) ? "on" : "off"}
                        onClick={scoreHandler}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating5)}
                    >
                        <span className="square">&#9786;</span>
                    </button>
                );
            })}
        </div>
        </>
    )};

export default MoodRating;