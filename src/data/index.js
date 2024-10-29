import {
    Assessment,
    AttachMoney,
    Brightness5,
    Build,
    BuildCircle,
    CloudOutlined,
    Description,
    EmailOutlined,
    EmojiNature,
    Facebook,
    FavoriteBorder,
    FlashAuto,
    FlashOn,
    Instagram,
    LinkedIn,
    Menu,
    PersonOutlined,
    PhoneIphone,
    Public,
    Settings,
    SolarPower,
    Twitter,
    YouTube,
  } from '@mui/icons-material'
  import { Link } from 'next/link'

  import { Heading } from '~/components/common/Heading'
  
  export const navlink = [
    { url: '/', text: 'Accueil' },
    { url: '/about', text: 'À propos' },
    { url: '/services', text: 'Services' },
    { url: '/partenaires', text: 'Nos Partenaires' },
    { url: '/blogs', text: 'Blogs' },
    { url: '/contact', text: 'Contact' },
  ]
  
  export const home = [
    {
      text: 'ENSEMBLE VERS UN AVENIR DURABLE',
      name: 'Sun Alternative Invest',
      post: 'Votre Énergie, Notre Investissement',
      design: '',
      desc: 'ENSEMBLE VERS UN AVENIR DURABLE',
      video: './images/5.mp4',
    },
  ]
  
  export const about = [
    {
      content: (
        <div className="about-sub-content">
          <p>
            Bienvenue chez Sun Alternative Invest, votre partenaire dédié à la
            transition énergétique. Nous souhaitons jouer un rôle crucial dans le{' '}
            <b>secteur de l&apos;énergie solaire</b>, en aidant les entreprises à faire
            la transition vers une énergie plus durable.
            <br></br>
            <br></br>
            Notre objectif est de contribuer de manière significative à la
            Responsabilité Sociétale des Entreprises (RSE) et à{' '}
            <b>l’indépendance énergétique</b> en offrant des{' '}
            <b>solutions clés-en-main</b>, de la consultation initiale à
            l&apos;installation et à l&apos;entretien continu des installations
            photovoltaïques. Cette approche globale garantit une transition fluide
            vers l&apos;énergie solaire pour nos clients.
          </p>
          <p className="hero-line"></p>
        </div>
      ),
      cover: './images/home/fondateurs.png',
    },
    {
      content: (
        <div className="about-sub-content">
          <h3>Nous nous engageons à guider les entreprises pour :</h3>
          <ul className="sub-content-list">
            <li>
              <strong>Une autonomie Énergétique</strong> : Nous visons à rendre
              les entreprises autonomes sur le plan énergétique en exploitant
              pleinement le potentiel de l&apos;énergie solaire. Cela permettra aux
              entreprises de réduire leur dépendance aux sources d&apos;énergie
              traditionnelles et de réaliser des économies à long terme.
            </li>
            <br></br>
            <li>
              <strong>Une Réduction de l&apos;empreinte carbone</strong> : En
              favorisant l&apos;utilisation de l&apos;énergie solaire, nous contribuons
              activement à la réduction des émissions de gaz à effet de serre.
              Nous sommes déterminés à soutenir les entreprises dans leur démarche
              de réduction de leur empreinte carbone, renforçant ainsi leur
              engagement envers le développement durable.
            </li>
          </ul>
  
          <p>
            Nous sommes fiers de contribuer activement à la transition énergétique
            de notre région, offrant des solutions durables et innovantes pour
            répondre aux défis environnementaux tout en stimulant la croissance
            économique locale.
          </p>
  
          <div className="about-button" data-aos="fade-right">
            <a href="/about" className="black about-button-link">
              <button className="button-secondary">En savoir plus</button>
            </a>
          </div>
        </div>
      ),
      cover: '/images/home/2.png',
    },
  ]
  
  export const services = [
    {
      id: 1,
      title: "1. Étude personnalisée",
      desc: "Nous analysons vos besoins spécifiques pour une solution sur mesure.",
      cover: "/images/services/1.png",
      category: "LOA",
      linkContent: <a href="/services/location">En savoir plus</a>,
    },
    {
      id: 2,
      title: "2. Financement sur mesure",
      desc: "Nous proposons des options de financement adaptées à votre entreprise.",
      cover: "/images/services/2.png",
      category: "LOT",
      linkContent: <a href="/services/location-toiture">En savoir plus</a>,
    },
    {
      id: 3,
      title: "3. Installation professionnelle",
      desc: "Nos partenaires experts assurent une mise en œuvre efficace et professionnelle.",
      cover: "/images/services/3.png",
      category: "LOT",
      linkContent: <a href="/services/location-toiture">En savoir plus</a>,
    },
    {
      id: 4,
      title: "4. Maintenance à long terme",
      desc: "Nous assurons la maintenance continue pour des performances optimales.",
      cover: "/images/services/4.png",
      category: "LOT",
      linkContent: <a href="/services/location-toiture">En savoir plus</a>,
    },
  ]
  
  export const serviceDetails = [
    {
      id: 1,
      category: 'LOA',
      title: 'Location panneaux solaires photovoltaïques ',
      desc: "Permet au client de bénéficier des avantages de l'énergie solaire sans avoir à supporter les coûts initiaux élevés d'achat et d'installation du système.",
      bulletWorking: [
        {
          id: '1',
          title: 'Évaluation des besoins',
          icon: <Assessment />,
          tooltip:
            'Le client et le tiers investisseur collaborent pour évaluer les besoins énergétiques du client, déterminer la taille du système photovoltaïque requis et élaborer les détails du contrat.',
        },
        {
          id: '2',
          title: 'Contrat d’usage et bail civil',
          icon: <Description />,
          tooltip:
            "Les parties signent un contrat d'usage qui stipule les détails de l’accord,  les conditions financières,  la durée de location et les responsabilités de chaque partie. La durée du contrat de location est généralement établie pour une période de plusieurs années,  souvent 10 à 20 ans.",
        },
        {
          id: '3',
          title: 'Conception et installation',
          icon: <Build />,
          tooltip:
            "Le tiers investisseur prend en charge la conception, l'achat et l'installation du système photovoltaïque. Cela inclut l'installation de panneaux solaires, d'onduleurs, et d'autres composants nécessaires.",
        },
        {
          id: '4',
          title: 'Maintenance',
          icon: <BuildCircle />,
          tooltip:
            "Le tiers investisseur est responsable de l'exploitation et de la maintenance du système tout au long de la durée du contrat. Cela garantit que le système fonctionne efficacement pour maximiser la production d'énergie.",
        },
      ],
      bulletBenefits: [
        {
          id: '1',
          title: 'Réduction des coûts',
          icon: <Settings />,
          tooltip:
            "L'une des principales raisons pour les entreprises de louer des panneaux photovoltaïques est la réduction immédiate des coûts énergétiques. En utilisant l'énergie solaire produite par les panneaux,  les entreprises peuvent réduire leur dépendance vis-à-vis des fournisseurs d'électricité traditionnels,  ce qui peut entraîner des économies significatives sur la facture d'électricité.",
        },
        {
          id: '2',
          title: "Pas d'investissement initial important",
          icon: <Settings />,
          tooltip:
            "La location de panneaux solaires permet à une entreprise de bénéficier de l'énergie solaire sans avoir à supporter les coûts initiaux élevés d'achat et d'installation des panneaux. Cela permet de libérer des fonds pour d'autres investissements stratégiques.",
        },
        {
          id: '3',
          title: 'Stabilité des coûts énergétiques',
          icon: <Settings />,
          tooltip:
            "En optant pour une location, les entreprises peuvent bénéficier d'une stabilité des coûts énergétiques, car le coût de la location est fixe sur la durée du contrat. Cela facilite la planification budgétaire à long terme.",
        },
        {
          id: '4',
          title: "Réduction de l'empreinte carbone",
          icon: <Settings />,
          tooltip:
            "L'utilisation de l'énergie solaire contribue à réduire l'empreinte carbone d'une entreprise. Cela est un avantage significatif dans le cadre des efforts de durabilité et de responsabilité sociale de l'entreprise.",
        },
        {
          id: '5',
          title: 'Avantages fiscaux',
          icon: <Settings />,
          tooltip: '...',
        },
        {
          id: '6',
          title: 'Entretien et maintenance inclus',
          icon: <Settings />,
          tooltip:
            "Le contrat de location inclue l'entretien et la maintenance du système photovoltaïque. Cela signifie que le fournisseur est responsable de garantir le bon fonctionnement du système tout au long de la période de location.",
        },
        {
          id: '7',
          title: 'Image durable et responsable',
          icon: <Settings />,
          tooltip:
            "L'utilisation de l'énergie solaire améliore l'image de l'entreprise en démontrant son engagement envers la durabilité et l'environnement. Cela est un facteur positif pour les clients, les partenaires commerciaux et les employés.",
        },
        {
          id: '8',
          title: "Option d'achat à la fin du contrat",
          icon: <Settings />,
          tooltip:
            "Le contrat de location offre à l'entreprise la possibilité d'acheter les panneaux solaires à la fin de la période de location,  ce qui est une option intéressante si l'entreprise souhaite prendre possession du système à terme.",
        },
      ],
      img: 'https://via.placeholder.com/250',
    },
    {
      id: 2,
      category: 'LOT',
      title: 'Location de toiture',
      desc: "Permet aux propriétaires de maximiser l'utilisation de leurs espaces inutilisés pour la production d'énergie solaire.",
      bulletWorking: [
        {
          id: '1',
          title: 'Etude de faisabilité',
          icon: <Settings />,
          tooltip:
            'Une entreprise ou un investisseur tiers identifie des toits appropriés pour installer des panneaux solaires.',
        },
        {
          id: '2',
          title: 'Proposition offre',
          icon: <Settings />,
          tooltip:
            'Une fois les accords conclus, le tiers investisseur installe les équipements nécessaires sur le toit.',
        },
        {
          id: '3',
          title: 'Bail emphytéotique',
          icon: <Settings />,
          tooltip:
            "Le tiers investisseur est responsable de l'exploitation et de l'entretien des équipements pendant la durée du contrat. Cela peut inclure la gestion quotidienne, les réparations éventuelles et les mises à niveau.",
        },
        {
          id: '4',
          title: 'Installation',
          icon: <Settings />,
          tooltip:
            "En échange de l'utilisation de l'espace sur le toit, le propriétaire de la toiture reçoit un loyer régulier.",
        },
        {
          id: '5',
          title: 'Exploitation et maintenance',
          icon: <Settings />,
          tooltip:
            'Les contrats de location de toiture sont conclus pour une durée fixe. Pendant cette période, le tiers investisseur continue à exploiter les équipements et le propriétaire de la toiture continue à recevoir des avantages financiers.',
        },
      ],
      bulletBenefits: [
        {
          id: '1',
          title: 'Revenu supplémentaire',
          icon: <Settings />,
          tooltip: '...',
        },
        {
          id: '1',
          title: 'Aucun investissement initial.',
          icon: <Settings />,
          tooltip: '...',
        },
        {
          id: '1',
          title: 'Utilisation efficace de l’espace inutilisé',
          icon: <Settings />,
          tooltip: '...',
        },
        {
          id: '1',
          title: 'Engagement en faveur du développement durable',
          icon: <Settings />,
          tooltip: '...',
        },
        {
          id: '1',
          title: 'Amélioration de l’image de marque',
          icon: <Settings />,
          tooltip: '...',
        },
        {
          id: '1',
          title: 'Rénover ou financer une partie de votre bâtiment',
          icon: <Settings />,
          tooltip: '...',
        },
      ],
      img: 'https://via.placeholder.com/150',
    },
  ]
  
  export const aboutAdvantages = [
    {
      id: 1,
      icon: <Brightness5 />,
      title: 'Réduction des dépenses',
      subTitle: 'Économies financières à long terme.',
    },
    {
      id: 2,
      icon: <SolarPower />,
      title: "Diminution de l'empreinte carbone",
      subTitle: "Contribuez à la préservation de l'environnement.",
    },
    {
      id: 3,
      icon: <FlashAuto />,
      title: 'Stabilité des coûts énergétiques',
      subTitle: 'Contrat de location sur mesure',
    },
    {
      id: 4,
      icon: <Assessment />,
      title: 'Valorisation du foncier',
      subTitle: 'Location de Toiture inexploités',
    },
    {
      id: 5,
      icon: <AttachMoney />,
      title: 'Investissement Intelligent',
      subTitle: 'Utilisation efficace de l’espace inutilisé.',
    },
  ]
  
  export const project = [
    {
      id: 1,
      icon: <CloudOutlined />,
      num: '89',
      title: 'HAPPY CLIENTS',
    },
    {
      id: 2,
      icon: <FavoriteBorder />,
      num: '231',
      title: 'PROJECTS COMPLEATED',
    },
    {
      id: 3,
      icon: <Public />,
      num: '108',
      title: 'FILES DOWNLOADED',
    },
    {
      id: 4,
      icon: <PersonOutlined />,
      num: '1446',
      title: 'LIENS OF CODE',
    },
  ]
  
  export const contact = [
    {
      content: (
        <>
          <div>
            <i>Fanny MARGEOLET - Présidente</i>
            <p>
              <a href="callto:+33666234526">
                <PhoneIphone /> +33 6 66 23 45 26
              </a>
            </p>
            <p className="flex align-items-center flex-wrap mailTo">
              <EmailOutlined />
              <a href="mailto:fanny.margeolet@sunaltinvest.com?subject=Contact%20-%20Projet%20de%20Transition%20Énergétique&body=Nous%20sommes%20intéressés%20par%20votre%20projet%20de%20transition%20énergétique.%20Nous%20aimerions%20obtenir%20plus%20d'informations,%20discuter%20de%20nos%20besoins%20spécifiques%20et%20éventuellement%20planifier%20une%20consultation.%20Ensemble,%20nous%20pouvons%20créer%20un%20avenir%20plus%20durable.">
                Fanny.margeolet@sunaltinvest.com
              </a>
            </p>
          </div>
  
          <p className="contactLine"></p>
        </>
      ),
    },
  ]
  export const social = [
    {
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/company/sun-alternative-invest',
    },
  ]
  
  export const aboutsFondateurs = [
    {
      title: 'Les fondateurs',
      cover: '/images/about/Alexandre.png',
      title_cover: '',
      second_cover: '/images/about/Fanny.png',
      title_second_cover: '',
      content: (
        <div>
          <p>
            Fanny Margeolet et Alexandre Avian, les co-fondateurs de Sun
            Alternative Invest mettent en œuvre leur expertise complémentaire de
            plus de 15 ans dans les secteurs de l’énergie, de la construction et
            de la finance. Nous sommes fiers de mettre notre savoir-faire au
            service des entreprises de la région pour accélérer la production
            d&apos;énergie propre.
            <br></br>
            <br></br>
            Notre objectif est clair : Vous faire atteindre l&apos;indépendance
            énergétique tout en favorisant une économie respectueuse de
            l&apos;environnement. Nous agissons en tant que tiers investisseur dans le
            cadre d’installation de panneaux solaires photovoltaïques, afin de
            vous permettre de réaliser vos projets d’autoconsommation. En
            investissant dans l&apos;énergie solaire, nous créons un impact positif
            tant sur l&apos;environnement que sur nos clients. En favorisant
            l&apos;autoconsommation et l&apos;indépendance énergétique, nous contribuons
            activement à la réduction des émissions de carbone et à la
            construction d&apos;un avenir énergétique durable.
          </p>
        </div>
      ),
    },
  ]
  
  export const aboutsObjectifs = [
    {
      title: 'Notre vision',
      cover: '/images/about/3.png',
      content: (
        <p>
          L&apos;énergie solaire, ressource inépuisable, est notre réponse au
          changement climatique et à la crise énergétique actuelle. En façonnant
          un monde où elle est au cœur de nos choix énergétiques, nous protégeons
          notre planète pour les générations futures.
        </p>
      ),
    },
    {
      title: 'Notre mission',
      cover: '/images/about/4.png',
      content: (
        <p>
          <li>
            Accompagner les entreprises de nos régions dans la réalisation de
            leurs projets d&apos;énergie renouvelable.
          </li>
          <li>
            Répondre aux enjeux de Responsabilité Sociétale des Entreprises (RSE)
            et d&apos;indépendance énergétique.
          </li>
          <li>
            Contribuer à la durée de vie des projets d&apos;énergie renouvelable.
          </li>
          <li>
            Rendre les énergies renouvelables accessibles grâce à des solutions
            clés-en-main.
          </li>
        </p>
      ),
    },
  ]
  
  export const aboutValues = [
    {
      title: 'Nos valeurs',
      content: (
        <div className="boxValues">
          <ul className="grid3">
            <li data-aos="flip-left">
              <h3>
                <Menu className="icon" /> Durabilité
              </h3>
              <p>
                Promouvoir le développement durable en encourageant l&apos;utilisation
                d&apos;énergies renouvelables pour réduire l&apos;empreinte carbone et
                contribuer à la préservation de l&apos;environnement.
              </p>
            </li>
  
            <li data-aos="flip-left">
              <h3>
                <Menu className="icon" /> Innovation
              </h3>
              <p>
                Adopter une approche innovante en restant à la pointe des
                technologies solaires pour offrir des solutions efficaces et
                écoénergétiques à nos clients.
              </p>
            </li>
  
            <li data-aos="flip-left">
              <h3>
                <Menu className="icon" /> Responsabilité sociale
              </h3>
              <p>
                Assumer la responsabilité sociale en contribuant positivement aux
                communautés locales, en favorisant la création d&apos;emplois locaux et
                en soutenant des initiatives sociales et environnementales.
              </p>
            </li>
  
            <li data-aos="flip-left">
              <h3>
                <Menu className="icon" /> Excellence
              </h3>
              <p>
                Viser l’excellence en toutes circonstances en offrant des conseils
                personnalisés, des évaluations détaillées, et en assurant un suivi
                continu pour garantir la satisfaction et la confiance des clients.
              </p>
            </li>
  
            <li data-aos="flip-left">
              <h3>
                <Menu className="icon" /> Partage
              </h3>
              <p>
                Encourager la collaboration, la coopération et l&apos;esprit d&apos;équipe
                avec les partenaires et les clients, pour atteindre des objectifs
                communs et aller plus loin dans la transition énergétique.
              </p>
            </li>
  
            <li data-aos="flip-left">
              <h3>
                <Menu className="icon" /> Proximité géographique
              </h3>
              <p>
                Favoriser une proximité pour mieux comprendre les réalités locales
                et répondre aux besoins spécifiques de notre région.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ]
  
  export const portfolio = [
    {
      id: 1,
      type: 'image',
      cover: '/images/portfolio/1.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 2,
      type: 'video',
      cover: '/images/portfolio/1.mp4',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 3,
      type: 'image',
      cover: '/images/portfolio/3.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 4,
      type: 'image',
      cover: '/images/portfolio/4.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 5,
      type: 'image',
      cover: '/images/portfolio/5.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 6,
      type: 'image',
      cover: '/images/portfolio/6.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 7,
      type: 'image',
      cover: '/images/portfolio/7.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 8,
      type: 'image',
      cover: '/images/portfolio/8.svg',
      name: 'Brand',
      title: 'Logo',
    },
    {
      id: 9,
      type: 'image',
      cover: '/images/portfolio/9.svg',
      name: 'Brand',
      title: 'Logo',
    },
  ]
  
  export const testimonials = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in',
      image: './images/testimonials/team-1.png',
      name: 'Alamin Musa',
      post: 'Front End Developer',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in',
      image: './images/testimonials/team-2.png',
      name: 'Alex Ander',
      post: 'Back End Developer',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitordapibus dictum.Fusce faucibus ligula scelerisque, eleifend turpis in',
      image: './images/testimonials/team-3.png',
      name: 'GorkCoder',
      post: 'React Developer',
    },
  ]
  
  export const blogs = [
    {
      id: 1,
      title: "L'autoconsommation individuelle (ACI)",
      date: '27 Nov 2023',
      author: 'Fanny Margeolet',
      desc: "Une opération d'autoconsommation individuelle est le fait pour un producteur, dit autoproducteur, de consommer lui-même et sur un même site tout ou partie de l'électricité produite par son installation",
      cover: './images/blog/3.png',
      content: (
        <div className="blog-content">
          <article data-aos="zoom-in">
            <h2>Définition</h2>
            <p>
              L&apos;autoconsommation individuelle (ACI) est définie par l&apos;article
              315-1 du Code de l&apos;énergie, issu de la loi sur l&apos;autoconsommation
              2017-227 ratifiant l&apos;ordonnance 2016-1019. La définition est la
              suivante : « Une opération d&apos;autoconsommation individuelle est le
              fait pour un producteur, dit autoproducteur, de consommer lui-même
              et sur un même site tout ou partie de l&apos;électricité produite par son
              installation ».{' '}
              <u>
                L’autoconsommation individuelle, c’est tout simplement le fait de
                consommer soi-même l’électricité produite par son installation
                photovoltaïque.
              </u>
              <br></br>
              Dans un schéma d’autoconsommation, l’installation photovoltaïque est
              donc raccordée directement sur l&apos;installation électrique intérieure.
              Il peut y avoir :
            </p>
            <ul>
              <li>
                Autoconsommation totale : Toute la production est consommée par le
                bâtiment, il n’y a aucun surplus injecté sur le réseau, à aucun
                moment de l’année
              </li>
              <li>
                Autoconsommation partielle : Il y a un excès de production qui
                n’est pas consommé et est soit vendu sur le réseau (« vente au
                surplus »)
              </li>
            </ul>
          </article>
  
          <section data-aos="fade-up">
            <h2>Les avantages</h2>
            <ul>
              <li>
                Économies d’électricité : L’électricité produite et consommée vous
                permet de réduire votre facture d’électricité.
              </li>
              <li>
                Indépendance au réseau : En produisant votre propre énergie, vous
                devenez moins dépendant du réseau électrique public. Cela peut
                être particulièrement avantageux en cas de pannes de courant ou de
                problèmes dans le réseau.
              </li>
              <li>
                Stabilité des coûts : Les coûts associés à la production d&apos;énergie
                à partir de sources renouvelables peuvent être plus stables et
                prévisibles que ceux liés aux sources d&apos;énergie traditionnelles,
                qui peuvent fluctuer en fonction des prix des combustibles
                fossiles.
              </li>
              <li>
                Subventions : Il existe des incitations financières, des crédits
                d&apos;impôt et des subventions pour encourager l&apos;installation de
                systèmes d&apos;autoconsommation d&apos;énergie renouvelable.
              </li>
              <li>
                Production d’énergie verte : En utilisant des sources d&apos;énergie
                renouvelables comme le soleil, vous consommez une énergie
                renouvelable, produite localement et contribuez à réduire les
                émissions de gaz à effet de serre, ce qui est bénéfique pour
                l&apos;environnement.
              </li>
              <li>
                Sécurité énergétique : En produisant votre propre énergie, vous
                pouvez être mieux préparé aux perturbations éventuelles dans
                l&apos;approvisionnement énergétique, offrant ainsi une certaine
                sécurité énergétique.
              </li>
            </ul>
          </section>
  
          <section data-aos="fade-up">
            <h2>Le Surplus de production d’électricité</h2>
            <p>
              Avec une installation solaire en autoconsommation individuelle, vous
              consommez l’électricité que vous produisez. Cependant, toute
              l’électricité produite pendant la journée n’est pas forcément
              utilisée sur le moment. Il reste donc un surplus de votre
              production. Vous pouvez alors réinjecter le surplus sur le réseau
              public. De cette manière, vous n’avez aucune perte et vous faites
              profiter de votre électricité décarbonée à d’autres consommateurs.
              Vous pouvez injecter votre surplus en optant pour l’autoconsommation
              avec revente de surplus. Vous êtes alors rémunéré par EDF OA
              (Obligation d’Achat) ou une ELD (Entreprise Locale de Distribution)
              qui vous achète votre électricité. Dans ce cas, vous bénéficiez d’un
              revenu complémentaire à un tarif garanti pendant 20 ans.
            </p>
          </section>
  
          <section data-aos="fade-up">
            <h2>Une démarche durable</h2>
            <p>
              L&apos;autoconsommation individuelle est une démarche qui s&apos;inscrit dans
              une{' '}
              <u>
                perspective de durabilité environnementale et d&apos;indépendance
                énergétique.
              </u>{' '}
              Elle permet de participer activement à la transition vers des
              sources d&apos;énergie plus propres et renouvelables.
            </p>
          </section>
  
          <section data-aos="fade-up">
            <h2>L&apos;autoconsommation individuelle en tiers-investissement</h2>
            <p>
              Un tiers-investisseur peut intervenir dans des opérations
              d&apos;autoconsommation individuelle pour des projets de centrale
              photovoltaïque, pour des puissances d&apos;au moins 9 kWc (bâtiments
              tertiaires, entreprises, stations d&apos;épuration, supermarchés, etc.)
              Le recours au tiers-investissement pour une opération
              d&apos;autoconsommation individuelle est autorisé par l&apos;article L315-1 du
              Code de l&apos;Energie : « L&apos;installation de l&apos;autoproducteur peut être
              détenue ou gérée par un tiers. Le tiers peut se voir confier
              l&apos;installation et la gestion, notamment l&apos;entretien, de
              l&apos;installation de production, pour autant qu&apos;il demeure soumis aux
              instructions de l&apos;autoproducteur».
            </p>
          </section>
  
          <section data-aos="fade-up">
            <h2>En conclusion</h2>
            <p>
              Choisir l’autoconsommation individuelle représente une transition
              vers un mode de consommation plus durable et offre la possibilité de
              contribuer activement à la protection de l&apos;environnement tout en
              assurant une plus grande autonomie énergétique.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Evolution du prix de l’électricité en 2024',
      date: '18 Déc 2023',
      author: 'Fanny Margeolet',
      desc: "Le coût du tarif réglementé, intimement lié aux prix du marché de gros, devrait continuer son escalade jusqu'en 2026. Comment faire face à l’augmentation du prix de l’énergie ?",
      cover: './images/blog/2.png',
      content: (
        <div className="blog-content">
          <section data-aos="fade-up">
            <h2>Ce qu’il faut savoir !</h2>
            <p>
              Les événements survenus en 2023 ont influencé les marchés de
              l&apos;électricité et ont causé une hausse historique du prix de
              l&apos;électricité.
            </p>
            <ul data-aos="fade-up">
              <li>
                Conflits politiques en Europe : Les tensions géopolitiques ont eu
                des répercussions sur les marchés de l&apos;énergie en perturbant les
                flux d&apos;approvisionnement, en augmentant l&apos;incertitude économique
                et en entraînant des fluctuations des prix des matières premières.
              </li>
              <li>
                Incertitudes autour du COVID-19 : La pandémie de COVID-19 a eu des
                impacts significatifs sur l&apos;économie mondiale, entraînant des
                perturbations dans divers secteurs, y compris l&apos;énergie.
              </li>
            </ul>
          </section>
  
          <section data-aos="fade-up">
            <h2>Difficultés de production d&apos;énergie par EDF!</h2>
            <p>
              Des problèmes de production d&apos;énergie ont entraîné des tensions sur
              l&apos;approvisionnement et contribué à la hausse des prix.
            </p>
          </section>
  
          <section data-aos="fade-up">
            <div>
              <h2>Augmentation du prix de l’électricité début 2024 à venir ?</h2>
              <p>
                Le 24 novembre 2023, une nouvelle annonce du PDG d&apos;EDF, Luc
                Rémont, révèle une augmentation de 10% au 1er février 2024 (TRV).
              </p>
            </div>
          </section>
  
          {/* Continue adding more sections as needed */}
        </div>
      ),
    },
    {
      id: 3,
      title: 'Transition énergétique : définition, enjeux et défis',
      date: '18 Déc 2023',
      author: 'Fanny Margeolet',
      desc: 'La transition énergétique : tout le monde en parle ! Mais savez-vous vraiment ce que c’est ? En quoi cela consiste ? Quels sont ses objectifs ? Comment y parvenir ? Voici quelques points essentiels pour mieux appréhender ce concept.',
      cover: './images/blog/1.png',
      content: (
        <div className="blog-content">
          <section data-aos="zoom-in">
            <h3>DÉFINITION DE LA TRANSITION ÉNERGÉTIQUE</h3>
            <p>
              Volet essentiel de la transition écologique, la transition
              énergétique désigne l’ensemble des transformations du système de
              production, de distribution et de consommation d’énergie effectuées
              sur un territoire dans le but de le rendre plus écologique.
              Concrètement, la transition énergétique vise à transformer un
              système énergétique pour diminuer son impact environnemental.
            </p>
          </section>
  
          <section data-aos="fade-in">
            <h2>Transition énergétique : définition, enjeux et défis</h2>
            <p>
              La transition énergétique : tout le monde en parle ! Mais savez-vous
              vraiment ce que c’est ? En quoi cela consiste ? Quels sont ses
              objectifs ? Comment y parvenir ? Voici quelques points essentiels
              pour mieux appréhender ce concept.
            </p>
          </section>
  
          <section data-aos="fade-in">
            <h3>LES ENJEUX DE LA TRANSITION ÉNERGÉTIQUE</h3>
            <p>
              Les enjeux de la transition énergétique sont nombreux et revêtent
              une importance cruciale à l&apos;échelle mondiale. Voici quelques-uns des
              principaux enjeux associés à ce processus :
            </p>
            <ul>
              <li>
                <b>Réduction des émissions de gaz à effet de serre</b>: L&apos;un des
                enjeux majeurs de la transition énergétique est de lutter contre
                le changement climatique en réduisant les émissions de gaz à effet
                de serre. Cela implique une transition vers des sources d&apos;énergie
                renouvelable, moins émettrices de CO2.
              </li>
              <li>
                <b>Dépendance aux énergies fossiles</b>: La dépendance aux
                énergies fossiles (pétrole, charbon, gaz) pose des risques en
                termes de sécurité énergétique, de volatilité des prix et d&apos;impact
                environnemental. La transition énergétique vise à réduire cette
                dépendance en faveur de sources d&apos;énergie plus durables.
              </li>
              <li>
                <b>Épuisement des ressources naturelles</b>: Les ressources
                naturelles utilisées dans la production d&apos;énergie non renouvelable
                sont limitées. La transition énergétique vise à promouvoir
                l&apos;utilisation de ressources renouvelables, telles que le soleil,
                le vent et l&apos;eau, qui sont plus durables à long terme.
              </li>
              <li>
                <b>Sécurité énergétique</b>: Diversifier les sources d&apos;énergie et
                promouvoir l&apos;autonomie énergétique peuvent renforcer la sécurité
                énergétique en réduisant la dépendance à une seule source ou à des
                sources vulnérables.
              </li>
            </ul>
          </section>
  
          <section data-aos="fade-in">
            <h3>LA RÉGLEMENTATION AUTOUR DE LA TRANSITION ÉNERGÉTIQUE</h3>
            <p>
              En France, la réglementation autour de la transition énergétique est
              encadrée par plusieurs lois et dispositifs visant à promouvoir des
              pratiques plus durables et à réduire l&apos;impact environnemental du
              système énergétique.
            </p>
            <p>
              Voici quelques éléments clés de la réglementation française liée à
              la transition énergétique :
            </p>
            <ul>
              <li>
                <b>
                  Loi de Transition Énergétique pour la Croissance Verte (LTECV)
                </b>
                : Adoptée en 2015, cette loi établit les grandes orientations de
                la politique énergétique française. Elle fixe des objectifs
                ambitieux, tels que la réduction de la part du nucléaire dans la
                production d&apos;électricité, le développement des énergies
                renouvelables, l&apos;amélioration de l&apos;efficacité énergétique, et la
                lutte contre la précarité énergétique.
              </li>
              <li>
                <b>Plan Climat</b>: Intégré à la LTECV, le Plan Climat fixe des
                objectifs spécifiques en matière de réduction des émissions de gaz
                à effet de serre, d&apos;adaptation aux changements climatiques et de
                promotion des énergies renouvelables.
              </li>
              <li>
                <b>Programmation Pluriannuelle de l&apos;Énergie (PPE)</b>: Élaborée
                conformément à la LTECV, la PPE définit la trajectoire de la
                politique énergétique sur plusieurs années. Elle précise les
                moyens et les actions pour atteindre les objectifs fixés,
                notamment en matière de production d&apos;électricité, d&apos;énergies
                renouvelables et d&apos;efficacité énergétique.
              </li>
              <li>
                <b>Réglementation thermique des bâtiments (RT2012)</b>: Cette
                réglementation fixe les normes de performance énergétique
                applicables aux nouvelles constructions et aux rénovations
                importantes, afin de réduire la consommation énergétique des
                bâtiments.
              </li>
              <li>
                <b>Loi Climat et Résilience</b>: Elle vise à traduire les
                engagements de la France dans le cadre de l&apos;Accord de Paris sur le
                climat en actions concrètes. Elle s&apos;inscrit dans une démarche
                visant à renforcer la résilience de la société française face aux
                impacts du changement climatique tout en réduisant son empreinte
                carbone.
              </li>
              <li>
                <b>Le décret tertiaire</b>: Il encourage les acteurs du secteur
                tertiaire à adopter des pratiques plus durables et à contribuer
                aux objectifs nationaux en matière d&apos;efficacité énergétique.
              </li>
            </ul>
          </section>
  
          <section data-aos="fade-in">
            <h2>En conclusion</h2>
            <ul>
              <li>
                Ces différentes mesures illustrent l&apos;engagement de la France en
                faveur de la transition énergétique, visant à concilier
                développement économique, préservation de l&apos;environnement, et
                lutte contre le changement climatique. Il est important de noter
                que la réglementation évolue régulièrement pour s&apos;adapter aux
                enjeux environnementaux et énergétiques.
              </li>
  
              <li>
                En somme, la transition énergétique est un défi complexe qui
                implique des changements profonds dans nos systèmes énergétiques,
                nos modes de vie et nos politiques. Cependant, elle offre
                également des opportunités considérables pour créer un avenir plus
                durable, résilient et équitable.
              </li>
  
              <li>
                Le solaire est l’un des grand gagnant de la transition
                énergétique. L&apos;énergie solaire est une source d&apos;énergie
                renouvelable inépuisable et abondante. Il joue un rôle clé dans la
                transition vers un système énergétique plus durable, propre et
                résilient, et son adoption croissante contribue significativement
                à atteindre les objectifs de la transition énergétique.
              </li>
  
              <li>
                Que pensez-vous de l&apos;adoption de l&apos;énergie solaire dans votre
                entreprise ? Êtes-vous prêt à envisager cette solution pour
                contribuer à la transition énergétique ? N&apos;hésitez pas à nous
                contacter pour échanger sur vos futurs projets.
              </li>
            </ul>
          </section>
        </div>
      ),
    },
  ]
  
  export const partners = [
    {
      imageSrc: './images/partners/T-Cartoons.png',
      altText: 'Cartoons Production brand',
      description:
        'Cartons Production est né en 2015 de notre envie d’accompagner des projets artistiques situés dans le champ du cirque, avec pour objectif la valorisation de la création et et la pérennisation de l’activité des artistes et des compagnies. La mutualisation de nos compétences (administration, production et diffusion) nous permet d’assurer un suivi global auprès des équipes artistiques ; avec qui nous mettons en place un mode de collaboration propre à chacune.',
    },
    {
      imageSrc: './images/partners/T-IsoWatt.png',
      altText: 'IsoWatt brand',
      description:
        'Le groupe Auraliance propose des solutions et une expertise pour un habitat éco-responsable. Parmi ses filiales, Isowatt, spécialiste de l’installation énergétique depuis plus de 17 ans. Isowatt propose les meilleures solutions énergétiques pour particuliers et professionnels : panneaux photovoltaïques de la petite à la grande puissance, pompe à chaleur, et rénovation énergétique.',
    },
    {
      imageSrc: './images/partners/T-Consultec.png',
      altText: "Consult'ec brand",
      description:
        'Le groupe propose des solutions et une expertise pour un habitat éco-responsable. Parmi ses filiales, Isowatt, spécialiste de l’installation énergétique depuis plus de 17 ans. Isowatt propose les meilleures solutions énergétiques pour particuliers et professionnels : panneaux photovoltaïques de la petite à la grande puissance, pompe à chaleur, et rénovation énergétique.',
    },
    {
      imageSrc: './images/partners/aura-digital.png',
      altText: 'Aura Digital Solaire',
      description:
        "Pour une région solaire et connectée. Syndicat des entreprises de la région Auvergne Rhône-Alpes, nous œuvrons dans les domaines du solaire, des solutions digitales et numériques appliquées au secteur de l’énergie, des énergies renouvelables et de l’efficacité énergétique <a href='https://www.auradigitalsolaire.fr/'>https://www.auradigitalsolaire.fr/</a>",
    },
  ]
  
  export const blogSubLinks = blogs.map((blog) => ({
    url: blog.title,
    texte: blog.title,
  }))
  