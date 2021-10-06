import React, { useState } from 'react';
import '../styles/benefits.css';

function Benefits() {
  const [details, setDetials] = useState([
    {
      id: '01',
      question: 'WHAT IS CONVICTED SQUIRRELS?',
      text: '10,000 Unique Squirrels who simply were at the wrong place at the wrong time! These cute innocent creatures were wrongfully convicted and now depend on you to bail them out.'
    },
    {
      id: '02',
      question: 'HOW DO I RELEASE A CONVINCED SQUIRREL?',
      text: 'To restore justice to the squirrelverse you need a Metamask wallet and some ETH. Costs are 0.04ETH and gas fees to mint a squirrel and release it from custody. Connect your Metamask account on the website and make sure to mint your squirrels when we go live on September 19th @ 8pm CEST.'
    },
    {
      id: '03',
      question: 'IS THERE A COMMUNITY TO HELP ME IN THIS PROCESS?',
      text: "Yes, the Squirrel Syndicate is here to help! We've set up community channels for those willing to help these squirrels out of their predicament. Join the discord channels and talk to fellow squirrel justice warriors."
    },
    {
      id: '04',
      question: 'WHAT IS: SHARING THE SOAP?',
      text: "Sharing the soap is a unique Convicted Squirrels NFT mechanic. 1% of every squirrel sale goes into the soap fund. Every month a random felony is placed at the top of the soapchain. The ETH in the soapfund is then distributed amongst the owners of squirrels with that month's felony! You won't have to do anything to get these rewards. One day you'll just check your wallet and see a nice amount of soap money in there!"
    }
  ])
  return (
    <div id="benefits" className="d-block padding-top-7">
      {/* <div className="intro d-flex flex-row justify-content-between w-100 py-3">
        <p className="Tanker intro-text color-grey">GMI P.D. BLOCKCHAIN COUNTY</p>
        <p className="Tanker intro-text color-grey">CASE NO.01 / 2021/SEPT</p>
      </div> */}
      <div className="title-text col-12 Tanker mx-auto text-center">
        <h2 className="pb-4">BENEFITS
        {/* <span className="flexibleh700_w200">B</span>
          <span className="flexibleh800_w200">E</span>
          <span className="flexibleh900_w200">N</span>
          <span className="flexibleh1000_w200">E</span>
          <span className="flexibleh1000_w200">F</span>
          <span className="flexibleh900_w200">I</span>
          <span className="flexibleh800_w200">T</span>
          <span className="flexibleh700_w200">S</span></h2> */}
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
        <p className="Tanker text-center benefit-intro pb-3">WHY <span className="color-green">CRYPTOGOLF
          </span> IS NOT JUST ANOTHER NFT</p>
        <p className="about-description color-grey-light">RARITY. There are five classes of GOLGPUNKS and 
        each tier have different benefits.  The tiers are PRO, BREAK 70, BREAK 80, BREAK 90 and BREAK 100. 
        The PRO tiers are entitled to 25%, BREAK 70 20%, BREAK 80 15%, BREAK 90 10% and BREAK 100 5% discounts 
        on green fees and pro shop merchandise purchases.  All tiers have exclusive access and free entry to 
        events and tournaments. The PRO tiers receive additional perks and benefits such as complimentary 
        hotel stay during events and tournaments such as the Annual Celebrity GOLFPUNKS Tournament.<br/><br/>
        Each NFT owner have exclusive licenses to use, copy, and display his or her purchased NFTs for personal
         or commercial use. However, ownership and rights are transferred to the current holder of the NFT.We 
         want to set the new standard for NFT. Each CryptoGOlf NFT is unique with different rarity.<br/><br/>
          Depending on the rarity of your CryptoGolf NFT, the holder is entitled to real world benefits 
          such as unlimited free green fees at our partnered golf courses worldwide, pro shop merchandise 
          discounts, and participation in special events and tournaments. Each NFT holder will also be 
          airdropped our GOLF utility token that are used in our ecosystem for purchased of green fees, 
          pro shop merchandlses, foods or swap to other cryptocurrency on exchanges for cash. We will build 
          our own IOS and Android App in the future for real time online tee time bookings. Please see our 
          Roadmap for more details.</p>
      </div>
      {/* <div className="details-content pt-5">
        {details.map((item, key) => (
        <div key={ key } className={item.id == '04' ? 'd-block d-lg-flex flex-row details-content-detail border-0 py-2' : 'py-2 d-block d-lg-flex flex-row details-content-detail'}>
          <div className="p-2 details-content-number-title d-flex flex-row col-12 col-lg-6">
            <div className="details-content-number px-3">
              <p className="question Tanker color-green">QUESTION</p>
              <p className="Tanker details-id color-green">{ item.id }</p>
            </div>
            <div className="px-3 details-content-title Tanker color-white">{ item.question }</div>
          </div>
          <div className="p-2 details-content-text color-white col-12 col-lg-6">
            { item.text }
          </div>
        </div>
        ))}
      </div> */}
    </div>
  )};

export default Benefits;