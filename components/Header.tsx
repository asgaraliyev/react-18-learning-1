import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ items }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname.split('/')[2]]}
        items={items}
      />
    </React.Fragment>
  );
};

export default Header;
