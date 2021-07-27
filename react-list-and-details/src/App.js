import Character from './components/Character';
import './App.css';

function App() {
  return ( 
    <Character 
      name="46th Earth King"
      affiliation=" Earth Kingdom Earth Kingdom Royal Family"
      allies={["Royal Earthbender Guards"]}
      enemies={["Chin"]}
      photoUrl="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" />
  );
}

export default App;
