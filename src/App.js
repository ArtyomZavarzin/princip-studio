import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Template from './components/Template';
import { MainPage } from './components/MainPage';
import { ProjectsPage } from './components/ProjectsPage';
import { createTheme, ThemeProvider } from '@mui/material';
import { ContactPage } from './components/ContactPage';
import { ServicesPage } from './components/ServicesPage';
import { useEffect, useState } from 'react';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          box-sizing: border-box;
          font-family: "Inter", "Roboto", "Helvetica", "Arial", sans-serif;
        }
        body {
          min-height: var(--app-height);
        }
      `,
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  const [fromTemplate, setFromTemplate] = useState(false);
  useEffect(() => {
    // const appHeight = () => {
    //   const doc = document.documentElement;
    //   doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    // };
    // window.addEventListener('resize', appHeight);
    // appHeight();
    // return () => window.removeEventListener('resize', appHeight);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Template setFromTemplate={setFromTemplate} />}>
            <Route index element={<Navigate to='main' />} />
            <Route path='cases' element={<ProjectsPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='services' element={<ServicesPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
          <Route
            path='main'
            element={<MainPage fromTemplate={fromTemplate} />}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
