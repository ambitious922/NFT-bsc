import React, { useState } from 'react';
import '../styles/roadmap.css';

function Roadmap() {
  const [roadmap, setRoadmap] = useState([
    {
      id: 1,
      percent: '10%',
      text: 'Giveaway of 20 NFTs for Discord users and Twitter followers.'
    },
    {
      id: 2,
      percent: '25%',
      text: 'Listing on Rarity.io, Lootex.io and other BSC NFT marketplaces to provide trading and liquity.'
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
    <div id="roadmap" className="d-block pt-5 position-relative">
      <div className="title-text Tanker mx-auto">
        <h2 className="text-center">ROADMAP</h2>
        <p className="text-convinced color-green text-center py-2">OF OUR BRILLIANT PLAN</p>
      </div>
      {roadmap.map((item, key) => (
      <div key={ key } className="percent-step w-100">
        <div className='d-flex flex-row percent-height100'>
          <div className={ (item.id%2 === 1) ? 'd-none d-lg-block col-6 pb-5' : 'd-none' }></div>
          <div className={ (item.percent === '100%') ? ((item.percent === '10%') ? ((item.id%2 === 1) ? 'col-12 col-lg-6 pl-0 pr-0 pl-lg-5 pb-5 position-relative pt-5' : 'pt-5 col-12 col-lg-6 pl-0 pr-0 pr-lg-5 pb-5 position-relative') : ((item.id%2 === 1) ? 'col-12 col-lg-6 pl-0 pr-0 pl-lg-5 pb-5 position-relative' : 'col-12 col-lg-6 pl-0 pr-0 pr-lg-5 pb-5 position-relative')) : ((item.percent === '10%') ? ((item.id%2 === 1) ? 'left-border col-12 col-lg-6 pl-0 pr-0 pl-lg-5 pb-5 position-relative pt-5' : 'pt-5 right-border col-12 col-lg-6 pl-0 pr-0 pr-lg-5 pb-5 position-relative') : ((item.id%2 === 1) ? 'left-border col-12 col-lg-6 pl-0 pr-0 pl-lg-5 pb-5 position-relative' : 'right-border col-12 col-lg-6 pl-0 pr-0 pr-lg-5 pb-5 position-relative'))}>
            <div className="d-flex flex-row">
              <p className="percent-num Tanker color-white pr-2">
                <span className={ (item.percent === '10%') ? 'percent-text-color10' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent === '25%') ? 'percent-text-color25' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent === '50%') ? 'percent-text-color50' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent === '80%') ? 'percent-text-color80' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent === '100%') ? 'percent-text-color100' : 'd-none'}>{ item.percent }</span>
              </p>
              <p className="percent-script color-grey pl-2">{ item.text }</p>
            </div>
            <div className={ (item.percent === '10%') ? ((item.id%2 === 1) ? 'position-absolute loadmap-key1 d-none d-lg-block translateY1' : 'translateY1 position-absolute loadmap-key2 d-none d-lg-block') : ((item.id%2 === 1) ? 'position-absolute loadmap-key1 d-none d-lg-block' : 'position-absolute loadmap-key2 d-none d-lg-block') }>
              <img className="key" src="./assets/images/logo1.png" alt="img"/>
            </div>
          </div>
        </div>
      </div>
      ))}
      <div className="color-white roadmap-description text-center"><p className="text-center pb-2"><span className="color-green">GOLFCHICKS</span> will be free<br/> to mint for all <span className="color-green">GOLFPUNKS</span><br/> holders after sell out.</p> 
      Future utility includes breeding for <span className="color-green">CRYPTOKIDS</span></div>
    </div>
  )
};

export default Roadmap;