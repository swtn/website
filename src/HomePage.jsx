import React, { useState } from 'react';
import './HomePage.css';

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dziękujemy za kontakt, ${formData.name}! Odpowiemy najszybciej jak to możliwe.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="homepage-container">
      {/* 1. Nawigacja (Navbar) */}
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="logo-icon"><img src="../public/logo-1.webp" alt="Dannet" /></span>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">O nas</a></li>
          <li><a href="#services">Oferta</a></li>
          <li><a href="#about">Oprogramowanie</a></li>
          <li><a href="#hardware">Sprzęt</a></li>
          <li><a href="#contact">Kontakt</a></li>
          <li><a href="#contact" className="nav-btn">Panel Klienta</a></li>
        </ul>
      </nav>

      {/* 2. Sekcja Główna (Hero Section) */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <h1>Projesjonalne podeśjcie do<br /><span>obsługi informatycznej.</span></h1>
          <p>Kompleksowa obsługa IT, administracja serwerami Windows i Linux, sprawna obsługa zgłoszeń, proste rozwiązania, gwarancja skuteczności.</p>
          <a href="#services" className="hero-btn">Poznaj nasze usługi &rarr;</a>
        </div>
      </header>

      {/* 3. Sekcja Usług (Services) */}
      <section id="services" className="services-section">
        <h2>Nasze Usługi</h2>
        <p className="section-subtitle">Dostarczamy rozwiązania, które napędzają rozwój Twojego biznesu.</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">&#9729;</div>
            <h3>Usługi Chmurowe</h3>
            <p>Projektowanie, migracja i optymalizacja infrastruktury AWS, Azure oraz Google Cloud.</p>
            <span className="service-more">Więcej</span>
          </div>

          <div className="service-card">
            <div className="service-icon">&#9586;&#9585;</div>
            <h3>Rozwój Oprogramowania</h3>
            <p>Tworzenie dedykowanych aplikacji webowych i mobilnych dopasowanych do Twoich potrzeb.</p>
            <span className="service-more">Więcej</span>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128187;</div>
            <h3>Zarządzanie IT</h3>
            <p>Pełny outsourcing IT, administracja sieciami oraz wsparcie techniczne 24/7 dla firm.</p>
            <span className="service-more">Więcej</span>
          </div>

          <div className="service-card">
            <div className="service-icon">&#128737;</div>
            <h3>Cyberbezpieczeństwo</h3>
            <p>Audyty bezpieczeństwa, testy penetracyjne i wdrażanie rygorystycznych polityk ochrony danych.</p>
            <span className="service-more">Więcej</span>
          </div>
        </div>
      </section>

      {/* 4. Sekcja O nas (About) */}
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>Dlaczego Blue Ocean IT?</h2>
          <p>Jesteśmy zespołem inżynierów, architektów systemowych i programistów, którzy nie boją się trudnych wyzwań. Łączymy pasję do nowoczesnych technologii z biznesowym podejściem.</p>
          <p>Do każdego projektu podchodzimy indywidualnie, dbając o czystość kodu, bezpieczeństwo systemów i przede wszystkim – realizację celów biznesowych naszych klientów.</p>
          <div className="stats-box">
            <div className="stat-item">
              <strong>10+</strong>
              <span>Lat doświadczenia</span>
            </div>
            <div className="stat-item">
              <strong>150+</strong>
              <span>Zrealizowanych projektów</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sekcja Kontaktowa (Contact) */}
      <section id="contact" className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Skontaktuj się z nami</h2>
            <p>Masz pytania dotyczące infrastruktury IT w Twojej firmie? Porozmawiajmy o darmowej wycenie.</p>
            <ul className="info-list">
              <li><strong>Telefon:</strong> +48 123 456 789</li>
              <li><strong>Email:</strong> kontakt@blueoceanit.pl</li>
              <li><strong>Adres:</strong> ul. Technologiczna 45, Warszawa</li>
            </ul>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Adres E-mail</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Wyślij formularz</button>
          </form>
        </div>
      </section>

      {/* 6. Stopka (Footer) */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Blue Ocean IT. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}