import regeneratorRuntime from "regenerator-runtime"; //transpile async funcion
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faHand, faCopy } from "@fortawesome/free-solid-svg-icons";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from "react-use-clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { useState } from "react";
import "./index.css"
//SpeechRecognition : manages the global state and provide functions to turn on and off microphone
//useSpeechRecognition is a hook and it picks up transcript of speech 



const App = () => {
    //const [textToCopy, setTextToCopy] = useState();
   // const [isCopied, setCopied] = useClipboard(textToCopy, {
       // successDuration: 3000
   // });
//    const code = "What to copy";
  // const clear=()=>{
    // let f= document.getElementById("a");
    // f.innerText="";


  // }
    //subscribe to thapa technical for more awesome videos

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Raj Speech to Text Converter</h2>

                <p>Speak your heart & Share with friends!</p>

                <div class="main">
                    <div class="c first">T</div>
                    <div class="c second">A</div>
                    <div class="c third">L</div>
                    <div class="c fourth">K</div>


                </div>

                <div className="main-content" id="a"onChange={() => setTextToCopy(transcript)}>
                    {transcript}
                </div>


                <div className="btn-style">

                  
                   <button><CopyToClipboard text={transcript} onCopy={() => window.alert("Copied! Now share it!")}>
                   <FontAwesomeIcon style={{ color: 'blue', fontSize: 11 }} icon={faCopy} />
</CopyToClipboard></button>
                   
                   <button onClick={() => window.location.reload(false)}>Clear </button>
                    <button onClick={startListening}>Talk!<FontAwesomeIcon style={{ color: 'blue', fontSize: 11 }} icon={faMicrophone} /></button>
                    <button onClick={SpeechRecognition.stopListening}>Stop!<FontAwesomeIcon style={{ color: 'red', fontSize: 11 }} icon={faHand} /></button>

                </div>

            </div>
            <div style={{ textAlign: 'center' }}><a style={{ textDecoration: 'none',color: 'purple' ,fontWeight:'bold' }} href="https://rjtxt.netlify.app/" target="_blank">Go to Text Editor</a>
            </div>



            <p style={{ color: 'blue' }}>Copyright &copy; 2023 | @Raj | All Rights Reserved.</p>

        </>
    );
};
export default App;

//speech>npm i react-use-clipboard
//speech>npm i --save react-speech-recognition
//speech> npm i --save regenerator-runtime
//speech>1. Add SVG Core :npm i --save @fortawesome/fontawesome-svg-core
//2. Add Icon Packages :
//npm i --save @fortawesome/free-solid-svg-icons
//npm i --save @fortawesome/free-regular-svg-icons

//3. Add the React Component :npm i --save @fortawesome/react-fontawesome@latest

//You're Ready to Add Icons!
//npm install --save react-copy-to-clipboard