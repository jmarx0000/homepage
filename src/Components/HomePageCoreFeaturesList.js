import React from 'react';
import './Styles/HomePageCoreFeaturesList.css';

const HomePageCoreFeaturesList = ({ style }) => {
    return (
        <div className="features-container" style={{ ...style }}>
            <div className="feature1" >
                <h3>Feature 1</h3>
                <p>Feature 1 description.</p>
            </div>
            <div className="feature">
                <h3>Feature 2</h3>
                <p>Feature 2 description.</p>
            </div>
            <div className="feature">
                <h3>Feature 3</h3>
                <p>Feature 3 description.</p>
            </div>
            <div className="feature">
                <h3>Feature 4</h3>
                <p>Feature 4 description.</p>
            </div>
            <div className="feature">
                <h3>Feature 5</h3>
                <p>Feature 5 description.</p>
            </div>
        </div>
    );
};

export default HomePageCoreFeaturesList;