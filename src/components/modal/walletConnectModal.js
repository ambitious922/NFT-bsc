import { Button, Modal } from 'react-bootstrap';

export default function WalletConnectModal(props) {
    return (
        <Modal show={ props.openModal }>
          <Modal.Header closeButton>
            <Modal.Title><p className="Tanker wallet-connect-title">WALLET CONNECTION</p></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <Button variant="secondary">
                <div className="metamask text-center">
                  <img className="metamask-img" src="./assets/images/w1.svg"/>
                  <p className="metamask-title Tanker p-1">MetaMask</p>
                  <p className="metamask-txt Tanker pb-1">Connect to your MetaMask Wallet</p>
                </div>
              </Button>
            </div> 
          </Modal.Body>
          <Modal.Body>
            <div className="text-center">
              <Button variant="secondary">
                <div className="walletconnect text-center">
                  <img className="walletconnect-img" src="./assets/images/w2.svg"/>
                  <p className="walletconnect-title Tanker p-1">MetaMask</p>
                  <p className="walletconnect-txt Tanker pb-1">Connect to your MetaMask Wallet</p>
                </div>
              </Button>
            </div>  
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => props.setOpenModal(!props.openModal)}><p className="walletconnect-colse Tanker pb-1">Close</p></Button>
          </Modal.Footer>
        </Modal>
    )
}