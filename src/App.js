
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import LikedSongs from "./components/favor/LikedSongs";
import Footer from "./components/footer/Footer";
import "./App.scss"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAllSongs} from "./redux/action/MusicAction";

import m2w from "./M2W.jpg"
function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllSongs())
  },[])

  return (
    <div className="App">
      <Router>
        <div className="App_header">
          <Header/>
        </div>
        <div className="App_body">
          <Routes>
            <Route path='/' element={<Body/>}/>
            <Route path='/favor' element={<LikedSongs/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
