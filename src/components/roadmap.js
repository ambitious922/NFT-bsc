import React, { useState } from 'react';
import '../styles/roadmap.css';

function Roadmap() {
  const [roadmap, setRoadmap] = useState([
    {
      id: 1,
      percent: '20%',
      text: 'With the bail program moving along as planned the squirrel syndicate will airdrop five infamous bosses to some lucky squirrel holders'
    },
    {
      id: 2,
      percent: '33%',
      text: 'To prove their pure intentions the Squirrel Syndicate will donate 4ETH to a lucky squirrel related charity'
    },
    {
      id: 3,
      percent: '50%',
      text: "With half the syndicate members back on the streets it's time to start sweeping the floors. 5ETH will be used to buy squirrels at floor prices on Opensea."
    },
    {
      id: 4,
      percent: '80%',
      text: "Freedom looms for all Squirrel Syndicate members. It's time to pool together our nuts into a big liquidity pool."
    },
    {
      id: 5,
      percent: '100%',
      text: "Justice was served! All of the squirrels are back on the streets involved in completely legitimate businesses. To give back to the community Convicted Squirrels introduces it's second unique NFT mechanic: Sharing The Soap. Each month some lucky squirrel holders will receive a cut of the monthly sales volume."
    },
  ])
  return (
    <div id="roadmap" className="d-block py-5 position-relative">
      <div className="title-text Tanker mx-auto pb-5">
        <h2 className="text-center">LOADMAP</h2>
        <p className="text-convinced color-green text-center py-2">OF OUR BRILLIANT PLAN</p>
      </div>
      {roadmap.map((item, key) => (
      <div key={ key } className="percent-step w-100 pb-5">
        <div className={ (item.percent == '100%') ? 'd-none' : 'd-flex flex-row'}>
          <div className={ (item.id%2 == 1) ? 'd-none d-lg-block col-6' : 'd-none' }></div>
          <div className={ (item.id%2 == 1) ? 'col-12 col-lg-6 pl-0 pr-0 pl-lg-5' : 'col-12 col-lg-6 pl-0 pr-0 pr-lg-5'}>
            <div className="percent-square d-flex flex-row">
              <p className="percent-num Tanker color-white pr-4">
                <span className={ (item.percent == '20%') ? 'percent-text-color20' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '33%') ? 'percent-text-color33' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '50%') ? 'percent-text-color50' : 'd-none'}>{ item.percent }</span>
                <span className={ (item.percent == '80%') ? 'percent-text-color80' : 'd-none'}>{ item.percent }</span>
              </p>
              <p className="percent-text Tanker color-white pl-4">SQUIRRELS RELEASED</p>
            </div>
            <p className="percent-script color-grey pt-4">{ item.text }</p>
          </div>
        </div>
        <div className={ (item.percent == '100%') ? 'd-block' : 'd-none'}>
          <div className='text-center'>
            <img className="w-75" src="./assets/images/chains.svg"/>
            <div className='text-center'>
              <p className="you-did-it Tanker color-green py-3">YOU DID IT!</p>
              <p className="full-percent Tanker color-green">{ item.percent } SQUIRRELS <br/><span className="color-white">MADE BAIL!</span></p>
              <p className="full-percent-text color-grey">{ item.text }</p>
            </div>
          </div>
        </div>
      </div>
      ))}
      {/* <svg viewBox="0 0 160 160">
        <path d="M200,0 C200,0 100,100 100, 100 200, 300"  stroke="white"  />
      </svg> */}
      <div className="d-none d-lg-flex flex-column position-absolute curve">
        <div className="first position-relative">
          <div className="position-absolute loadmap-key1">
            <img className="key" src="./assets/images/key.svg"/>
          </div>
        </div>
        <div className="second position-relative">
          <div className="position-absolute loadmap-key2">
            <img className="key" src="./assets/images/key.svg"/>
          </div>
        </div>
        <div className="first position-relative">
          <div className="position-absolute loadmap-key1">
            <img className="key" src="./assets/images/key.svg"/>
          </div>
        </div>
        <div className="second position-relative">
          <div className="position-absolute loadmap-key2">
            <img className="key" src="./assets/images/key.svg"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Roadmap;