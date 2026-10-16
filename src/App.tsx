import { useEffect, useRef, useState } from "react";

const IMG = {
  hero: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?auto=format&fit=crop&w=2200&q=90",
  about: "https://images.unsplash.com/photo-1676372205168-3b015dc4857a?auto=format&fit=crop&w=1200&q=85",
  road: "https://images.unsplash.com/photo-1695808403945-2eae5f50b486?auto=format&fit=crop&w=1200&q=85",
  gravel: "https://images.unsplash.com/photo-1632050592122-6b730e1ac63f?auto=format&fit=crop&w=1200&q=85",
  mountain: "https://images.unsplash.com/photo-1635702961555-8c700d0c79f0?auto=format&fit=crop&w=1200&q=85",
  indoor: "https://images.unsplash.com/photo-1676531356064-0a527118baf4?auto=format&fit=crop&w=1200&q=85",
  workshop: "https://images.unsplash.com/photo-1675798227643-da319f8ee8f7?auto=format&fit=crop&w=1400&q=85",
};

const VIDEO = {
  hero: "https://assets.mixkit.co/videos/40901/40901-1080.mp4",
  road: "https://assets.mixkit.co/videos/40904/40904-1080.mp4",
  ride: "https://assets.mixkit.co/videos/41875/41875-1080.mp4",
  trail: "https://assets.mixkit.co/videos/2002/2002-1080.mp4",
  community: "https://assets.mixkit.co/videos/41888/41888-1080.mp4",
};

const PRODUCT_IMAGE = {
  colnago: "https://a.storyblok.com/f/263970/7952x5304/d5c577532a/v4rs-bagliore-oro-48.jpg/m/1200x0/filters:quality(78)",
  cervelo: "https://images.prismic.io/cervelo/3bb48c48-6e58-4d0a-8be3-f6b5312efba3_0H0S5EUI2C+PROFILE+%281%29.webp?auto=compress,format",
  bmc: "https://cdn.shopify.com/s/files/1/2361/3567/files/bmc-2026-teammachine-slr-one-road-bike-white-1.jpg?v=1761662102",
  orbea: "https://cdn.shopify.com/s/files/1/0483/9040/6312/files/Orbea_Terra_M30TEAM_Acid_Gum_-_Fantasy_Purple_Carbon_View_Gloss_Contender_Bicycles.jpg?v=1764854903",
  pinarello: "https://cdn.shopify.com/s/files/1/0608/7684/9196/files/pinarello-dogma-f-frameset-7556912.jpg?v=1771291754",
  met: "https://www.met-helmets.com/app/uploads/2025/09/met-trenta-3k-carbon-mips-2-road-cycling-helmet-WH1-grid-2.jpg",
  camelbak: "https://cdn.shopify.com/s/files/1/0286/1214/products/camelbak-podium-chill-21oz-bike-water-bottle-white-black-15420925444198.jpg?v=1772062507",
  castelli: "https://cdn.shopify.com/s/files/1/0608/7684/9196/files/castelli-free-ar-40-short-sleeve-jersey-6686774.jpg?v=1771301828",
  magicshine: "https://cdn.shopify.com/s/files/1/0363/2689/9849/files/EVO-1700-W.png?v=1790646814",
  oakley: "https://assets2.oakley.com/prod-onecp-record-files/pieyewear/982f8852-e8e8-44ef-9820-b36200b84dee/0OO9465__946517__P21__shad__qt.png",
  bmcSlr01: "https://cdn.shopify.com/s/files/1/2361/3567/files/bmc-2027-teammachine-slr-01-one-road-bike-white-1_f7ca888b-c1fe-48f6-9aea-9b504b15c774.jpg?v=1772718079",
  orbeaM20: "https://cdn.shopify.com/s/files/1/0483/9040/6312/files/Orbea_Terra_M20TEAM_2027_in_Acid_Gum_-_Fantasy_Purple_Carbon_View_Gloss_Contender_Bicycles.jpg?v=1784240016",
  pinarelloSram: "https://cdn.shopify.com/s/files/1/0483/9040/6312/files/Pinarello_Dogma_F_SRAM_Red_eTap_AXS_Luxter_Red_Gold_Contender_Bicycles.jpg?v=1744204277",
  metGold: "https://www.met-helmets.com/app/uploads/2025/09/met-trenta-3k-carbon-mips-2-road-cycling-helmet-GO1-straps.jpg",
  magicshinePro: "https://cdn.shopify.com/s/files/1/0363/2689/9849/files/EVO-1700-PRO-B.png?v=1790646721",
  camelbakUsa: "https://cdn.shopify.com/s/files/1/0705/8928/4605/files/ck2145_430c27c2-0697-480f-a251-1b7a48706041.jpg?v=1762321031",
};

