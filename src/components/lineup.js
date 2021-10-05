import React, { useState } from 'react';
import '../styles/rarity.css';

function Rarity() {
  const [convinced, setConvinced] = useState([
    {
      id: '01',
      src: './assets/images/hair1.png',
      crime: 'THEFE'
    },
    {
      id: '02',
      src: './assets/images/hair2.png',
      crime: 'THEFE'
    },
    {
      id: '03',
      src: './assets/images/hair3.png',
      crime: 'THEFE'
    },
    {
      id: '04',
      src: './assets/images/hair4.png',
      crime: 'THEFE'
    },
    {
      id: '05',
      src: './assets/images/hair5.png',
      crime: 'THEFE'
    },
    {
      id: '06',
      src: './assets/images/hair6.png',
      crime: 'THEFE'
    },{
      id: '07',
      src: './assets/images/hair7.png',
      crime: 'THEFE'
    }        ,
    {
      id: '08',
      src: './assets/images/hair8.png',
      crime: 'THEFE'
    },
    {
      id: '09',
      src: './assets/images/hair9.png',
      crime: 'THEFE'
    },
    {
      id: '10',
      src: './assets/images/hair10.png',
      crime: 'THEFE'
    }
  ])
  return (
    <div id="rarity" className="d-block pb-5">
      <div className="title-text Tanker pt-4 mx-auto pb-5">
        <h2 className="text-center">LINEUP</h2>
        <p className="text-convinced color-green text-center py-2">MEET SOME OF OUR CONVICTED SQUIRRELS</p>
      </div>
      {convinced.map((item, key) => (
      <div key={ key } className="position float-left p-3 col-12 col-sm-6 col-lg-4">
        <div className="crime-ticket bg-white p-3">
          <div className="crime-title w-100 d-flex flex-row">
            <div className="crime-title-text col-7 text-center pb-2 color-grey-weight Tanker">
              CONVICTED
            </div>
            <div className="crime-number col-5 text-center pb-2 color-green Tanker">
              NO: { item.id }
            </div>
          </div>
          <div className="w-100 crime-line">
            <img className="w-100" src="./assets/images/line.png"/>
          </div>
          <div className="d-flex justify-content-between Tanker color-grey-weight crime-footer">
            <p>CRIME:</p>
            <p>{ item.crime }</p>
          </div>
        </div>
        <div className="crime-img col-11 position-absolute">
          <img className="w-100" src={ item.src }/>
        </div>
      </div>
      ))}
      <div className="position float-left p-3 col-12 col-sm-6 col-lg-4">
        <div className="crime-ticket bg-green p-3">
          <div className="crime-title w-100 d-flex flex-row">
            <div className="crime-title-text col-12 text-center pb-2 color-grey-weight Tanker">
              WANTED SQUIRRELS
            </div>
          </div>
          <div className="w-100 crime-line">
            <img className="w-100" src="./assets/images/line.png"/>
          </div>
          <div className="d-flex justify-content-between Tanker color-grey-weight crime-footer">
            <p>STATUS: UNKNOWN</p>
            <p>RARE</p>
          </div>
        </div>
        <div className="crime-img col-11 position-absolute">
          <img className="w-100" src="./assets/images/hair-u.png"/>
        </div>
      </div>
      <div className="position float-left p-3 col-12 col-sm-6 col-lg-4">
        <div className="crime-ticket bg-grey p-3">
          <div className="crime-title w-100 d-flex flex-row invisible">
            <div className="crime-title-text col-12 text-center pb-2 color-grey-weight Tanker">
              WANTED SQUIRRELS
            </div>
          </div>
          <div className="w-100 crime-line">
            <img className="w-100" src="./assets/images/line.png"/>
          </div>
          <div className="d-flex justify-content-between Tanker color-grey-weight crime-footer invisible">
            <p>STATUS: UNKNOWN</p>
            <p>RARE</p>
          </div>
        </div>
        <div className="Tanker text-center color-white crime-img pt-3 warning-text col-11 position-absolute">
          <p>WARNING! MORE<br/> CONVICTED<br/> SQUIRRELS<br/> COMING SOON TO<br/> YOUR TOWN!</p>
          <p className="pt-4 color-green stay-text">STAY TUNED FOR<br/> UPDATES</p>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  )
};

export default Rarity;