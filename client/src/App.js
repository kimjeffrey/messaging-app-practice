import Dashboard from './components/Dashboard'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsProvider} from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider';

function App() {
  const [id, setId] = useLocalStorage('id', "");

  return (
    <>
      {id ? 
        <ContactsProvider>
          <ConversationsProvider id={id}>
            <Dashboard id={id} />
          </ConversationsProvider>
        </ContactsProvider> 
        : 
        <Login setId={setId} />
      }
    </>
  );
}

export default App;
