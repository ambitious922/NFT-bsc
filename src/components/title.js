import React from 'react';
import '../styles/title.css';

function Title() {
  return (
    <div id="home" className="d-block d-xl-flex flex-row padding-6">
      <div className="title-text col-12 col-md-9 col-lg-8 col-xl-6 Tanker pt-4 mx-auto">
        <h2>GOLF ON THE BLOCKCHAIN
        PLAY MORE. <span>EARN MORE.</span></h2>
      </div>
      <div className="col-12 col-md-9 col-lg-8 col-xl-6 title-img mx-auto">
        <div className="title-connect-wallet p-4">
          <button className="btn btn-primary my-2 my-sm-0 Tanker"><i class="fas fa-wallet mr-2"></i>CONNECT WALLET</button>
          <p className="public-text Tanker pt-2">Public sale open</p>
        </div>
      </div>
    </div>
  )
};

export default Title;