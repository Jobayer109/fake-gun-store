import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = ({ gun, addToCart }) => {
  const [modalData, setModalData] = useState({});
  const { action, bullet, capacity, category, id, img, name, price } = gun;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-44 w-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">
            {name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, labore.
          </p>
          <div className="card-actions">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">Bullet: {bullet}</div>
            <div>
              <button onClick={() => addToCart()} className="btn btn-sm mr-3 bg-red-600">
                Buy Now
              </button>
               <label onClick={()=> setModalData(gun)} htmlFor="my-modal-6" className="btn modal-button btn-sm bg-green-600">
                Details
              </label>
            </div>
          </div>
          {
            modalData && <Modal data={modalData} setModalData={setModalData}></Modal>
         }
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
