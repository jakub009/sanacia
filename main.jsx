import React from "react";
import { createRoot } from "react-dom/client";

const cards = [
  {
    title: "Služby po požiari",
    cta: "Zistiť viac",
    href: "https://sanacia.eu/poziar",
    image: "./src/public/fireman-fire-fighting-evacuation-fire-drill-simulation-training-safety-condominium-factory.jpg",
    alt: "Požiar alebo sadza v obytnom dome",
    accent: "fire",
  },
  {
    title: "Služby po vytopení",
    cta: "Mám záujem o službu",
    href: "https://sanacia.eu/vytopenie",
    image: "./src/public/natural-disaster.jpg",
    alt: "Vytopený dom zvnútra",
    accent: "flood",
  },
];

const e = React.createElement;

function App() {
  return e(
    "div",
    { className: "page" },
    e(
      "header",
      { className: "site-header" },
      e("div", { className: "brand" }, "SANACIA.EU"),
      e(
        "a",
        { className: "call-button", href: "tel:+421000000000", "aria-label": "Zavolať" },
        e(
          "svg",
          {
            viewBox: "0 0 24 24",
            role: "img",
            "aria-hidden": "true",
            focusable: "false",
          },
          e("path", {
            d: "M4.5 5.25c0-1.1.9-2 2-2h2.1c.9 0 1.7.6 1.9 1.5l.6 2.2c.2.8-.2 1.6-.9 2l-1.4.8a12.5 12.5 0 005.5 5.5l.8-1.4c.4-.7 1.2-1 2-.9l2.2.6c.9.2 1.5 1 1.5 1.9v2.1c0 1.1-.9 2-2 2h-.6C10.8 20.25 4.5 13.95 4.5 6.05v-.8z",
          })
        )
      )
    ),
    e(
      "main",
      { className: "hero" },
      cards.map((card) =>
        e(
          "article",
          { key: card.title, className: `hero-card ${card.accent}` },
          e("img", { src: card.image, alt: card.alt, loading: "lazy" }),
          e(
            "div",
            { className: "card-overlay" },
            e("h2", null, card.title),
            e(
              "a",
              { className: "cta", href: card.href, target: "_blank", rel: "noreferrer" },
              card.cta
            )
          )
        )
      )
    ),
    e(
      "footer",
      { className: "site-footer" },
      e(
        "div",
        { className: "footer-block" },
        e("div", { className: "footer-label" }, "IČO"),
        e("div", { className: "footer-value" }, "47635274")
      ),
      e(
        "div",
        { className: "footer-block" },
        e("div", { className: "footer-label" }, "DIČ"),
        e("div", { className: "footer-value" }, "2024074635")
      ),
      e(
        "div",
        { className: "footer-block" },
        e("div", { className: "footer-label" }, "Kontakt"),
        e(
          "div",
          { className: "footer-value" },
          e("a", { href: "tel:+421911296198" }, "+421 911 296 198"),
          e("span", { className: "footer-sep" }, "|"),
          e("a", { href: "mailto:sadzesk@centrum.sk" }, "sadzesk@centrum.sk")
        )
      )
    )
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
