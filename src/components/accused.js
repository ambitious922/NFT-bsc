
import React from 'react';
import '../styles/accused.css';

function Accused() {
  return (
    <div id="golfpunks" className="d-block d-xl-flex flex-row padding-6 accused-bg">
      <div className="col-12 col-md-9 col-lg-8 col-xl-6 mx-auto position-relative">
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
      </div>
      <div className="title-text col-12 col-lg-8 col-xl-6 Tanker mx-auto about-padding text-center text-xl-left">
        <p className="about-text Tanker color-green">ABOUT CONVICTED SQUIRRELS</p>
        <h2 className="pt-4">CRYPTOGOLF<br/><span>PUNKS NFT</span></h2>
        <div>
          <p className="about-description color-grey-light py-3">Golf fanatics meet blockchain technology 
            on the course. CryptoGolf punks collectable is a non-fungible token (NFT) programmatically generated
              with Python and stored as an ERC721 token on the Binance Smart Chain blockchain. </p>
        </div>
        <div className="pt-4">
          <button className="btn btn-primary my-2 my-sm-0 Tanker bg-grey btn-grey-shadow color-green py-2 px-3">MEET CEIMINAL SQUIRRELS</button>
        </div>
      </div>
    </div>
  )  
};

export default Accused;