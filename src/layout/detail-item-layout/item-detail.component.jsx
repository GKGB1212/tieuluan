import React from "react";

const SmallDetail = ({img, title, value}) => {
    return (
        <div class="col-md-6 no-padding AdParam_adParamItem__1o-dd" data-testid="param-item">
            <div class="AdParam_adMediaParam__3bzmC"><div class="media-left media-top">
                <img class="AdParam_adParamIcon__1W6qJ" alt="" src={img} />
            </div>
                <div class="media-body media-middle">
                    <span>
                        <span>
                        </span>
                        <span itemprop="ad_type" class="AdParam_adParamValue__1ayWO">{title}{value}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SmallDetail;