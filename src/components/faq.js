import React, { useState } from 'react';
import '../styles/benefits.css';

function Faq() {
  const [details, setDetials] = useState([
    {
      id: '01',
      question: 'CRYPTOGOLF NFT PUNKS IS ON WHICH BLOCKCHAIN?',
      text: 'We are on Binance Smart Chain (BSC).'
    },
    {
      id: '02',
      question: 'WHAT IS THE TOTAL SUPPLY? ',
      text: 'A total of 5000 unique CryptoGolf NFT Punks will be created.'
    },
    {
      id: '03',
      question: 'WHERE AND HOW TO BUY CRYPTOGOLF NFT PUNKS?',
      text: "You can buy a CryptoGolf NFT punks with Binance Smart Chain (BSC BEP20) BNB cryptocurrency coin by connecting your Metamask or Trust wallet and interact with our BSC smart contract. "
    },
    {
      id: '04',
      question: 'WILL THERE BE A PRESALE?',
      text: "No, we do a fair launch by regular public mint sale on 11.11.21"
    },
    {
        id: '05',
        question: 'HOW MUCH DOES IT COST TO MINT AN NFT?',
        text: 'Every CryptoGolf NFT punks collectable is unique and costs 0.0 BNB each for the first 1000 minted. The price will go up 0.10 BNB increments for every 1000 mints thereafter until all NFTs are sold out.'
      },
      {
        id: '06',
        question: 'CAN I SELL MY CRYPTOGOLF NFT PUNKS?',
        text: "Yes, you can sell at the open market on Lootex.io and other NFT marketplaces that support our BSC NFT.  We will build our very own NFT marketplace in the future."
      },
      {
        id: '07',
        question: 'DO WE HAVE A SUPPORT COMMUNITY?',
        text: "Yes, CryptoGolf Punks are here to help. Join our Discord channel and Twitter to connect with support and fellow golf punks."
      }
  ])
  return (
    <div id="faq" className="d-block padding-6">
      {/* <div className="intro d-flex flex-row justify-content-between w-100 py-3">
        <p className="Tanker intro-text color-grey">GMI P.D. BLOCKCHAIN COUNTY</p>
        <p className="Tanker intro-text color-grey">CASE NO.01 / 2021/SEPT</p>
      </div> */}
      {/* <div className="details">
        <div className="details-first">
          <div className="details-first-title d-block d-lg-flex flex-row">
            <p className="p-2 border-right border-bottom border-top-0 border-left-0 Tanker col-12 col-lg-6 color-green details-title">BENEFITS&SPECIFICATIONS</p>
            <div className="p-2 border-right-0 border-bottom border-top-0 border-left-0 details-crime col-12 col-lg-6">
              <p className="Tanker color-green txt1">BLOCKCHAIN</p>
              <p className="Tanker color-white txt2">BINANCE SMART CHAIN(BSC)</p>
            </div>
          </div>
          <div className="details-first-title d-block d-lg-flex flex-row">
            <div className="p-2 border-right border-bottom-0 border-top-0 border-left-0 details-bail col-12 col-lg-6">
              <p className="Tanker color-green txt1">PUBLISH CALE 11.11.21</p>
              <p className="Tanker color-white txt2">0.05 BNB + GAS FEE</p>
            </div>
            <div className="p-2 border-right-0 border-bottom-0 border-top-0 border-left-0 details-amount col-12 col-lg-6">
              <p className="Tanker color-green txt1">TOTAL SUPPLY</p>
              <p className="Tanker color-white txt2">5,000 UNIQUELY GENERATED</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="benefit color-white pt-5">
        <p className="Tanker text-center benefit-intro pb-3">WHY <span className="color-green">CRYPTOGOLF</span> IS NOT JUST ANOTHER NFT</p>
        <p className="benefit-summary">We want to set the new standard for NFT. Each CryptoGOlf NFT is unique with different rarity. 
          Depending on the rarity of your CryptoGolf NFT, the holder is entitled to real world benefits 
          such as unlimited free green fees at our partnered golf courses worldwide, pro shop merchandise 
          discounts, and participation in special events and tournaments. Each NFT holder will also be 
          airdropped our GOLF utility token that are used in our ecosystem for purchased of green fees, 
          pro shop merchandlses, foods or swap to other cryptocurrency on exchanges for cash. We will build 
          our own IOS and Android App in the future for real time online tee time bookings. Please see our 
          Roadmap for more details.</p>
      </div> */}
      <div className="title-text Tanker mx-auto pb-3">
        <h2 className="text-center">FAQ</h2>
      </div>
      <div className="details-content">
        {details.map((item, key) => (
        <div key={ key } className={item.id == '07' ? 'd-block d-lg-flex flex-row details-content-detail border-0 py-2' : 'py-2 d-block d-lg-flex flex-row details-content-detail'}>
          <div className="p-2 details-content-number-title d-flex flex-row col-12 col-lg-6">
            <div className="details-content-number px-3">
              <p className="question Tanker color-green">QUESTION</p>
              <p className="Tanker details-id color-green">{ item.id }</p>
            </div>
            <div className="px-3 details-content-title Tanker color-white">{ item.question }</div>
          </div>
          <div className="p-2 details-content-text color-grey col-12 col-lg-6">
            { item.text }
          </div>
        </div>
        ))}
      </div>
    </div>
  )};

export default Faq;