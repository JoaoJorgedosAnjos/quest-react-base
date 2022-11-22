import Text from "./components/text/text";
import Button from "./components/button/button";

function App() {
  return (
    <>
      <Text  textColor="Crimson" textTransform= "uppercase" bcColor="#DEB887">
        <h3>Ubuntu</h3>
        <p>Ubuntu significa generosidade, solidariedade, compaixão com os necessitados, e o desejo sincero de felicidade e harmonia entre os seres humanos.</p>
        </Text> 

        <Button label="Praticar o Ubuntu">          
        </Button>
    </>
  );
}

export default App;
