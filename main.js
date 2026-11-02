const $ = (s) => document.querySelector(s),
  FB = "https://www.facebook.com/profile.php?id=100063471889764";
// marquee
$("#mqi").innerHTML =
  "<span>Поплочување</span><span>✦</span><span>Градинарство</span><span>✦</span><span>Камен</span><span>✦</span><span>Озеленување</span><span>✦</span><span>Градба</span><span>✦</span>".repeat(
    6,
  );
$("#yr").textContent = new Date().getFullYear();
// services
const ic = (p) => `<svg viewBox="0 0 24 24">${p}</svg>`;
const S = [
  [
    "Поплочување",
    "Професионално поставување на плочки и камен на дворови, патеки, влезови и тераси.",
    ic('<path d="M3 8l9-4 9 4-9 4-9-4zM3 13l9 4 9-4M3 17l9 4 9-4"/>'),
  ],
  [
    "Градинарство",
    "Садење, уредување и одржување на градини, жива ограда, грмушки и цвеќиња.",
    ic(
      '<path d="M12 21v-8M12 13c0-4 3-7 8-7 0 5-3 8-8 7zM12 15c0-3-2-5-6-5 0 4 2 6 6 5z"/>',
    ),
  ],
  [
    "Градежни решенија",
    "Потпорни ѕидови, рабници, скали и сè што е потребно за комплетен двор.",
    ic('<path d="M3 21h18M5 21V10l7-6 7 6v11M9 21v-6h6v6"/>'),
  ],
  [
    "Декоративен камен",
    "Речни камења, чакал и декоративни површини за модерен и чист изглед.",
    ic(
      '<circle cx="8" cy="15" r="4"/><circle cx="16" cy="16" r="3"/><circle cx="13" cy="8" r="3.5"/>',
    ),
  ],
  [
    "Тревник и озеленување",
    "Подготовка на земјиште и поставување тревник за густа зелена површина.",
    ic(
      '<path d="M3 20h18M6 20c0-5 1-9 3-13M12 20c0-6 0-10 1-15M18 20c0-4-1-8-3-11"/>',
    ),
  ],
  [
    "Целосно уредување",
    "Од идеја до реализација, цел двор од една рака, со внимание на секој детаљ.",
    ic(
      '<path d="M12 3l2.6 5.6 6 .8-4.4 4.1 1.1 6L12 16.6 6.7 19.5l1.1-6L3.4 9.4l6-.8z"/>',
    ),
  ],
];
$("#sg").innerHTML = S.map(
  (s, i) =>
    `<div class="cd" data-r="up" style="--d:${(i % 3) * 0.12}s"><div class="ic">${s[2]}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`,
).join("");
// picker
const P = [
  ["cb", "3D коцки", "Геометриски дезен со ефект на длабочина"],
  ["sl", "Плочи од голем формат", "Чист, современ и луксузен изглед"],
  ["fr", "Плочки со црна рамка", "Класичен дезен со нагласен раб"],
];
$("#opts").innerHTML = P.map(
  (p, i) =>
    `<button class="opt${i ? "" : " on"}" data-i="${i}"><b>${p[1]}</b><span>${p[2]}</span></button>`,
).join("");
$("#opts").onclick = (e) => {
  const b = e.target.closest(".opt");
  if (!b) return;
  document.querySelectorAll(".opt").forEach((o) => o.classList.remove("on"));
  b.classList.add("on");
  const p = P[b.dataset.i];
  $("#pv").className = "pv " + p[0];
  $("#pn").textContent = p[1];
};
// faq
const F = [
  [
    "Какви услуги нудите?",
    "Поплочување, градинарство, озеленување, градежни работи и комплетно уредување на дворови.",
  ],
  [
    "Дали работите комплетни проекти?",
    "Да. Можеме да го преземеме целиот проект, од подлога и поплочување до озеленување и завршни детали.",
  ],
  [
    "Како можам да побарам понуда?",
    "Контактирајте не преку Facebook страната, испратете фотографии од дворот и опишете што посакувате.",
  ],
  [
    "Можам ли јас да го изберам дезенот?",
    "Секако. Заедно го избираме дезенот, бојата и материјалите што најдобро одговараат на вашиот дом.",
  ],
];
$("#fq").innerHTML = F.map(
  (f, i) =>
    `<div class="q" data-r="up" style="--d:${i * 0.08}s"><button>${f[0]}</button><div>${f[1]}</div></div>`,
).join("");
$("#fq").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const q = b.parentElement,
    o = q.classList.toggle("on"),
    d = q.querySelector("div");
  document.querySelectorAll(".q").forEach((x) => {
    if (x !== q) {
      x.classList.remove("on");
      x.querySelector("div").style.maxHeight = 0;
    }
  });
  d.style.maxHeight = o ? d.scrollHeight + "px" : 0;
};
// reveal
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.15 },
);
document.querySelectorAll("[data-r],.st").forEach((e) => io.observe(e));
// leaves
for (let i = 0; i < 14; i++) {
  const l = document.createElement("i");
  l.className = "lf";
  l.style.cssText = `left:${Math.random() * 100}%;animation-duration:${9 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s;transform:scale(${0.5 + Math.random()})`;
  $("#hero").appendChild(l);
}
// lightbox
const lb = $("#lb");
document.querySelectorAll(".gi").forEach(
  (g) =>
    (g.onclick = () => {
      lb.querySelector("img").src = g.querySelector("img").src;
      lb.classList.add("on");
    }),
);
lb.onclick = () => lb.classList.remove("on");
addEventListener(
  "keydown",
  (e) => e.key === "Escape" && lb.classList.remove("on"),
);
// menu
const bg = $("#bg"),
  nl = $("#nl");
bg.onclick = () => {
  bg.classList.toggle("x");
  nl.classList.toggle("on");
};
nl.onclick = (e) => {
  if (e.target.closest("a")) {
    bg.classList.remove("x");
    nl.classList.remove("on");
  }
};
// scroll
const px = $("[data-px]"),
  tp = $("#top"),
  pr = $(".pr");
function sc() {
  const y = scrollY,
    h = document.documentElement.scrollHeight - innerHeight;
  $("#bar").style.width = (y / h) * 100 + "%";
  $("#nav").classList.toggle("s", y > 40);
  tp.classList.toggle("on", y > 600);
  const r = px.parentElement.getBoundingClientRect();
  px.style.transform = `translateY(${-(r.top / innerHeight) * 40}px)`;
  const b = pr.getBoundingClientRect();
  $("#pli").style.height =
    Math.max(0, Math.min(100, ((innerHeight * 0.6 - b.top) / b.height) * 100)) +
    "%";
}
addEventListener("scroll", sc, { passive: true });
addEventListener("resize", sc);
sc();
tp.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
// card tilt
if (matchMedia("(hover:hover)").matches)
  document.querySelectorAll(".cd").forEach((c) => {
    c.onmousemove = (e) => {
      const r = c.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width - 0.5,
        y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    };
    c.onmouseleave = () => (c.style.transform = "");
  });
