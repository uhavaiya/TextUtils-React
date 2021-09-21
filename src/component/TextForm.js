import React, { useState } from 'react'


function TextForm(props) {
    const handleUpCase = () => {
        // const newText = text.toUpperCase()
        setText(text.toUpperCase())
        props.showAlert("converted to upperCase!", "success")
    }
    const handleLoCase = () => {
        setText(text.toLowerCase())
        props.showAlert("converted to lowerCase!", "success")

    }
    const handleclear = () => {
        setText(" ")
    }

    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState()

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handelOnChange} className="form-control" placeholder="Enter your text" id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to UpperCase </button>
                <button className="btn btn-primary mx-2" onClick={handleLoCase}>Convert to LowerCase </button>
                <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text </button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy Text </button>
            </div>
            <div className="container ">
                <h1>Your Text Summary</h1>
                {/* <p>{text.split(" ").length} words and characters {text.length}</p> */}
                <h2>Privew </h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
