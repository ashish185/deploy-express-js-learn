import React, { useEffect } from 'react'
import { useState } from 'react';

const MyComponent = () => {
    const [data, setData] = useState();
    function fetchData() {
        fetch(`${window.location.origin}/list`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <button onClick={fetchData}>FetchBackendData</ button>
            <div>
            {JSON.stringify(data)}
            </div>
        </div>
    )
}

export default MyComponent