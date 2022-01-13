import React from 'react';
import { Container, Logotipo, Nav, NavItem } from './styles';

const menus = [
    {
        name: 'Início',
        to: '/'
    },
    {
        name: 'Sobre',
        to: '/about'
    },
    {
        name: 'Planos',
        to: '/pricing'
    },
    {
        name: 'Contato',
        to: '/contact'
    }
];

const Topbar: React.FC = () => {
    return (
        <Container>
            <Logotipo>Bobsteam</Logotipo>
            <Nav>
                {menus.map((menu) => (
                    <NavItem key={menu.name} href={menu.to}>
                        {menu.name}
                    </NavItem>
                ))}
            </Nav>
        </Container>
    );
};

export default Topbar;
