import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "./EventVideo.css";

import event1 from "../assets/videos/event1.mp4";
import event2 from "../assets/videos/event2.mp4";
import event3 from "../assets/videos/event3.mp4";
import event4 from "../assets/videos/event4.mp4";
import event5 from "../assets/videos/event5.mp4";
import event6 from "../assets/videos/event6.mp4";
import event7 from "../assets/videos/event7.mp4";


const videos = [
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7
];


function EventVideo() {

  const featuredVideoRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        const video = featuredVideoRef.current;

        if (!video) return;

        if (selectedVideo !== null) {
            video.pause();
        } else {
            video.play().catch(() => {});
        }
    }, [selectedVideo]);


  return (
    <section className="event-video">


      {/* Featured Video */}

      <div 
        className="video-container"
        data-aos="fade-up"
      >

        <video
          ref={featuredVideoRef}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={event1} type="video/mp4" />
        </video>


        <div className="video-shade"></div>


        <div className="video-content">

          <h2>
            Creating Unforgettable Moments
          </h2>

          <p>
            Every celebration deserves a story.
          </p>

        </div>

      </div>


      <div className="video-gallery-header">
        <h3>More Event Highlights</h3>
        <p>
            Browse more unforgettable moments from weddings, birthdays, corporate events and celebrations.
        </p>
      </div>

      
      {/* Gallery */}

      <div className="videos-grid">

        {videos.slice(1).map((video,index)=>(

          <div
            className="video-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            onClick={() => setSelectedVideo(index + 1)}
          >

            <video
              src={video}
              muted
              playsInline
            />

            <div className="video-play">
              ▶️
            </div>


          </div>

        ))}


      </div>



      {/* FULLSCREEN VIEWER */}

      {selectedVideo !== null && (

        <div className="video-modal">


          <button
            className="close-video"
            onClick={() =>
              setSelectedVideo(null)
            }
          >
            ✕
          </button>


          <video
            src={videos[selectedVideo]}
            controls
            autoPlay
          />



          <button
            className="prev-video"
            onClick={() =>
              setSelectedVideo(
                selectedVideo === 0
                ? videos.length - 1
                : selectedVideo - 1
              )
            }
          >
            ‹
          </button>



          <button
            className="next-video"
            onClick={() =>
              setSelectedVideo(
                selectedVideo === videos.length - 1
                ? 0
                : selectedVideo + 1
              )
            }
          >
            ›
          </button>


        </div>

      )}


    </section>
  );
}


export default EventVideo;