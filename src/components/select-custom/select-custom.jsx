import React from "react";
import './select-custom.style.css';

const SelectCustom = () => {
    return (
        <div className="select-custom">
            <details class="custom-select">
                <summary  class="select-custom-radios">
                    <input type="radio" name="item" id="default" title="Auswählen..." checked />
                </summary>
                <ul className="select-custom-list">
                    <li>
                        <label for="item1">Item 1</label>
                    </li>
                </ul>
            </details>
        </div>

    )
}

export default SelectCustom;