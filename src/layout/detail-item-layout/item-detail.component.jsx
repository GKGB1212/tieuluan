import React from "react";

const SmallDetail = ({img, title, value}) => {
    return (
        <div className="col-md-6 no-padding AdParam_adParamItem__1o-dd" data-testid="param-item">
            <div className="AdParam_adMediaParam__3bzmC"><div className="media-left media-top">
                <img className="AdParam_adParamIcon__1W6qJ" alt="" src={img} />
            </div>
                <div className="media-body media-middle">
                    <span>
                        <span>
                        </span>
                        <span itemprop="ad_type" className="AdParam_adParamValue__1ayWO">{title}{value}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SmallDetail;