import React from 'react';

const BaseLayout = ({ children, title = "Synapse" }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Head/Meta tags simulation */}
      <title>{title}</title>
      
      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
      
      {/* Custom CSS Variables */}
      <style jsx global>{`
        :root {
          --color-fondo: radial-gradient(circle, rgba(163, 136, 181, 1) 6%, rgba(156, 197, 219, 1) 55%, rgba(232, 206, 237, 1) 96%);
          --color-secundario: #fff;
          --color-titulos: #000;
          --color-formulario: #fff;
          --color-navbar-inicio: #e0cbf5;
          --color-navbar-fin: #9370db;
          --color-navbar-link: var(--color-secundario);
          --color-navbar-link-hover: #ffe600;
          --color-texto-blanco: var(--color-secundario);
          --color-texto-negro: var(--color-titulos);
          --color-texto-negro-opaco: rgba(0, 0, 0, 0.8);
          --color-texto-negro-transparente: rgba(0, 0, 0, 0.3);
          --color-texto-negro-border: rgba(0, 0, 0, 0.15);
          --color-texto-negro-borde-input: rgba(0, 0, 0, 0.5);
          --color-alert-error: rgba(220, 53, 69, 0.9);
          --color-alert-success: rgba(40, 167, 69, 0.9);
          --color-boton-fondo-hover: var(--color-secundario);
          --color-boton-texto-hover: #667eea;
          --color-boton-texto: var(--color-secundario);
          --color-boton-texto-hover-negro: #333;
          --color-iconos-border: rgba(0, 0, 0, 0.3);
          --color-iconos-border-hover: rgb(0, 0, 0);
          --color-iconos-fondo-hover: rgba(51, 47, 47, 0.1);
          --color-placeholder: rgba(255, 255, 255, 0.7);
          --color-input-texto: rgb(0, 0, 0);
          --color-button-background: black;
          --color-button-text: white;
          --color-button-hover-background: #333;
          --color-alt-link: #f1f1f1;
        }

        body {
          background: var(--color-fondo);
          font-family: 'Times New Roman', Times, serif;
          margin: 0;
          padding: 0;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navbar */}
      <nav 
        style={{
          background: 'linear-gradient(to right, var(--color-navbar-inicio), var(--color-navbar-fin))',
          height: '70px',
          padding: '0 15px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/api/placeholder/80/80" 
              alt="Logo Synapse" 
              style={{ width: '80px', height: '80px' }}
            />
          </a>

          {/* Navigation Links */}
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0, 
            gap: '30px' 
          }}>
            <li>
              <a 
                href="#" 
                style={{ 
                  color: 'var(--color-navbar-link)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-navbar-link-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-navbar-link)'}
              >
                Inicio
              </a>
            </li>
            <li>
              <a 
                href="#" 
                style={{ 
                  color: 'var(--color-navbar-link)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-navbar-link-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-navbar-link)'}
              >
                Misión
              </a>
            </li>
            <li>
              <a 
                href="#registro" 
                style={{ 
                  color: 'var(--color-navbar-link)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-navbar-link-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-navbar-link)'}
              >
                Registro
              </a>
            </li>
            <li>
              <a 
                href="#login" 
                style={{ 
                  color: 'var(--color-navbar-link)', 
                  textDecoration: 'none', 
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-navbar-link-hover)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-navbar-link)'}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ marginTop: '0' }}>
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;