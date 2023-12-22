import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Mercado Verde"} />
    </>
  );
}

export default App;
