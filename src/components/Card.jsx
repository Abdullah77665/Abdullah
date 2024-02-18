


export default function Card({ product }) {
  return <>
    <div className="col-md-3">
      <div className="card crd-3 before" >
        <h4 className='before'></h4>
        <i className="bi bi-suit-heart ms-auto"></i>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p>{product.description}</p>
          <p>Rs{product.price}</p>
          <button>+{product.button}</button>
        </div>
      </div>
    </div>
  </>


}
