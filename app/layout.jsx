//import '../styles/globals.css';
import '../styles/style.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Script from 'next/script';


export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
<>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>h24security - Seo agency website</title>
  {/* 
    - favicon link
  */}
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
  {/* 
    - custom css link
  */}
  {/* 
    - google font link
  */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
    rel="stylesheet"
  />


</>

<body id="top">
<>
  <header data-header="">
    {/* 
- #overlay
    */}
    <div className="overlay" data-overlay="" />
    <div className="container">
      <a href="#" className="logo">
        <h1>H24security</h1>
      </a>
      <button className="nav-open-btn" data-nav-open-btn="">
        <ion-icon name="menu-outline" />
      </button>
      <nav className="navbar" data-navbar="">
        <button className="nav-close-btn" data-nav-close-btn="">
          <ion-icon name="close-outline" />
        </button>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#service" className="navbar-link">
              Expertise
            </a>
          </li>
          <li className="navbar-item">
            <a href="#produits" className="navbar-link">
              Produits
            </a>
          </li>
          <li className="navbar-item">
            <a href="#faq" className="navbar-link">
              A propos de nous
            </a>
          </li>
          <li className="navbar-item">
            <a href="#faq" className="navbar-link">
              Recrutement
            </a>
          </li>
        </ul>
        <button className="btn btn-primary">Nous contacter</button>
      </nav>
    </div>
  </header>
  <main>
    <article>
      {/* 
  - #HERO
*/}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">
              Protection, surveilance et securisation de votre système
              d&apos;information.
            </h1>
            <form action="" className="hero-form">
              <input
                type="text"
                name="name"
                placeholder="Entrer le nom de votre entreprise*"
                required=""
                className="input-field"
              />
              <input
                type="email"
                name="email"
                placeholder="Entrer votre email ou numéro de téléphone*"
                required=""
                className="input-field"
              />
              <button type="submit" className="btn btn-primary">
                Demander une prise de contact
              </button>
            </form>
            <p className="hero-text">
              <span>Disponible en 24/7</span>
              <span>Interlocuteur dédié</span>
              <span>Sans engagement</span>
            </p>
          </div>
          <figure className="hero-banner">
            <img src="/images/hero-banner.png" alt="Seo illustration" />
          </figure>
        </div>
      </section>
      {/* 
  - #SERVICE
*/}
      <section className="service" id="service">
        <div className="container">
          <h2 className="h2 section-title">Nos services</h2>
          <p className="section-text">
            Notre mission est de vous protéger des cybermenaces. <br />
            Des offres sur mesure, adaptables à vos besoins et votre budget.
          </p>
          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="location-outline" />
                </div>
                <h3 className="h4 card-title">
                  Surveillance et réponse au incidents
                </h3>
                <p className="card-text">
                  Protégez votre entreprise 24h/24, 7j/7 avec notre Service SOC
                  dédié, prêt à réagir en temps réel contre toute menace.
                </p>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="bar-chart-outline" />
                </div>
                <h3 className="h4 card-title">
                  Audit de securité et Test d&apos;intrusion
                </h3>
                <p className="card-text">
                  Identifiez les vulnérabilités de votre infrastructure grâce à
                  nos tests d&apos;intrusion complets, personnalisés à votre
                  environnement.
                </p>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="pie-chart-outline" />
                </div>
                <h3 className="h4 card-title">Accompagnement vers ISO 27001</h3>
                <p className="card-text">
                  Obtenez la norme ISO 27001 avec notre expertise en audit et
                  conseils, mise en conformité et confiance de vos clients.
                </p>
              </div>
            </li>
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <ion-icon name="magnet-outline" />
                </div>
                <h3 className="h4 card-title">
                  Formations et <br />
                  mise en situation
                </h3>
                <p className="card-text">
                  Optimisez les compétences de vos équipes IT et de vos
                  collaborateurs grâce à nos formations opérationnelles avancées
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #ABOUT
*/}
      <section className="about" id="about">
        <div className="container">
          <div className="about-top">
            <figure className="about-banner">
              <img
                src="/images/about-banner-1.png"
                alt="Seo illustration"
              />
            </figure>
            <div className="about-content">
              <p className="section-subtitle">Proactif et discret</p>
              <h2 className="h3 section-title">
                Metez la sécurité la ou vous en avez besoin
              </h2>
              <p className="section-text">
                Chez nous, la sécurité est un investissement stratégique crucial
                pour protéger votre activité où cela compte le plus. Nous nous
                engageons à guider nos clients pour que chaque euro dépensé
                apporte une protection optimale.
              </p>
              <p className="section-text">
                Notre objectif est de vous permettre de concentrer vos
                ressources sur votre cœur de métier, tout en maintenant une
                sécurité robuste et résiliente. Pour une protection sans
                compromis.
              </p>
            </div>
          </div>
          <div className="about-bottom">
            <figure className="about-banner">
              <img
                src="/images/about-banner-2.png"
                alt="Seo illustration"
              />
            </figure>
            <div className="about-content">
              <h3 className="h4 about-bottom-title">Soutien en Cas de Crise</h3>
              <p className="section-text">
                Nous sommes là pour vous en cas de crise, que ce soit pour des
                conseils simples ou un appui opérationnel visant à rétablir
                rapidement vos conditions opérationnelles et vous permettre de
                continuer vos activités commerciales. Notre expérience sera
                d&apos;une grande utilité pour remonter votre infrastructure
                informatique et prendre les mesures nécessaires pour sa
                protection.
              </p>
              <h3 className="h4 about-bottom-title">
                Assistance d&apos;Experts pour la Continuité d&apos;Activité{" "}
              </h3>
              <ul className="about-bottom-list">
                <li className="about-bottom-item">
                  <p className="section-text">
                    Si vous rencontrez des difficultés, que ce soit pour des
                    conseils simples ou un soutien opérationnel, nous sommes là
                    pour vous aider à retrouver rapidement vos conditions
                    opérationnelles et à poursuivre vos activités commerciales.
                  </p>
                </li>
                <li className="about-bottom-item">
                  <p className="section-text">
                    Notre expertise vous permettra de remonter votre système
                    d&apos;information et de mettre en place les mesures nécessaires
                    pour le protéger.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 
  - #FEATURES
