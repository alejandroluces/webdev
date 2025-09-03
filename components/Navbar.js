import Link from 'next/link';

const Navbar = () => {
  const whatsappNumber = "56932640469";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20hacer%20un%20pedido.`;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-pizza sticky-top">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          🍕 Delicias del Gueyo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/panes" className="nav-link">
                Panes
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pizzas" className="nav-link">
                Pizzas
              </Link>
            </li>
          </ul>
          <div className="d-lg-flex ms-lg-3 mt-3 mt-lg-0">
            <a
              href={whatsappLink}
              className="btn btn-success btn-sm px-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir por WhatsApp"
            >
              Pedir ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
