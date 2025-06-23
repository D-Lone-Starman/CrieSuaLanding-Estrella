import NavBar from '/components/NavBar';
import ItemListContainer from '/components/ItemListContainer';

export default function Home() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à BookVerse!" />
    </>
  );
}
