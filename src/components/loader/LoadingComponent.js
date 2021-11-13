import React from 'react';
import './style.css';
const LoadingComponent = (props) => {
    const { 
        isLoading
    } = props;
    return (
        <div style={isLoading ? { display: 'block' } : { display: 'none' }} id="myModal" className="modal">
            <div className="loader">Loading...</div>
        </div>
    )
}

export default LoadingComponent
