import { ContactContext, ContactContextProvider } from './context/ContactContext';
import { HomeScreen } from './screens/HomeScreen';

import { Route, Routes } from 'react-router'


function App() {


  return (
    <ContactContextProvider>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </ContactContextProvider>
  );
}

export default App
