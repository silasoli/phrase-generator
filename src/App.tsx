import { useState } from "react";

import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Siga os bons e aprenda com eles.",
        "O bom-senso vale mais do que muito conhecimento.",
        "O riso é a menor distância entre duas pessoas.",
        "Deixe de lado as preocupações e seja feliz.",
        "Realize o óbvio, pense no improvável e conquiste o impossível.",
        "Acredite em milagres, mas não dependa deles.",
        "A maior barreira para o sucesso é o medo do fracasso.",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!",
        "A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!",
        "Escreva em seu coração: todo dia é o melhor dia do ano.",
        "Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.",
      ],
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: ["Boa noite durma bem", "Teste frase boa noite"],
    },
  ];

  const [textPhrases, setTextPhrases] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  function handleChangeCategory(index: number) {
    setSelectedCategory(index);
  }

  function generatePhrases(){
    const randomNumber = Math.floor(Math.random() * allFrases[selectedCategory].frases.length);
    setTextPhrases(allFrases[selectedCategory].frases[randomNumber]);

  }

  return (
    <div className="container">
      <img src={logo} alt="Logo frases" className="logo" />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[selectedCategory].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            onClick={() => handleChangeCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-phrases" onClick={generatePhrases}>
        Gerar Frases
      </button>

      {textPhrases && <p className="text-phrases">"{textPhrases}"</p>}
    </div>
  );
}

export default App;
