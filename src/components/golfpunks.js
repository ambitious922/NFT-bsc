
import React, { useState } from 'react';
import '../styles/golfpunks.css';

function Golfpunks() {
  const [nftimages, setNftimages] = useState([
    {
      id: '01',
      src: './assets/images/1.png'
    },
    {
      id: '02',
      src: './assets/images/2.png'
    },
    {
      id: '03',
      src: './assets/images/3.png'
    },
    {
      id: '04',
      src: './assets/images/4.png'
    },
    {
      id: '05',
      src: './assets/images/f1.png'
    },
    {
      id: '06',
      src: './assets/images/f2.png'
    },{
      id: '07',
      src: './assets/images/f3.png'
    }        ,
    {
      id: '08',
      src: './assets/images/f4.png'
    },
    {
      id: '09',
      src: './assets/images/f5.png'
    },
    {
      id: '10',
      src: './assets/images/f6.png'
    },
    {
      id: '11',
      src: './assets/images/f7.png'
    },
    {
      id: '12',
      src: './assets/images/f8.png'
    }
  ])
  return (
    <div id="golfpunks" className="d-block d-xl-flex flex-row padding-6 accused-bg">
      {/* <div className="col-12 col-md-9 col-lg-8 col-xl-6 mx-auto position-relative">
        <div className="d-flex flex-row py-2">
          <div className="col-6 ticket-nft bg-grey p-4 mr-2 element">
            <p className="nft-intro Tanker color-grey-light px-2">"The only malicious software on my pc is your nudes"</p>
            <div className="position-relative bg-line w-100">
              <div className="position-absolute w-100 t-40">
                <img className="w-100" src="./assets/images/line.png"/>
              </div>
              <img className="w-100 translate-y-50" src="./assets/images/bh1.png"/>
            </div>
            <p className="hacking color-green Tanker">Convicted for hacking</p>
          </div>
          <div className="col-6 ticket-nft bg-green p-4 ml-2 element">
            <p className="nft-intro Tanker color-grey-weight px-2">"The only malicious software on my pc is your nudes"</p>
            <div className="position-relative bg-line w-100">
              <div className="position-absolute w-100 t-40">
                <img className="w-100" src="./assets/images/line.png"/>
              </div>
              <img className="w-100 translate-y-50" src="./assets/images/bh2.png"/>
            </div>
            <p className="hacking color-grey-weight Tanker">Convicted for hacking</p>
          </div>
        </div>
        <div className="d-flex flex-row py-2">
          <div className="col-6 ticket-nft bg-grey-light p-4 mr-2 element">
            <p className="nft-intro Tanker color-grey-weight px-2">"The only malicious software on my pc is your nudes"</p>
            <div className="position-relative bg-line w-100">
              <div className="position-absolute w-100 t-40">
                <img className="w-100" src="./assets/images/line.png"/>
              </div>
              <img className="w-100 translate-y-50" src="./assets/images/bh3.png"/>
            </div>
            <p className="hacking color-grey-weight Tanker">Convicted for hacking</p>
          </div>
          <div className="col-6 ticket-nft bg-grey p-4 ml-2 element">
            <p className="nft-intro Tanker color-grey-light px-2">"The only malicious software on my pc is your nudes"</p>
            <div className="position-relative bg-line w-100">
              <div className="position-absolute w-100 t-40">
                <img className="w-100" src="./assets/images/line.png"/>
              </div>
              <img className="w-100 translate-y-50" src="./assets/images/bh4.png"/>
            </div>
            <p className="hacking color-green Tanker">Convicted for hacking</p>
          </div>
        </div>
        <div className="position-absolute chain1">
          <img className="w-100" src="./assets/images/chain1.png"/>
        </div>
        <div className="position-absolute chain2">
          <img className="w-100" src="./assets/images/chain2.png"/>
        </div>
      </div> */}
      <div className="title-text col-12 Tanker mx-auto text-center">
        <h2 className="pt-4">MEET SOME OF OUR <br/>
          <span className="golfpunks-g">G</span>
          <span className="golfpunks-o">O</span>
          <span className="golfpunks-l">L</span>
          <span className="golfpunks-f">F</span>
          <span className="golfpunks-p">P</span>
          <span className="golfpunks-u">U</span>
          <span className="golfpunks-n">N</span>
          <span className="golfpunks-k">K</span>
          <span className="golfpunks-s">S</span></h2>
        <div>
          <p className="about-description text-left color-grey-light py-3">Golf fanatics meet blockchain technology
           on the course. CryptoGolf Punks collectable is a non-fungible token (NFT) programmatically generated 
           with Python and stored as an ERC721 token on the Binance Smart Chain (BSC) blockchain.</p>
        </div>
        <div className="images w-100">
          {nftimages.map((item, key) => (
            <div className="float-left col-6 col-md-4 col-lg-3 col-xl-2 p-2 nft-images">
              <img className="w-100" src={ item.src }/>
            </div>
          ))}
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
        {/* <div className="pt-4">
          <button className="btn btn-primary my-2 my-sm-0 Tanker bg-grey btn-grey-shadow color-green py-2 px-3">MEET CEIMINAL SQUIRRELS</button>
        </div> */}
      </div>
    </div>
  )  
};

export default Golfpunks;