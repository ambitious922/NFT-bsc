import { Button, Modal } from 'react-bootstrap';
import '../../styles/modal.css';

export default function WalletConnectModal(props) {
    return (
        <Modal {...props} show={ props.openModal } onHide={() => props.setOpenModal(!props.openModal)}>
          {/* <Modal.Header closeButton>
            <Modal.Title><p className="Tanker wallet-connect-title">WALLET CONNECTION</p></Modal.Title>
          </Modal.Header> */}
          <Modal.Body className="pt-5">
            <div className="text-center">
              <Button variant="secondary" className="w-75" onClick = {() => props.wallet.connect()&props.setOpenModal(!props.openModal) }>
                <div className="metamask text-center">
                  <img className="metamask-img my-2" src="./assets/images/w1.svg"/>
                  <p className="metamask-title Tanker p-1">MetaMask</p>
                  <p className="metamask-txt pb-1">Connect to your MetaMask Wallet</p>
                </div>
              </Button>
            </div> 
          </Modal.Body>
          <Modal.Body className="pb-5">
            <div className="text-center">
              <Button variant="secondary" className="w-75" onClick = {() => props.setOpenModal(!props.openModal) }>
                <div className="walletconnect text-center">
                  <img className="walletconnect-img my-2" src="./assets/images/w2.svg"/>
                  <p className="walletconnect-title Tanker p-1">WalletConnect</p>
                  <p className="walletconnect-txt pb-1">Connect to your Trust Wallet</p>
                </div>
              </Button>
            </div>  
          </Modal.Body>
        </Modal>
    )
}