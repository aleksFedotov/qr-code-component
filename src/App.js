import { Fragment } from 'react/cjs/react.production.min';
import GlobalStyle from './styles/globalStyles';
import Card from './components/Card';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Card />
    </Fragment>
  );
}

export default App;
