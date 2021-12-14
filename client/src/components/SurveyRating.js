import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios';

const SurveyRating = () => {
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);

    const [hover1, setHover1] = useState(0);
    const [hover2, setHover2] = useState(0);
    const [hover3, setHover3] = useState(0);
    const [hover4, setHover4] = useState(0);
    const [hover5, setHover5] = useState(0);

    const [ratingSleep, setRatingSleep] = useState(0);
    const [ratingSocial, setRatingSocial] = useState(0);
    const [ratingFood, setRatingFood] = useState(0);
    const [ratingSport, setRatingSport] = useState(0);
    const [ratingWork, setRatingWork] = useState(0);

    //create button handle 
    const handleAddSurvey = (e) => {
        e.preventDefault(e);
        axios
            .post('/addSurvey', {ratingSleep, ratingSocial, ratingFood, ratingSport, ratingWork})
            //each time button clicked, info sent to server (/addMood)
            .then((response) => {
            })
        
    }


    return (
        <>
            <h1>Let's reflect on your last week!</h1>
            <div className="mood-rating">
                <p>How would you rate your sleep quality? </p>
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
                            className={index <= (hover1 || rating1) ? "on" : "off"}
                            onClick={scoreHandler}
                            onMouseEnter={() => setHover1(index)}
                            onMouseLeave={() => setHover1(rating1)}
                        >
                            <span className="square">&#9786;</span>
                        </button>

                    );
                })}
            </div>

            <div className="mood-rating">
                <p>How would you rate the quality of your social interactions? </p>
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
                            className={index <= (hover2 || rating2) ? "on" : "off"}
                            onClick={scoreHandler}
                            onMouseEnter={() => setHover2(index)}
                            onMouseLeave={() => setHover2(rating2)}
                        >
                            <span className="square">&#9786;</span>
                        </button>
                    );
                })}
            </div>

            <div className="mood-rating">
                <p>How would you rate your nutrition quality? Did you eat healthy? </p>
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
                            className={index <= (hover3 || rating3) ? "on" : "off"}
                            onClick={scoreHandler}
                            onMouseEnter={() => setHover3(index)}
                            onMouseLeave={() => setHover3(rating3)}
                        >
                            <span className="square">&#9786;</span>
                        </button>
                    );
                })}
            </div>

            <div className="mood-rating">
                <p>How would you rate your physical activity? Did you do enough sport? </p>
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
                            className={index <= (hover4 || rating4) ? "on" : "off"}
                            onClick={scoreHandler}
                            onMouseEnter={() => setHover4(index)}
                            onMouseLeave={() => setHover4(rating4)}
                        >
                            <span className="square">&#9786;</span>
                        </button>
                    );
                })}
            </div>

            <div className="mood-rating">
                <p>How would you rate your professional achievements ? </p>
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
                            className={index <= (hover5 || rating5) ? "on" : "off"}
                            onClick={scoreHandler}
                            onMouseEnter={() => setHover5(index)}
                            onMouseLeave={() => setHover5(rating5)}
                        >
                            <span className="square">&#9786;</span>
                        </button>
                    );
                })}
                <Link to='/journal'>
                    <Button onClick={handleAddSurvey}>
                        Continue
                    </Button>
                </Link>
            </div>
        </>
    )
};

export default SurveyRating;