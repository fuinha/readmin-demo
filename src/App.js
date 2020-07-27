import React from "react";
import "./App.css";
import { Admin, Resource } from "react-admin";
import { ClientList, ClientInfo, ClientCreate, ClientEdit } from "./Clients";
import UserIcon from "@material-ui/icons/People";
import { dataProvider } from "./firebase/dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="clients"
        icon={UserIcon}
        list={ClientList}
        show={ClientInfo}
        create={ClientCreate}
        edit={ClientEdit}
      />
    </Admin>
  );
}

export default App;
