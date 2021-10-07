import React, { useState } from 'react';
import '../styles/home.css';
import WalletConnectModal from './modal/walletConnectModal';


function Home(props) {
  const [showWalletStatus, setShowWalletStatus] = useState(false);
  return (
    <div id="home" className="d-block d-xl-flex flex-row padding-6">
      <div className="title-text col-12 col-md-9 col-lg-8 col-xl-6 Tanker pt-4 mx-auto">
        <h2 className="Tanker"><span className="color-green">GOLF</span> ON THE <br/>BLOCKCHAIN.
        <br/>PLAY MORE. <br/>EARN <span className="home-wf">MORE.</span></h2>
        {/* <h2 className="Tanker"><span className="color-green"><span className="home-wg">G</span><span className="home-wo">O</span><span className="home-wl">L</span>F</span> ON THE <br/>BLOCKCHAIN.
        <br/>PLAY MORE. <br/>EARN <span className="home-wf">M</span><span className="home-wl">O</span><span className="home-wo">R</span><span className="home-wg">E</span><span className="home-wg">.</span></h2> */}
      </div>
      <div className="col-12 col-md-9 col-lg-8 col-xl-6 title-img mx-auto">
        <div className="title-connect-wallet p-4">
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
          <p className="public-text Tanker pt-2">Public sale open</p>
        </div>
      </div>
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

export default Home;