import React from 'react';
import './HomePage.css';

export default function HomePage() {
  const services = [
    { id: 1, icon: '💻', title: 'Obsługa Informatyczna', desc: 'Kompleksowe wsparcie IT dla małych i dużych przedsiębiorstw.' },
    { id: 2, icon: '🖥️', title: 'Administracja Serwerami', desc: 'Zarządzanie i monitoring serwerów Windows oraz Linux 24/7.' },
    { id: 3, icon: '☁️', title: 'Rozwiązania Chmurowe', desc: 'Migracja danych i zarządzanie infrastrukturą AWS, Azure i Google Cloud.' },
    { id: 4, icon: '🛡️', title: 'Cyberbezpieczeństwo', desc: 'Audyty bezpieczeństwa, testy penetracyjne i ochrona przed atakami.' },
    { id: 5, icon: '🌐', title: 'Sieci Komputerowe', desc: 'Projektowanie, wdrażanie oraz zabezpieczanie firmowych sieci LAN/WAN.' },
    { id: 6, icon: '🚀', title: 'Optymalizacja IT', desc: 'Przyspieszanie działania systemów i redukcja kosztów infrastruktury.' },
  ];

  // NOWOŚĆ: Funkcja do płynnego i inteligentnego przewijania
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Zatrzymujemy domyślny, sztywny skok przeglądarki
    const element = document.getElementById(id);
    
    if (element) {
      // Pobieramy wysokość naszego przyklejonego menu, żeby sekcja pod nie nie wjechała
      const navbarHeight = document.querySelector('.modern-navbar').offsetHeight;
      // Obliczamy dokładną pozycję elementu na stronie z uwzględnieniem marginesu (offsetu)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20; // 20px dodatkowego zapasu dla estetyki

      // Wywołujemy natywną, płynną animację przewijania
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="page-wrapper" id="home">
      {/* Główna nawigacja */}
      <nav className="modern-navbar">
        <div className="nav-logo">
          <span className="brand-name">
            <img src="../public/logo-1.webp" alt="DANNET" onClick={(e) => scrollToSection(e, 'home')} style={{cursor: 'pointer'}} />
          </span>
        </div>
        <ul className="nav-menu">
          {/* Zmieniliśmy atrybut href i dodaliśmy zdarzenie onClick */}
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>O nas</a></li>
          <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Oferta</a></li>
          <li><a href="#software" onClick={(e) => scrollToSection(e, 'software')}>Oprogramowanie</a></li>
          <li><a href="#hardware" onClick={(e) => scrollToSection(e, 'hardware')}>Sprzęt</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Kontakt</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#panel" className="btn-panel">Panel Klienta &rarr;</a>
        </div>
      </nav>

      {/* Nowoczesna Sekcja Hero */}
      <header className="modern-hero">
        <div className="hero-overlay-content">
          <span className="hero-badge">Kompleksowe wsparcie IT</span>
          <h1>
            Profesjonalne podejście do <br />
            <span className="highlight-text">obsługi informatycznej</span>
          </h1>
          <p>
            Administracja serwerami Windows i Linux, sprawna obsługa zgłoszeń 
            oraz proste rozwiązania z gwarancją skuteczności dla Twojego biznesu.
          </p>
          <div className="hero-action-buttons">
            <a href="#contact" className="btn-primary">Darmowa konsultacja</a>
            {/* Przycisk w Hero również uczyńmy płynnym */}
            <a href="#offer" className="btn-secondary" onClick={(e) => scrollToSection(e, 'offer')}>Zobacz ofertę</a>
          </div>
        </div>
      </header>

      {/* Grid 3x3 z usługami */}
      <section id="offer" className="services-grid-section">
        <div className="services-header">
          <span className="services-subtitle">Co możemy dla Ciebie zrobić?</span>
          <h2>Nasze Usługi IT</h2>
          <p className="services-description">
            Dostarczamy niezawodne i nowoczesne rozwiązania technologiczne, które pozwalają Twojej firmie rosnąć bez zakłóceń.
          </p>
        </div>

        <div className="services-grid-3x3">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-item-card"
              onClick={() => alert(`Kliknięto: ${service.title}`)}
            >
              <div className="service-item-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="service-item-link">Dowiedz się więcej &rarr;</span>
            </div>
          ))}
        </div>
      </section>
      {/* NOWA SEKCJA: Oprogramowanie (Asymetryczny Split) */}
