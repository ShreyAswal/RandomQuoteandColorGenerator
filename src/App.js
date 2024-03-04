import { useEffect, useState } from "react";
import "./App.css";
import QuoteGenerator from "./Components/QuoteGenerator";

function App() {
  const [backgroundColor, setbackgroundColor] = useState();

  // const backgroundColors = ['#FF5733', '#33FF57', '#3366FF', '#FF33FF', '#FFFF33','#FFD700', '#FFE4B5', '#FFFFE0', '#FAFAD2', '#FFEFD5'];

  useEffect(() => {
    generateColour();
  }, []);

  const generateColour = () => {
    // let newColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)]
    // setbackgroundColor(newColor)
    // console.log(backgroundColor)
    // return backgroundColor

    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setbackgroundColor(color);

    return backgroundColor;
  };

  return (
    <div className="App" style={{ backgroundColor: backgroundColor }}>
      <QuoteGenerator generateColor={generateColour} />
    </div>
  );
}

export default App;
