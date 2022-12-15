import React, {useState} from "react";



export default function TextForm(props) {
    const [text, setText] = useState(''); 
    const converUpperCase = (event)=>{
        let data = text.toUpperCase();
        setText(data);
        props.showAlert("Converted to Upper Case","success");
      }
      const converLowerCase = (event)=>{
        let data = text.toLowerCase();
        setText(data);
        props.showAlert("Converted to Lower Case","success");
      }
      
      const converProperCase = (event)=>{
        function toTitleCase(str) {
          return str.replace(
            /\w\S*/g,
            function(txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
            );
        }
        let data = toTitleCase(text);
        setText(data);
        props.showAlert("Converted to propar Case","success");
      }
      const clearText = (event)=>{
        setText("");
        props.showAlert("Text has been cleared","danger");
    }
    const handelOnchange = (event)=>{
        setText(event.target.value);
    }
    let words = text.split(" ").length;
    return (
        <>
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control " style={{backgroundColor:props.mode==="light"?"white":"#565657",color:props.mode==="light"?"black":"white"}} id="MyBox" rows="8" value={text} onChange={handelOnchange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={converUpperCase}>Conver to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={converLowerCase}>Conver to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={converProperCase}>Conver to ProperCase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
    </div>
    <div className={`container my-2 text-${props.mode==="light"?"dark":"light"}`}>
        <h2>Your Text Summary</h2>
        <p>{text===""?"0":words} Words and {text.length} chracters</p>
        <p>It takes {text===""?"0":0.008*words} Minutes to read </p>
        <h2>Perview</h2>
        <p>{text===""?"Enter text to perview":text}</p>

    </div>
        </>
  );
}
