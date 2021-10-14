import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { InputNumber, InputGroup } from 'rsuite';


import '../../styles/modal.css';

export default function MintModal(props) {
    
    const golfContractValue = useSelector(state => state.contract)
    const { wallet, mintOpenModal, setMintOpenModal } = props;
    const [tokenNumber, setTokenNumber] = useState(props.tokenNumber);
    
    const handleMinus = () => {
        setTokenNumber(tokenNumber - 1);
    };
    const handlePlus = () => {
        setTokenNumber(tokenNumber + 1);
        console.log(tokenNumber)
    };
    const mint = async () => {
        props.setTokenNumber(tokenNumber)
        const golfTokenPrice = await golfContractValue.golfPunksContract.methods.NFT_PRICE().call();
        const price = Number(golfTokenPrice) * tokenNumber;
        const gasAmount = await golfContractValue.golfPunksContract.methods.mintNFT(tokenNumber).estimateGas({from: wallet.account, value: price});
        golfContractValue.golfPunksContract.methods
        .mintNFT(tokenNumber)
        .send({from: wallet.account, value: price, gas: String(gasAmount)})
        .on('transactionHash', function(hash){
          console.log("transactionHash", hash)
        })
        .on('receipt', function(receipt) {
          console.log('receipt', receipt)
        })
        .on('confirmation', function(confirmationNumber, receipt){
          console.log('confirmation', confirmationNumber, "receipt", receipt)
        })
        .on('error', console.error)
        setTokenNumber(0);
    }

    return (
        <Modal className="mint-modal" show={ mintOpenModal } onHide={() => setMintOpenModal(!mintOpenModal)}>
            <Modal.Header className="justify-content-center">
                <p className="mint-modal-title Tanker color-white">MINT <span className="color-green">GOLFPUNKS</span></p>
            </Modal.Header>
            <Modal.Body className="py-5 mx-auto">
                <InputGroup>
                    <Button variant="secondary" onClick={handleMinus}>-</Button>
                    <InputNumber defaultValue={0} min={0} max={20} value={tokenNumber} onInput={setTokenNumber} />
                    <Button variant="secondary" onClick={handlePlus}>+</Button>
                </InputGroup>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <div className="text-center">
                    <Button variant="secondary" className="Tanker mint-btn px-3" onClick = {() => mint()&setMintOpenModal(!mintOpenModal) }>
                        MINT NOW
                    </Button>
                </div> 
            </Modal.Footer>
        </Modal>
    )
}