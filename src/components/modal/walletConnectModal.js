import { Button, Modal } from 'react-bootstrap';
import '../../styles/modal.css';

export default function WalletConnectModal(props) {
    return (
        <Modal show={ props.openModal }>
          <Modal.Header closeButton>
            <Modal.Title><p className="Tanker wallet-connect-title">WALLET CONNECTION</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <Button variant="secondary" className="w-75">
                <div className="metamask text-center">
                  <img className="metamask-img my-2" src="./assets/images/w1.svg"/>
                  <p className="metamask-title Tanker p-1">MetaMask</p>
                  <p className="metamask-txt pb-1">Connect to your MetaMask Wallet</p>
                </div>
              </Button>
            </div> 
          </Modal.Body>
          <Modal.Body>
            <div className="text-center">
              <Button variant="secondary" className="w-75">
                <div className="walletconnect text-center">
                  <img className="walletconnect-img my-2" src="./assets/images/w2.svg"/>
                  <p className="walletconnect-title Tanker p-1">WalletConnect</p>
                  <p className="walletconnect-txt pb-1">Scan with WalletConnect to connect</p>
                </div>
              </Button>
            </div>  
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.setOpenModal(!props.openModal)}><p className="walletconnect-colse Tanker">Close</p></Button>
          </Modal.Footer>
        </Modal>
    )
}