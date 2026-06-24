import React from 'react';
import { Link } from 'react-router-dom';
import { hardwareData } from './data/hardwareData';
import './HardwarePage.css';

export default function HardwarePage() {
  const { intro, categories, partnership } = hardwareData;

  return (
    <div className="hardware-page-wrapper">
      {/* SEKCJA 1: HERO */}
      <header className="hardware-hero">
        <div className="hardware-hero-container">
          <span className="hardware-badge">{intro.badge}</span>
          <h1>{intro.title}</h1>
          <p>{intro.desc}</p>
          <div className="hardware-hero-actions">
            <a href="#catalog" className="btn-hardware-primary">Przeglądaj ofertę sprzętową</a>
            <Link to="/" className="btn-hardware-secondary">Wróć do strony głównej</Link>
          </div>
        </div>
      </header>

      {/* SEKCJA 2: KATALOG SPRZĘTU (Układ asymetryczny ze zdjęciem) */}
      <section id="catalog" className="hardware-catalog-section">
        <div className="hardware-catalog-container">
          
          {/* Lewa strona - Wizualna (Zdjęcie laptopa z cieniem) */}
          <div className="hardware-sticky-visual">
            <div className="laptop-image-wrapper">
              <img src="/images/laptop-showcase.webp" alt="Profesjonalny Sprzęt IT DANNET" className="hardware-main-img" />
            </div>
            <p className="hardware-visual-note">
              * Na życzenie klienta świadczymy pełne usługi wdrożeniowe, migrację danych oraz autoryzowany serwis gwarancyjny.
            </p>
          </div>

          {/* Prawa strona - Dane z bazy (Kategorie sprzętu) */}
          <div className="hardware-spec-list">
            <span className="section-mini-lead">W naszej ofercie znajdą Państwo:</span>
            
            {categories.map((cat) => (
              <div className="hardware-category-group" key={cat.id}>
                <div className="category-header-line">
                  <span className="category-accent-square"></span>
                  <h3>{cat.name}</h3>
                </div>
                <ul className="hardware-bullet-list">
                  {cat.items.map((item, index) => (
                    <li key={index}>
                      <span className="bullet-checkmark">✓</span>
                      <span className="bullet-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEKCJA 3: CERTYFIKATY I PARTNERSTWO (np. QNAP) */}
      <section className="hardware-partnership-section">
        <div className="partnership-container">
          <div className="partnership-text">
            <span className="partnership-badge">Gwarancja Jakości</span>
            <h2>{partnership.title}</h2>
            <p>{partnership.desc}</p>
            <div className="partnership-features-mini">
              <div><strong>✓</strong> Oficjalna dystrybucja</div>
              <div><strong>✓</strong> Sprzęt nowy oraz poleasingowy z gwarancją</div>
            </div>
          </div>
          
          <div className="partnership-logo-block">
            {/* Tutaj ląduje ramka z logotypem certyfikatu ze zdjęcia */}
            <div className="qnap-certified-box">
              <img src="/logos/qnap-logo.png" alt="QNAP" className="qnap-brand-logo" />
              <div className="certificate-divider"></div>
              <span className="cert-text-top">Certified</span>
              <span className="cert-text-bottom">Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}