import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [board,setBoard]=useState(["b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b"]);
  const [first,setFirst]=useState("");
  const [second,setSecond]=useState("");
  const change=(e)=>{
    if(e!=first && e!=second){
      setSecond(first);
      setFirst(e);
    }
  }
  return (
    <div className="App">
     <div className="row">
            <div className='square' style={first=="0"||second=="0"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(0)}> </div>
            <div className='square' style={first=="1"||second=="1"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(1)}> </div>
            <div className='square' style={first=="2"||second=="2"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(2)}> </div>
            <div className='square' style={first=="3"||second=="3"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(3)}> </div>
        </div>
        <div className="row">
            <div className='square' style={first=="4"||second=="4"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(4)}> </div>
            <div className='square' style={first=="5"||second=="5"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(5)}> </div>
             <div className='square' style={first=="6"||second=="6"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
             onClick={()=>change(6)}> </div>
            <div className='square' style={first=="7"||second=="7"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(7)}> </div>
        </div>
        <div className="row">
            <div className='square' style={first=="8"||second=="8"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(8)}> </div>
            <div className='square' style={first=="9"||second=="9"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(9)}> </div>
            <div className='square' style={first=="10"||second=="10"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(10)}> </div>
            <div className='square' style={first=="11"||second=="11"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(11)}> </div>
        </div>
        <div className="row">
            <div className='square' style={first=="12"||second=="12"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(12)}> </div>
            <div className='square' style={first=="13"||second=="13"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(13)}> </div>
            <div className='square' style={first=="14"||second=="14"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(14)}> </div>
            <div className='square' style={first=="15"||second=="15"?{backgroundColor:'red'}:{backgroundColor: 'rgb(46, 50, 255)'}} 
            onClick={()=>change(15)}> </div>
        </div>
    </div>
  );
}

export default App;
