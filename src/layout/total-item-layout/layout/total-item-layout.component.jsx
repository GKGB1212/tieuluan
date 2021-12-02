import React, { useState, useEffect } from "react";
import './total-item-layout.styles.css';
import DynamicFilter from "../components/dynamic-filter.component/dynamic-filter.component";
import TotalItemContainer from "../components/total-item-container.component/total-item-container.component";
import DATA from "../../../trials/data";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

const TotalItemLayout = (props) => {
    const type = props.location.type;
    const dispatch = useDispatch();
    const location = useLocation();
    const search=location.search;
    var Search = '';
    try {
        Search = location.state.Search;
    } catch (e) {
    }
    const lstPostSearch = useSelector(state => state.product.lstPostSearch);
    const [lstCity, setLstCity] = useState([]);


    useEffect(() => {
        console.log(search)
        fetch('https://provinces.open-api.vn/api/?depth=3&fbclid=IwAR1OGuDDmUlDdkyoYmh6umuMeiP9PcIGENaOgFsM0vX_6TAju5D8BLUAz9o')
            .then(function (response) {
                if (response.status !== 200) {
                    console.log('Lỗi, mã lỗi ' + response.status);
                    return;
                }
                // parse response data
                response.json().then(data => {
                    console.log(data)
                    setLstCity(data);
                })
            })
    }, [])

    return (
        // type?(
        <div className="container ct-listing">
            <DynamicFilter lstCity={lstCity} Search={Search} />
            <h1>{props.location.type}</h1>
            <TotalItemContainer lstPostSearch={lstPostSearch} Search={Search} />
        </div>
        // ):<Redirect to='/'/>
    )
}
export default TotalItemLayout;