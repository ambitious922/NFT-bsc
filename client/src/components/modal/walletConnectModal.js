import { useCallback } from 'react';
import { Button, Modal } from 'react-bootstrap';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import '../../styles/modal.css';

export default function WalletConnectModal(props) {
    const { wallet, accountAddress, setAccountAddress, trustConnect, setTrustConnect, openModal, setOpenModal } = props;
    const handleQRCode = (bridgeUrl, error, payload) => {

        if (error) {
          throw error;
        }
        console.log('aa', payload)
        console.log('bb', payload.params[0])
        setAccountAddress(payload.params[0].accounts[0]);
        setTrustConnect(payload.event)
        // Get provided accounts and chainId
        // const { accounts, chainId } = payload.params[0];
      
        // Draft transaction
        // const tx = {
        //   from: accounts, // Required
        //   to: "0xf5A07f885B9C2BC30e3766F5727E05bCE8b2B549", // Required (for non contract deployments)
        //   data: "0x", // Required
        //   gasPrice: "0x02540be400", // Optional
        //   gas: "0x9c40", // Optional
        //   value: "0x00", // Optional
        //   nonce: "0x0114" // Optional
        // };
      
        // Send transaction
        /*connector
          .sendTransaction(tx)
          .then((result) => {
            // Returns transaction id (hash)
            console.log(result);
          })
          .catch((error) => {
            // Error returned when rejected
            console.error(error);
          });
      */
    }

    const onClickWalletConnect = useCallback(() => {
        const bridgeUrl = "https://bridge.walletconnect.org";

        // Create a connector
        const connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org", // Required
          qrcodeModal: QRCodeModal,
        });
        // Check if connection is already established
        if (!connector.connected) {
            // create new session
            
            connector.createSession({chainId: 56});
            
        }
        
        connector.on("connect", handleQRCode.bind(this, bridgeUrl));
    }, []);

    return (
        <Modal {...props} show={ openModal } onHide={() => setOpenModal(!openModal)}>
          <Modal.Body className="pt-5">
            <div className="text-center">
              <Button variant="secondary" className="w-75" onClick = {() => wallet.connect()&setOpenModal(!openModal) }>
                <div className="metamask text-center">
                  <img className="metamask-img my-2" src="./assets/images/w1.svg" alt="img"/>
                  <p className="metamask-title Tanker p-1">MetaMask</p>
                  <p className="metamask-txt pb-1">Connect to MetaMask Wallet</p>
                </div>
              </Button>
            </div> 
          </Modal.Body>
          <Modal.Body className="pb-5">
            <div className="text-center">
              <Button variant="secondary" className="w-75" onClick = {onClickWalletConnect}>
                <div className="walletconnect text-center">
                  <img className="walletconnect-img my-2" src="./assets/images/w2.svg" alt="img"/>
                  <p className="walletconnect-title Tanker p-1">WalletConnect</p>
                  <p className="walletconnect-txt pb-1"> Scan and Connect to Trust Wallet</p>
                </div>
              </Button>
            </div>  
          </Modal.Body>
        </Modal>
    )
}