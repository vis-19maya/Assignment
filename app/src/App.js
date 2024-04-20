import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from './Pages/Home';
import AddBlog from './Pages/AddBlog'; 


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar /> 
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/add_blog' element={<AddBlog/>}/>
    
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;