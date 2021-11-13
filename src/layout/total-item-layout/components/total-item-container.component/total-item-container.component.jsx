import React from "react";
import './total-item-container.styles.css';
import Item from '../../../../components/item.component/item.component'
import Pagination from "react-js-pagination";
const TotalItemContainer = ({ items }) => {
    return (
        <div>
            <main>
                <div className="no-padding" style={{ width: "100%" }}>
                    <div className="list-view">
                        <div style={{ display: "flex", flexFlow: "wrap" }}>
                            {
                                items.map((item) => (
                                    <Item key={item.id} item={item} />
                                ))
                            }
                        </div>
                        <Pagination
                            activePage={1}
                            itemsCountPerPage={10}
                            totalItemsCount={450}
                            pageRangeDisplayed={5}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default TotalItemContainer;