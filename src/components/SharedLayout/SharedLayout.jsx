import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/Themes/Themes';
import { Suspense } from 'react';
import { Container, Header, Nav, Link } from './SharedLayout.styled';
import Loader from '../Loader/Loader';
import ScrollButton from '../ScrollButton/ScrollButton';
import { GlobalStyles } from 'components/Themes/globalStyles';
import { useDarkMode } from 'components/Themes/useDarkMode';
import ToggleThemeButton from 'components/Themes/ToggleThemeButton';

export const SharedLayout = () => {
  const location = useLocation();
  const [theme, toggleTheme, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Container>
          <Header>
            <Nav>
              <Link
                active={location.pathname === '/' ? 'on' : 'off'}
                to="/"
                end
              >
                Home
              </Link>
              <Link
                active={location.pathname.startsWith('/movies') ? 'on' : 'off'}
                to="/movies"
              >
                Movies
              </Link>
            </Nav>

            <ToggleThemeButton
              type="button"
              theme={theme}
              toggleTheme={toggleTheme}
            >
              {theme === 'light' ? (
                <span>
                  <b>&#9789;</b>
                </span>
              ) : (
                <span>&#9728;</span>
              )}
            </ToggleThemeButton>
          </Header>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
        <ScrollButton />
      </>
    </ThemeProvider>
  );
};
