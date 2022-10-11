import React from 'react';

function Card(props){
    return <div>
    <h3>Título do Livro: {props.nome}</h3>
    <p>Autor: {props.autor}</p>
    <p>Editora: {props.editora}</p>
    <p>Código: {props.codigo}</p>
    </div>;
  }

export default Card;