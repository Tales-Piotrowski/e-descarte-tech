"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#impactos", label: "Impactos" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#quiz", label: "Quiz" },
  { href: "#triagem", label: "Jogo de triagem" },
  { href: "#quem-somos", label: "Quem somos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const selectedTheme = savedTheme ?? preferredTheme;

    setTheme(selectedTheme);
    document.documentElement.dataset.theme = selectedTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="E-Descarte.tech — início" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">↻</span>
        E-Descarte<span>.tech</span>
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <button
          type="button"
          className="theme-toggle"
          aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
          aria-pressed={theme === "light"}
          onClick={toggleTheme}
          title={theme === "dark" ? "Tema claro" : "Tema escuro"}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <i /><i /><i />
        </button>
      </div>

      <nav id="primary-menu" className={open ? "nav nav-open" : "nav"} aria-label="Navegação principal">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
