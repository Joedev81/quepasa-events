import React, { useState } from "react";
import "./ImageModal.css";

function ImageModal({ title, images, close }) {

    const [current, setCurrent] = useState(0);


    const nextImage = () => {

        setCurrent((prev) =>
            (prev + 1) % images.length
        );

    };


    const previousImage = () => {

        setCurrent((prev) =>
            (prev - 1 + images.length) % images.length
        );

    };


    return (

        <div className="modal-overlay">


            <div className="image-modal">


                <button 
                    className="close-btn"
                    onClick={close}
                >
                    ×
                </button>



                <h2>{title}</h2>



                <div className="viewer">


                    <button
                        className="nav-btn left"
                        onClick={previousImage}
                    >
                        ❮
                    </button>



                    <img
                        src={images[current]}
                        alt={title}
                    />



                    <button
                        className="nav-btn right"
                        onClick={nextImage}
                    >
                        ❯
                    </button>


                </div>



                <p className="counter">

                    {current + 1} / {images.length}

                </p>



            </div>


        </div>

    );

}


export default ImageModal;