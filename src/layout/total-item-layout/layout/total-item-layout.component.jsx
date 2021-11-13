import React, { useState } from "react";
import './total-item-layout.styles.css';
import DynamicFilter from "../components/dynamic-filter.component/dynamic-filter.component";
import TotalItemContainer from "../components/total-item-container.component/total-item-container.component";
import DATA from "../../../trials/data";
import { Redirect } from 'react-router-dom';

const TotalItemLayout = (props) => {
    const items = DATA;
    const type=props.location.type;
    return (
        type?(
        <div className="container ct-listing">
            <DynamicFilter />
            <h1>{props.location.type}</h1>
            <TotalItemContainer items={items} />
        </div>):<Redirect to='/'/>
    )
}
export default TotalItemLayout;