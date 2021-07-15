import Login from './components/Login'
import useLocalStorage from './components/hooks/useLocalStorage';

function App() {
  const [id, setId] = useLocalStorage('id', "");

  return (
    <>
      {id}
      <Login setId={setId} />
    </>
  );
}

export default App;
