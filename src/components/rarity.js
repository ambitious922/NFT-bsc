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
  </div>
  )
};

export default Rarity;