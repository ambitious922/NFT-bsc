import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { InputNumber } from 'rsuite';
import GolfPunks from '../../contracts/GolfPunks.json';
import Web3 from 'web3';
import '../../styles/modal.css';

const contractAddress = "0x48Bb3FeF7e8d8d305234e582dC247B34eC03a740";
const tokenNumber = 5;
export default function mintModal(props) {
    window.web3 = new Web3(window.ethereum);
    var Contract = require('web3-eth-contract');
    Contract.setProvider(window.ethereum);
    const golfPunksContract = new Contract(GolfPunks.abi, contractAddress);
    
    const mint = async () => {

        const golfCoinPrice = golfPunksContract.methods.NFT_PRICE.call({from: contractAddress});
        console.log(golfCoinPrice)
        const price = Number(golfCoinPrice) * tokenNumber;

        const gasAmount = await golfPunksContract.methods.mintNFT(tokenNumber).estimateGas({from: props.wallet.account, value: price});
        console.log(price, gasAmount)
        golfPunksContract.methods
        .mintNFT(tokenNumber)
        .send({from: props.wallet.account, value: price, gas: String(gasAmount)})
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
        console.log('dd')
    }

    return (
        <Modal className="mint-modal" show={ props.mintOpenModal } onHide={() => props.setMintOpenModal(!props.mintOpenModal)}>
            <Modal.Header className="justify-content-center">
                <p className="mint-modal-title Tanker color-white">MINT <span className="color-green">GOLFPUNKS</span></p>
            </Modal.Header>
            <Modal.Body className="pt-5">
                <InputNumber defaultValue={0} max={10} min={0} />;
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <div className="text-center">
                    <Button variant="secondary" className="Tanker mint-btn px-3" onClick = {() => mint()&props.setMintOpenModal(!props.mintOpenModal) }>
                        MINT
                    </Button>
                </div> 
            </Modal.Footer>
        </Modal>
    )
}