const brandLogos = [
  ["ARGON 18", "/brands/argon18.png"],
  ["MAGICSHINE", "/brands/magicshine.png"],
  ["VITTORIA", "/brands/vittoria.png"],
  ["BELL", "/brands/bell.png"],
  ["ELITE", "/brands/elite.png"],
  ["OAKLEY", "/brands/oakley.png"],
  ["COROS", "/brands/coros.png"],
  ["POLYGON", "/brands/polygon.png"],
];

const newProducts = [
  ["COLNAGO", "V4Rs Disc Road Bike", "₹ 8,95,000", PRODUCT_IMAGE.colnago, "https://cdn.shopify.com/videos/c/vp/825d4a2a783047e0af5a89faeba60dcd/825d4a2a783047e0af5a89faeba60dcd.HD-1080p-7.2Mbps-80190241.mp4"],
  ["CERVÉLO", "S5 Ultegra Di2", "₹ 7,49,900", PRODUCT_IMAGE.cervelo, VIDEO.hero],
  ["BMC", "Teammachine SLR ONE", "₹ 6,89,000", PRODUCT_IMAGE.bmc, VIDEO.ride],
  ["ORBEA", "Terra M30 Team", "₹ 3,25,000", PRODUCT_IMAGE.orbea, VIDEO.trail],
  ["PINARELLO", "Dogma F Frameset", "₹ 6,75,000", PRODUCT_IMAGE.pinarello, VIDEO.community],
  ["BMC", "Teammachine SLR 01 ONE", "₹ 9,20,000", PRODUCT_IMAGE.bmcSlr01, VIDEO.road],
  ["ORBEA", "Terra M20 Team", "₹ 4,35,000", PRODUCT_IMAGE.orbeaM20, VIDEO.trail],
  ["PINARELLO", "Dogma F SRAM Red", "₹ 12,90,000", PRODUCT_IMAGE.pinarelloSram, VIDEO.hero],
];

const coolProducts = [
  ["MET", "Trenta 3K Carbon Helmet", "₹ 27,999", PRODUCT_IMAGE.met, VIDEO.road],
  ["CAMELBAK", "Podium Chill Bottle", "₹ 1,499", PRODUCT_IMAGE.camelbak, VIDEO.ride],
  ["CASTELLI", "Free AR 4.0 Jersey", "₹ 12,990", PRODUCT_IMAGE.castelli, VIDEO.community],
  ["MAGICSHINE", "EVO 1700 Front Light", "₹ 8,999", PRODUCT_IMAGE.magicshine, VIDEO.hero],
  ["OAKLEY", "Sutro Lite Sweep", "₹ 16,490", PRODUCT_IMAGE.oakley, VIDEO.trail],
  ["MET", "Trenta 3K Carbon Gold", "₹ 29,999", PRODUCT_IMAGE.metGold, VIDEO.road],
  ["MAGICSHINE", "EVO 1700 Pro", "₹ 11,499", PRODUCT_IMAGE.magicshinePro, VIDEO.hero],
  ["CAMELBAK", "Podium Chill USA 21oz", "₹ 1,699", PRODUCT_IMAGE.camelbakUsa, VIDEO.ride],
];

