import React, { useState } from 'react';
import '../styles/roadmap.css';

function Roadmap() {
  const [roadmap, setRoadmap] = useState([
    {
      id: 1,
      percent: '10%',
      text: 'GIveaway of 20 NFTs for Discord users and Twitter followers.'
    },
    {
      id: 2,
      percent: '25%',
      text: 'Listing on Rarity.io, Lootex.io and otherBSC NFT marketplaces to provide trading and liquity.'
    },
    {
      id: 3,
      percent: '50%',
      text: "Utility token smart contract deployment and start working on Marketplace for tradings of NFT."
    },
    {
      id: 4,
      percent: '80%',
      text: "Airdrop of GOLF tokens to all NFT holders. Announcement of the date and location of our Annual Celebrity GOLFPUNKS event and tournament."
    },
    {
      id: 5,
      percent: '100%',
      text: "SOLD OUT Marketpalce goes live, start development of online tee time booking system and continue to expand our golf courses partnership worldside."
    },
  ])
  return (
    <div id="roadmap" className="d-block py-5 position-relative">
      <div className="title-text Tanker mx-auto pb-5">
        <h2 className="text-center">LOADMAP</h2>
        <p className="text-convinced color-green text-center py-2">OF OUR BRILLIANT PLAN</p>
      </div>
      {roadmap.map((item, key) => (
      <div key={ key } className="percent-step w-100">
        <div className='d-flex flex-row percent-height100'>
          <div className={ (item.id%2 == 1) ? 'd-none d-lg-block col-6 pb-5' : 'd-none' }></div>
          <div className={ (item.percent == '100%') ? ((item.id%2 == 1) ? 'left-border col-12 col-lg-6 pl-0 pr-0 pl-lg-5 position-relative' : 'right-border col-12 col-lg-6 pl-0 pr-0 pr-lg-5 position-relative') : ((item.id%2 == 1) ? 'left-border col-12 col-lg-6 pl-0 pr-0 pl-lg-5 pb-5 position-relative' : 'right-border col-12 col-lg-6 pl-0 pr-0 pr-lg-5 pb-5 position-relative')}>
            <div className="d-flex flex-row">
              <p className="percent-num Tanker color-white pr-2">
                <span className={ (item.percent == '10%') ? 'percent-text-color10' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '25%') ? 'percent-text-color25' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '50%') ? 'percent-text-color50' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '80%') ? 'percent-text-color80' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '100%') ? 'percent-text-color100' : 'd-none'}>{ item.percent }</span>
              </p>
              {/* <p className="percent-text Tanker color-white pl-4">SQUIRRELS RELEASED</p> */}
              <p className="percent-script color-grey pl-2">{ item.text }</p>
            </div>
            <div className={ (item.id%2 == 1) ? 'position-absolute loadmap-key1 d-none d-lg-block' : 'position-absolute loadmap-key2 d-none d-lg-block' }>
              <img className="key" src="./assets/images/logo1.png"/>
            </div>
          </div>
        </div>
      </div>
      ))}
      {/* <svg viewBox="0 0 160 160">
        <path d="M200,0 C200,0 100,100 100, 100 200, 300"  stroke="white"  />
      </svg> */}
      {/* <div className="d-none d-lg-flex flex-column position-absolute curve">
        <div className="first position-relative">
          <div className="position-absolute loadmap-key1">
            <img className="key" src="./assets/images/logo1.png"/>
          </div>
        </div>
        <div className="second position-relative">
          <div className="position-absolute loadmap-key2">
            <img className="key" src="./assets/images/logo1.png"/>
          </div>
        </div>
        <div className="first position-relative">
          <div className="position-absolute loadmap-key1">
            <img className="key" src="./assets/images/logo1.png"/>
          </div>
        </div>
        <div className="second position-relative">
          <div className="position-absolute loadmap-key2">
            <img className="key" src="./assets/images/logo1.png"/>
          </div>
        </div>
      </div> */}
    </div>
  )
};

export default Roadmap;