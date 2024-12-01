import { Outlet } from 'react-router';
import { Box, styled } from '@mui/system';
import Header from './Header';

const TemplateContainer = styled(Box)(({ theme, iswhitebg }) => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));
const Content = styled(Box)(({ theme }) => ({
  flexGrow: '1',
  position: 'relative',
  marginBottom: '100px',
}));

const Template = ({}) => {
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
