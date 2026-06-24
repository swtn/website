import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // hook useLocation zwraca obiekt reprezentujący aktualny adres URL strony
  const { pathname } = useLocation();

  useEffect(() => {
    // Za każdym razem, gdy zmienia się ścieżka (pathname), wymuszamy przewinięcie na samą górę
    window.scrollTo(0, 0);
  }, [pathname]); // Tablica zależności nasłuchuje na zmianę adresu url

  // Komponent nie renderuje nic wizualnego, działa wyłącznie jako skrypt w tle
  return null;
}