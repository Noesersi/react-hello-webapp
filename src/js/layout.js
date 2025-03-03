import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { EditContact } from "./views/EditContact";
import { ContactList } from "./views/ContactList";
import { AddContact } from "./views/AddContact";
import {AppContextProvider} from "../context/AppContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <AppContextProvider>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/add-contact" element={<AddContact />} />
              <Route path="/edit/:id" element={<EditContact />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
};

export default Layout;
