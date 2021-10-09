import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/release.css';

export default function Release() {
  return (
    <div className="text-center flex-row padding-15">
      <div className="release-text Tanker">
        <h2 className="color-green">RELEASE</h2>
        <div className="d-flex flex-row justify-content-center color-white">
          <div className="hr-line"></div>
          <span className="px-5 the-text">THE</span>
          <div className="hr-line"></div>
        </div>
        <h2>SQUIRRELS</h2>
      </div>
      <div className="pt-5">
        <button className="btn btn-primary my-2 my-sm-0 Tanker release-w-btn"><i class="fas fa-wallet mr-4"></i>CONNECT WALLET</button>
      </div>
    </div>
  )
};