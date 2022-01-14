import Link from 'next/link';
import { useRouter } from 'next/router';
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
    const router = useRouter();
    const isSelected = (link) => router.pathname === link;
    return (
        <Container>
            <Logotipo>Bobsteam</Logotipo>
            <Nav>
                {menus.map((menu) => (
                    <Link key={menu.name} href={menu.to} passHref>
                        <NavItem isSelected={router.pathname === menu.to}>
                            {menu.name}
                        </NavItem>
                    </Link>
                ))}
            </Nav>
        </Container>
    );
};

export default Topbar;
