import React from "react";
import { Menu, Divider } from "antd";
import {  UploadOutlined,  EnvironmentFilled, SnippetsFilled, AppstoreOutlined, LoginOutlined, BookOutlined, CalendarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import "./styles.css"

const { SubMenu } = Menu;

const SideNav = () => {
  const history = useHistory();

  const goProducsPage = () => history.push("/products");

  const goUsersPage = () => history.push("/users");

  const logout = () => {
    token.setToken(null)
    history.push("/signin")
  }
  
  return (
    <div>
      <div className="logo"></div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="2" onClick={goProducsPage} >
          <SnippetsFilled/> <span>Product</span>
        </Menu.Item>
      
        <Menu.Item key="2" onClick={goUsersPage} >
          <SnippetsFilled/> <span>Usuarios</span>
        </Menu.Item>

        <Menu.Item key="7" onClick={logout}>
        <LoginOutlined /> <span>Cerrar Sesion</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default SideNav;