*/}
      <section className="features" id="produits">
        <div className="container">
          <p className="section-subtitle">Protection 360</p>
          <h2 className="h3 section-title">Nos produits</h2>
          <ul className="features-list">
            <li>
              <div className="features-card">
                <div className="card-icon">
                  <ion-icon name="analytics-outline" />
                </div>
                <div className="card-content">
                  <h3 className="h4 card-title">SOC Box</h3>
                  <p className="section-text">
                    Assurez la sécurité de votre entreprise avec notre Service
                    SOC externalisé. Nous surveillons votre réseau 24h/24, 7j/7
                    pour détecter et répondre aux menaces, vous offrant ainsi
                    une protection continue.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="features-card">
                <div className="card-icon">
                  <ion-icon name="mail-open-outline" />
                </div>
                <div className="card-content">
                  <h3 className="h4 card-title">Phishing Mailer</h3>
                  <p className="section-text">
                    Protégez votre entreprise contre les attaques de phishing
                    grâce à nos campagnes personnalisées. Nous simulons des
                    attaques ciblées pour sensibiliser vos équipes aux menaces
                    provenant des e-mails, des sites internes ou des
                    applications de communication, renforçant ainsi votre
                    posture de sécurité.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="features-card">
                <div className="card-icon">
                  <ion-icon name="film-outline" />
                </div>
                <div className="card-content">
                  <h3 className="h4 card-title">Backupify</h3>
                  <p className="section-text">
                    Ne craignez plus la perte de données avec notre service de
                    sauvegarde planifiée. Vos informations sont sauvegardées
                    régulièrement et en toute sécurité, prêtes à être restaurées
                    en cas de besoin.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="features-card">
                <div className="card-icon">
                  <ion-icon name="globe-outline" />
                </div>
                <div className="card-content">
                  <h3 className="h4 card-title">Vuln Scanner</h3>
                  <p className="section-text">
                    Identifiez les failles de sécurité de votre infrastructure
                    grâce à notre outil d&apos;analyse automatique des
                    vulnérabilités. Nous vous aidons à renforcer votre système
                    contre les cybermenaces.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="features-card">
                <div className="card-icon">
                  <ion-icon name="magnet-outline" />
                </div>
                <div className="card-content">
                  <h3 className="h4 card-title">Network watcher</h3>
                  <p className="section-text">
                    Restez vigilant face aux menaces en ligne avec notre
                    solution de détection des menaces réseau. Nous surveillons
                    votre infrastructure pour détecter et neutraliser les
                    activités suspectes, protégeant ainsi votre entreprise
                    contre les attaques.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="features-card">
                <div className="card-icon">
                  <ion-icon name="layers-outline" />
                </div>
                <div className="card-content">
                  <h3 className="h4 card-title">Wallex</h3>
                  <p className="section-text">
                    Protégez votre entreprise des intrusions en ligne grâce à
                    notre service de pare-feu et de WAF. Nous bloquons les
                    tentatives d&apos;accès non autorisées à vos systèmes, assurant
                    ainsi la sécurité de vos données sensibles.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* 
  - #PRICING
