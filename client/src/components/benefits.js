import React, { useState } from 'react';
import '../styles/benefits.css';

function Benefits() {
  return (
    <div id="benefits" className="d-block padding-top-7">
      <div className="title-text col-12 Tanker mx-auto text-center">
        <h2 className="pb-4"><span className="color-green">CRYPTOGOLF
          </span> IS NOT JUST<br/> ANOTHER NFT
        </h2>
      </div>
      <div className="details">
        <div className="details-first">
          <div className="details-first-title d-block d-lg-flex flex-row">
            <p className="p-2 border-right border-bottom border-top-0 border-left-0 Tanker col-12 col-lg-6 color-green details-title">BENEFITS & RARITY</p>
            <div className="p-2 border-right-0 border-bottom border-top-0 border-left-0 details-crime col-12 col-lg-6">
              <p className="Tanker color-green txt1">BLOCKCHAIN</p>
              <p className="Tanker color-white txt2">BINANCE SMART CHAIN (BSC)</p>
            </div>
          </div>
          <div className="details-first-title d-block d-lg-flex flex-row">
            <div className="p-2 border-right border-bottom-0 border-top-0 border-left-0 details-bail col-12 col-lg-6">
              <p className="Tanker color-green txt1">PUBLIC SALE 11.11.21</p>
              <p className="Tanker color-white txt2">0.05 BNB + GAS FEE</p>
            </div>
            <div className="p-2 border-right-0 border-bottom-0 border-top-0 border-left-0 details-amount col-12 col-lg-6">
              <p className="Tanker color-green txt1">TOTAL SUPPLY</p>
              <p className="Tanker color-white txt2">5,000 UNIQUELY GENERATED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="benefit color-white pt-5">
        <p className="about-description color-grey-light">We bring values and benefits to our NFT holders 
        with real world use case including but not limited to free green fees and pro shop merchandise 
        discounts with our partnered golf courses worldwide, participation in special events and tournaments 
        including our annual celebrity GOLFPUNKS tournament, online tee time bookings and a marketplace for 
        trading your NFT. Please see our Roadmap for more details.<br/><br/>
        RARITY. There are five classes of GOLGPUNKS and 
        each class has different benefits.  The classes are PRO, BREAK 70, BREAK 80, BREAK 90 and BREAK 100. 
        The PRO classes are entitled to 25%, BREAK 70 20%, BREAK 80 15%, BREAK 90 10% and BREAK 100 5% discounts 
        on green fees and pro shop merchandise purchases.  All classes have exclusive access and free entry to 
        events and tournaments. The PRO classes receive additional perks and benefits such as complimentary 
        hotel stay during events and tournaments such as the Annual Celebrity GOLFPUNKS Tournament.</p>
      </div>
    </div>
  )};

export default Benefits;