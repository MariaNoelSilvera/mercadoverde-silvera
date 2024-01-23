import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path="/products/:categoryId" element={<ItemListContainer/>} />
        <Route path="/product/:productId" element={<ItemDetailContainer/>} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
