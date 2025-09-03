const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center p-4 mt-auto">
      <div className="container">
        <p>
          Delicias del Gueyo &copy; {year}
        </p>
        <p>
          Pedidos por WhatsApp: +569 3264 0469 | Email: correo@dominio.com
        </p>
        <p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">Instagram</a>
          | 
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white ms-2">TikTok</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
