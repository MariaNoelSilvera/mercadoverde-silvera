import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>MercadoVerde</h3>
            <div>
                <button>Sin azúcar</button>
                <button>Celíaco</button>
                <button>Vegano</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;