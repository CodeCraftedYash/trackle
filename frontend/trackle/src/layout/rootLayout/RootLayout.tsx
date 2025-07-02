import { Outlet } from '@tanstack/react-router';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function RootLayout() {
  return (
    <>
      <Header /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
