/* RPS site interactions — no dependencies */
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Scroll-triggered reveals */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => {
    if (reduced) el.classList.add("in"); else io.observe(el);
  });

  /* Telemetry ticker — duplicate content for a seamless loop */
  const ticker = document.getElementById("ticker");
  if (ticker && !reduced) ticker.innerHTML += ticker.innerHTML;

  /* Axis carriage = scroll position indicator */
  const carriage = document.getElementById("axisCarriage");
  const setCarriage = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    carriage.style.top = `${p * (window.innerHeight - 64)}px`;
  };
  if (carriage) {
    setCarriage();
    window.addEventListener("scroll", setCarriage, { passive: true });
    window.addEventListener("resize", setCarriage);
  }

  /* Active nav link highlighting */
  const links = [...document.querySelectorAll(".nav__links a")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach((s) => navIO.observe(s));

  /* Mobile menu */
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("menu-open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("menu-open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }
})();
