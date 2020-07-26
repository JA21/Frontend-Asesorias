import React, { Component } from 'react'
import "./styles.css";
import List from '../../components/list';
import { Button } from 'antd';
import { 
  CheckOutlined,
} from "@ant-design/icons";
import productService from '../../services/product.service'

export default class ProductPage extends Component {
  state = {
    products: []
  }

  componentDidMount(){
     productService.getProducts()
      .then(res => {
        this.setState({products: res.data})
      })
      .catch(err => console.error(err))
  }

  onSelected(){}

  render() {

    const columns = [
      { title: '', key: 'image', width: 140, render: () => (<img src="" width={50} />)},
      { title: "Nombre", dataIndex: "name", width: 180 },
      { title: "Precio", dataIndex: "price", width: 180 },
      { title: "Stock", dataIndex: "stock", width: 180 },
      { title: "Estado", dataIndex: "state", width: 180 },
      { 
        title: 'Action', 
        key: 'operation', 
        fixed: 'right', 
        width: 140, 
        render: () => (
        <Button
          style={{ marginRight: 3 }}
          type="default"
          icon={<CheckOutlined /> }
          onClick={() => console.log("Clickkkkkkk")}
        />)
      }
    ];

    return (
      <div>
        <h1> Pagina productos</h1>
        <List
          columns={columns}
          data={this.state.products}
          onSelected={this.onSelected}
        />
      </div>
    )
  }
}
