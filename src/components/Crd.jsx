import React from 'react'

export default function Crd({ crd }) {
    return <>


        <div className="col-md-3">
            <div className="crd" >

                <img src={crd.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{crd.tital}</h5>

                </div>
            </div>
        </div>
    </>
}
