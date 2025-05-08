import React from 'react'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import '../App.css'
export default function carousel() {
  return (
    <div className='center-container p-4 b-5 bg-dark' style={{ border: '2px solid linear', padding: '10px',height: 'auto' }}>
      <div id="carouselExampleIndicators" className="carousel slide w-75 " >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner display-flex justify-content-center align-items-center flex-column w-100">
    <div className="carousel-item active ">
      <img src={img1} className="d-block w-100 "alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={img2} className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={img3} className="d-block  w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev text-success" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next text-danger" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
