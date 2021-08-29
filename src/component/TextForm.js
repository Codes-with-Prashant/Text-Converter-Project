import React, {useState} from 'react'
 

export default function TextForm(props) {
    const handleUpClick = ()=>
    {    let newText =text.toUpperCase();
         setText(newText);              }
 
    const handlelowClick = ()=>
    {    let newText =text.toLowerCase();
         setText(newText);
                }

    const handleOnChange = (event)=>{
        setText(event.target.value)}
    
            const[text,setText]=useState("Enter Text Here");
    return (<>
        <div className="container bg-info">   <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="txtBoxinp" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-success mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-outline-success mx-2" onClick={handlelowClick}>Convert To UpperCase</button>
        </div>
        <div className="container my-3">
            <h2>Your Summary Text</h2>
            <p>
               {text.split(" ").length} word and {text.length} character<br/>
               {0.008*text.split(" ").length} minutes read
               <h2>Preview</h2>
               <p>{text}</p>
            </p>

        </div>
        </>
    )
}
