"use client";

import { useState } from "react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#impactos", label: "Impactos" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#descarte", label: "Descarte" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="E-Descarte.tech — início" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">↻</span>
        E-Descarte<span>.tech</span>
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <i /><i /><i />
      </button>
      <nav id="primary-menu" className={open ? "nav nav-open" : "nav"} aria-label="Navegação principal">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
