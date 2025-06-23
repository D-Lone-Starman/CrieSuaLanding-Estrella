'use client';

interface Props {
  greeting: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  price: string;
}

const books: Book[] = [
  { id: 1, title: 'The Great Adventure', author: 'Audie Smith', price: '$14.99' },
  { id: 2, title: 'A Journey Through Time', author: 'Scam Ullirane', price: '$9.99' },
  { id: 3, title: 'Secrets of Time', author: 'Emma Johnson', price: '$14.99' },
  { id: 4, title: 'Mysterious Island', author: 'Alex Brown', price: '$14.99' },
  { id: 5, title: 'Tales of Wonder', author: 'Add Grown', price: '$14.99' },
];

export default function ItemListContainer({ greeting }: Props) {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>{greeting}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: '1rem' }}>
            <strong>{book.title}</strong> by {book.author} — <em>{book.price}</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
