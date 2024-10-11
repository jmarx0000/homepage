import React from 'react';
import './Styles/PriceBox.css';

const PriceBox = ({ style }) => {
    return (
        <div className="price-box" style={{ ...style }}>
            <span className="price">Hello</span>
        </div>
    );
};

export default PriceBox;