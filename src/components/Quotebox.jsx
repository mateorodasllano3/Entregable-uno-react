import React from 'react';
import pharses from '../pharses.json'


const Quotebox = ({index, colorUltimate}) => {
   
    return (
        <div className='card'>
            <i className="fa-sharp fa-solid fa-quote-left" style={{color:colorUltimate}}></i>
            <p className='quote' style={{color:colorUltimate}}>{pharses[index].quote} </p>
            <p className='author' style={{color:colorUltimate}}>{pharses[index].author}</p>
        </div>
    );
};

export default Quotebox;