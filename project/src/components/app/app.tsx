import Main from '../../pages/main/main';
import AppProps from '../../types/app-props';

function App({promoCardProps, films} : AppProps): JSX.Element {
  return <Main promoCardProps={promoCardProps} films={films}/>;
}

export default App;
