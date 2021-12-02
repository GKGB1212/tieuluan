import React, { useState } from "react";
import './total-item-container.styles.css';
import Item from '../../../../components/item.component/item.component'
import Pagination from "react-js-pagination";
import { useDispatch } from "react-redux";
import { fetchFilterPosts } from "../../../../redux/product/productSlice";
const TotalItemContainer = ({ lstPostSearch, Search }) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const onChangePage = (pageNumber) => {
        setCurrentPage(pageNumber)
        dispatch(fetchFilterPosts({
            Search,
            Page:  pageNumber ,
            Size: 24
        }));
    }
    return (
        <div>
            <main>
                <div className="no-padding" style={{ width: "100%" }}>
                    <div className="list-view">
                        {
                            lstPostSearch.posts ? (
                                <div style={{ display: "flex", flexFlow: "wrap" }}>
                                    {
                                        lstPostSearch.posts.map((item) => (
                                            <Item key={item.id} item={item} />
                                        ))
                                    }
                                </div>
                            ) : ''
                        }
                        {
                            lstPostSearch.posts ? (
                                <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={24}
                                    totalItemsCount={lstPostSearch.totalSize}
                                    pageRangeDisplayed={5}
                                    onChange={(pageNumber) => onChangePage(pageNumber)}
                                />
                            ) : ''
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}
export default TotalItemContainer;