// 'use client';
// import React, { useState } from 'react';
// import '../../styles/writer.css';

// function Writer() {
//     const [text, setText] = useState('');
//     const handleTextChange = (e) => {
//         setText(e.target.value);
//     };

//     return (
//         <div className="writer-container" style={{padding:"50px",marginTop:"50px",marginLeft:"25px"}}>
//             <h2 style={{marginBottom:"25px"}}>Write Something</h2>
//             <textarea
//                 value={text} 
//                 onChange={handleTextChange}
//                 placeholder="Start writing..."
//                 rows="10"
//                 cols="50"
//                 style={{
//                     width: "40%",
//                     height:"80vh",
//                     resize: "none",
//                     outline: "none",
//                     boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
//                     padding: "10px",
//                     fontSize: "16px",
//                     fontFamily: "Arial, sans-serif",
//                     backgroundColor: "#f0f0f0",
//                     border:"none",
//                     borderRadius:"5px",
//                     marginBottom:"25px",
//                 }}
//             ></textarea>

//             <div className="output">
//                 <h3>Your Writing:</h3>
//                 <p style={{marginTop:"50px",marginLeft:"25px"}}>{text}</p> 
//             </div>
//         </div>
//     );
// }

// export default Writer;


'use client';

import { useState } from 'react';
import { CiCircleChevLeft } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import "../../styles/writer.css";

export default function WriterPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleExport = () => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = title ? `${title}.txt` : 'unsent-thought.txt';
    a.click();
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear this?")) {
      setTitle('');
      setContent('');
    }
  };

  return (
    <>
    <div className='container'>
        <span className='backbuttoncontainer'><button className='back-button' onClick={() => window.history.back()}><FaArrowLeft style={{fontSize:"16px", marginRight:"5px"}}/>Back</button></span>
        <div style={styles.container}>
        <input
            style={styles.title}
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
            style={styles.textarea}
            placeholder="Start typing your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <div style={styles.buttonBar}>
            <button style={styles.button} onClick={handleExport}>Export</button>
            <button style={styles.buttonDanger} onClick={handleClear}>Forget</button>
        </div>
        </div>
        {/* <div className='songplayer'>
        <iframe 
            style={{ borderRadius: "12px" }} 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EIeU3RFfPV9ui?utm_source=generator" 
            width="60%" 
            height="200" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
        </div> */}
    </div>
    </>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    fontSize: '1.25rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  textarea: {
    height:"80vh",
    padding: '1rem',
    fontSize: '1rem',
 
    lineHeight: '1.6',
    border: '1px solid #ddd',
    borderRadius: '6px',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    background: '#222',
    color: '#fff',
    cursor: 'pointer',
  },
  buttonDanger: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    background: '#ff4d4d',
    color: '#fff',
    cursor: 'pointer',
  },
};
