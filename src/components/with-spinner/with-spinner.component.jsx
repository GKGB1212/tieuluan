import React from 'react';

const WithSpinner=WrappedComponent=>{
    const Spinner=({loading, ...otherProps})=>{
        return loading?(
            <div className='SpinnerOverlay'>
                <div className='SpinnerContainer'/>
            </div>
        ):(
            <WrappedComponent {...otherProps}/>
        );
    };
    return Spinner;
};

export default WithSpinner;