*/}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-content">
            <p className="section-subtitle">Sécurité pour tous</p>
            <h2 className="h3 section-title"> Des solutions adaptés</h2>
            <p className="section-text">
              Nos équipes sont là pour vous guider. Explorons ensemble votre
              périmètre à sécuriser afin de protéger les points sensibles de
              votre organisation. Sans aucun engagement de votre part.
            </p>
            <button className="btn btn-primary">Demander un devis</button>
          </div>
          <figure className="pricing-banner">
            <img
              src="/images/pricing-banner.png"
              alt="Pricing illustration"
            />
          </figure>
        </div>
      </section>
      {/* 
  - #FAQ
*/}
      <section className="faq" id="faq">
        <div className="container">
          <p className="section-subtitle">Questions fréquentes</p>
          <h2 className="h3 section-title">
            Tout ce que vous devais savoir sur nos services et prouits
          </h2>
          <div className="grid-wrapper">
            <ul className="faq-list">
              <li>
                <h3 className="h4 card-title">
                  Puis-je avoir une démo de h24security avant de souscrire?
                </h3>
                <p className="section-text">
                  Bien sûr ! Nous proposons des démonstrations de notre tableau
                  de bord pour vous donner un aperçu de la manière dont vous
                  utiliserez notre service. De plus, la démo reste accessible
                  pendant une période qui vous convient, vous laissant ainsi le
                  temps de réfléchir à vos besoins avant d&apos;intégrer notre
                  solution.
                </p>
              </li>
              <li>
                <h3 className="h4 card-title">
                  Quelles sont les étapes pour intégrer h24security à mon SI?
                </h3>
                <p className="section-text">
                  Nous proposons une étude gratuite de votre périmètre pour vous
                  offrir la meilleure intégration à vos systèmes avec nos outils
                  de surveillance. Une fois que nous avons une vue à 360 degrés
                  de votre organisation, nous vous proposons les meilleurs plans
                  d&apos;intégration selon vos besoins. La reconnaissance de votre
                  périmètre est gratuite et vous êtes libre de résilier votre
                  abonnement à tout moment.
                </p>
              </li>
              <li>
                <h3 className="h4 card-title">
                  Puis-je mutualiser les produits et services de h24security
                  pour plusieurs entreprises ou collectivités?
                </h3>
                <p className="section-text">
                  Oui, nous proposons des tarifs préférentiels si votre
                  périmètre augmente, tout en vous permettant de choisir de
                  mutualiser ou de séparer leur gestion selon vos préférences.
                </p>
              </li>
            </ul>
            <ul className="faq-list">
              <li>
                <h3 className="h4 card-title">
                  Quelles sont vos modalités d&apos;abonnement et de paiement?
                </h3>
                <p className="section-text">
                  Nous comprenons que nos clients ont d&apos;autres priorités que la
                  sécurité. Nous proposons un étalement des paiements sur
                  l&apos;année, des abonnements aux produits et services permettant
                  de réduire les coûts, et des délais de paiement pour vous
                  laisser vous concentrer sur votre valeur ajoutée.
                </p>
              </li>
              <li>
                <h3 className="h4 card-title">
                  Comment h24security protège-t-il mes données sensibles?
                </h3>
                <p className="section-text">
                  Les sauvegardes et données de votre SI sont chiffrées avant
                  d&apos;être stockées sur nos infrastructures. Nos communications
                  sont chiffrées de bout en bout pour garantir une
                  confidentialité totale.
                </p>
              </li>
              <li>
                <h3 className="h4 card-title">
                  J&apos;ai un problème avec l&apos;un de vos produits.
                </h3>
                <p className="section-text">
                  Notre tableau de bord personnalisé pour chaque client vous
                  permet de surveiller l&apos;état des services et produits que nous
                  mettons à votre disposition. Un lien direct avec un assistant
                  vous assure un contact humain dans les 15 minutes suivant
                  votre demande.
                </p>
              </li>
            </ul>
          </div>
          <p className="faq-bottom-link">
            Vous avez une questions?
            <a href="#">Posez la via notre messagerie privée juste ici.</a>
          </p>
        </div>
      </section>
      {/* 
  - #CTA
*/}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">
              Une urgence? H24security est la pour vous conseiller via ce
              service gratuit d&apos;assistance téléphonique
            </h2>
            <div className="cta-button-wrapper">
              <button className="btn btn-primary">Contactez nous</button>
              <a href="#faq">
                ou laisser votre contact, nous vous rappelons dans l&apos;heure.
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
  {/* 
    - #FOOTER
  */}
  <footer>
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <h1>H24security</h1>
          </a>
          <p className="section-text"></p>
          <h3>Newsletter</h3>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Addresse email*"
            required=""
            className="input-field"
          />
          H24security traite les données recueillies afin de vous envoyer des
          newsletters. Pour en savoir plus sur la gestion de vos données
          personnelles et pour exercer vos droits, reportez-vous à notre
          politique de protection des données.
          <br />
          <br />
          <p>
            En m&apos;abonnant, j&apos;accepte que mon adresse mail soit utilisée pour
            permettre de m&apos;envoyer la newsletter.*
          </p>
          <br />
          <br />
          <button className="btn btn-primary">S&apos;abonner</button>
          <p />
        </div>
        <div className="footer-link-box">
          <ul className="footer-list">
            <li>
              <p className="h4">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Press &amp; Media
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4">Discover</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Advertising
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Plans &amp; Pricing
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Testimonials
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4">Legal</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Site Map
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4">Support</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Editor Help
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Live Chatting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="divider" />
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          © 2024 <a href="#">H24security</a>. All Rights Reserved
        </p>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              Linkedin
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <Script
        src="/js/script.js"
        strategy="lazyOnload"
        
      />
</>

            </body>
        </html>
    );
}
