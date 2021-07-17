import Dashboard from './components/Dashboard'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage';
import {ContactsProvider} from './contexts/ContactsProvider'
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id', "");

  return (
    <>
      {id ? 
        <SocketProvider id={id}>
          <ContactsProvider>
            <ConversationsProvider id={id}>
              <Dashboard id={id} />
            </ConversationsProvider>
          </ContactsProvider> 
        </SocketProvider>
        : 
        <Login setId={setId} />
      }
    </>
  );
}

export default App;
