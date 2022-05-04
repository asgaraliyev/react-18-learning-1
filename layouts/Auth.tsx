import Header from '../components/Header';
import * as React from 'react';
import { Layout } from 'antd';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { Outlet } from 'react-router-dom';
const {
  Header: AntdHeader,
  Footer: AntdFooter,
  Sider: AntdSider,
  Content: AntdContent,
} = Layout;

enum ActionKind {
  Active = 'ACTIVE',
  Deactive = 'DEACTIVE',
}
export type MenuState = {
  isMenuCollapsed: Boolean;
};
type Action = {
  type: ActionKind;
  payload: Boolean;
};
export const deactiveAction: Action = {
  type: ActionKind.Deactive,
  payload: false,
};
const activeAction: Action = {
  type: ActionKind.Active,
  payload: true,
};
function menuReducer(state: MenuState, action: Action): MenuState {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.Active:
      return {
        ...state,
        isMenuCollapsed: true,
      };
    case ActionKind.Deactive:
      return {
        ...state,
        isMenuCollapsed: false,
      };
    default:
      return state;
  }
}
const initalState: MenuState = {
  isMenuCollapsed: false,
};

interface Item {
  key: Number;
  label: String;
  to: String;
}
const items: Item[] = [
  {
    key: 1,
    label: 'Login',
    to: '/auth/login',
  },
  {
    key: 2,
    label: 'Register',
    to: '/auth/register',
  },
];
const Auth = () => {
  const [menuState, menuStateDispatch] = React.useReducer(
    menuReducer,
    initalState
  );
  return (
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
};

export default Auth;
