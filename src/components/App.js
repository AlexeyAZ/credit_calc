import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import FontLoader, { FontProvider } from '../context/FontContext';

import Layout from './Layout';

import Index from './pages/Index';
import Page404 from './pages/Page404';

import '../styles/fonts.css';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

const AppWrap = styled(FontLoader)``;

const App = () => {
  return (
    <ThemeProvider theme={theme.main}>
      <FontProvider fonts={['BasisGrotesquePro', 'BasisGrotesqueProMono']}>
        <AppWrap font="BasisGrotesqueProMono">
          <Layout fixedHeader>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route component={Page404} />
            </Switch>
          </Layout>
          <GlobalStyle />
        </AppWrap>
      </FontProvider>
    </ThemeProvider>
  );
};

export default App;