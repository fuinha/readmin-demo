import React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  EmailField,
} from "react-admin";

const clientFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const ClientList = (props) => (
  <List {...props} filters={<clientFilter />}>
    <Datagrid>
      <TextField source="fullname" />
      <EmailField source="email" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ClientInfo = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="fullname" />
      <EmailField source="email" />
    </SimpleShowLayout>
  </Show>
);

export const ClientCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="fullname" />
      <EmailField source="email" />
    </SimpleForm>
  </Create>
);

export const ClientEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput disabled source="createdate" />
      <TextInput disabled source="lastupdate" />
      <TextInput source="fullname" />
      <EmailField source="email" />
    </SimpleForm>
  </Edit>
);
