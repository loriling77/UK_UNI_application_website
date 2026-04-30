import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', key: 'home', to: '/' },
    { label: 'Application', key: 'application', href: 'https://ant.design' },
    { label: 'Document', key: 'document', href: 'https://ant.design' },
];

const Navigation: React.FC = () => {
    const location = useLocation();

    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 40px',
            height: '64px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
        }}>
            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                    background: '#e94560',
                    color: '#fff',
                    borderRadius: '6px',
                    padding: '2px 8px',
                    fontSize: '14px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                }}>UK</span>
                <span style={{ color: '#fff', fontSize: '20px', fontWeight: 700, letterSpacing: '0.5px' }}>
                    UniRank
                </span>
            </Link>

            {/* Nav Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {navItems.map(item => {
                    const isActive = item.to ? location.pathname === item.to : false;

                    const inner = (
                        <div style={{
                            position: 'relative',
                            padding: '8px 16px',
                            color: isActive ? '#fff' : 'rgba(255,255,255,0.65)',
                            fontSize: '14px',
                            fontWeight: isActive ? 600 : 400,
                            cursor: 'pointer',
                            borderRadius: '6px',
                            background: isActive ? 'rgba(233,69,96,0.15)' : 'transparent',
                            transition: 'color 0.2s, background 0.2s',
                        }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                            onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'; }}
                        >
                            {item.label}
                            {isActive && (
                                <span style={{
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: '16px',
                                    right: '16px',
                                    height: '2px',
                                    background: '#e94560',
                                    borderRadius: '2px',
                                }} />
                            )}
                        </div>
                    );

                    if (item.to) {
                        return <Link key={item.key} to={item.to} style={{ textDecoration: 'none' }}>{inner}</Link>;
                    }
                    return (
                        <a key={item.key} href={item.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            {inner}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navigation;
