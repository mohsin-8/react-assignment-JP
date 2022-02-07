import React, { useState } from 'react';

import Offbulb from '../images/OFFbulb.jpg';
import Onbulb from '../images/ONbulb.jpg';

const Bulb = () => {
    const [bulb, setBulb] = useState(Offbulb);
    const [isText, setText] = useState('ON');

    const bulbFunc = () => {
        if (bulb === Offbulb) {
            setBulb(Onbulb);
            setText('OFF');
        } else {
            setBulb(Offbulb);
            setText('ON');
        }
    }

    return (
        <div>
            <img src={bulb} alt="bulb" />
            <button style={{ width: '10%', padding: '20px', cursor: 'pointer' }} onClick={bulbFunc}>{isText}</button>
        </div>
    );
};

export default Bulb;
