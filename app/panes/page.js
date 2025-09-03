import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pan Amasado | Delicias del Gueyo",
  description: "Disfruta de nuestro pan amasado fresco, horneado cada día con los mejores ingredientes.",
};

const whatsappNumber = "56932640469";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero consultar por el pan amasado.")}`;

export default function PanesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="card shadow-soft">
                <Image
                  src="/images/PAN_AMASADO.jpg"
                  alt="Pan amasado chileno recién horneado"
                  width={800}
                  height={533}
                  className="card-img-top"
                  priority
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="section-title">Pan Amasado</h1>
              <p className="lead">
                El auténtico sabor de casa en cada bocado. Nuestro pan amasado es preparado diariamente con una receta tradicional, asegurando una textura suave y un sabor inigualable.
              </p>
              <ul className="list-group list-group-flush mt-4">
                <li className="list-group-item border-0 bg-transparent px-0">
                  <strong className="text-brand">✓ Frescura Garantizada:</strong> Horneado cada mañana para ti.
                </li>
                <li className="list-group-item border-0 bg-transparent px-0">
                  <strong className="text-brand">✓ Ingredientes de Calidad:</strong> Harina selecta y el toque justo de cariño.
                </li>
                <li className="list-group-item border-0 bg-transparent px-0">
                  <strong className="text-brand">✓ Perfecto para Toda Ocasión:</strong> Ideal para el desayuno, la once o para acompañar tus comidas.
                </li>
              </ul>
              <div className="mt-4">
                <a
                  href={whatsappLink}
                  className="btn btn-success me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Consultar por pan en WhatsApp"
                >
                  Consultar por Pan
                </a>
                <Link href="/" className="btn btn-outline-secondary">
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
