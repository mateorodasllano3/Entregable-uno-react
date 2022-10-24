import React from 'react';

const Buttonnext = ({increment, colorUltimate}) => {
    return (
        <div>
            <i onClick={increment} style={{color:colorUltimate}} className="fa-solid fa-circle-arrow-right"></i>
        </div>
    );
};

export default Buttonnext;