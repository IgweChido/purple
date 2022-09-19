
import './App.css';
import Head from './Components/Head'
import MainContainer from './Components/MainContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Head/>
      <BrowserRouter>
        <Routes>
         
          <Route   path="/*" exact element={<MainContainer/>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
