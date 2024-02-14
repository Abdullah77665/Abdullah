import Card from "./Card"
import Crd from "./Crd"
import Seller from "./Seller"
export default function Main({ product, crd, seller }) {

  return <main>
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


    <div className="card-2">
      <div className="container">
        <h4 className="line-before">Explore menu</h4>
        <div className="row">
          {
            crd.map(crd => <Crd crd={crd} />)
          }
        </div>
      </div>
    </div>
    <div className="card-5">
      <div className="container">
        <h4 className="line-before">Explore menu</h4>

        <div className="row">
          {
            seller.map(seller => <Seller seller={seller} />)
          }
        </div>
      </div>
    </div>
    <div className="card-3">
      <div className="container">
        <h4 className="line-before">TOP DEALS</h4>
        <div className="row">
          {
            product.map(product => <Card product={product} />)

          }

        </div>
      </div>
    </div>
    <div className="pick-up">
      <div className="container">
        <div className="row imgs">
          <div className="col-md-6">
            <img src="public/image/pickup-banner.01fde5a7db5ef06f7bce.png" alt="" />
          </div>
          <div className="col-md-6">
            <img src="public/image/favorites-banner.afff26bc6d0127f68baa.png" alt="" />
          </div>
          <div className="col-md-6">
            <img src="public/image/scamOrdr.6f809bf83912dd8dbe31.jpg" alt="" />
          </div>
          <div className="col-md-6 center">
            <img src="public/image/side-card.png" alt="" />
            <h4>Adding 11 herbs and spices, Explore our menu and add items to your cart.</h4>
            <button>EXPLORE MENU</button>
          </div>
        </div>
      </div>
    </div>
  </main>
}