import React from "react";
import './radio-button-custom.css';

const RadioButtonCustom = (props) => {
    const title = props.title;
    return (
        <div class="control-group">
            <h1>{title}</h1>
            <form>
                <label class="control control--radio">First radio
                    <input type="radio" name="radio" checked="checked" />
                    <div class="control__indicator"></div>
                </label>
                <label class="control control--radio">Second radio
                    <input type="radio" name="radio" />
                    <div class="control__indicator"></div>
                </label>
            </form>
        </div>

    )
}

export default RadioButtonCustom;