const Icon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const paths: Record<string, React.ReactNode> = {
    search: <><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-7 8-7s7 2 8 7"/></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    arrow: <><path d="M4 12h15"/><path d="m14 7 5 5-5 5"/></>,
    menu: <><path d="M3 7h18M3 12h18M3 17h18"/></>,
    close: <><path d="m5 5 14 14M19 5 5 19"/></>,
    tool: <><path d="M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 3-4-4 3-3Z"/></>,
    fit: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6m0 6v6M3 12h6m6 0h6"/></>,
    shield: <><path d="M12 3 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-5"/></>,
    star: <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z"/>,
    play: <path d="m9 7 8 5-8 5V7Z"/>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    chat: <><path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 10h8M8 13h5"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M20 15.5A8 8 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>,
    chevron: <path d="m8 10 4 4 4-4"/>,
  };
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

const LinkButton = ({ children, secondary = false, href = "#" }: { children: React.ReactNode; secondary?: boolean; href?: string }) => (
  <a className={`button ${secondary ? "button--secondary" : ""}`} href={href}>{children}<Icon name="arrow" size={17}/></a>
);

const SectionTitle = ({ eyebrow, children, light = false }: { eyebrow?: string; children: React.ReactNode; light?: boolean }) => (
  <div className={`section-title ${light ? "section-title--light" : ""}`}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <div className="display">{children}</div>
  </div>
);

function CinematicVideo({ src, poster, className, label, playMode = "viewport" }: { src: string; poster: string; className?: string; label: string; playMode?: "viewport" | "hover" }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (playMode === "hover") {
      const host = video.closest(".product-card, .discipline, .service-card, .journal-grid article") || video;
      const play = () => {
        if (!reduceMotion) video.play().catch(() => undefined);
      };
      const pause = () => video.pause();
      host.addEventListener("pointerenter", play);
      host.addEventListener("pointerleave", pause);
      host.addEventListener("focusin", play);
      host.addEventListener("focusout", pause);
      return () => {
        host.removeEventListener("pointerenter", play);
        host.removeEventListener("pointerleave", pause);
        host.removeEventListener("focusin", play);
        host.removeEventListener("focusout", pause);
      };
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion) video.play().catch(() => undefined);
      else video.pause();
    }, { rootMargin: "120px 0px", threshold: 0.08 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [playMode]);

  return (
    <video ref={ref} className={className} poster={poster} muted loop playsInline preload="metadata" aria-label={label} disablePictureInPicture>
      <source src={src.replace("-1080.mp4", "-360.mp4")} type="video/mp4" media="(max-width: 760px)"/>
      <source src={src} type="video/mp4"/>
    </video>
  );
}

