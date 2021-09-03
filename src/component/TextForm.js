import React, {useState} from 'react'
 

export default function TextForm(props) {
    const handleUpClick = ()=>
    {    let newText =text.toUpperCase();
         setText(newText);              }
 
    const handlelowClick = ()=>
    {    let newText =text.toLowerCase();
         setText(newText);
                }
    const handleclearClick = ()=>
    {    let newText ="";
         setText(newText);
                }
    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
      };
      let handleCopy = () => {
        navigator.clipboard.writeText(text);
    
        alert("Copied the text");
      }
    const handleOnChange = (event)=>{
        setText(event.target.value)}
    
            const[text,setText]=useState("");
    return (<>
        <div className="container " style={{color:props.mode==="dark"?"white":"black"}}>
               <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#7E8A97":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="txtBoxinp" rows="8"></textarea>
                </div>
                <button className="btn btn-success m-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-success m-2" onClick={handlelowClick}>Convert To Lower Case</button>
                <button className="btn btn-success m-2" onClick={intoTitleCase}>Captialize</button>
                <button className="btn btn-success m-2" onClick={handleclearClick}>Clear</button>
                <button className="btn btn-success m-2" onClick={reversed}>Reverse</button>
                <button className="btn btn-success m-2" onClick={handleCopy}>Copy to Clipboard</button>
                
                </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>Your Summary Text</h2>
            <p>
               {text.split(" ").length} word and {text.length} character<br/>
               {0.008*text.split(" ").length} minutes read
               <h2>Preview</h2>
               <p>{text.length>0?text:"Enter your TEXT aove to see it's preview"}</p>
            </p>

        </div>
        </>
    )
}
