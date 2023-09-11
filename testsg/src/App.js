function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Show Animal</button>
    </div>
  );
}

export default App;
