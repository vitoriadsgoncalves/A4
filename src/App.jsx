import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import livros from './livros';

function createCard(livros){
    return <Card 
    key={livros.id}
    codigo={livros.id}
    nome={livros.name}
    autor={livros.autor}
    editora={livros.editora} />  
}

function App(){
    return <div>
        <Header texto="Livraria Veiga" /> 
        
        {livros.map(createCard)}
      
        
        <Footer/>
        </div>;
  }

export default App;