import React from 'react';

function Footer(){
  var ano = new Date().getFullYear(); 

    return <div>
    <p>Desenvolvido por Clara, Júlia, Laíla e Vitória - {ano}</p>
    </div>;
  }

export default Footer;