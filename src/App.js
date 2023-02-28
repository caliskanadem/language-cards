import "./App.css";
import Card from "./components/card/Card";
import { languages } from "./helper/data";
import image from "./assets/react.svg";

function App() {
  return (
    <div className="all">
      <img src={image} alt="" className="image" />
      <div className="container">
        <h1 className="title">Languages</h1>
        <Card languages={languages} />
      </div>
    </div>
  );
}

export default App;
