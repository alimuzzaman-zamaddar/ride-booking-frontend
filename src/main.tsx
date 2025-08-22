import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "./redux/store";


createRoot(document.getElementById("root")!).render(

    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </Provider>
    </GoogleOAuthProvider>

);
