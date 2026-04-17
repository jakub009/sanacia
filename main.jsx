import React from "react";
import { createRoot } from "react-dom/client";

const cards = [
  {
    title: "Služby po požiari",
    href: "https://sadze.sk/poziar.html",
    image: "/fireman-fire-fighting-evacuation-fire-drill-simulation-training-safety-condominium-factory.jpg",
    alt: "Požiar alebo sadza v obytnom dome",
    accent: "fire",
  },
  {
    title: "Služby po vytopení",
    href: "https://sadze.sk/vytopenie.html",
    image: "/natural-disaster.jpg",
    alt: "Vytopený dom zvnútra",
    accent: "flood",
  },
];

const e = React.createElement;

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [serviceTitle, setServiceTitle] = React.useState("");
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  const openModal = (title) => {
    setServiceTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return e(
    "div",
    { className: "page" },
    e(
      "header",
      { className: "site-header" },
      e("div", { className: "brand" }, "SANACIA.EU"),
      e(
        "div",
        { className: "header-actions" },
        e(
          "a",
          { className: "call-button", href: "tel:+421911296198", "aria-label": "Zavolať" },
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
        ),
        e(
          "button",
          {
            className: "theme-toggle",
            type: "button",
            onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
            "aria-label": theme === "dark" ? "Prepnúť na svetlý režim" : "Prepnúť na tmavý režim",
          },
          theme === "dark"
            ? e(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  role: "img",
                  "aria-hidden": "true",
                  focusable: "false",
                },
                e("circle", { cx: "12", cy: "12", r: "4.5" }),
                e("path", { d: "M12 2.5v2.5" }),
                e("path", { d: "M12 19v2.5" }),
                e("path", { d: "M4.5 12H2" }),
                e("path", { d: "M22 12h-2.5" }),
                e("path", { d: "M5.3 5.3l1.8 1.8" }),
                e("path", { d: "M16.9 16.9l1.8 1.8" }),
                e("path", { d: "M18.7 5.3l-1.8 1.8" }),
                e("path", { d: "M7.1 16.9l-1.8 1.8" })
              )
            : e(
                "svg",
                {
                  viewBox: "0 0 24 24",
                  role: "img",
                  "aria-hidden": "true",
                  focusable: "false",
                },
                e("path", { d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" })
              )
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
              "div",
              { className: "cta-group" },
              e(
                "a",
                { className: "cta", href: card.href, target: "_blank", rel: "noreferrer" },
                "Zistiť viac"
              ),
              e(
                "button",
                {
                  className: "cta",
                  type: "button",
                  onClick: () => openModal(card.title),
                },
                "Mám záujem o službu"
              )
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
        { className: "footer-group" },
        e(
          "div",
          { className: "footer-inline" },
          e("span", { className: "footer-label" }, "IČO"),
          e("span", { className: "footer-inline-value" }, "47635274")
        ),
        e(
          "div",
          { className: "footer-inline" },
          e("span", { className: "footer-label" }, "DIČ"),
          e("span", { className: "footer-inline-value" }, "2024074635")
        ),
        e(
          "div",
          { className: "footer-inline" },
          e("span", { className: "footer-label" }, "IČ DPH"),
          e("span", { className: "footer-inline-value" }, "SK2024074635")
        )
      ),
      e(
        "div",
        { className: "footer-block" },
        e("div", { className: "footer-label" }, "Sídlo"),
        e(
          "div",
          { className: "footer-value footer-address" },
          e("div", null, "For All s.r.o."),
          e("div", null, "Cukrovarská 146/5"),
          e("div", null, "926 01 Sereď")
        )
      ),
      e(
        "div",
        { className: "footer-block" },
        e("div", { className: "footer-label" }, "Kontakt"),
        e(
          "div",
          { className: "footer-value footer-contact" },
          e("div", { className: "footer-contact-name" }, e("strong", null, "Mário Domček")),
          e(
            "div",
            { className: "footer-contact-item" },
            e(
              "svg",
              {
                className: "footer-icon",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-hidden": "true",
                focusable: "false",
              },
              e("path", {
                d: "M4.5 5.25c0-1.1.9-2 2-2h2.1c.9 0 1.7.6 1.9 1.5l.6 2.2c.2.8-.2 1.6-.9 2l-1.4.8a12.5 12.5 0 005.5 5.5l.8-1.4c.4-.7 1.2-1 2-.9l2.2.6c.9.2 1.5 1 1.5 1.9v2.1c0 1.1-.9 2-2 2h-.6C10.8 20.25 4.5 13.95 4.5 6.05v-.8z",
              })
            ),
            e("a", { href: "tel:+421911296198" }, "+421 911 296 198")
          ),
          e(
            "div",
            { className: "footer-contact-item" },
            e(
              "svg",
              {
                className: "footer-icon",
                viewBox: "0 0 24 24",
                role: "img",
                "aria-hidden": "true",
                focusable: "false",
              },
              e("path", { d: "M4 6.5h16v11H4z" }),
              e("path", { d: "m4 7 8 6 8-6" })
            ),
            e("a", { href: "mailto:sadzesk@centrum.sk" }, "sadzesk@centrum.sk")
          )
        )
      )
    ),
    isModalOpen
      ? e(
          "div",
          {
            className: "modal-overlay",
            onClick: handleOverlayClick,
          },
          e(
            "div",
            {
              className: "modal",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": "Kontaktný formulár",
            },
            e(
              "div",
              { className: "modal-header" },
              e("div", { className: "modal-title" }, "Kontaktný formulár"),
              e(
                "button",
                { className: "modal-close", type: "button", onClick: closeModal, "aria-label": "Zavrieť" },
                "×"
              )
            ),
            e(
              "div",
              { className: "modal-subtitle" },
              "Služba: ",
              e("span", { className: "modal-service" }, serviceTitle || "Výber služby")
            ),
            e(
              "div",
              { className: "modal-callout" },
              e(
                "div",
                { className: "modal-callout-text" },
                "Ak potrebujete rýchly kontakt, neváhajte nám zavolať."
              ),
              e(
                "a",
                {
                  className: "call-button call-button-inline",
                  href: "tel:+421911296198",
                  "aria-label": "Zavolať",
                },
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
              "form",
              {
                className: "contact-form",
                action: "https://formspree.io/f/mojpwplb",
                method: "POST",
              },
              e(
                "div",
                { className: "form-grid" },
                e(
                  "label",
                  { className: "form-field", htmlFor: "contact-name" },
                  e(
                    "span",
                    { className: "form-label" },
                    "Meno a priezvisko",
                    e("span", { className: "form-required" }, " *")
                  ),
                  e("input", {
                    id: "contact-name",
                    name: "name",
                    type: "text",
                    placeholder: "Vaše meno",
                    required: true,
                  })
                ),
                e(
                  "label",
                  { className: "form-field", htmlFor: "contact-phone" },
                  e(
                    "span",
                    { className: "form-label" },
                    "Telefón",
                    e("span", { className: "form-required" }, " *")
                  ),
                  e("input", {
                    id: "contact-phone",
                    name: "phone",
                    type: "tel",
                    placeholder: "+421",
                    required: true,
                  })
                ),
                e(
                  "label",
                  { className: "form-field", htmlFor: "contact-email" },
                  e(
                    "span",
                    { className: "form-label" },
                    "Email",
                    e("span", { className: "form-required" }, " *")
                  ),
                  e("input", {
                    id: "contact-email",
                    name: "email",
                    type: "email",
                    placeholder: "vas@email.sk",
                    required: true,
                  })
                ),
                e(
                  "label",
                  { className: "form-field", htmlFor: "contact-city" },
                  e(
                    "span",
                    { className: "form-label" },
                    "Mesto / lokalita",
                    e("span", { className: "form-required" }, " *")
                  ),
                  e("input", {
                    id: "contact-city",
                    name: "city",
                    type: "text",
                    placeholder: "Bratislava",
                    required: true,
                  })
                ),
                e(
                  "label",
                  { className: "form-field", htmlFor: "contact-insurance" },
                  e("span", { className: "form-label" }, "Názov poisťovne"),
                  e("span", { className: "form-helper" }, "Allianz, Kooperativa..."),
                  e("input", {
                    id: "contact-insurance",
                    name: "insurance",
                    type: "text",
                    placeholder: "Allianz, Kooperativa...",
                  })
                ),
                e(
                  "label",
                  { className: "form-field", htmlFor: "contact-claim" },
                  e("span", { className: "form-label" }, "Číslo poistnej udalosti"),
                  e("span", { className: "form-helper" }, "Ak už máte pridelené"),
                  e("input", {
                    id: "contact-claim",
                    name: "claimNumber",
                    type: "text",
                    placeholder: "Ak už máte pridelené",
                  })
                ),
                e(
                  "label",
                  { className: "form-field form-field-full", htmlFor: "contact-message" },
                  e(
                    "span",
                    { className: "form-label" },
                    "Popis situácie",
                    e("span", { className: "form-required" }, " *")
                  ),
                  e("textarea", {
                    id: "contact-message",
                    name: "message",
                    placeholder: "Napíšte nám, čo sa stalo a v akom je to stave...",
                    rows: 4,
                    required: true,
                  })
                )
              ),
              e(
                "div",
                { className: "form-actions" },
                e("button", { className: "submit-button", type: "submit" }, "Odoslať formulár")
              )
            )
          )
        )
      : null
  );
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
