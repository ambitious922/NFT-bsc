import React from 'react';
import '../styles/rarity.css';

function Rarity() {
  return (
  <div id="rarity">
    <div className="benefit color-white pt-5">
      <div className="title-text col-12 Tanker mx-auto text-center">
        <h2 className="pb-4">RARITY</h2>
      </div>
        <p className="rarity-summary Tanker pb-3">There are five tiers and each tier has different benefits.NFT owners have exclusive licenses to use, copy, and display their purchased NFT for personal or commercial use. Ownership and rights are transferred to the current holder of the NFT.</p>
          <ol>
            <li className="about-description color-grey-light py-1"><strong className="color-green">TIER 1 NFT holders</strong> are entitled to 5% discounts on gree fees at our partnered golf courses worldwide and pro shop merchandise perchases. Free entry to special events and tournaments.</li>
            <li className="about-description color-grey-light py-1"><strong className="color-green">TIER 2 NFT holders</strong> are entitled to 10% discounts on gree fees at our partnered golf courses worldwide and pro shop merchandise perchases. Free entry to special events and tournaments.</li>
            <li className="about-description color-grey-light py-1"><strong className="color-green">TIER 3 NFT holders</strong> are entitled to 15% discounts on gree fees at our partnered golf courses worldwide and pro shop merchandise perchases. Free entry to special events and tournaments.</li>
            <li className="about-description color-grey-light py-1"><strong className="color-green">TIER 4 NFT holders</strong> are entitled to 20% discounts on gree fees at our partnered golf courses worldwide and pro shop merchandise perchases. Free entry to special events and tournaments.</li>
            <li className="about-description color-grey-light py-1"><strong className="color-green">TIER 5 NFT holders</strong> are entitled to free unlimited green fees at our partnered golf courses worldwide and pro shop merchandise perchases. Free entry to special events and tournaments.</li>
          </ol>
        <p className="rarity-summary Tanker">Up to three nights complimentary hotel stay during participation in our worldwide annual celebrity Colf Punks Tournaments.</p>
      </div>
    {/* <div className="d-block bg-white p-4 tail-content position-relative">
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
    </div> */}
  </div>
  )
};

export default Rarity;