export const servicesData = {
  // ==========================================
  // 1. OBSŁUGA INFORMATYCZNA FIRM
  // ==========================================
  'obsluga-it': {
    title: 'Kompleksowa Obsługa Informatyczna Firm',
    badge: 'Outsourcing IT',
    lead: 'Zapewniamy ciągłość działania Twojego biznesu. Przejmij kontrolę nad infrastrukturą IT dzięki wsparciu doświadczonych inżynierów z Piaseczna i okolic.',
    challenges: [
      {
        problem: 'Częste awarie i przestoje w pracy',
        solution: 'Monitorujemy Twoje systemy 24/7, wykrywając i usuwając anomalie zanim zauważą je pracownicy.'
      },
      {
        problem: 'Brak wewnętrznego działu IT',
        solution: 'Zyskujesz cały zespół ekspertów w cenie ułamka etatu jednego pracownika.'
      },
      {
        problem: 'Obawy o wyciek danych',
        solution: 'Wdrażamy rygorystyczne polityki bezpieczeństwa, audytujemy uprawnienia i szyfrujemy stacje robocze.'
      }
    ],
    features: [
      {
        title: 'Zdalny Helpdesk i Wsparcie On-Site',
        desc: 'Błyskawiczna pomoc techniczna dla pracowników przez telefon i pulpit zdalny. W razie potrzeby inżynier pojawia się w Twoim biurze.'
      },
      {
        title: 'Zarządzanie Infrastrukturą Sieciową',
        desc: 'Konfiguracja i nadzór nad routerami, switchami, sieciami Wi-Fi oraz bezpiecznymi tunelami VPN dla pracowników zdalnych.'
      },
      {
        title: 'Ochrona Stacji Roboczych',
        desc: 'Instalacja i nadzór nad systemami antywirusowymi EDR, bieżące aktualizacje systemów Windows/macOS oraz czyszczenie sprzętu.'
      }
    ],
    faq: [
      {
        q: 'Jak szybko reagujecie na zgłoszenie awarii?',
        a: 'W ramach stałej współpracy gwarantowany czas podjęcia działań (SLA) wynosi do 2 godzin, jednak większość zgłoszeń zdalnych rozwiązujemy w czasie poniżej 30 minut.'
      }
    ]
  },

  // ==========================================
  // 2. SERWIS KOMPUTERÓW
  // ==========================================
  'serwis-komputerow': {
    title: 'Profesjonalny Serwis Sprzętu Komputerowego',
    badge: 'Naprawa i Konserwacja',
    lead: 'Szybka diagnostyka i skuteczna naprawa laptopów, komputerów stacjonarnych oraz urządzeń peryferyjnych dla firm i klientów indywidualnych.',
    challenges: [
      {
        problem: 'Powolne działanie komputera lub laptopa',
        solution: 'Czyszczenie systemu, usuwanie złośliwego oprogramowania oraz modernizacja podzespołów (dyski SSD, RAM).'
      },
      {
        problem: 'Nagła awaria sprzętu (brak reakcji)',
        solution: 'Precyzyjna diagnostyka sprzętowa, naprawa płyt głównych, układów zasilania oraz chłodzenia.'
      },
      {
        problem: 'Przestoje spowodowane brakiem sprzętu zastępczego',
        solution: 'Na czas zaawansowanej naprawy oferujemy laptopy zastępcze, aby Twoja praca nie musiała czekać.'
      }
    ],
    features: [
      {
        title: 'Modernizacja i przyspieszanie sprzętu',
        desc: 'Wymiana starych dysków talerzowych na ultraszybkie dyski SSD NVMe oraz rozbudowa pamięci operacyjnej RAM.'
      },
      {
        title: 'Czyszczenie i konserwacja układów chłodzenia',
        desc: 'Usuwanie kurzu, wymiana past termoprzewodzących oraz termopadów, zapobiegające przegrzewaniu i tzw. throttlingowi.'
      },
      {
        title: 'Instalacja i reinstalacja systemów operacyjnych',
        desc: 'Instalacja systemów Windows/macOS wraz z kompletem najnowszych sterowników, konfiguracją optymalną oraz zachowaniem danych użytkownika.'
      }
    ],
    faq: [
      {
        q: 'Czy diagnoza sprzętu jest płatna?',
        a: 'W przypadku rezygnacji z naprawy pobieramy stałą opłatę diagnostyczną za poświęcony czas inżyniera. Jeśli zdecydujesz się na naprawę w naszym serwisie, diagnostyka jest całkowicie bezpłatna.'
      }
    ]
  },

  // ==========================================
  // 3. ADMINISTRACJA SIECIĄ
  // ==========================================
  'administracja-siecia': {
    title: 'Projektowanie i Administracja Sieciami Komputerowymi',
    badge: 'Infrastruktura sieciowa',
    lead: 'Budujemy szybkie, stabilne i bezpieczne sieci firmowe LAN, WAN oraz Wi-Fi. Zabezpieczamy styki z internetem i konfigurujemy bezpieczną pracę zdalną.',
    challenges: [
      {
        problem: 'Zrywające się połączenia Wi-Fi i wolny internet',
        solution: 'Projektujemy prawidłowe rozmieszczenie punktów dostępowych (Access Pointów) i eliminujemy martwe strefy.'
      },
      {
        problem: 'Brak kontroli nad tym, co pracownicy robią w sieci',
        solution: 'Wdrażamy systemy UTM i zaawansowane routery filtrujące ruch pod kątem niebezpiecznych stron.'
      },
      {
        problem: 'Ryzyko nieautoryzowanego dostępu do sieci firmowej',
        solution: 'Izolujemy ruch sieciowy za pomocą VLAN-ów, oddzielając sieć pracowniczą od sieci dla gości i urządzeń IoT.'
      }
    ],
    features: [
      {
        title: 'Konfiguracja urządzeń sieciowych (MikroTik, Cisco)',
        desc: 'Zarządzanie zaawansowanymi routerami, przełącznikami (switchami) zarządzalnymi oraz tworzenie izolowanych podsieci VLAN.'
      },
      {
        title: 'Bezpieczna praca zdalna przez tunele VPN',
        desc: 'Wdrażanie szyfrowanych połączeń VPN (np. OpenVPN, WireGuard), pozwalających pracownikom na bezpieczny dostęp do zasobów firmy z domu.'
      }
    ],
    faq: [
      {
        q: 'Na jakim sprzęcie sieciowym pracujecie?',
        a: 'Najczęściej wdrażamy i konfigurujemy urządzenia marek MikroTik, Cisco, Ubiquiti UniFi oraz Zyxel, co pozwala dobrać rozwiązanie idealnie skrojone pod budżet i wymagania klienta.'
      }
    ]
  },

  // ==========================================
  // 4. TWORZENIE STRON INTERNETOWYCH
  // ==========================================
  'tworzenie-stron': {
    title: 'Projektowanie i Tworzenie Nowoczesnych Stron WWW',
    badge: 'Web Development',
    lead: 'Tworzymy szybkie, responsywne i zoptymalizowane pod SEO strony internetowe, które stają się skutecznym narzędziem sprzedażowym Twojej firmy.',
    challenges: [
      {
        problem: 'Strona nie wyświetla się poprawnie na telefonach',
        solution: 'Wszystkie nasze projekty są w 100% responsywne (RWD) – wyglądają perfekcyjnie na każdym ekranie.'
      },
      {
        problem: 'Strona ładuje się zbyt wolno i klienci uciekają',
        solution: 'Piszemy czysty kod i optymalizujemy grafiki, osiągając najwyższe wyniki w testach Google PageSpeed.'
      },
      {
        problem: 'Trudność w samodzielnej edycji treści na stronie',
        solution: 'Wdrażamy intuicyjne, nowoczesne panele CMS, w których edycja tekstu jest tak prosta jak pisanie w Wordzie.'
      }
    ],
    features: [
      {
        title: 'Dedykowany design i unikalny kod',
        desc: 'Nie korzystamy z gotowych, powtarzalnych szablonów. Każda strona jest projektowana od zera, odzwierciedlając charakter Twojej marki.'
      },
      {
        title: 'Optymalizacja pod pozycjonowanie (SEO)',
        desc: 'Już na etapie kodowania dbamy o semantykę HTML, tagi meta, mapę strony oraz szybkość działania, ułatwiając robotom Google indeksowanie.'
      }
    ],
    faq: [
      {
        q: 'Czy po oddaniu strony będę mógł samodzielnie edytować teksty?',
        a: 'Tak, na życzenie wdrażamy intuicyjny system zarządzania treścią (CMS) lub przygotowujemy instrukcję wideo, dzięki której bez problemu zmienisz teksty czy zdjęcia.'
      }
    ]
  },

  // ==========================================
  // 5. BACKUPY I MONITOROWANIE SYSTEMÓW
  // ==========================================
  'backup-i-monitoring': {
    title: 'Systemy Kopii Zapasowych i Ciągły Monitoring Infrastruktury',
    badge: 'Disaster Recovery',
    lead: 'Chronimy najcenniejszy zasób Twojej firmy: dane. Wdrażamy automatyczne systemy backupu oraz stale monitorujemy parametry życiowe serwerów.',
    challenges: [
      {
        problem: 'Strach przed wirusami szyfrującymi (Ransomware)',
        solution: 'Wdrażamy regułę backupu 3-2-1 z kopiami odizolowanymi od sieci lokalnej, uniemożliwiającą usunięcie plików przez hakera.'
      },
      {
        problem: 'Niewiedza o awarii dysku aż do momentu, gdy wszystko padnie',
        solution: 'Nasz monitoring natychmiast powiadamia inżyniera o uszkodzeniu pojedynczego dysku w macierzy RAID, dając czas na bezpieczną wymianę.'
      },
      {
        problem: 'Brak pewności, czy posiadany backup w ogóle działa',
        solution: 'Konfigurujemy cykliczne, automatyczne testy integralności danych, gwarantujące bezbłędne odtworzenie plików w kryzysowej sytuacji.'
      }
    ],
    features: [
      {
        title: 'Automatyzacja procesów backupu',
        desc: 'Konfiguracja kopii zapasowych baz danych, serwerów plików i maszyn wirtualnych bez przerywania pracy użytkowników.'
      },
      {
        title: 'Systemy monitoringu zasobów w czasie rzeczywistym',
        desc: 'Ciągłe śledzenie zajętości dysków, obciążenia procesorów, pamięci RAM oraz temperatury kluczowych urządzeń sprzętowych.'
      }
    ],
    faq: [
      {
        q: 'Jak często testujecie poprawność wykonywanych kopii?',
        a: 'Regularnie przeprowadzamy próbne odtworzenia systemów w izolowanym środowisku testowym, aby upewnić się, że w razie awarii pliki będą gotowe do natychmiastowego użytku.'
      }
    ]
  },

  // ==========================================
  // 6. DOMENY I CERTYFIKATY SSL
  // ==========================================
  'domeny-i-ssl': {
    title: 'Zarządzanie Domenami, Hostingiem i Certyfikatami SSL',
    badge: 'Tożsamość i Bezpieczeństwo Web',
    lead: 'Dbamy o formalną i techniczną stronę Twojej obecności w sieci. Rejestrujemy domeny, konfigurujemy rekordy DNS i zabezpieczamy witryny szyfrowaniem SSL.',
    challenges: [
      {
        problem: 'Komunikat "Niezabezpieczona" przy adresie Twojej strony',
        solution: 'Instalujemy i konfigurujemy certyfikaty SSL, które aktywują bezpieczną kłódkę w przeglądarce i szyfrują dane formularzy.'
      },
      {
        problem: 'Ryzyko utraty lub wygaśnięcia ważnej domeny firmowej',
        solution: 'Bierzemy na siebie pełną kontrolę nad cyklem życia domen, zapobiegając ich przypadkowemu wygaśnięciu lub przejęciu przez podmioty trzecie.'
      },
      {
        problem: 'Maile firmowe wpadające do folderu SPAM u klientów',
        solution: 'Wdrażamy rygorystyczne zabezpieczenia i rekordy autoryzacyjne SPF, DKIM oraz DMARC, uwierzytelniające Twoją domenę pocztową.'
      }
    ],
    features: [
      {
        title: 'Zaawansowana konfiguracja strefy DNS',
        desc: 'Wdrożenie zabezpieczeń poczty e-mail drastycznie zmniejszających ryzyko, że Twoje maile trafią do spamu lub ktoś się pod Ciebie podszyje.'
      },
      {
        title: 'Wdrożenia certyfikatów SSL (DV, OV, EV)',
        desc: 'Od podstawowych darmowych certyfikatów Let\'s Encrypt po zaawansowane certyfikaty z pełną weryfikacją organizacji dla systemów e-commerce.'
      }
    ],
    faq: [
      {
        q: 'Czy certyfikat SSL ma wpływ na pozycję strony w Google?',
        a: 'Tak, od wielu lat Google oficjalnie traktuje obecność protokołu HTTPS (certyfikatu SSL) jako jeden z technicznych czynników rankingowych. Strony bez SSL są spychane na dalsze pozycje.'
      }
    ]
  }
};