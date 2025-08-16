"use client";

import React, { useState } from "react";

const CartWidget: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button
      aria-label="Carrinho de compras"
      onClick={() => setCount((c) => c + 1)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 6,
        border: "1px solid #ddd",
        background: "white",
        cursor: "pointer",
      }}
    >
      <span style={{ fontWeight: 700 }}>🛒</span>
      <span>Cart</span>
      <span style={{ minWidth: 22, textAlign: "center" }}>{count}</span>
    </button>
  );
};

export default CartWidget;
