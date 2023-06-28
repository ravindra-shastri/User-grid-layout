import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className='loder-container'>
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;



