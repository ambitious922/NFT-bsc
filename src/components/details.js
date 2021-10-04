import React, { useState } from 'react';
import '../styles/details.css';

function Details() {
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
    <div id="faq" className="d-block padding-6">
      <div className="intro d-flex flex-row justify-content-between w-100 py-3">
        <p className="Tanker intro-text color-grey">GMI P.D. BLOCKCHAIN COUNTY</p>
        <p className="Tanker intro-text color-grey">CASE NO.01 / 2021/SEPT</p>
      </div>
      <div className="details">
        <div className="details-first">
          <div className="details-first-title d-block d-lg-flex flex-row">
            <p className="p-2 border-right border-bottom border-top-0 border-left-0 Tanker col-12 col-lg-6 color-green details-title">CASE DETAILS</p>
            <div className="p-2 border-right-0 border-bottom border-top-0 border-left-0 details-crime col-12 col-lg-6">
              <p className="Tanker color-green txt1">CRIME</p>
              <p className="Tanker color-white txt2">CONVICTED SQUIRRELS</p>
            </div>
          </div>
          <div className="details-first-title d-block d-lg-flex flex-row">
            <div className="p-2 border-right border-bottom-0 border-top-0 border-left-0 details-bail col-12 col-lg-6">
              <p className="Tanker color-green txt1">BAIL TO RELEASE</p>
              <p className="Tanker color-white txt2">0.04ETH+GAS FEE</p>
            </div>
            <div className="p-2 border-right-0 border-bottom-0 border-top-0 border-left-0 details-amount col-12 col-lg-6">
              <p className="Tanker color-green txt1">AMOUNT</p>
              <p className="Tanker color-white txt2">10,000 UNIQUELY GENERATED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="details-content pt-5">
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
      </div>
    </div>
  )};

export default Details;