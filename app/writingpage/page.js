'use client';

import React, { useState } from 'react';
import '../../styles/writer.css';


function Writer() {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="writer-container" style={{padding:"50px",marginTop:"50px",marginLeft:"25px"}}>
            <h2 style={{marginBottom:"25px"}}>Write Something</h2>
            <textarea
                value={text} 
                onChange={handleTextChange}
                placeholder="Start writing..."
                rows="10"
                cols="50"
                style={{
                    width: "90%",
                    padding: "10px",
                    fontSize: "16px",
                    fontFamily: "Arial, sans-serif",
                    backgroundColor: "#f0f0f0",
                    border:"none",
                    borderRadius:"5px",
                    marginBottom:"25px",
                }}
            ></textarea>

            <div className="output">
                <h3>Your Writing:</h3>
                <p style={{marginTop:"50px",marginLeft:"25px"}}>{text}</p> 
            </div>
        </div>
    );
}

export default Writer;
