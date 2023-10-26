import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // text = 'fusut ka busut'; // Wrong way to set the state
    // setText('fusut ka busut'); // Correct way to set the state

    const handleLoClick = ()=>{
      // console.log('UpperCase was Clicked', text.toUpperCase())
      setText(text.toLowerCase())
    }
    const handleUpClick = ()=>{
      // console.log('UpperCase was Clicked', text.toUpperCase())
      setText(text.toUpperCase())
    }
    const handleCopyClick = ()=>{
      navigator.clipboard.writeText(text);
      alert('Text copied')
    }
    const handleClearClick = ()=>{
      setText('')
    }
    const handleOnChange = (event)=>{
      // console.log('On Change')
      setText(event.target.value)
    }
  return (<>
    <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="10" placeholder='enter text here' style={{background: props.theme==='light'?'white':'#4d4d4d', color: props.theme==='light'?'black ':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Conver To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').filter(element=> {return element!==''}).length} words and {text.length} charactes</p>
      <p>{0.008 * text.length} minutes to read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
  </>)
}
