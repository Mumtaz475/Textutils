import React, {useState} from 'react'




export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converter to Uppercase!', "success");
    }
     

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converter to Lowercase!', "success");
    } 
    
    const handleupcaseClick = () => {
        let newText = text.charAt(0).toUpperCase(text) + text.slice(1);
        
        setText(newText)
        console.log(
            text
              .toLowerCase()
              .split(' ')
              .map(text => {
                return text.charAt(0).toUpperCase() + text.slice(1);
              }),
          );
        

    } 
    

    const handleClearClick = () => {
        let newText = ' ';
        setText(newText);
        props.showAlert('Text cleared!', "success");
        
        
    } 
    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!', "success");
    } 

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed!', "success");
    }
    const countWords = () => {
        return text.split(' ').filter(a => a.trim()).length;
      };
    

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <div>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control " value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#d90429', color:props.mode==='dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleupcaseClick}>Capitalize Word</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>


            </div>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{countWords()}words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length.toExponential} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to prievew it here"}</p>
        </div>
    </div>
  );
}
