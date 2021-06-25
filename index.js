import React from 'react'
import ReactDOM from 'react-dom'
import "./index.css"
let currtime=new Date(2021,5,5,15);
currtime=currtime.getHours();

const cssStyle={};


let gretting="";
if(currtime>=1 && currtime<12){
    gretting="Good Morning"
    cssStyle.color="Green"
}
else if(currtime>=12 && currtime<19){
    gretting="Good AfterNoon"
    cssStyle.color="orange"
}
else{
    gretting="Good Night"
    cssStyle.color="black"
}

ReactDOM.render(
    <React.Fragment>
        <div>
    <h1>Hello Sir,<span style={cssStyle}>{gretting}</span></h1>
    </div>
    </React.Fragment>,
    document.getElementById("root")
)