function ProductCarousel({ items, onAdd }: { items: string[][]; onAdd: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState<Set<string>>(() => new Set());
  const scroll = (direction: number) => ref.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  const addProduct = (name: string) => {
    if (added.has(name)) return;
    setAdded((current) => new Set(current).add(name));
    onAdd();
  };
  return (
    <div className="carousel-wrap">
      <div className="carousel-controls">
        <button aria-label="Previous products" onClick={() => scroll(-1)}>←</button>
        <button aria-label="Next products" onClick={() => scroll(1)}>→</button>
      </div>
      <div className="product-track" ref={ref}>
        {items.map((p) => (
          <article className="product-card" key={p[1]}>
            <div className="product-visual">
              <CinematicVideo src={p[4]} poster={p[3]} label={`${p[0]} ${p[1]} product film`} playMode="hover"/>
            </div>
            <div className="product-meta">
              <div><span className="product-brand">{p[0]}</span><strong>{p[1]}</strong></div>
              <span className="price">{p[2]}</span>
            </div>
            <div className="product-actions">
              <button className={`add-to-cart ${added.has(p[1]) ? "is-added" : ""}`} onClick={() => addProduct(p[1])} disabled={added.has(p[1])}>
                <span>{added.has(p[1]) ? "ADDED" : "ADD TO CART"}</span>
                <Icon name={added.has(p[1]) ? "shield" : "bag"} size={16}/>
              </button>
              <a className="buy-now" href={`https://wa.me/919844020861?text=${encodeURIComponent(`I would like to buy the ${p[0]} ${p[1]} (${p[2]}).`)}`} target="_blank" rel="noreferrer">
                <span>BUY NOW</span><Icon name="arrow" size={16}/>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = [
    ["Payment Methods", "We accept major cards, UPI, net banking and cash at our Bangalore store."],
    ["Returns", "Unused products in original packaging may be returned within 7 days, subject to our return policy."],
    ["Shipping", "We ship across India. Bikes are professionally packed and insured in transit."],
    ["Warranty", "All products include applicable manufacturer warranty and our after-sales support."],
    ["EMI", "Flexible EMI options are available on eligible purchases. Ask our team for current plans."],
  ];

  return (
    <div className={`site ${lightTheme ? "theme-light" : "theme-dark"}`}>
      <div className="announcement"><span>FREE SHIPPING ON SELECT ORDERS</span><span>EMI AVAILABLE</span><a href="#visit">BOOK A CONSULTATION <Icon name="arrow" size={14}/></a></div>
      <header className="header">
        <a className="logo" href="#" aria-label="WheelSports home"><img src="/wheelsports-logo.png" alt="WheelSports Premium Cycling Store" /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a className="active" href="#">Home</a>
          <div className="nav-bikes">
            <a href="#shop">Bikes <Icon name="chevron" size={14}/></a>
            <div className="mega-menu">
              <div className="mega-intro">
                <span className="mega-kicker">SHOP WHEELSPORTS</span>
                <strong>FIND YOUR<br/><em>PERFECT RIDE.</em></strong>
                <p>Performance bikes, precision components and rider essentials—curated by people who ride.</p>
                <a className="mega-feature" href="#custom">EXPLORE CUSTOM BUILDS <Icon name="arrow" size={15}/></a>
              </div>
              <div className="mega-column">
                <span>BIKES</span>
                <a href="#shop">Road Bikes <small>Speed & aero</small></a>
                <a href="#shop">Gravel Bikes <small>Go beyond</small></a>
                <a href="#shop">Mountain Bikes <small>Trail & control</small></a>
                <a href="#shop">Indoor Bikes <small>Train smarter</small></a>
              </div>
              <div className="mega-column">
                <span>RIDER ESSENTIALS</span>
                <a href="#shop">Apparel</a>
                <a href="#shop">Helmets & Eyewear</a>
                <a href="#shop">Wheels & Tires</a>
                <a href="#shop">Components</a>
                <a href="#shop">Accessories</a>
              </div>
              <div className="mega-column">
                <span>TECH & TRAINING</span>
                <a href="#shop">GPS Computers</a>
                <a href="#shop">Power Meters</a>
                <a href="#shop">Smart Trainers</a>
                <a href="#shop">Lights</a>
                <a href="#shop">Workshop Care</a>
              </div>
              <a className="mega-image" href="#shop">
                <CinematicVideo src={VIDEO.road} poster={IMG.road} label="Explore premium road bikes"/>
                <span>FEATURED / ROAD</span>
                <strong>BUILT FOR SPEED</strong>
                <Icon name="arrow"/>
              </a>
            </div>
          </div>
          <a href="#events">Events</a>
          <a href="#visit">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="utility-search" aria-label="Search"><Icon name="search"/></button>
          <span className="header-divider" aria-hidden="true"/>
          <button className="utility-account" aria-label="Account"><Icon name="user"/></button>
          <button className="utility-cart" aria-label={`Cart with ${cartCount} items`}><Icon name="bag"/><span className="cart-count" aria-live="polite">{cartCount}</span></button>
          <button className="theme-toggle" onClick={() => setLightTheme(!lightTheme)} aria-label={`Switch to ${lightTheme ? "dark" : "light"} theme`} aria-pressed={lightTheme} title={`Switch to ${lightTheme ? "dark" : "light"} theme`}>
            <Icon name={lightTheme ? "moon" : "sun"}/>
          </button>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Icon name={menuOpen ? "close" : "menu"}/></button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <details>
            <summary>Bikes <Icon name="chevron" size={15}/></summary>
            <div className="mobile-subnav">{["Road Bikes", "Gravel Bikes", "Mountain Bikes", "Indoor Bikes", "Apparel & Helmets", "Components", "Smart Trainers", "Accessories"].map((item) => <a href="#shop" onClick={() => setMenuOpen(false)} key={item}>{item}</a>)}</div>
          </details>
          <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>}
      </header>

      <main>
        <section className="hero">
          <CinematicVideo className="hero-image" src={VIDEO.hero} poster={IMG.hero} label="Road cyclist riding outdoors"/>
          <div className="hero-overlay"/>
          <div className="wheel-motif wheel-motif--hero"/>
          <div className="hero-content">
            <div className="eyebrow">PREMIUM CYCLING STORE · BANGALORE</div>
            <h1>CRAFTED FOR <span className="chrome">PERFORMANCE.</span><br/>BUILT FOR <span className="blue">YOU.</span></h1>
            <p>World-class machines. Precision fitting. One-of-one builds engineered around the way you ride.</p>
            <div className="hero-actions"><LinkButton href="#shop">Shop Bikes</LinkButton><LinkButton secondary href="#custom">Start Your Build</LinkButton></div>
          </div>
          <div className="hero-index"><span>01</span><i/><span>18</span></div>
        </section>

        <section className="about section" id="about">
          <div className="about-copy">
            <SectionTitle eyebrow="OUR STORY">DISCOVER OUR <span className="blue">CYCLING</span> WORLD</SectionTitle>
            <p className="lead">WheelSports, the best bicycle store in Bangalore, is more than just a cycle shop.</p>
            <p>WheelSports is a symbol of cycling heritage and innovation. Our dedication to quality, passion for cycles, and commitment to the cycling community have shaped us into the cycling enthusiasts&apos; go-to destination.</p>
            <a className="text-link" href="#visit">MEET THE TEAM <Icon name="arrow" size={16}/></a>
          </div>
          <figure className="about-image"><div className="about-media"><CinematicVideo src={VIDEO.ride} poster={IMG.about} label="Cyclists riding through a city park"/></div><figcaption><span>EST.</span><strong>2011</strong><span>BANGALORE</span></figcaption></figure>
        </section>

        <section className="disciplines section section--dark" id="shop">
          <SectionTitle eyebrow="FIND YOUR LINE" light>SHOP BY <span className="chrome">DISCIPLINE</span></SectionTitle>
          <div className="discipline-grid">
            {[["ROAD", IMG.road, "SPEED / AERO", VIDEO.road], ["GRAVEL", IMG.gravel, "BEYOND / LIMITS", VIDEO.trail], ["MOUNTAIN", IMG.mountain, "TRAIL / CONTROL", VIDEO.community], ["INDOOR", IMG.indoor, "TRAIN / SMARTER", VIDEO.ride]].map((d, i) => (
              <a className="discipline" href="#" key={d[0]}><CinematicVideo src={d[3]} poster={d[1]} label={`${d[0].toLowerCase()} cycling`} playMode="hover"/><span className="discipline-no">0{i + 1}</span><div><small>{d[2]}</small><strong>{d[0]}</strong><Icon name="arrow"/></div></a>
            ))}
          </div>
        </section>

        <section className="products section">
          <div className="title-row"><SectionTitle eyebrow="JUST LANDED">NEW <span className="blue">ARRIVALS</span></SectionTitle><a className="text-link" href="#">VIEW ALL BIKES <Icon name="arrow" size={16}/></a></div>
          <ProductCarousel items={newProducts} onAdd={() => setCartCount((count) => count + 1)}/>
        </section>

        <section className="brands">
          <div className="brands-intro">
            <div><span className="eyebrow">THE PELOTON</span><h2>BRANDS THAT <span className="blue">MOVE</span> THE SPORT.</h2></div>
            <div className="brands-copy"><p>Official products from performance-led cycling brands we trust on the road, trail and in the workshop.</p><a className="text-link" href="#">VIEW ALL BRANDS <Icon name="arrow" size={15}/></a></div>
          </div>
          <div className="brand-logo-grid">
            <div className="brand-logo-track">
              {[...brandLogos, ...brandLogos].map((brand, i) => <a href="#" className="brand-logo-card" key={`${brand[0]}-${i}`}><span>0{(i % brandLogos.length) + 1}</span><img src={brand[1]} alt={`${brand[0]} logo`}/><div><strong>{brand[0]}</strong><Icon name="arrow" size={14}/></div></a>)}
            </div>
          </div>
        </section>

        <section className="services section">
          <div className="services-heading">
            <SectionTitle eyebrow="WORKSHOP EXPERTISE">SERVICES, DONE WITH <span className="blue">PRECISION</span></SectionTitle>
            <div className="services-summary"><span>BUILT AROUND YOUR RIDE</span><p>From a quick tune-up to a ground-up dream build, every bike receives the same measured attention from our certified workshop team.</p><a className="text-link" href="#visit">BOOK THE WORKSHOP <Icon name="arrow" size={15}/></a></div>
          </div>
          <div className="service-grid">
            {[
              ["01", "Repairs", "Cycle repair and service. Trust our skilled technicians to handle your bike repairs with precision and care, ensuring you get back on the road swiftly.", "tool", IMG.workshop, VIDEO.ride],
              ["02", "Customization", "Tailor your biking experience with our customization services, where every detail is crafted to match your style and needs.", "fit", IMG.road, VIDEO.road],
              ["03", "Accessories", "Enhance your cycling adventures with our range of accessories, carefully curated to elevate your rides and provide convenience.", "bag", IMG.about, VIDEO.community],
              ["04", "Maintenance", "Our maintenance services are designed to keep your bike in top condition, ensuring safety and optimal performance on every ride.", "shield", IMG.indoor, VIDEO.trail],
            ].map((s) => <article className="service-card" key={s[0]}><div className="service-media"><CinematicVideo src={s[5]} poster={s[4]} label={`${s[1]} service film`} playMode="hover"/></div><div className="service-overlay"/><span className="service-watermark">{s[0]}</span><div className="service-top"><span>SERVICE / {s[0]}</span><i><Icon name={s[3]} size={25}/></i></div><div className="service-content"><h3>{s[1]}</h3><p>{s[2]}</p></div><a href={s[1] === "Customization" ? "#custom" : "#"}>EXPLORE SERVICE <Icon name="arrow" size={15}/></a></article>)}
          </div>
        </section>

        <section className="custom section--dark" id="custom">
          <div className="wheel-motif wheel-motif--custom"/>
          <div className="custom-visual">
            <div className="blueprint-grid" aria-hidden="true"/>
            <div className="blueprint-orbit blueprint-orbit--a" aria-hidden="true"><i/></div>
            <div className="blueprint-orbit blueprint-orbit--b" aria-hidden="true"><i/></div>
            <div className="scan-beam" aria-hidden="true"/>
            <div className="blueprint-bike" aria-label="Technical road bicycle line drawing">
              <div className="bike-wheel bike-wheel--a"/><div className="bike-wheel bike-wheel--b"/>
              <svg viewBox="0 0 700 430" aria-hidden="true"><path d="M155 325 275 150l120 175H155Zm120-175 165 25-45 150m45-150 100 150M275 150l-45-50m10 0h70M440 175l45-80m-25 15h80" /></svg>
            </div>
            <div className="tech-callout tech-callout--frame"><i/><span>FRAME / 54 CM</span></div>
            <div className="tech-callout tech-callout--fit"><i/><span>FIT ANGLE / 72.4°</span></div>
            <div className="tech-callout tech-callout--torque"><i/><span>TORQUE / 6.2 NM</span></div>
            <div className="blueprint-status"><i/><span>LIVE FIT MODEL</span><strong>CALIBRATING</strong></div>
            <span className="drawing-label">EXPLODED FIT / BUILD SCHEMATIC</span>
          </div>
          <div className="custom-copy">
            <SectionTitle eyebrow="ONE BIKE. YOUR BIKE." light>CUSTOM BUILDS, <span className="blue">WITHOUT COMPROMISE.</span></SectionTitle>
            <div className="build-steps">
              {["Initial Consultation & Bike Fit", "Frame & Drivetrain Selection", "Cockpit & Wheelset Customization", "Precision Assembly"].map((step, i) => <div key={step}><span>0{i + 1}</span><p>{step}</p></div>)}
            </div>
            <LinkButton href="#visit">Book a Consultation</LinkButton>
          </div>
        </section>

        <section className="products section cool">
          <div className="title-row"><SectionTitle eyebrow="CURATED ESSENTIALS">COOL FINDS <span className="blue">WORTH BUYING</span></SectionTitle><a className="text-link" href="#">SHOP ALL GEAR <Icon name="arrow" size={16}/></a></div>
          <ProductCarousel items={coolProducts} onAdd={() => setCartCount((count) => count + 1)}/>
        </section>

        <section className="why section">
          <SectionTitle eyebrow="THE WHEELSPORTS STANDARD">WHY <span className="blue">WHEELSPORTS</span></SectionTitle>
          <div className="why-grid">
            {[["tool", "EXPERT MECHANICS", "Decades of combined workshop experience."], ["fit", "PRECISION ASSEMBLY & FIT", "Every detail measured, torqued and tuned."], ["shield", "AUTHORIZED DEALER", "Genuine products from the world’s best brands."], ["chat", "AFTER-SALES SUPPORT", "We stay with you long after the first ride."]].map((x) => <div key={x[1]}><Icon name={x[0]} size={31}/><strong>{x[1]}</strong><p>{x[2]}</p></div>)}
          </div>
        </section>

        <section className="testimonials section">
          <SectionTitle eyebrow="FROM THE COMMUNITY">CUSTOMER <span className="blue">TESTIMONIALS</span></SectionTitle>
          <div className="quote-grid">
            {[
              ["Sara J.", "Fantastic service! WheelSports helped me find the perfect bike and provided great maintenance tips. Highly recommended."],
              ["Alex M.", "As a beginner, I was unsure about which bike to choose. The team at WheelSports gave me excellent guidance. Now I’m a cycling enthusiast!"],
              ["Rahul S.", "I had my old bike repaired at WheelSports, and it now rides like new. Professional service."],
            ].map((q) => <article className="quote" key={q[0]}><span className="quote-mark">“</span><div className="stars">{[1,2,3,4,5].map(n => <Icon name="star" size={14} key={n}/>)}</div><blockquote>{q[1]}</blockquote><cite>— {q[0]}</cite></article>)}
          </div>
        </section>

        <section className="journal section section--dark">
          <div className="title-row"><SectionTitle eyebrow="RIDE SMARTER" light>FROM THE <span className="chrome">JOURNAL</span></SectionTitle><a className="text-link text-link--light" href="#">VIEW ALL STORIES <Icon name="arrow" size={16}/></a></div>
          <div className="journal-grid">
            {[["ROAD VS GRAVEL", "How to choose the machine that matches your ambition.", IMG.gravel, VIDEO.trail], ["THE CARBON WHEEL GUIDE", "Depth, stiffness and speed—everything that matters.", IMG.road, VIDEO.road], ["SHIMANO VS SRAM", "Two philosophies. One perfect drivetrain for you.", IMG.workshop, VIDEO.ride]].map((j, i) => <article key={j[0]}><a href="#"><div className="journal-image"><CinematicVideo src={j[3]} poster={j[2]} label={`${j[0]} journal film`} playMode="hover"/><span>0{i + 1}</span></div><small>BUYER&apos;S GUIDE · 6 MIN</small><h3>{j[0]}</h3><p>{j[1]}</p><span className="read-link">READ STORY <Icon name="arrow" size={15}/></span></a></article>)}
          </div>
        </section>

        <section className="community section" id="events">
          <div className="community-intro"><span className="eyebrow">JOIN THE RIDE</span><h2>THE ROAD IS BETTER <span>TOGETHER.</span></h2></div>
          <div className="community-grid">
            {[["instagram", "INSTAGRAM", "@wheelsports.in"], ["chat", "WHATSAPP SALES CHAT", "Talk to our team"], ["play", "YOUTUBE", "Watch & learn"], ["fit", "STRAVA CLUB", "Ride with Bangalore"]].map((c) => <a href={c[1].includes("WHATSAPP") ? "https://wa.me/919844020861" : "#"} key={c[1]}><Icon name={c[0]} size={27}/><div><strong>{c[1]}</strong><span>{c[2]}</span></div><Icon name="arrow" size={17}/></a>)}
          </div>
        </section>

        <section className="faq section">
          <div className="faq-intro"><SectionTitle eyebrow="THE DETAILS">FREQUENTLY <span className="blue">ASKED</span></SectionTitle><p>Can&apos;t find your answer? Our team is always ready to help.</p><a className="text-link" href="https://wa.me/919844020861">TALK TO US <Icon name="arrow" size={16}/></a></div>
          <div className="faq-list">
            {faqs.map((f, i) => <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={f[0]}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>0{i + 1}</span><strong>{f[0]}</strong><i>{openFaq === i ? "−" : "+"}</i></button><div className="faq-answer"><p>{f[1]}</p></div></div>)}
          </div>
        </section>

        <section className="visit section--dark" id="visit">
          <div className="map">
            <div className="map-grid"/>
            <div className="map-road road-a"/><div className="map-road road-b"/><div className="map-road road-c"/>
            <div className="map-pin"><span>W</span><i/></div>
            <small>CHAMRAJPET · BENGALURU</small>
          </div>
          <div className="visit-copy">
            <SectionTitle eyebrow="COME SAY HELLO" light>VISIT THE <span className="blue">STORE</span></SectionTitle>
            <div className="visit-details"><div><span>ADDRESS</span><p>181, 2nd Main Rd, 3rd Cross, Kamalanagar, Chamrajpet, Bengaluru, Karnataka 560018</p></div><div><span>OPEN</span><p>Monday to Sunday<br/>11:00 AM to 07:00 PM</p></div></div>
            <div className="hero-actions"><LinkButton href="https://maps.google.com/?q=WheelSports+Bangalore">Get Directions</LinkButton><LinkButton secondary href="tel:+919844020861">Call Us</LinkButton></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><img src="/wheelsports-logo.png" alt="WheelSports Premium Cycling Store"/><p>Crafted for performance.<br/>Built for you.</p></div>
        <div className="footer-col"><span>CONNECT WITH US</span><a href="tel:+919844020861">+91 98440 20861</a><a href="mailto:venkatesh@wheelsports.in">venkatesh@wheelsports.in</a></div>
        <div className="footer-col"><span>FIND US HERE</span><p>181, 2nd Main Rd, 3rd Cross,<br/>Kamalanagar, Chamrajpet,<br/>Bengaluru 560018</p><span>VISIT US</span><p>Mon to Sun, 11:00 AM – 07:00 PM</p></div>
        <div className="footer-col"><span>POLICIES</span>{["Privacy Policy", "Shipping Policy", "Accessibility Statement", "Return & Exchange Policy"].map(x => <a href="#" key={x}>{x}</a>)}</div>
        <div className="newsletter"><span>SPREAD THE LOVE</span><h3>STAY AHEAD OF THE <span>PELOTON.</span></h3><p>Stay ahead with updates on our latest arrivals and exclusive deals.</p><form onSubmit={(e) => e.preventDefault()}><label><span className="sr-only">Email address</span><input type="email" placeholder="EMAIL ADDRESS" aria-label="Email address"/></label><button aria-label="Subscribe"><Icon name="arrow"/></button></form><div className="socials"><a href="#"><Icon name="instagram"/> INSTAGRAM</a><a href="#">FACEBOOK</a></div></div>
        <div className="footer-bottom"><span>© 2025 BY WHEELSPORTS.IN</span><span>PREMIUM CYCLING · BANGALORE</span><a href="#">BACK TO TOP ↑</a></div>
      </footer>
      <a className="chat-pill" href="https://wa.me/919844020861" aria-label="Chat with WheelSports on WhatsApp"><Icon name="chat"/><span>LET&apos;S CHAT!</span></a>
    </div>
  );
}
