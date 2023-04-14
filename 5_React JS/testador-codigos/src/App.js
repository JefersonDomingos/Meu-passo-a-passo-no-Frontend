import './App.css';
import TemplateExpression from "./componentes/TemplateExpressions";
import ReutilizandoComponente from './componentes/ReutilizandoComponente';
import FirstComponent from './componentes/FirstComponent';
import Eventos from './componentes/Eventos';
import FuncoesJsx from './componentes/FuncoesJsx';
import Challenge from './componentes/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FirstComponent/>
      <TemplateExpression />
      <ReutilizandoComponente/>
      <Eventos/>
      <FuncoesJsx/>
      <Challenge/>

    </div>
  );
}

export default App;
