import React from "react";
import "./ServiceCard.css";


function ImageModal({ title, images, close }) {


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


                <div className="modal-gallery">

                    {
                        images.map((img, index) => (

                            <img
                                key={index}
                                src={img}
                                alt={title}
                            />

                        ))
                    }

                </div>


            </div>


        </div>

    );

}


export default ImageModal;