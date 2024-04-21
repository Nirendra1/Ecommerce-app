import React from "react";
import "./Offer.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {

    return (
        <>
            <div className="offers">
                <div className="offers-left">
                    <h1>Exclusive</h1>
                    <h2>Offer For You</h2>
                    <p>ONLY ON BEST SELLERS PRODUCT</p>
                    <button>Check Now</button>
                </div>

                <div className="offers-right">

                    <img src={exclusive_image} alt="" />

                </div>
            </div>
        </>
    )
}

export default Offer;