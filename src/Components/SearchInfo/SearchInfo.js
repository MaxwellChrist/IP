import React from 'react'
import './SearchInfo.css'
import ErrorInfo from '../ErrorInfo/ErrorInfo';

export default function SearchInfo({data, error}) {
    return (
        <>
            {error !== null  ? <ErrorInfo error={error} /> : 
            <div id="ip-container">
                <div className="ip-results">
                    <div className="ip-results-item ip-results-border">
                        <h3 className="ip-results-item-heading">IP Address</h3>
                        <h3 className="ip-results-item-data">{data.ip}</h3>
                    </div>
                    <div className="ip-results-item ip-results-border">
                        <h3 className="ip-results-item-heading">Location</h3>
                        <h3 className="ip-results-item-data">{`${data.location.city}, ${data.location.region} ${data.location.postalCode}`}</h3>
                    </div>
                    <div className="ip-results-item ip-results-border">
                        <h3 className="ip-results-item-heading">Timezone</h3>
                        <h3 className="ip-results-item-data">{`UTC ${data.location.timezone}`}</h3>
                    </div>
                    <div className="ip-results-item">
                        <h3 className="ip-results-item-heading">ISP</h3>
                        <h3 className="ip-results-item-data">{data.isp}</h3>
                    </div>
                </div>
            </div>
            }
        </>
    )
}