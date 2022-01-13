import React from 'react';
import { Container, Content } from './styles';
import Topbar from './Topbar';

const Layout: React.FC = ({ children }) => {
    return (
        <Container>
            <Topbar />

            <Content>{children}</Content>
            {/* <Footer /> */}
        </Container>
    );
};

export default Layout;
