import React from "react"
import "./index.scss"

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text-container">
          <h1>Newly Brinded</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
            risus nulla. Nam sem ante, feugiat eget tincidunt ac, finibus a
            sapien. Pellentesque convallis risus id ante cursus, sed accumsan
            ante laoreet.
          </div>
          <button>Read More</button>
        </div>
        <div className="hero-image-container">
          <div className="image">Image Goes Here</div>
        </div>
      </div>
      <div className="custom-shape-divider-top-1612459004">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  )
}

export default Hero
