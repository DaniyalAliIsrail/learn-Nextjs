
"use client"
import React, { useState, useEffect } from 'react';

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
}

const LearnDataFetching = () => {
    const [data1, setData1] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setData1(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Learn Data Fetching</h1>

            {data1.map((post) => (
                <div key={post.id}>
                    {post.title}
                   <hr/>
                </div>
            ))}

        </div>
    );
}

export default LearnDataFetching;
