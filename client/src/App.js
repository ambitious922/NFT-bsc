import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useWallet } from 'use-wallet';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Golfpunks from './components/golfpunks';
import Roadmap from './components/roadmap';
import Benefits from './components/benefits';
import Footer from './components/footer';
import Faq from './components/faq';
import Web3 from 'web3';
import GolfPunks from './contracts/GolfPunks.json';
import { prototype } from '@truffle/hdwallet-provider';

import { GOLF_CONTRACT } from './constants/actionTypes';


const App = (params) => {
  const dispatch = useDispatch();
  const contractAddress = "0xA7683B1d9E0F72876b74A46df2990edcDfB7D508";
  // const contractAddress = "0x41D3e8040d558E812F329a8A3B72384516C37516";//eth_mainnet
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader( 100 );
  const headerClasses = `header ${(sticky && check) ? 'sticky' : ''}`;
  const { clientHeight } = ref;
  const [openModal, setOpenModal] = useState(false);
  const [mintOpenModal, setMintOpenModal] = useState(false);
  const wallet = useWallet();
  const [tokenNumber, setTokenNumber] = useState(0);
  // const [ golfPunksContract, setGolfPunksContract] = useState(null);
  // const [ price, setPrice] = useState(0);
  // const [ gasAmount, setGasAmount] = useState(0);
  const checkChange = (value) => {
    setCheck(value);
  };
  const [accountAddress, setAccountAddress] = useState('');
  const [trustConnect, setTrustConnect] = useState('');
  const config = { tokenNumber, setTokenNumber, wallet, accountAddress, setAccountAddress, trustConnect, setAccountAddress, mintOpenModal, setMintOpenModal, openModal, setOpenModal };
  useEffect(() => {
    loadBlockchainData()
  }, [])
  async function loadBlockchainData() {
    
    // // mainnet 
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    // // testnet
    // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    const account = web3.eth.accounts.create();
    console.log("dsd",account)
    // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    // const golfPunksContract = await new web3.eth.Contract(GolfPunks.abi, contractAddress);
    // const golfTokenPrice = await golfPunksContract.methods.NFT_PRICE().call();
    // const price = Number(golfTokenPrice) * tokenNumber;
    // const gasAmount = await golfPunksContract.methods.mintNFT(tokenNumber).estimateGas({from: wallet.account, value: price});
    // dispatch({ type: GOLF_CONTRACT, payload: { golfPunksContract, price, gasAmount }})
  }
 
  return (
    <div>
      <header ref={ref} className={ headerClasses }>
        <Container>
          <Header {...config}/>
        </Container>
      </header>
      <Container className="move">
        <Home {...config}/>
      </Container>
      <div className="grey-bg">
        <Container className="move"><Golfpunks/></Container>
      </div>
      <div className="grey-bg">
        <Container className="move"><Benefits/></Container>
        {/* <Container className="move"><Rarity/></Container> */}
        <Container className="move"><Roadmap/></Container>
        <Container className="move"><Faq/></Container>
        <Container className="move">
          <Footer {...config}/> 
        </Container>
      </div>

      <Switch className="switch" onCheck={setCheck} defaultValue={ check }>Toggle Sticky</Switch>
    </div>
  );
}

const Switch = ({children, defaultValue, onCheck}) => {
  const [check, setCheck] = useState(defaultValue);
   
  useEffect(() => {
    onCheck(check);
  });
  
  return(
    <div className="switch">
      <label>
      <input
        type="checkbox"
        onClick={() => setCheck(!check)}
        checked={check}/>
       {' '} - { children }</label>
    </div>
  );
}

function useStickyHeader(offset = 0) {
  const [stick, setStick] = useState(false);
  
  const handleScroll = () => {
    setStick( window.scrollY > offset );
  };
  
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  
  return stick;
}



export default App;
