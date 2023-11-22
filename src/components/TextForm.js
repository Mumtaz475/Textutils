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
        // let text = document.getElementById("exampleFormControlTextarea1");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard!', "success");
    } 

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed!', "success");
    }
    // const countWords = () => {
    //     return text.split(' ').filter(a => a.trim()).length;
    //   };
    

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
     

  return (
    <div>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control " value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#006494', color:props.mode==='dark'?'white':'black'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupcaseClick}>Capitalize Word</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>


            </div>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{(0.008*text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </div>
  );
}
