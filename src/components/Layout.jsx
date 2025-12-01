import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const backgrounds = {
  '/': 'url("/imagenes/FONDO1.jpg")',
  '/quienes-somos': 'url("/imagenes/FONDO2.jpg")',
  '/pizzas': 'url("/imagenes/FONDO4.jpg")',
  '/contacto': 'url("/imagenes/FONDO3.jpg")',
  '/personalizarpizzas': 'url("/imagenes/FONDO5.jpg")',
  '/iniciar-sesion': 'url("/imagenes/FONDO3.jpg")',
  '/registro': 'url("/imagenes/FONDO3.jpg")',
  '/pedido': 'url("/imagenes/FONDO5.jpg")'
};

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const bg = backgrounds[location.pathname] || 'none';
    document.body.style.backgroundImage = bg;
  }, [location.pathname]);

  // Creamos una clase dinámica según la ruta
  const pageClass = location.pathname === '/' 
    ? 'page-home' 
    : `page-${location.pathname.replace('/', '')}`;

  return (
    <>
      <Header />
      <main className={pageClass}>{children}</main>
      <Footer />
    </>
  );
}
