// components/ItemListContainer.tsx
'use client';

interface Props {
  greeting: string;
}

export default function ItemListContainer({ greeting }: Props) {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      <p>Explore os livros mais populares da BookVerse.</p>
    </section>
  );
}
