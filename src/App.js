import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import Title from './components/title';
import Accused from './components/accused';
import Release from './components/release';
import Tail from './components/tail';
import Lineup from './components/lineup';
import Roadmap from './components/roadmap';
import Details from './components/details';
import Footer from './components/footer';


const App = (params) => {
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader( 100 );
  const headerClasses = `header ${(sticky && check) ? 'sticky' : ''}`
  const { clientHeight } = ref;
  const [openModal, setOpenModal] = useState(false);
  
  const checkChange = (value) => {
    setCheck(value);
  };
  
  return (
    <div>
      <header ref={ref} className={ headerClasses }><Container><Header openModal = { openModal } setOpenModal = { setOpenModal }/></Container></header>
      <Container className="move"><Title openModal = { openModal } setOpenModal = { setOpenModal }/></Container>
      <div className="black-bg">
        <Container className="move"><Accused/></Container>
      </div>
      <div className="grey-bg padding-top-7">
        <Container className="move"><Details/></Container>
        <Container className="move"><Tail/></Container>
        <Container className="move"><Roadmap/></Container>
      </div>



      <div className="release-bg">
        <Container className="move"><Release/></Container>
      </div>
      <div className="grey-bg padding-top-7">
        {/* <Container className="move"><Lineup/></Container> */}
        {/* <Container className="move"><Roadmap/></Container> */}
        <Container className="move"><Footer openModal = { openModal } setOpenModal = { setOpenModal }/></Container>
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
