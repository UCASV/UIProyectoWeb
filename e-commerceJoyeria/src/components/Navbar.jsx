import { ShoppingCart } from 'lucide-react'; // Asume que usas un paquete de iconos como lucide o react-icons

function Navbar() {
  const cartItemCount = 3; 

  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#tienda">TIENDA</a>
        <a href="#nosotros">NOSOTROS</a>
      </div>
      <div className="cart-icon">
        <ShoppingCart size={20} />
        <span className="cart-count">{cartItemCount}</span> 
      </div>
    </nav>
  );
}

export default Navbar;