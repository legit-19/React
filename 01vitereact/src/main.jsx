import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function Myapp(){
    return(
        <h1>he is a dharmil.</h1>
    )
}

function Yourapp(){
    return(
        <div>
        <h1>you are a great person.</h1>
        </div>
    )
}


// not error 
/*ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)*/

/*const ReactElement = {
    type:'a',
    props:{
        href:`www.google.com`,
        target:'_blank'
    },
    Children:'click me Google Link'
}*/

const Anotherelement = "Dharmil Patel"

const ReactElement = React.createElement(
    'a',
    {href:`www.amazon.com` , target:'_blank'},
    'click me Amazon Link',
   // 'p',
   // 'br',
    Anotherelement
)

const OtherElement = (<a href='www.google.com' target='_blank'>click me</a>)

const container =document.getElementById('root');

const root =createRoot(container);

root.render(
    <>
        <App />
        <Myapp/>
        {Yourapp()}
        {/* <ReactElement/>*/}
        {OtherElement}
        {<br/>}
        {ReactElement}
    </>
  

)

