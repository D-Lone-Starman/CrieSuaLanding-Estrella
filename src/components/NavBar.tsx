
'use client';

import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#fff3e0', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>BookVerse</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="/">Home</a>
        <a href="/catalog">Catalog</a>
        <a href="/contact">Contact</a>
      </div>
      <CartWidget />
    </nav>
  );
}

