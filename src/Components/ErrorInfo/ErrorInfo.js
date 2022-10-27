import React from 'react'
import './ErrorInfo.css'

export default function ErrorInfo({error}) {
    return (
        <>
            <div id="error-container">
                <div className="error-results">
                    <h3 className="error-results-message">{`Error due to ${error}. Please try again`}</h3>
                </div>
            </div>
        </>
    )
}