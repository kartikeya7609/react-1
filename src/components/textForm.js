import React,{useState} from 'react';

export default function TextForm(props) {
const handleUpClick = () => {
console.log("Uppercase was clicked" + text);
let newText = text.toUpperCase();
setText(newText);
}
const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    }
  
const handleClearClick = () => {
    let newText =" " ;
    setText(newText);
    }  
const handleOnChange = (event) => {
    setText(event.target.value)
}
const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999); // For mobile devices
    navigator.clipboard.writeText(text.value);
    alert("Copied the text: " + text.value);
}
    const [text, setText] = useState('Enter text here');
  return (
    <div className='bg-dark text-light p-3'>
    <h1>{props.title}</h1>
    <div className=" d-flex justify-content-center align-items-center flex-column bg-dark ">
      <label htmlFor="myBox" className="form-label p-3 text-success	fs-2">Example Text Area</label>
      <textarea className="form-control m-4 w-50" value={text} onChange = {handleOnChange} id="myBox" rows="10" cols="5"></textarea>
      <div className="d-flex justify-content-center align-items-center flex-row">
      <button className="btn btn-success " onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-success m-3 " onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-success  " onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-success m-3 " onClick={handleCopy}>copy Text</button>
</div>
    </div>
    <div className="container p-3 bg-dark text-light">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </div>
  );
}
