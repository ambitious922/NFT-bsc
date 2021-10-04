import React from 'react';
import '../styles/tail.css';

function Tail() {
  return (
  <div id="benefits" className="padding-bottom-20">
    <div className="d-block bg-white p-4 tail-content position-relative">
      <div className="d-block d-lg-flex flex-row color-grey-weight tail-top pb-4">
        <div className="tail-title Tanker col-12 col-lg-6">TAIL / TRAIT MECHANIC</div>
        <div className="tail-content col-12 col-lg-6">Tail / Trait is one of the two unique Convicted Squirrels NFT mechanics. Everyone knows squirrel tails grow based on their traits. As a result an intricate squirrel class system has emerged:</div>
      </div>
      <div className="position-relative w-100">
        <img className="w-100" src="./assets/images/line11.png"/>
        <div className="position-absolute tail-squirrels Tanker"><span className="color-green">10.000</span>SQUIRRELS</div>
        <div className="position-absolute top-11 w-100">
          <div className="d-flex flex-row">
            <div className="col-4 px-1 px-md-2 px-lg-3 px-xl-5 text-center Tanker">
              <img className="w-100" src="./assets/images/golf-1.png"/>
              <p className="color-grey-light shorties-text">SHORTIES</p>
              <p className="color-green trait-text">0-1 TRAIT</p>
            </div>
            <div className="col-4 px-1 px-md-2 px-lg-3 px-xl-5 text-center Tanker">
              <img className="w-100" src="./assets/images/golf-2.png"/>
              <p className="color-grey-light shorties-text">NOMIES</p>
              <p className="color-green trait-text">2-4 TRAIT</p>
            </div>
            <div className="col-4 px-1 px-md-2 px-lg-3 px-xl-5 text-center Tanker">
              <img className="w-100" src="./assets/images/golf-3.png"/>
              <p className="color-grey-light shorties-text">BIG BOIS</p>
              <p className="color-green trait-text">5+ TRAIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Tail;