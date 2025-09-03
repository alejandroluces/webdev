import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Menú de Pizzas | Delicias del Gueyo",
  description: "Pizzas artesanales: Pepperoni, Margarita, Pollo BBQ, Jamón Tomate y Champiñón Aceituna. $8.500 c/u — Solo retiro.",
};

const whatsappNumber = "56932640469";

const pizzas = [
  {
    name: "Pepperoni",
    desc: "Clásica con pepperoni y queso mozzarella.",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Margarita",
    desc: "Tomate, mozzarella y hojas de albahaca fresca.",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Pollo BBQ",
    desc: "Pollo desmenuzado, salsa BBQ y cebolla morada.",
    img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2069&auto=format&fit=crop",
  },
];

function waLink(product) {
  const text = `Hola, quiero hacer un pedido: Pizza ${product}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function PizzasPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="text-center section-title">Menú de Pizzas</h1>
          <p className="text-center lead">
            Precio: <strong>$8.500 c/u</strong> — Solo retiro. Pedidos al WhatsApp +569 3264 0469
          </p>

          <div className="row g-4 mt-3">
            {pizzas.map((p) => (
              <div key={p.name} className="col-sm-6 col-lg-4">
                <div className="card h-100 shadow-soft">
                  <Image
                    src={p.img}
                    alt={`Pizza ${p.name}`}
                    width={600}
                    height={400}
                    className="card-img-top"
                    priority={p.name === "Pepperoni"}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{p.name}</h5>
                    <p className="card-text text-muted">{p.desc}</p>
                    <div className="mt-auto d-flex align-items-center justify-content-between">
                      <span className="badge bg-danger">$8.500</span>
                      <a
                        className="btn btn-success btn-sm"
                        href={waLink(p.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Pedir pizza ${p.name} por WhatsApp`}
                      >
                        Pedir por WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/" className="btn btn-outline-secondary">Volver al inicio</Link>
          </div>
        </div>
      </section>
    </>
  );
}
