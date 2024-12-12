import { Outlet } from 'react-router';
import { Box, styled } from '@mui/system';
import Header from './Header';
import { useEffect } from 'react';

const TemplateContainer = styled(Box)(({ theme, iswhitebg }) => ({
  minHeight: 'var(--app-height)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));
const Content = styled(Box)(({ theme }) => ({
  flexGrow: '1',
  position: 'relative',
  marginBottom: '100px',
}));

const Template = ({ setFromTemplate }) => {
  useEffect(() => {
    setFromTemplate(true);
  }, [setFromTemplate]);
  return (
    <>
      <TemplateContainer>
        <Header withLine={true}></Header>
        <Content>
          <Outlet />
        </Content>
        <Header></Header>
      </TemplateContainer>
    </>
  );
};

export default Template;
