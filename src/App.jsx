import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Mercado Verde"} />
      <ItemCount stock={10} initial={1} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
    </>
  );
}

export default App;
