import {
  selectedContactContext,
  SelectedContactContextProvider,
} from "./context/SelectedContactContext";
import { ContactsContextProvider } from "./context/ContactsContext";
import { WindowStateContextProvider } from "./context/WindowStateContext";
import { HomeScreen } from "./screens/HomeScreen";

import { Route, Routes } from "react-router";

function App() {
  return (
    <WindowStateContextProvider>
      <SelectedContactContextProvider>
        <ContactsContextProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </ContactsContextProvider>
      </SelectedContactContextProvider>
    </WindowStateContextProvider>
  );
}

export default App;
