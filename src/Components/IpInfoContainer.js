import React from 'react'

export default function IpInfoContainer({data}) {
    console.log(data)
    return (
        <>
            <div className="ip-results">
                <div className="ip-results-item">
                    <h3 className="ip-results-item-heading">IP Address</h3>
                    <h3 className="ip-results-item-data">{data.ip}</h3>
                </div>
                <div className="ip-results-item">
                    <h3 className="ip-results-item-heading">Location</h3>
                    <h3 className="ip-results-item-data">{data.location.city + data.location.region}</h3>
                </div>
                <div className="ip-results-item">
                    <h3 className="ip-results-item-heading">Timezone</h3>
                    <h3 className="ip-results-item-data">{data.location.timezone}</h3>
                </div>
                <div className="ip-results-item">
                    <h3 className="ip-results-item-heading">ISP</h3>
                    <h3 className="ip-results-item-data">{data.isp}</h3>
                </div>
            </div>
        </>
    )
}