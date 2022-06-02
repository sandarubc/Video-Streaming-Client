import React from "react"
import "./App.css"


function App(){
  
  return(
    <div className="App">
      <header className="App-header">
        <h1>Simple Video Streamer</h1>
      </header>
      <video controls muted>
          <source src="http://127.0.0.1:8080/?video=video.mp4"></source>
        </video>
    </div>

  )
}

export default App;
