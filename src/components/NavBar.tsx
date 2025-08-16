"use client";

import React from "react";
import CartWidget from "./CartWidget";

const NavBar: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        borderBottom: "1px solid #eee",
        background: "#fafafa",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ fontWeight: 800, fontSize: 18 }}>MinhaLoja</div>
        <nav>
          <a href="#" style={{ marginRight: 12 }}>
            Home
          </a>
          <a href="#" style={{ marginRight: 12 }}>
            Produtos
          </a>
          <a href="#">Contato</a>
        </nav>
      </div>

      {/* CartWidget está DENTRO do NavBar (requisito) */}
      <CartWidget />
    </header>
  );
};

export default NavBar;
