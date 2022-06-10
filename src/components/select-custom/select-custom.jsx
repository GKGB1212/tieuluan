import React from "react";
import './select-custom.style.css';

const SelectCustom = (props) => {
    const title=props.title;
    return (
        <div className="select-custom-container">
            <div class="control-group">
                <h1>{title}</h1>
                <div class="select">
                    <select>
                        <option>First select</option>
                        <option>Option</option>
                        <option>Option</option>
                    </select>
                    <div class="select__arrow"></div>
                </div>
                
            </div>
        </div>

    )
}

export default SelectCustom;