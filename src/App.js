import React from "react";
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action,Originals,comedy,romance,horror,docmenry } from "./urls/url";

function App() {
  return (
    <div className="App">
        <NavBar/>t
        <Banner/>
        <RowPost url={Originals} title='Netflix Originals'/>
        <RowPost url={action}  title='Action' isSmall/>
        <RowPost url={comedy}  title='Comedy' isSmall/>
        <RowPost url={romance}  title='Romance' isSmall/>
        <RowPost url={horror}  title='Horror' isSmall/>
        <RowPost url={docmenry}  title='Documenry' isSmall/>
        
    </div>
  );
}

export default App;
