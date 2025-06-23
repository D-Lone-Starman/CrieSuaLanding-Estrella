'use client';

interface Props {
  greeting: string;
}

const books = [
  {
    id: 1,
    title: 'The Great Adventure',
    author: 'Audie Smith',
    price: '$14.99',
    image: '/book1.png',
  },
  {
    id: 2,
    title: 'A Journey Through Time',
    author: 'Scam Ullirane',
    price: '$9.99',
    image: '/book2.png',
  },
  {
    id: 3,
    title: 'Mysterious Island',
    author: 'Alex Brown',
    price: '$14.99',
    image: '/book3.png',
  },
  {
    id: 4,
    title: 'Secrets of Time',
    author: 'Emma Johnson',
    price: '$14.99',
    image: '/book4.png',
  },
  {
    id: 5,
    title: 'Tales of Wonder',
    author: 'Add Grown',
    price: '$14.99',
    image: '/book5.png',
  },
];

export default function ItemListContainer({ greeting }: Props) {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {books.map((book) => (
          <div key={book.id} style={{ width: '160px', border: '1px solid #ccc', borderRadius: '8px', padding: '0.5rem' }}>
            <img src={book.image} alt={book.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h4>{book.title}</h4>
            <p style={{ margin: 0 }}>{book.author}</p>
            <strong>{book.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
