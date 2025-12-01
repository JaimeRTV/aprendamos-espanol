import React, { useState } from "react";
import Inicio from "./pages/Inicio";
import MainMenu from "./components/MainMenu";
import Vocabulario from "./components/vocabulario.jsx";
import JuegosEducativos from "./components/juegos/juegosEducativos.jsx";

import Memorama from "./components/juegos/memorama.jsx";
import AdivinaPalabra from "./components/juegos/adivinaPalabra.jsx";
import ImagenCorrecta from "./components/juegos/imagenCorrecta.jsx";
// --- Vocabulario ---
import VocabAnimales from "./components/vocab/vocabAnimales.jsx";
import VocabComida from "./components/vocab/vocabComida.jsx";
import VocabCasa from "./components/vocab/vocabCasa.jsx";
import VocabSaludos from "./components/vocab/vocabSaludos.jsx";
import VocabEscuela from "./components/vocab/vocabEscuela.jsx";
import VocabRopa from "./components/vocab/vocabRopa.jsx";
import VocabProfesiones from "./components/vocab/vocabProfesiones.jsx";
import VocabColores from "./components/vocab/vocabColores.jsx";
import VocabNumeros from "./components/vocab/vocabNumeros.jsx";
import VocabFamilia from "./components/vocab/vocabFamilia.jsx";
import VocabPaises from "./components/vocab/vocabPaises.jsx";

// --- Gramática ---
import Gramatica from "./components/gramatica/Gramatica";
import Articulos from "./components/gramatica/Articulos";
import Verbos from "./components/gramatica/Verbos";
import Pronombres from "./components/gramatica/Pronombres";
import Adverbios from "./components/gramatica/Adverbios";
import Oraciones from "./components/gramatica/Oraciones";


function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [categoria, setCategoria] = useState(null);

  const abrirCategoria = (cat) => {
    setCategoria(cat);
    setPantalla("categoria");
  };

  const regresarVocabulario = () => {
    setPantalla("vocabulario");
  };

  return (
    <>
      {/* ---------- Pantalla de Inicio ---------- */}
      {pantalla === "inicio" && (
        <Inicio onComenzar={() => setPantalla("menu")} />
      )}

      {/* ---------- Menú Principal ---------- */}
      {pantalla === "menu" && (
        <MainMenu setPantalla={setPantalla} />
      )}

      {/* ---------- Pantalla principal de vocabulario ---------- */}
      {pantalla === "vocabulario" && (
        <Vocabulario
          cambiarPantalla={setPantalla}
          onSelectCategoria={abrirCategoria}
        />
      )}

      {/* ---------- Pantalla de Juegos Educativos ---------- */}
      {pantalla === "juegos" && (
        <JuegosEducativos
          onBack={() => setPantalla("menu")}
          seleccionarJuego={(juego) => setPantalla(juego)}
        />
      )}

      {/* ---------- Pantalla MEMORAMA ---------- */}
      {pantalla === "memorama" && (
        <Memorama onBack={() => setPantalla("juegos")} />
      )}

      {/* ---------- Pantalla ADIVINA LA PALABRA ---------- */}
      {pantalla === "adivinaPalabra" && (
        <AdivinaPalabra onBack={() => setPantalla("juegos")} />
      )}
      {/* ---------- Pantalla ADIVINA LA PALABRA ---------- */}
      {pantalla === "Imagen-correcta" && (
        <ImagenCorrecta onBack={() => setPantalla("juegos")} />
      )}
      {/* ---------- Categorías individuales ---------- */}
      {pantalla === "categoria" && (
        <>
          {categoria === "animales" && <VocabAnimales onBack={regresarVocabulario} />}
          {categoria === "comida" && <VocabComida onBack={regresarVocabulario} />}
          {categoria === "casa" && <VocabCasa onBack={regresarVocabulario} />}
          {categoria === "saludos" && <VocabSaludos onBack={regresarVocabulario} />}
          {categoria === "escuela" && <VocabEscuela onBack={regresarVocabulario} />}
          {categoria === "ropa" && <VocabRopa onBack={regresarVocabulario} />}
          {categoria === "profesiones" && <VocabProfesiones onBack={regresarVocabulario} />}
          {categoria === "colores" && <VocabColores onBack={regresarVocabulario} />}
          {categoria === "numeros" && <VocabNumeros onBack={regresarVocabulario} />}
          {categoria === "familia" && <VocabFamilia onBack={regresarVocabulario} />}
          {categoria === "paises" && <VocabPaises onBack={regresarVocabulario} />}
        </>
      )}

      {/* ---------- PANTALLAS DE GRAMÁTICA ---------- */}
      {pantalla === "gramatica" && (
        <Gramatica cambiarPantalla={setPantalla} />
      )}

      {pantalla === "articulos" && (
        <Articulos cambiarPantalla={setPantalla} />
      )}
      


      {pantalla === "verbos" && (
        <Verbos cambiarPantalla={setPantalla} />
      )}

      {pantalla === "pronombres" && (
        <Pronombres cambiarPantalla={setPantalla} />
      )}

      {pantalla === "adverbios" && (
        <Adverbios cambiarPantalla={setPantalla} />
      )}

      {pantalla === "oraciones" && (
        <Oraciones cambiarPantalla={setPantalla} />
      )}
    </>
  );
}

export default App;
