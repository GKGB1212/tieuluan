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
            Page: pageNumber,
            Size: 12
        }));
    }
    return (
        <div>
            <main>
                <div className="no-padding" style={{ width: "100%" }}>
                    <div className="list-view">
                        {
                            lstPostSearch.posts && lstPostSearch.posts.length > 0 ? (
                                <div>
                                    <div style={{ display: "flex", flexFlow: "wrap" }}>
                                        {
                                            lstPostSearch.posts.map((item) => (
                                                <Item key={item.id} item={item} />
                                            ))
                                        }
                                    </div>
                                    <Pagination
                                        activePage={currentPage}
                                        itemsCountPerPage={24}
                                        totalItemsCount={lstPostSearch.totalSize}
                                        pageRangeDisplayed={5}
                                        onChange={(pageNumber) => onChangePage(pageNumber)}
                                    />
                                </div>)
                                : (
                                    <div>
                                        <div class="notfound">
                                            <div class="alert alert-warning">
                                            <img src="https://static.chotot.com/storage/empty_state/desktop/search_no_found_keyword.png" alt="PageNotFound" loading="lazy" height="200px" width="400px"/><br/>
                                                <b>Không tìm thấy kết quả từ khóa đã nhập</b><br/>
                                                Hãy chắc chắn rằng tất cả các từ đều đúng chính tả. Hãy thử những từ khóa khác hoặc những từ khóa chung hơn.</div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}
export default TotalItemContainer;