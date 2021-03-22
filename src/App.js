import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import { useHistory } from 'react-router-dom';

// import Notifier from './Components/Notifications/Notifications';
import WorkshopRoot from './Router';
import MuiTheme from './Theme/MuiThemes/MuiTheme';
import RTLMuiTheme from './Theme/MuiThemes/RTLMuiTheme';
import ZeroJourneyerMuiTheme from './Theme/MuiThemes/ZeroJourneyerMuiTheme';
import translations from './translations';
import jss from './utils/jssRTL';

const Root = () => (
  <SnackbarProvider>
    {/* <Notifier /> */}
    <CssBaseline />
    <WorkshopRoot />
  </SnackbarProvider>
);

const App = ({ dir }) => {

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  return (
    <IntlProvider translations={translations}>
      {dir === 'rtl' ? (
        <>
          <ThemeProvider theme={ZeroJourneyerMuiTheme}>
            <StylesProvider jss={jss}>
              <Root />
            </StylesProvider>
          </ThemeProvider>
        </>
      ) : (
          <>
            <ThemeProvider theme={MuiTheme}>
              <Root />
            </ThemeProvider>
          </>
        )}
    </IntlProvider>
  );
};

const mapStateToProps = (state) => ({
  dir: state.Intl.locale === 'fa' ? 'rtl' : 'ltr',
});

export default connect(mapStateToProps, {})(App);
