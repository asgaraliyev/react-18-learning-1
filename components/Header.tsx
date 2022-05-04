import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import * as React from 'react';

const Header = ({ items }) => {
  return (
    <React.Fragment>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
      />
    </React.Fragment>
  );
};

export default Header;
