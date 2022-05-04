import Header from '../components/Header';
import * as React from 'react';
import { Layout } from 'antd';
import Footer from '../components/Footer';
import { Outlet, Link } from 'react-router-dom';
import { Item } from './Auth';
const {
  Header: AntdHeader,
  Footer: AntdFooter,
  Sider: AntdSider,
  Content: AntdContent,
} = Layout;
const items: Item[] = [
  {
    key: 'dashboard',
    label: <Link to="/main/dashboard">Dashboard</Link>,
  },
  {
    key: 'settings',
    label: <Link to="/main/settings">Settings</Link>,
  },
];
const Main = () => (
  <React.Fragment>
    <AntdHeader>
      <Header items={items} />
    </AntdHeader>
    <AntdContent style={{ padding: '0 50px' }}>
      <Outlet />
    </AntdContent>
    <AntdFooter style={{ textAlign: 'center' }}>
      <Footer />
    </AntdFooter>
  </React.Fragment>
);

export default Main;