<section id="software" className="software-section">
  <div className="software-container">
    
    {/* Lewa strona: Tekst i Główne CTA */}
    <div className="software-text-side">
      <span className="software-badge">Wdrożenia i Licencje</span>
      <h2>Oprogramowanie dopasowane do Twojego biznesu</h2>
      <p>
        Dostarczamy, wdrażamy i konfigurujemy sprawdzone systemy, które podnoszą bezpieczeństwo 
        oraz automatyzują codzienną pracę w firmie. Dbamy o pełną zgodność licencyjną i stabilność.
      </p>
      <a href="#software-page" className="btn-software-more">
        Zobacz pełny katalog systemów <span>&rarr;</span>
      </a>
    </div>

    {/* Prawa strona: Wizualny stos / siatka oferowanych rozwiązań */}
    <div className="software-visual-side">
      <div className="software-mini-grid">
        <div className="software-tag-card">
          <div className="tag-accent-dot"></div>
          <h3>Oprogramowanie MFA</h3>
          <p>Wieloskładnikowe uwierzytelnianie użytkowników</p>
        </div>
        <div className="software-tag-card">
          <div className="tag-accent-dot"></div>
          <h3>Systemy InsERT</h3>
          <p>Narzędzia ERP do zarządzania i księgowości</p>
        </div>
        <div className="software-tag-card">
          <div className="tag-accent-dot"></div>
          <h3>Praca Zdalna</h3>
          <p>Bezpieczne i stabilne środowiska rozproszone</p>
        </div>
        <div className="software-tag-card">
          <div className="tag-accent-dot"></div>
          <h3>Kopie Zapasowe</h3>
          <p>Systemy backupu danych o wysokiej dostępności</p>
        </div>
        <div className="software-tag-card">
          <div className="tag-accent-dot"></div>
          <h3>Antywirusy i EDR</h3>
          <p>Zaawansowana ochrona stacji roboczych</p>
        </div>
        <div className="software-tag-card">
          <div className="tag-accent-dot"></div>
          <h3>Monitoring Urządzeń</h3>
          <p>Ciągły nadzór nad pracą sprzętu firmowego</p>
        </div>
      </div>
    </div>

  </div>
