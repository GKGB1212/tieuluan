import React from "react";
import './radio-button-custom.css';

const RadioButtonCustom = (props) => {
    const title = props.title;
    return (
        <div className="control-group">
            <h1>{title}</h1>
            <form>
                <label className="control control--radio">First radio
                    <input type="radio" name="radio" checked="checked" />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control--radio">Second radio
                    <input type="radio" name="radio" />
                    <div className="control__indicator"></div>
                </label>
            </form>
        </div>

    )
}

export default RadioButtonCustom;