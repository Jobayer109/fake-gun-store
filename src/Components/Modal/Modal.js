import React from "react";

const Modal = ({ data, setModalData }) => {
  //   const { action, bullet, capacity, category, id, img, name, price } = data;
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img className="h-44 w-44" src={data.img} alt="" />
          <h3 className="font-bold text-lg">{data.name}</h3>
          <p className="py-4">Action: {data.action}</p>
          <p className="py-4">Category: {data.category}</p>
          <p className="py-4">Bullet: {data.bullet}</p>
          <p className="py-4">Price: $ {data.price}</p>
          <div className="modal-action">
            <label
              onClick={() => setModalData(null)}
              htmlFor="my-modal-6"
              className="btn btn-sm bg-blue-700"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
