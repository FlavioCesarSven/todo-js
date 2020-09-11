
import '../css/componentes.css';
    
export const saludar = ( nombre )  => {  
    
    console.log( 'Se creó una etiqueta H1' );

    let h1 = document.createElement( 'h1' );
    h1.innerText = `Hola ${nombre}, que tal!`;

    document.body.append( h1 );

}