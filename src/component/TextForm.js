import React, {useState} from 'react';
import fontstyle from './TextForm.module.css';

export default function TextForm(props) {
    const handleUpClick = ()=>
    {    let newText =text.toUpperCase();
         setText(newText);   
        props.showalert("Converted to UpperCase!","success");           }
 
    const handlelowClick = ()=>
    {    let newText =text.toLowerCase();
         setText(newText);
         props.showalert("Converted to LowerCase!","success");
                }
    const handleclearClick = ()=>
    {    let newText ="";
         setText(newText);
         props.showalert("Text Cleared","danger");
                }
    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
        props.showalert("Converted to TitleCase!","success");
    }
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
            setText(newText);
            props.showalert("Text is Reversed!","warning");
        };
      let handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showalert("Copied to Clipboard!","success");
      }
    const handleOnChange = (event)=>{
        setText(event.target.value)}
    
            const[text,setText]=useState("");
    return (<>
        <div className="container " style={{color:props.mode==="dark"?"white":"black"}}>
               <h1 className={`mb-3 mx-auto ${fontstyle.fontgluten}`}  style={{width: "500px"}}>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="txtBoxinp" rows="8"></textarea>
                </div>
                            
                <button disabled={text.length===0} className="btn btn-success rounded-pill m-2" onClick={handlelowClick}>Convert To Lower Case</button>
                <button disabled={text.length===0} className="btn btn-success rounded-pill m-2" onClick={intoTitleCase}>Captialize</button>
                <button disabled={text.length===0} className="btn btn-success rounded-pill m-2" onClick={handleclearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-success rounded-pill m-2" onClick={reversed}>Reverse</button>
                <button disabled={text.length===0} className="btn btn-success rounded-pill m-2" onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-success rounded-pill m-2" onClick={handleUpClick}>Convert To UpperCase</button>
                
                </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
            <h2 className={fontstyle.fontgem}>Your Summary Text</h2>
            <p>
               {text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} word and {text.length} character<br/>
               {0.008*text.split(" ").filter((elem)=>{return elem.length!==0}).length} minutes read
               <h2>Preview</h2>
               <p className={fontstyle.fontrobo}>{text.length>0?text:"Nothing to preview"}</p>
            </p>

        </div>
        </>
    )
}
