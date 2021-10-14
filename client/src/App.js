import { useLayoutEffect, useEffect, useState, useRef } from 'react';
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


const App = (params) => {
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader( 100 );
  const headerClasses = `header ${(sticky && check) ? 'sticky' : ''}`;
  const { clientHeight } = ref;
  const [openModal, setOpenModal] = useState(false);
  const [mintOpenModal, setMintOpenModal] = useState(false);
  const wallet = useWallet();
  const checkChange = (value) => {
    setCheck(value);
  };
  const [accountAddress, setAccountAddress] = useState('');
  const [trustConnect, setTrustConnect] = useState('');

  return (
    <div>
      <header ref={ref} className={ headerClasses }>
        <Container>
          <Header 
          wallet = { wallet }
          accountAddress = { accountAddress }
          setAccountAddress = { setAccountAddress }
          trustConnect = { trustConnect }
          setTrustConnect = { setTrustConnect }
          mintOpenModal = { mintOpenModal } 
          setMintOpenModal = { setMintOpenModal }
          openModal = { openModal } 
          setOpenModal = { setOpenModal }/>
        </Container>
      </header>
      <Container className="move">
        <Home 
          wallet = { wallet }
          accountAddress = { accountAddress }
          setAccountAddress = { setAccountAddress }
          trustConnect = { trustConnect }
          setTrustConnect = { setTrustConnect }
          mintOpenModal = { mintOpenModal } 
          setMintOpenModal = { setMintOpenModal }
          openModal = { openModal } 
          setOpenModal = { setOpenModal }/>
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
          <Footer 
            wallet = { wallet }
            accountAddress = { accountAddress }
            setAccountAddress = { setAccountAddress }
            trustConnect = { trustConnect }
            setTrustConnect = { setTrustConnect }
            mintOpenModal = { mintOpenModal } 
            setMintOpenModal = { setMintOpenModal }
            openModal = { openModal } 
            setOpenModal = { setOpenModal }/> 
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
