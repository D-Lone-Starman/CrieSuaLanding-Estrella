import React from "react";

interface ItemListContainerProps {
  greeting: string;
}

const ItemListContainer: React.FC<ItemListContainerProps> = ({ greeting }) => {
  return (
    <main style={{ padding: 20 }}>
      <h2>{greeting}</h2>
      <p>container.</p>

      
      <ul>
        <li>Produto A</li>
        <p>imagine uma imagem</p>
        <li>Produto B</li>
        <p>imagine uma imagem</p>
        <li>Produto C</li>
        <p>imagine uma imagem</p>
      </ul>
    </main>
  );
};

export default ItemListContainer;
