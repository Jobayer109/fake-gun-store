import React, { useEffect, useState } from "react";
import SingleGun from "../SingleGun/SingleGun";

const Guns = ({addToCart}) => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch(`data.json`).then((res) => res.json().then((data) => setGuns(data)));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold mt-4 text-center">
        Welcome to <span className="text-orange-600 font-extrabold">Fake Gun Store</span>
      </h1>
      <p className="mt-2 font-thin text-xs text-center">
        Lorem ipsum, dolor sit your consectetur . dolor sit your consectetur dolor sit your
        consectetur hi hello hello eli t. .
          </p>
          <div className="grid grid-cols-3 gap-10 mt-6 mx-auto w-[90%] ">
          {
               guns.map(gun => <SingleGun key={gun.id} gun={gun} addToCart={addToCart}></SingleGun>)
         }
        </div>
    </div>
  );
};

export default Guns;
