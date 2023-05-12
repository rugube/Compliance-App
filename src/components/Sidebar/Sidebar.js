import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import Icon from '../Icon';
import LinksGroup from './LinksGroup/LinksGroup';

import s from './Sidebar.module.scss';

const Sidebar = () => (
  <nav className={s.root}>
    <header className={s.logo}>
      <Link to="/app/main">
        <Icon glyph="logo" />
      </Link>
    </header>
    <ul className={s.nav}>
      <LinksGroup
        header="Dashboard"
        headerLink="/app/main"
        glyph="dashboard"
      />
      {/* <LinksGroup
        header="Templates"
        headerLink="/app/typography"
        glyph="typography"
      />
      <LinksGroup
        header="Inspections And Records"
        headerLink="/app/tables"
        glyph="tables"
      />
      <LinksGroup
        header="Schedules And Tasks"
        headerLink="/app/notifications"
        glyph="notifications"
      />
      <LinksGroup
        header="Folder And File Organization"
        headerLink="/app/components"
        childrenLinks={[
          {
            name: 'Buttons',
            link: '/app/components/buttons',
          },
          {
            name: 'Charts',
            link: '/app/components/charts',
          },
          {
            name: 'Icons',
            link: '/app/components/icons',
          },
          {
            name: 'Maps',
            link: '/app/components/maps',
          },
        ]}
        glyph="components"
      />
      <LinksGroup
        header="Stock Control"
        headerLink="/app/notifications"
        glyph="notifications"
      />
      <LinksGroup
        header="Analytics"
        headerLink="/app/notifications"
        glyph="notifications"
      /> */}
    </ul>
  </nav>
);

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
