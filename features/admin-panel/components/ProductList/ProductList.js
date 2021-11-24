import { List, Datagrid, TextField } from "react-admin"

const ProductList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="email" />
      </Datagrid>
    </List>
  )
}

export default ProductList
