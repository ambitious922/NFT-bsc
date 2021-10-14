import React, { useState } from 'react';
import '../styles/home.css';
import WalletConnectModal from './modal/walletConnectModal';
import MintModal from './modal/mintModal';


function Home(props) {
  const { tokenNumber, setTokenNumber, wallet, accountAddress,  setAccountAddress, trustConnect, setTrustConnect, mintOpenModal, setMintOpenModal, openModal, setOpenModal} = props;
  const [showWalletStatus, setShowWalletStatus] = useState(false);
  return (
    <div id="home" className="d-block d-xl-flex flex-row padding-6">
      <div className="title-text col-12 col-md-9 col-lg-8 col-xl-6 Tanker pt-4 mx-auto">
        <h2 className="Tanker"><span className="color-green">GOLF</span> ON THE <br/>BLOCKCHAIN.
        <br/>PLAY MORE. <br/>EARN <span className="home-wf">MORE.</span></h2>
      </div>
      <div className="col-12 col-md-9 col-lg-8 col-xl-6 title-img mx-auto">
        <div className="title-connect-wallet p-4">
          { (wallet.status === 'connected')||(trustConnect === 'connect') ? (
          <div className="d-flex flex-row position-relative">
            <button className="btn btn-primary mr-1 px-3 my-0 Tanker" onClick={() => setMintOpenModal(!mintOpenModal)}>MINT NOW</button>
            <button className="btn mr-lg-0 btn-primary px-2 my-0 Tanker mr-1 mr-lg-0" onClick = {() => setShowWalletStatus(true)}><img className="wallet-lock" src="./assets/images/lock.png" alt="img"/></button>
            {showWalletStatus && <div className="wallet-status-show py-1 px-1">
              { (wallet.status === 'connected') && <><p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ wallet.account.slice(0, 8) }...{ wallet.account.slice(34, 42) }</p>
              <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ (wallet.balance*10e-19).toFixed(3) }{ wallet.chainId === 56 ? 'BNB' : '' }</p>
              <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)&wallet.reset()}>Logout</p></>}
              { (trustConnect === 'connect') && <><p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ accountAddress.slice(0, 8) }...{ accountAddress.slice(34, 42) }</p>
              <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)}>{ (wallet.balance*10e-19).toFixed(3) }{ wallet.chainId === 56 ? 'BNB' : '' }</p>
              <p className="py-1 roboto" onClick={() => setShowWalletStatus(!showWalletStatus)&wallet.reset()}>Logout</p></>}
            </div>}
          </div>
          ) : (
            <button className="btn mr-2 mr-lg-0 btn-primary my-2 my-sm-0 Tanker" onClick={() => setOpenModal(!openModal)}><img className="mr-2 wallet-lock" src="./assets/images/lock.png" alt="img"/>CONNECT WALLET</button>
          ) }
          <p className="public-text Tanker pt-2">Public sale open</p>
        </div>
      </div>
      <WalletConnectModal 
        wallet = { wallet }
        accountAddress = { accountAddress }
        setAccountAddress = { setAccountAddress }
        trustConnect = { trustConnect }
        setTrustConnect = { setTrustConnect }
        openModal = { openModal } 
        setOpenModal = { setOpenModal }/>
      <MintModal
        tokenNumber ={ tokenNumber }
        setTokenNumber = { setTokenNumber } 
        wallet = { wallet }
        mintOpenModal = { mintOpenModal } 
        setMintOpenModal = { setMintOpenModal }/>
    </div>
  )
};

export default Home;