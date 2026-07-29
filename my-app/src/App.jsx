import React from "react";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

import store from "./app/store";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <GoogleOAuthProvider
      clientId="903538847240-m40dsuadbr6enk241im7e2c26vh4occ6.apps.googleusercontent.com"
    >
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;