import "./App.scss";
import Button from "./components/Button"


// // desestructuracion  (esto es js, no react)
// // crear variables rapidamente a partir de un objeto
// const persona = {
//   nombre: "jacques",
//   apellido: "derrida",
//   profesion: "filosofo"
// }


// // const nombre = persona.nombre
// // const profesion = persona.profesion
// // es equivalente a:
// const { nombre, profesion } = persona


// 1. crear de cero un proyecto con react
// 2. Una barra de navegacion, un componente principal y un footer
// 3. dentro del componente principal quiero dos secciones que sean iguales 
// 4. las dos secciones tienen que tener un titulo, un subtitulo y buna imagen
// 5. el titulo, subtitulo, imagen, se tienen que pasar por props
// 6 ademas cada seccion va a llamar al componente boton
// 7. en la primera seccion el componente va a decir "primera"
// 8 en la segunda va a decir "segunda"
// 9. si quieren estilar, que sea con sass


const App = () => {
  return (
    <div className="contenedor">
      <h1>Hola</h1>
      <Button 
        mensaje="Hola"
        color="rojo"
      />

      <Button 
        mensaje="Chau"
        color="verde"
      />
    </div>
  )
}

export default App;
