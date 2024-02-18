import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return<>
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

  <div className="colour"> Contact</div>
  <p className='colour'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti amet explicabo suscipit ullam, numquam, quia omnis molestias doloribus magni assumenda, labore voluptate unde necessitatibus error est dolorem provident laboriosam sit quaerat nobis recusandae? Non explicabo reiciendis accusantium ab error? Quisquam laudantium temporibus cumque dicta quibusdam tempora facere laborum eveniet deleniti!</p>
  <Footer/>
  </>
}
