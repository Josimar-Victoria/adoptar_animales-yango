import { ListOfCategory } from './Components/List0fCategory';
import { ListOfPhotoCards } from './Components/ListOfPhotoCards';
import { Logo } from './Components/Logo';
import { GlobalStyle } from './Styles/GlobalStyles'

function App() {
  return (
    <>
       <GlobalStyle/>
       <Logo/>
       <ListOfCategory/>
       <ListOfPhotoCards/>
    </>
  );
}

export default App;
