"use client";

import { type CSSProperties, type FormEvent, useEffect, useState } from "react";
import {
  FaChurch,
  FaGlobeAmericas,
  FaInstagram,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
type Language = "en" | "uk" | "ru";

const translations = {
  en: {
    welcome: "Welcome to",
    church: "Transfiguration Slavic Baptist Church",
    serviceLabel: "Service times",
    gather: "When We Gather",
    sunday: "Sunday",
    sundayService: "Sunday Service",
    friday: "Friday",
    fridayService: "Youth Service & Bible Study",
    directions: "Get Directions",
    directionsText: "Find us and plan your visit",
    website: "Website",
    youtube: "YouTube",
    instagram: "Instagram",
    call: "Call",
    email: "Email",
    questions: "Questions?",
    questionsText: "We’d love to help",
    aboutTitle: "About Our Church",
    about:
      "We are a loving church family passionate about knowing God, serving people, and sharing the hope of Jesus Christ. Everyone is welcome here.",
    closing: "See you at church!",
    blessing: "God bless you!",
    contactTitle: "Contact Us",
    contactText:
      "Have a question or prayer request? Send us a message and we’ll get back to you.",
    name: "Your name",
    emailField: "Email address",
    message: "Your message",
    send: "Send message",
    sending: "Sending…",
    sent: "Thank you! Your message has been sent.",
    sendError: "We couldn’t send your message. Please try again or email us directly.",
    close: "Close",
  },
  uk: {
    welcome: "Ласкаво просимо",
    church: "TRANSFIGURATION SLAVIC BAPTIST CHURCH",
    serviceLabel: "РОЗКЛАД БОГОСЛУЖІНЬ",
    gather: "Час наших зустрічей",
    sunday: "Неділя",
    sundayService: "Недільне богослужіння",
    friday: "П’ятниця",
    fridayService: "Молодіжне служіння та вивчення Біблії",
    directions: "Як нас знайти",
    directionsText: "ПРОКЛАСТИ МАРШРУТ",
    website: "Перейти на сайт",
    youtube: "Дивитися та підписатися",
    instagram: "Стежити за нами",
    call: "Телефон",
    email: "Email",
    questions: "Є запитання?",
    questionsText: "Ми раді допомогти",
    aboutTitle: "Про нашу церкву",
    about:
      "Ми — християнська церква, яка прагне пізнавати Бога, служити людям і ділитися надією в Ісусі Христі. Запрошуємо вас стати частиною нашої церковної родини.",
    closing: "До зустрічі в церкві!",
    blessing: "Божих благословінь!",
    contactTitle: "Зв’яжіться з нами",
    contactText:
      "Маєте запитання або молитовне прохання? Напишіть нам повідомлення.",
    name: "Ваше ім’я",
    emailField: "Електронна адреса",
    message: "Ваше повідомлення",
    send: "Надіслати",
    sending: "Надсилаємо…",
    sent: "Дякуємо! Ваше повідомлення надіслано.",
    sendError:
      "Не вдалося надіслати повідомлення. Спробуйте ще раз або напишіть нам на email.",
    close: "Закрити",
  },
  ru: {
    welcome: "Добро пожаловать",
    church: "TRANSFIGURATION SLAVIC BAPTIST CHURCH",
    serviceLabel: "РАСПИСАНИЕ БОГОСЛУЖЕНИЙ",
    gather: "БОГОСЛУЖЕНИЯ",
    sunday: "Воскресенье",
    sundayService: "Воскресное богослужение",
    friday: "Пятница",
    fridayService: "Молодёжное служение и изучение Библии",
    directions: "Как нас найти",
    directionsText: "ПРОЛОЖИТЬ МАРШРУТ",
    website: "Перейти на сайт",
    youtube: "Смотреть и подписаться",
    instagram: "Подписаться",
    call: "Телефон",
    email: "Email",
    questions: "Есть вопросы?",
    questionsText: "Мы рады помочь",
    aboutTitle: "О нашей церкви",
    about:
      "Мы — христианская церковь, где люди вместе познают Бога, служат друг другу и делятся надеждой, которую мы имеем в Иисусе Христе. Будем рады видеть вас среди нас!",
    closing: "До встречи в церкви!",
    blessing: "Божьих благословений!",
    contactTitle: "Свяжитесь с нами",
    contactText:
      "Есть вопрос или молитвенная просьба? Отправьте нам сообщение.",
    name: "Ваше имя",
    emailField: "Электронная почта",
    message: "Ваше сообщение",
    send: "Отправить",
    sending: "Отправляем…",
    sent: "Спасибо! Ваше сообщение отправлено.",
    sendError:
      "Не удалось отправить сообщение. Попробуйте ещё раз или напишите нам на email.",
    close: "Закрыть",
  },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const text = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactOpen(false);
      }
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, [language]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/transfigurationbaptistchurch01@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...Object.fromEntries(formData.entries()),
            _url: window.location.href,
          }),
        },
      );

      const result = (await response.json()) as { success?: boolean | string };

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Form submission failed");
      }

      form.reset();
      setIsSent(true);
    } catch {
      setSubmitError(text.sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      className="site-shell"
      style={
        {
          "--mountain-image": `url("${basePath}/mountain-sky.png")`,
        } as CSSProperties
      }
    >
      <section className="hero">
        <div className="language-switcher" aria-label="Select language">
          {(["en", "uk", "ru"] as Language[]).map((item) => (
            <button
              key={item}
              type="button"
              className={language === item ? "active" : ""}
              onClick={() => setLanguage(item)}
            >
              {item === "en" ? "EN" : item === "uk" ? "УКР" : "РУС"}
            </button>
          ))}
        </div>

        <img
          className="church-logo"
          src={`${basePath}/transfiguration-logo.png`}
          alt="Transfiguration Slavic Baptist Church logo"
        />

        <div className="hero-copy">
          <p>{text.welcome}</p>
          <h1>{text.church}</h1>
          <span className="gold-line" />
        </div>
      </section>

      <section className="content-card">
        <div className="section-heading">
          <p>{text.serviceLabel}</p>
          <h2>{text.gather}</h2>
        </div>

        <div className="services">
          <article className="service-row">
            <div className="service-icon" aria-hidden="true">
              <FaChurch />
            </div>
            <div className="service-name">
              <strong>{text.sunday}</strong>
              <span>{text.sundayService}</span>
            </div>

            <div className="service-time">
              <strong>1:30</strong>
              <span>PM</span>
            </div>
          </article>

          <article className="service-row">
            <div className="service-icon" aria-hidden="true">
              <GiOpenBook />
            </div>

            <div className="service-name">
              <strong>{text.friday}</strong>
              <span>{text.fridayService}</span>
            </div>

            <div className="service-time">
              <strong>7:00</strong>
              <span>PM</span>
            </div>
          </article>
        </div>

        <a
          className="directions-button"
          href="https://www.google.com/maps/dir/?api=1&destination=14251+Chancellor+Blvd+Port+Charlotte+FL+33953"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt className="large-icon" aria-hidden="true" />

          <span>
            <strong>{text.directions}</strong>
            <small>14251 Chancellor Blvd, Port Charlotte, FL 33953</small>
          </span>

          <span className="arrow" aria-hidden="true">
            →
          </span>
        </a>

        <div className="links-grid">
          <a
            className="link-card"
            href="https://www.baptistslavic.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobeAmericas
              className="link-icon website-icon"
              aria-hidden="true"
            />
            <strong>{text.website}</strong>
            <small>baptistslavic.com</small>
          </a>

          <a
            className="link-card"
            href="https://www.youtube.com/@transfigurationChurchFl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="link-icon youtube-icon" aria-hidden="true" />
            <strong>{text.youtube}</strong>
            <small>@transfigurationChurchFl</small>
          </a>

          <a
            className="link-card"
            href="https://www.instagram.com/transfigurationbaptist?igsh=cmdlOWY4enkwZmw1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="link-icon instagram-icon"
              aria-hidden="true"
            />
            <strong>{text.instagram}</strong>
            <small>@transfigurationbaptist</small>
          </a>

          <a className="link-card" href="tel:+19414683917">
            <FaMobileAlt className="link-icon phone-icon" aria-hidden="true" />
            <strong>{text.call}</strong>
            <small>+1 941-468-3917</small>
          </a>

          <a
            className="link-card"
            href="mailto:transfigurationbaptistchurch01@gmail.com"
          >
            <SiGmail className="link-icon email-icon" aria-hidden="true" />
            <strong>{text.email}</strong>
            <small>transfigurationbaptistchurch01@gmail.com</small>
          </a>

          <button
            className="link-card"
            type="button"
            onClick={() => {
              setIsSent(false);
              setSubmitError("");
              setIsContactOpen(true);
            }}
          >
            <span className="link-icon question-icon">?</span>
            <strong>{text.questions}</strong>
            <small>{text.questionsText}</small>
          </button>
        </div>

        <article className="about-card">
          <div className="about-icon" aria-hidden="true">
            ♡
          </div>

          <div>
            <h3>{text.aboutTitle}</h3>
            <p>{text.about}</p>
          </div>
        </article>

        <footer className="closing-card">
          <h2>{text.closing}</h2>
          <p>{text.blessing}</p>
          <span>♥</span>
        </footer>
      </section>

      {isContactOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsContactOpen(false);
            }
          }}
        >
          <section
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
          >
            <button
              className="modal-close"
              type="button"
              aria-label={text.close}
              onClick={() => setIsContactOpen(false)}
            >
              ×
            </button>

            <img
              src={`${basePath}/transfiguration-logo.png`}
              alt=""
              className="modal-logo"
            />

            <h2 id="contact-title">{text.contactTitle}</h2>
            <p>{text.contactText}</p>

            {isSent ? (
              <div className="success-message">{text.sent}</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  className="honeypot"
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New message from the church landing page"
                />
                <input type="hidden" name="_template" value="table" />

                <label>
                  <span>{text.name}</span>
                  <input name="name" type="text" required />
                </label>

                <label>
                  <span>{text.emailField}</span>
                  <input name="email" type="email" required />
                </label>

                <label>
                  <span>{text.message}</span>
                  <textarea name="message" rows={5} required />
                </label>

                {submitError && (
                  <div className="form-error" role="alert">
                    {submitError}
                  </div>
                )}

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? text.sending : text.send}
                </button>
              </form>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
