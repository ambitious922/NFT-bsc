import React, { useState } from 'react';
import WalletConnectModal from './modal/walletConnectModal';
import '../styles/header.css';



function Header(props) {
  const [showNarrow, setShowNarrow] = useState(false);
  const [showWalletStatus, setShowWalletStatus] = useState(false);
  return (
    <div>
      <nav className="navbar pt-3 px-0 px-sm-3 navbar-toggleable-md navbar-inverse flex-row justify-content-between">
        <a className="navbar-brand Tanker mr-4 position-relative" href="/">
          <div className="logo-img position-absolute">
            <img className="w-100" src="./assets/images/logo1.png"/>
          </div>
          <div className="logo-text">
            <span className="w1">C</span>
            <span className="w2">R</span>
            <span className="w3">Y</span>
            <span className="w4">P</span>
            <span className="w5">T</span>
            <span className="w6">O</span>
            <span className="color-green w7">G</span>
            <span className="color-green w8">O</span>
            <span className="color-green w9">L</span>
            <span className="color-green w10">F</span>
          </div>
        </a>
        <div className="d-flex flex-row">
          <div className="collapse navbar-collapse align-items-center mr-2" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto pr-4">
              <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="#home">HOME</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="#golfpunks">ABOUT</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="#benefits">BENEFITS</a>
              </li>
              {/* <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="#rarity">RARITY</a>
              </li> */}
              <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="#roadmap">ROADMAP</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="#faq">FAQ</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link header-text Tanker" href="/">MYGOLFPUNKS</a>
              </li>
            </ul>
            <div className="d-none d-xl-block">
              <a className="social-icon pr-2 pl-4" href="https://discord.gg/cUXA3wyRJp" target="_blank"><i className="fab fa-discord"></i></a>
              <a className="social-icon px-1" href="https://twitter.com/SquirrelsNFT" target="_blank"><i className="fab fa-twitter"></i></a>
              <a className="social-icon px-1" href="https://lootex.io/" target="_blank">
                <svg viewBox="0 0 1052 357" xmlns="http://www.w3.org/2000/svg" fill="#DF0078" class="_2TeTK">
                  <g>
                    <path d="M52.3466 229.107C51.1242 227.885 50.6909 226.08 51.2251 224.436L101.529 69.6033C102.099 67.8486 103.663 
                    66.6047 105.501 66.4439L210.124 57.2907C210.67 57.2428 211.089 57.7687 210.919 58.2908L156.394 226.112C156.233 
                    226.607 156.602 227.115 157.123 227.115H215.623C216.892 227.115 217.922 228.144 217.922 229.414V277.846C217.922 
                    279.038 217.011 280.032 215.823 280.136L114.552 288.995C113.199 289.113 111.862 288.627 110.901 287.666L52.3466 
                    229.107Z"></path>
                    <ellipse cx="317.416" cy="178.652" rx="121.837" ry="121.65"></ellipse>
                    <ellipse cx="536.416" cy="178.652" rx="121.837" ry="121.65"></ellipse>
                    <path d="M640.128 79.9907C638.828 79.946 637.75 80.9876 637.75 82.2882V139.677C637.75 140.946 638.779 141.976 
                    640.049 141.976H692.766C693.286 141.976 693.655 142.484 693.494 142.979L662.41 238.652C661.876 240.296 662.309 
                    242.101 663.532 243.324L731.578 311.375C731.983 311.78 732.672 311.614 732.849 311.07L786.754 145.153C787.37 
                    143.258 789.135 141.976 791.127 141.976H840.609C842.601 141.976 844.366 140.693 844.982 138.799L861.297 
                    88.5826C861.455 88.098 861.104 87.5976 860.595 87.58L640.128 79.9907Z"></path>
                  </g>
                  <g>
                    <path d="M861 182.275L871.161 151H909.681C910.695 151 911.553 151.364 912.256 152.092C912.984 152.82 913.348 
                    153.692 913.348 154.706V158.372C913.348 159.387 912.984 160.258 912.256 160.986C911.553 161.688 910.695 162.039 
                    909.681 162.039H875.706V173.39H904.961C905.975 173.39 906.834 173.754 907.536 174.482C908.264 175.185 908.628 
                    176.043 908.628 177.057V180.724C908.628 181.738 908.264 182.609 907.536 183.337C906.834 184.039 905.975 184.39 
                    904.961 184.39H875.706V195.897H909.603C910.591 195.897 911.436 196.248 912.139 196.951C912.841 197.653 913.192 
                    198.511 913.192 199.525V203.27C913.192 204.284 912.828 205.155 912.1 205.883C911.371 206.585 910.5 206.936 909.486 
                    206.936H864.706C863.692 206.936 862.82 206.585 862.092 205.883C861.364 205.155 861 204.258 861 203.192V182.275Z"></path>
                    <path d="M915.727 205.181C915.883 206.351 916.611 206.936 917.912 206.936H926.22C928.821 206.936 931.083 205.714 
                    933.008 203.27L944.905 188.096L956.802 203.27C958.726 205.714 960.989 206.936 963.589 206.936H971.898C972.964 
                    206.936 973.64 206.559 973.926 205.805C974.03 205.623 974.082 205.324 974.082 204.908C974.082 204.492 973.809 
                    203.946 973.263 203.27L953.603 178.188L972.132 154.706C972.678 154.004 972.951 153.366 972.951 152.794C972.951 
                    151.598 972.236 151 970.806 151H962.419C959.793 151.026 957.517 152.261 955.593 154.706L944.905 168.28L934.217 
                    154.706C932.266 152.235 929.991 151 927.39 151H919.004C917.574 151 916.858 151.598 916.858 152.794C916.858 153.392 
                    917.132 154.03 917.678 154.706L936.206 178.188L916.546 203.27C916 203.972 915.727 204.609 915.727 205.181Z"></path>
                  </g>
                </svg>
              </a>
            </div>
            
          </div>
          <div className="d-flex flex-row align-items-center">
            { (props.wallet.status == 'connected')||(props.trustConnect == 'connect') ? (
              <div className="d-flex flex-row position-relative">
                <button className="btn btn-primary mr-1 px-3 my-0 Tanker">MINT NOW</button>
                <button className="btn mr-lg-0 btn-primary px-2 my-0 Tanker mr-1 mr-lg-0" onClick = {() => setShowWalletStatus(true)}><img className="wallet-lock" src="./assets/images/lock.png"/></button>
                {showWalletStatus && <div className="wallet-status-show py-1 px-1">
                  { (props.wallet.status == 'connected') && <><p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ props.wallet.account.slice(0, 8) }...{ props.wallet.account.slice(34, 42) }</p>
                  <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ props.wallet.balance }{ props.wallet.chainId == 56 ? 'BNB' : '' }</p>
                  <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)&props.wallet.reset()}>Logout</p></>}
                  { (props.trustConnect == 'connect') && <><p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ props.accountAddress.slice(0, 8) }...{ props.accountAddress.slice(34, 42) }</p>
                  <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ props.wallet.balance }{ props.wallet.chainId == 56 ? 'BNB' : '' }</p>
                  <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)&props.wallet.reset()}>Logout</p></>}
                </div>}
              </div>
              ) : (
                <button className="btn mr-2 mr-lg-0 btn-primary my-2 my-sm-0 Tanker" onClick={() => props.setOpenModal(!props.openModal)}><img className="mr-2 wallet-lock" src="./assets/images/lock.png"/>CONNECT WALLET</button>
              ) }
            <button className="mt-3 navbar-toggler" onClick={() => setShowNarrow(!showNarrow)} type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      {showNarrow && <div className="narrowLinks d-lg-none py-2">
        <a href="#home" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>HOME</a>
        <a href="#golfpunks" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>ABOUT</a>
        <a href="#benefits" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>BENEFITS</a>
        {/* <a href="#rarity" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>RARITY</a> */}
        <a href="#roadmap" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>ROADMAP</a>
        <a href="#faq" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>FAQ</a>
        <a href="/" className="py-1 Tanker" onClick={() => setShowNarrow(!showNarrow)}>MYGOLFPUNKS</a>
      </div>
      }
      <WalletConnectModal 
        wallet = { props.wallet }
        accountAddress = { props.accountAddress }
        setAccountAddress = { props.setAccountAddress }
        trustConnect = { props.trustConnect }
        setTrustConnect = { props.setTrustConnect }
        openModal = { props.openModal } 
        setOpenModal = { props.setOpenModal }/>
    </div>
  )  
};

export default Header;