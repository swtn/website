import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from './data/servicesData';
import './ServicePage.css';

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  // Zabezpieczenie na wypadek, gdyby ktoś wpisał zły adres URL ręcznie
  if (!service) {
    return (
      <div className="error-container">
        <h2>Nie znaleziono wybranej usługi</h2>
        <p>Przepraszamy, ale strona o podanym adresie nie istnieje w naszej ofercie.</p>
        <Link to="/" className="btn-error-back">Powrót do strony głównej</Link>
      </div>
    );
  }

  return (
    <div className="service-page-wrapper">
      {/* SEKCJA 1: HERO (Nagłówek strony z tłem zbieżnym z HomePage) */}
      <header className="service-hero">
        <div className="service-hero-content">
          <span className="service-badge">{service.badge}</span>
          <h1>{service.title}</h1>
          <p className="service-lead">{service.lead}</p>
        </div>
      </header>

      {/* SEKCJA 2: KARTY WYZWAŃ (Górny potrójny grid z ostrzeżeniami) */}
      <section className="challenges-section">
        <div className="challenges-grid">
          {service.challenges.map((item, idx) => (
            <div className="challenge-card" key={idx}>
              <div className="challenge-icon-wrapper">
                <span className="warning-icon">⚠️</span>
              </div>
              <h3>{item.problem}</h3>
              <p>{item.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEKCJA 3: ZAKRES USŁUG / THE CORE (Asymetryczny podział tekstu) */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-title-side">
            <span className="features-mini-badge">Zakres usług</span>
            <h2>Co dokładnie zyskujesz w ramach współpracy?</h2>
            <p className="features-side-desc">
              Działamy kompleksowo. Nie ograniczamy się do gaszenia pożarów – budujemy stabilne środowisko informatyczne, które rozwija się razem z Twoją firmą.
            </p>
          </div>
          
          <div className="features-list-side">
            {service.features.map((feature, idx) => (
              <div className="feature-item" key={idx}>
                <span className="feature-number">0{idx + 1}</span>
                <div className="feature-text-block">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA 4: FAQ (Najczęściej zadawane pytania) */}
      <section className="faq-section">
        <div className="faq-wrapper">
          <span className="faq-subtitle">Masz pytania?</span>
          <h2>Często zadawane pytania (FAQ)</h2>
          
          <div className="faq-container">
            {service.faq.map((item, idx) => (
              <div className="faq-box" key={idx}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}