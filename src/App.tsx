import axios from 'axios'
import "./App.css";
function App() {
  return(
    <div className="container-app">
      <div className="container">
        <header className="header-top">
          <h1>
            Buscador de perfis
          </h1>
        </header>

        <main>
          <div className="form">
            <input type="text" placeholder="Digite o nome de usuario"/>
            <button>Buscar</button>
          </div>
          <div className="content">
            <img src="https:" alt="" />
            <h1>Nome do Perfil</h1>
            <p>
              Bio do Perfil
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
