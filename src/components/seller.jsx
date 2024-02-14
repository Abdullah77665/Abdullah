import React from 'react'

export default function Seller({ seller }) {
    return <>
        <div className="col-md-3">
            <div className="card Seller before" >
                <h4 className='before'></h4>
                <div className="card-body">
                    <h5 className="card-title">{seller.tital}</h5>
                    <p className='crd-5'>Rs{seller.price}</p>

                </div>
                <img src={seller.image} className="card-img-top" alt="..." />
            </div>
        </div>
    </>
}