</section>
{/* SEKCJA: Sprzęt i Partnerzy (Odwrócony układ asymetryczny) */}
<section id="hardware" className="hardware-section">
  <div className="hardware-container">
    
    {/* Zamieniona kolejność: Opis po lewej, Nagłówek po prawej */}
    <div className="hardware-intro">
      
      {/* Teraz po lewej: Opis biznesowy */}
      <div className="hardware-desc-side">
        <p>
          Współpracujemy z liderami technologicznymi w Polsce i na świecie. Dostarczamy 
          stacje robocze, zaawansowane macierze dyskowe, serwery oraz bezpieczne rozwiązania sieciowe. 
          Jako certyfikowany partner gwarantujemy pełne wsparcie wdrożeniowe, serwis oraz sprzęt poleasingowy.
        </p>
      </div>

      {/* Teraz po prawej: Nagłówek i Badge */}
      <div className="hardware-title-side">
        <span className="hardware-badge">Autoryzowany Dystrybutor</span>
        <h2>Niezawodny sprzęt IT dla Twojej infrastruktury</h2>
      </div>

    </div>

    {/* Dolna część: Nieskończona karuzela logotypów */}
    <div className="partners-carousel-wrapper">
      <div className="partners-ticker">
        {[
          'qnap-logo.png',
          'dell-logo.png',
          'hp-logo.png',
          'mikrotik-logo.png',
          'zyxel-logo.png',
          'cisco-logo.png'
        ].map((logo, index) => (
          <div className="partner-logo-box" key={`logo-1-${index}`}>
            <img src={`/logos/${logo}`} alt="Partner Logotype" />
          </div>
        ))}
        {[
          'qnap-logo.png',
          'dell-logo.png',
          'hp-logo.png',
          'mikrotik-logo.png',
          'zyxel-logo.png',
          'cisco-logo.png'
        ].map((logo, index) => (
          <div className="partner-logo-box" key={`logo-2-${index}`}>
            <img src={`/logos/${logo}`} alt="Partner Logotype" />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
{/* NOWA SEKCJA: Kontakt (Minimalistyczny Split) */}
<section id="contact" className="contact-section">
  <div className="contact-container">
    
    {/* Lewa strona: Nagłówek i godziny dostępności */}
    <div className="contact-info-side">
      <span className="contact-badge">Porozmawiajmy</span>
      <h2>Rozpocznijmy współpracę</h2>
      <p className="contact-lead">
        Masz pytania dotyczące obsługi IT, serwerów lub licencjonowania oprogramowania? 
        Skontaktuj się z nami – nasz zespół inżynierów jest do Twojej dyspozycji.
      </p>
      
      <div className="work-hours-box">
        <span className="hours-icon">🕒</span>
        <div>
          <h4>Godziny pracy helpdesku</h4>
          <p>Poniedziałek – Piątek: 8:00 – 16:00</p>
          <p className="hours-note">Dla klientów z umowami SLA: wsparcie 24/7/365</p>
        </div>
      </div>
    </div>

    {/* Prawa strona: Interaktywne karty teleadresowe */}
    <div className="contact-cards-side">
      
      <div className="contact-detail-card">
        <div className="contact-card-icon">📍</div>
        <div className="contact-card-content">
          <span>Odwiedź nasze biuro</span>
          <h3>ul. Kineskopowa 1</h3>
          <p>05-500 Piaseczno</p>
        </div>
      </div>

      <a href="tel:+48222010739" className="contact-detail-card clickable">
        <div className="contact-card-icon">📞</div>
        <div className="contact-card-content">
          <span>Zadzwoń do nas</span>
          <h3>+48 22 201 07 39</h3>
          <p>Szybki kontakt z działem technicznym</p>
        </div>
        <span className="card-arrow">&rarr;</span>
      </a>

      <a href="mailto:biuro@dannet.pl" className="contact-detail-card clickable">
        <div className="contact-card-icon">✉️</div>
        <div className="contact-card-content">
          <span>Napisz wiadomość</span>
          <h3>biuro@dannet.pl</h3>
          <p>Odpowiadamy w ciągu maksymalnie 2 godzin</p>
        </div>
        <span className="card-arrow">&rarr;</span>
      </a>

    </div>

  </div>
</section>
{/* NOWA SEKCJA: Profesjonalna Stopka (Footer) */}
      <footer className="modern-footer">
        <div className="footer-top">
          <div className="footer-container">
            
            {/* Kolumna 1: O firmie i krótki opis */}
            <div className="footer-column brand-col">
              <img src="../public/logo-1.webp" alt="DANNET" className="footer-logo" />
              <p className="footer-brand-desc">
                Dostarczamy niezawodne rozwiązania IT, które zabezpieczają i napędzają rozwój Twojego biznesu. Twój zewnętrzny dział techniczny.
              </p>
            </div>

            {/* Kolumna 2: Szybka nawigacja (Z płynnym przewijaniem) */}
            <div className="footer-column">
              <h3>Mapa Strony</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>O nas</a></li>
                <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Oferta IT</a></li>
                <li><a href="#software" onClick={(e) => scrollToSection(e, 'home')}>Oprogramowanie</a></li>
                <li><a href="#hardware" onClick={(e) => scrollToSection(e, 'home')}>Sprzęt komputerowy</a></li>
              </ul>
            </div>

            {/* Kolumna 3: Oferowane rozwiązania */}
            <div className="footer-column">
              <h3>Nasze Rozwiązania</h3>
              <ul className="footer-links">
                <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Obsługa Informatyczna</a></li>
                <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Administracja Serwerami</a></li>
                <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Cyberbezpieczeństwo</a></li>
                <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Kopie Zapasowe</a></li>
              </ul>
            </div>

            {/* Kolumna 4: Informacje prawne i strefa klienta */}
            <div className="footer-column">
              <h3>Dla Klienta</h3>
              <ul className="footer-links">
                <li><a href="#panel">Panel Klienta (Mój DANNET)</a></li>
                <li><a href="#privacy">Polityka Prywatności</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Dolny pasek: Prawa autorskie */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>&copy; {new Date().getFullYear()} DANNET. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}