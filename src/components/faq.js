import React, { useState } from 'react';
import '../styles/benefits.css';

function Faq() {
  const [details, setDetials] = useState([
    {
      id: '01',
      question: 'GOLFPUNKS IS ON WHICH BLOCKCHAIN?',
      text: 'We are on Binance Smart Chain (BSC).'
    },
    {
      id: '02',
      question: 'WHAT IS THE TOTAL SUPPLY? ',
      text: 'A total of 5000 unique GOLFPUNKS will be created.'
    },
    {
      id: '03',
      question: 'WHERE AND HOW TO BUY GOLFPUNKS?',
      text: "You can buy a GOLFPUNKS with Binance Smart Chain (BSC) BEP-20 cryptocurrency by connecting your Metamask or Trust wallet and interact with our BSC smart contract. "
    },
    {
      id: '04',
      question: 'WILL THERE BE A PRESALE?',
      text: "No, we do a fair launch by regular public mint sale on 11.11.21"
    },
    {
        id: '05',
        question: 'HOW MUCH DOES IT COST TO MINT AN NFT?',
        text: 'Every GOLFPUNKS collectable is unique and costs 0.5 BNB each for the first 1000 minted. The price will go up 0.10 BNB increments for every 1000 mints thereafter until all NFTs are sold out.'
      },
      {
        id: '06',
        question: 'CAN I SELL MY GOLFPUNKS?',
        text: "Yes, you can sell at the open market on Lootex.io and other NFT marketplaces that support our BSC NFT.  We will build our very own NFT marketplace in the future."
      },
      {
        id: '07',
        question: 'DO WE HAVE A SUPPORT COMMUNITY?',
        text: "Yes, GOLFPUNKS are here to help. Join our Discord channel and Twitter to connect with support and fellow golfers."
      }
  ])
  return (
    <div id="faq" className="d-block padding-6">
      <div className="title-text Tanker mx-auto pb-3">
        <h2 className="text-center">FAQ</h2>
      </div>
      <div className="details-content">
        {details.map((item, key) => (
        <div key={ key } className={item.id == '07' ? 'd-block d-lg-flex flex-row details-content-detail border-0 py-2' : 'py-2 d-block d-lg-flex flex-row details-content-detail'}>
          <div className="details-content-number-title d-flex flex-row col-12 col-lg-6 px-0">
            <div className="details-content-number pr-3">
              <p className="question Tanker color-green">QUESTION</p>
              <p className="Tanker details-id color-green">{ item.id }</p>
            </div>
            <div className="pr-3 pl-2 details-content-title Tanker color-white">{ item.question }</div>
          </div>
          <div className="details-content-text color-grey col-12 col-lg-6 px-0">
            { item.text }
          </div>
        </div>
        ))}
      </div>
    </div>
  )};

export default Faq;