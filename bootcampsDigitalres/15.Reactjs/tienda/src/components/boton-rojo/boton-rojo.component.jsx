import './boton-rojo.styles.css';
import { useState } from 'react';

function BotonRojo(props){
  const [pressed, setPressed] = useState(false);
  
  const cambiarEstado = () => {
    setPressed(!pressed);
  };
  
  let boton = <button onClick={cambiarEstado}>{props.texto}</button>

  if(pressed){
    boton = <button style={{ backgroundColor: "green" }} onClick={cambiarEstado}>{props.texto}</button>
  }

  return ( boton );
}

/*Funcion desde el punto de vista del color.
 * function BotonRojo(props){
  const [colorFondo, setColorFondo] = useState("red");
  
  const cambiarEstado = () =>{
    if (colorFondo === "red") setColorFondo("green")
    else setColorFondo("lightblue");
    //if (colorFondo === "lightblue") setColorFondo("");
  };
  
  return(
    <button
      style={{backgroundColor: colorFondo,}}
      onClick={cambiarEstado}>
      { props.texto }
    </button>
  );
}*/

export default BotonRojo;
