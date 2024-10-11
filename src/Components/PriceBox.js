import React from 'react';
import './Styles/PriceBox.css';

const PriceBox = ({ style }) => {
    return (
        <div className="price-box" style={{ ...style }}>
            <span className="price">Free</span>
        </div>
    );
};

export default PriceBox;