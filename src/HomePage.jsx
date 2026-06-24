import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  // 1. ZAKTUALIZOWANA TABLICA USŁUG (6 nowych obszarów zgodnych z bazą danych)
  const services = [
    { id: 1, slug: 'obsluga-it', icon: '💻', title: 'Obsługa Informatyczna Firm', desc: 'Kompleksowy outsourcing IT, zdalny helpdesk i stałe wsparcie inżynierskie dla Twojego biznesu.' },
    { id: 2, slug: 'serwis-komputerow', icon: '🛠️', title: 'Serwis Komputerów', desc: 'Szybka diagnostyka, naprawy sprzętowe oraz modernizacje laptopów i komputerów stacjonarnych.' },
    { id: 3, slug: 'administracja-siecia', icon: '🌐', title: 'Administracja Siecią', desc: 'Projektowanie, konfiguracja i zabezpieczanie firmowych sieci LAN, Wi-Fi oraz tuneli VPN.' },
    { id: 4, slug: 'tworzenie-stron', icon: '🚀', title: 'Tworzenie Stron Internetowych', desc: 'Nowoczesne, szybkie i responsywne strony www zoptymalizowane pod wyszukiwarkę Google.' },
    { id: 5, slug: 'backup-i-monitoring', icon: '🛡️', title: 'Backupy i Monitorowanie', desc: 'Automatyczne kopie zapasowe danych (reguła 3-2-1) oraz ciągły nadzór nad stabilnością systemów.' },
    { id: 6, slug: 'domeny-i-ssl', icon: '🔒', title: 'Domeny i Certyfikaty SSL', desc: 'Zarządzanie domenami, zaawansowana konfiguracja bezpiecznego DNS oraz wdrażanie szyfrowania HTTPS.' },
  ];

  // Funkcja do płynnego i inteligentnego przewijania na tej samej stronie
  const scrollToSection = (e, id) => {
    e.preventDefault(); 
    const element = document.getElementById(id);
    
    if (element) {
      const navbarHeight = document.querySelector('.modern-navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 20; 

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
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>O nas</a></li>
          <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Oferta</a></li>
          <li><a href="#software" onClick={(e) => scrollToSection(e, 'software')}>Oprogramowanie</a></li>
          {/* ZMIANA 1: Zamiana zwykłego linku na przekierowanie do nowej podstrony sprzętowej */}
          <li><Link to="/sprzet" className="nav-link-hardware">Sprzęt</Link></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Kontakt</a></li>
        </ul>
        <div className="nav-actions">
          <a href="#panel" className="btn-panel">Panel Klienta &rarr;</a>
        </div>
      </nav>

      {/* Sekcja Hero */}
      <header className="modern-hero">
        <div className="hero-overlay-content">
          <span className="hero-badge">Kompleksowe wsparcie IT</span>
          <h1>
            Profesjonalne podejście do <br />
            <span className="highlight-text">obsługi informatycznej</span>
          </h1>
          <p>
            Administracja systemami, sprawna obsługa zgłoszeń, opieka nad ciągłością 
            biznesu oraz proste rozwiązania z gwarancją skuteczności dla Twojej firmy.
          </p>
          <div className="hero-action-buttons">
            <a href="#contact" className="btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Darmowa konsultacja</a>
            <a href="#offer" className="btn-secondary" onClick={(e) => scrollToSection(e, 'offer')}>Zobacz ofertę</a>
          </div>
        </div>
      </header>

      {/* Grid z usługami - Automatycznie linkuje do Twoich 6 nowych podstron */}
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
            <Link 
              to={`/oferta/${service.slug}`} 
              key={service.id} 
              className="service-item-card"
              style={{ textDecoration: 'none' }}
            >
              <div className="service-item-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="service-item-link">Dowiedz się więcej &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEKCJA: Oprogramowanie (Dostosowane linki wewnętrzne) */}
      <section id="software" className="software-section">
        <div className="software-container">
          
          <div className="software-text-side">
            <span className="software-badge">Wdrożenia i Licencje</span>
            <h2>Oprogramowanie dopasowane do Twojego biznesu</h2>
            <p>
              Dostarczamy, wdrażamy i konfigurujemy sprawdzone systemy, które podnoszą bezpieczeństwo 
              oraz automatyzują codzienną pracę w firmie. Dbamy o pełną zgodność licencyjną i stabilność.
            </p>
            <Link to="/oferta/backup-i-monitoring" className="btn-software-more">
              Zobacz systemy backupu <span>&rarr;</span>
            </Link>
          </div>

          <div className="software-visual-side">
            <div className="software-mini-grid">
              {/* Przekierowania do pasujących logicznie nowych podstron ofertowych */}
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
              <Link to="/oferta/administracja-siecia" className="software-tag-card">
                <div className="tag-accent-dot"></div>
                <h3>Praca Zdalna</h3>
                <p>Bezpieczne i stabilne środowiska rozproszone</p>
              </Link>
              <Link to="/oferta/backup-i-monitoring" className="software-tag-card">
                <div className="tag-accent-dot"></div>
                <h3>Kopie Zapasowe</h3>
                <p>Systemy backupu danych o wysokiej dostępności</p>
              </Link>
              <Link to="/oferta/obsluga-it" className="software-tag-card">
                <div className="tag-accent-dot"></div>
                <h3>Antywirusy i EDR</h3>
                <p>Zaawansowana ochrona stacji roboczych</p>
              </Link>
              <Link to="/oferta/backup-i-monitoring" className="software-tag-card">
                <div className="tag-accent-dot"></div>
                <h3>Monitoring Urządzeń</h3>
                <p>Ciągły nadzór nad pracą sprzętu firmowego</p>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SEKCJA: Sprzęt i Partnerzy (Zintegrowana z osobną podstroną) */}
      <section id="hardware" className="hardware-section">
        <div className="hardware-container">
          <div className="hardware-intro">
            <div className="hardware-desc-side">
              <p>
                Współpracujemy z liderami technologicznymi w Polsce i na świecie. Dostarczamy 
                stacje robocze, zaawansowane macierze dyskowe, serwery oraz bezpieczne rozwiązania sieciowe. 
                Jako certyfikowany partner gwarantujemy pełne wsparcie wdrożeniowe, serwis oraz sprzęt poleasingowy.
              </p>
              {/* ZMIANA 2: Dodany nowoczesny, wyraźny przycisk akcji przekierowujący do pełnej oferty sprzętowej */}
              <div className="hardware-action-wrapper" style={{ marginTop: '24px' }}>
                <Link to="/sprzet" className="btn-hardware-catalog-link">
                  Sprawdź specyfikację sprzętową &rarr;
                </Link>
              </div>
            </div>
            <div className="hardware-title-side">
              <span className="hardware-badge">Autoryzowany Dystrybutor</span>
              <h2>Niezawodny sprzęt IT dla Twojej infrastruktury</h2>
            </div>
          </div>

          <div className="partners-carousel-wrapper">
            <div className="partners-ticker">
              {['qnap-logo.png', 'dell-logo.png', 'hp-logo.png', 'mikrotik-logo.png', 'zyxel-logo.png', 'cisco-logo.png'].map((logo, index) => (
                <div className="partner-logo-box" key={`logo-1-${index}`}>
                  <img src={`/logos/${logo}`} alt="Partner Logotype" />
                </div>
              ))}
              {['qnap-logo.png', 'dell-logo.png', 'hp-logo.png', 'mikrotik-logo.png', 'zyxel-logo.png', 'cisco-logo.png'].map((logo, index) => (
                <div className="partner-logo-box" key={`logo-2-${index}`}>
                  <img src={`/logos/${logo}`} alt="Partner Logotype" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA: Kontakt */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info-side">
            <span className="contact-badge">Porozmawiajmy</span>
            <h2>Rozpocznijmy współpracę</h2>
            <p className="contact-lead">
              Masz pytania dotyczące obsługi IT, sieci, backupów lub stron www? 
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

      {/* Profesjonalna Stopka (Footer z nowym zestawem linków) */}
      <footer className="modern-footer">
        <div className="footer-top">
          <div className="footer-container">
            <div className="footer-column brand-col">
              <img src="../public/logo-1.webp" alt="DANNET" className="footer-logo" />
              <p className="footer-brand-desc">
                Dostarczamy niezawodne rozwiązania IT, które zabezpieczają i napędzają rozwój Twojego biznesu. Twój zewnętrzny dział techniczny.
              </p>
            </div>

            <div className="footer-column">
              <h3>Mapa Strony</h3>
              <ul className="footer-links">
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>O nas</a></li>
                <li><a href="#offer" onClick={(e) => scrollToSection(e, 'offer')}>Oferta IT</a></li>
                <li><a href="#software" onClick={(e) => scrollToSection(e, 'software')}>Oprogramowanie</a></li>
                {/* ZMIANA 3: Zmiana linku w mapie strony stopki */}
                <li><Link to="/sprzet">Sprzęt komputerowy</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Nasze Rozwiązania</h3>
              <ul className="footer-links">
                <li><Link to="/oferta/obsluga-it">Obsługa Informatyczna</Link></li>
                <li><Link to="/oferta/administracja-siecia">Administracja Sieciami</Link></li>
                <li><Link to="/oferta/backup-i-monitoring">Kopie Zapasowe i Monitoring</Link></li>
                <li><Link to="/oferta/tworzenie-stron">Strony Internetowe</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Dla Klienta</h3>
              <ul className="footer-links">
                <li><a href="#panel">Panel Klienta (Mój DANNET)</a></li>
                <li><a href="#privacy">Polityka Prywatności</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-container">
            <p>&copy; {new Date().getFullYear()} DANNET. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}