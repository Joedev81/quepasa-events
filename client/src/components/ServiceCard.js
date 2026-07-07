import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import "./ServiceCard.css";

function ServiceCard({ service }) {

    const [currentImage, setCurrentImage] = useState(0);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {

        const interval = setInterval(() => {

            setCurrentImage((prev) =>
                (prev + 1) % service.images.length
            );

        }, 4000);


        return () => clearInterval(interval);

    }, [service.images.length]);


    return (

        <>

            <div className="service-card">

                <div className="service-image">

                    <img
                        src={service.images[currentImage]}
                        alt={service.title}
                    />

                </div>


                <h3>{service.title}</h3>

                <p>{service.description}</p>


                <button
                    className="explore-btn"
                    onClick={() => setShowModal(true)}
                >
                    Explore
                </button>


            </div>



            {showModal && (

                <ImageModal

                    title={service.title}

                    images={service.images}

                    close={() => setShowModal(false)}

                />

            )}

        </>

    );

}


export default ServiceCard;