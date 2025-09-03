'use client';

import Link from 'next/link';
import Image from 'next/image';
import './Hero.css'; // Import the custom CSS

export default function Page() {
  const whatsappNumber = "56932640469";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20hacer%20un%20pedido.`;

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Pan y pizza casera recién hecha</h1>
          <p>Pedidos al WhatsApp +569 3264 0469</p>
          <div>
            <Link href="/pizzas" className="btn btn-primary btn-lg me-2">
              Ver Menú
            </Link>
            <a href={whatsappLink} className="btn btn-success btn-lg" target="_blank" rel="noopener noreferrer">
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Promociones de la Semana</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2070&auto=format&fit=crop"
                  alt="Promoción de Pizza casera"
                  width={800}
                  height={533}
                  className="card-img-top"
                  priority
                />
                <div className="card-body">
                  <h5 className="card-title">¡Tarde de Pizza!</h5>
                  <p className="card-text">Disfruta de nuestras pizzas caseras con los ingredientes más frescos. Perfectas para compartir en cualquier ocasión.</p>
                  <a href={whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer" aria-label="Pedir promoción por WhatsApp">
                    Pedir Promo por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Nuestro Menú de Pizzas</h2>
          <p className="lead">Todas nuestras pizzas a $8.500 c/u — solo retiro.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop"
                  alt="Pizza Pepperoni"
                  width={600}
                  height={400}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Pepperoni</h5>
                  <p className="card-text text-muted">Clásica, sabrosa y crocante.</p>
                  <span className="badge bg-danger">$8.500</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2070&auto=format&fit=crop"
                  alt="Pizza Margarita"
                  width={600}
                  height={400}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Margarita</h5>
                  <p className="card-text text-muted">Tomate, mozzarella y albahaca.</p>
                  <span className="badge bg-danger">$8.500</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-soft">
                <Image
                  src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2069&auto=format&fit=crop"
                  alt="Pizza Pollo BBQ"
                  width={600}
                  height={400}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Pollo BBQ</h5>
                  <p className="card-text text-muted">Pollo, salsa BBQ y cebolla.</p>
                  <span className="badge bg-danger">$8.500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/pizzas" className="btn btn-brand">
              Ver Menú Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section section-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Nuestro Pan Amasado</h2>
            <p className="lead mb-4">
              Disfruta del auténtico sabor de nuestros <strong>panes amasados frescos</strong>, horneados cada día con dedicación y los mejores ingredientes.
              <br />
              Perfectos para acompañar tus comidas o para una once inolvidable.
            </p>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <div className="card shadow-soft">
                <Image
                  src="/images/PAN_AMASADO.jpg"
                  alt="Pan amasado chileno recién horneado"
                  width={800}
                  height={533}
                  className="card-img-top"
                />
              </div>
            </div>
            <div className="col-md-6">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 bg-transparent px-0">
                  <strong className="text-brand">✓ Amasado Tradicional:</strong> La receta de siempre, con el sabor de casa.
                </li>
                <li className="list-group-item border-0 bg-transparent px-0">
                  <strong className="text-brand">✓ Ingredientes de Calidad:</strong> Usamos solo los mejores productos locales.
                </li>
                <li className="list-group-item border-0 bg-transparent px-0">
                  <strong className="text-brand">✓ Pedidos Especiales:</strong> Consulta por masa madre y otras variedades.
                </li>
              </ul>
              <a href={whatsappLink} className="btn btn-success mt-3" target="_blank" rel="noopener noreferrer" aria-label="Consultar por pan en WhatsApp">
                Consultar por Pan Fresco
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
