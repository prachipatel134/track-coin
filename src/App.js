
import HomePage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     
        {/* <Header /> */}
        {/* <Route path="/" element={<Header/>}> */}
        <Route path ="/" element={<HomePage/>}  />
        <Route path="/coins/:id" element={<CoinPage/>}  />
       
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
