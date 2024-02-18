import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return <>
<Header/>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="public/image/main-1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="public/image/main-2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="public/image/main-3.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="public/image/main-4.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <button className="red-2">REORDER</button>
    </div>
    <div className='colour'>About</div>
    <p className='colour'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas temporibus reiciendis aliquam, laudantium saepe vel rerum! Beatae quas dolorum velit culpa facilis modi, veritatis quae corporis eum eos atque error.</p>
    <Footer/>
  </>



}
