import React, { useState } from 'react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [flashMessage, setFlashMessage] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validación en tiempo real
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'El nombre es requerido';
        } else if (value.trim().length < 2) {
          newErrors.name = 'El nombre debe tener al menos 2 caracteres';
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value.trim())) {
          newErrors.name = 'El nombre solo debe contener letras';
        } else {
          delete newErrors.name;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'El email es requerido';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Ingresa un email válido';
        } else {
          delete newErrors.email;
        }
        break;

      case 'password':
        if (!value) {
          newErrors.password = 'La contraseña es requerida';
        } else if (value.length < 8) {
          newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          newErrors.password = 'La contraseña debe incluir mayúsculas, minúsculas y números';
        } else {
          delete newErrors.password;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  // Validación completa del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validación de nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'El nombre solo debe contener letras';
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    // Validación de contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'La contraseña debe incluir mayúsculas, minúsculas y números';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validación en tiempo real
    validateField(name, value);
    
    // Limpiar mensaje flash si el usuario empieza a escribir
    if (flashMessage.message) {
      setFlashMessage({ type: '', message: '' });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulación de diferentes respuestas del servidor
        if (formData.email === 'exists@test.com') {
          setFlashMessage({ type: 'error', message: 'Este email ya está registrado' });
        } else {
          setFlashMessage({ type: 'success', message: '¡Cuenta creada exitosamente!' });
          console.log('Registro exitoso:', formData);
          // Limpiar formulario tras éxito
          setFormData({ name: '', email: '', password: '' });
        }
      } catch (error) {
        setFlashMessage({ type: 'error', message: 'Error del servidor. Intenta de nuevo.' });
      }
    } else {
      setFlashMessage({ type: 'error', message: 'Por favor, corrige los errores del formulario' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Font Awesome CSS */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      />
      
      {/* Navbar */}
      <nav 
        style={{
          background: 'linear-gradient(to right, #e0cbf5, #9370db)',
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
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/api/placeholder/80/80" 
              alt="Logo Synapse" 
              style={{ width: '80px', height: '80px' }}
            />
          </a>

          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0, 
            gap: '30px' 
          }}>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Inicio</a></li>
            <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Misión</a></li>
            <li><a href="#registro" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Registro</a></li>
            <li><a href="#login" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Login</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="register-page">
        <div className="container-form">
          {/* Formulario de Registro */}
          <div className="formulario">
            <h2 className="create-account">Crear Cuenta</h2>

            {/* Iconos sociales */}
            <div className="iconos">
              <div className="border-icon">
                <i className="fab fa-google"></i>
              </div>
              <div className="border-icon">
                <i className="fab fa-microsoft"></i>
              </div>
              <div className="border-icon">
                <i className="fab fa-facebook-f"></i>
              </div>
            </div>

            <p className="cuenta-gratis">Crea tu cuenta gratis</p>

            {/* Mensaje flash */}
            {flashMessage.message && (
              <div className={`alert-message ${flashMessage.type === 'success' ? 'success' : 'error'}`}>
                {flashMessage.message}
              </div>
            )}

            {/* Campo Nombre */}
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            {/* Campo Email */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* Campo Contraseña */}
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                required
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            {/* Botón de envío */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
            >
              {isSubmitting ? "Creando cuenta..." : "Crear Cuenta"}
            </button>
          </div>

          {/* Panel de bienvenida */}
          <div className="welcome-back">
            <div className="message">
              <h2>¡Hola!</h2>
              <p>Si ya tienes una cuenta, inicia sesión aquí</p>
              <a href="#login">
                <button type="button" className="btn-login">
                  Iniciar Sesión
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        body {
          background: radial-gradient(circle, rgba(163, 136, 181, 1) 6%, rgba(156, 197, 219, 1) 55%, rgba(232, 206, 237, 1) 96%);
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
        
        .register-page {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 70px);
          margin-top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle, rgba(163, 136, 181, 1) 6%, rgba(156, 197, 219, 1) 55%, rgba(232, 206, 237, 1) 96%);
        }

        .container-form {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          gap: 50px;
          padding: 20px;
          flex-direction: row-reverse;
        }

        .welcome-back {
          display: flex;
          align-items: center;
          text-align: center;
          color: white;
        }

        .message {
          padding: 2rem;
        }

        .message h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          color: white;
        }

        .message p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          color: white;
        }

        .btn-login {
          padding: 12px 40px;
          font-weight: 500;
          background: transparent;
          border: 2px solid white;
          border-radius: 25px;
          cursor: pointer;
          font-size: 1rem;
          color: white;
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px) rotate(10deg);
        }

        .formulario {
          width: 500px;
          padding: 3rem;
          background: white;
          backdrop-filter: blur(12px);
          text-align: center;
          border-radius: 20px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(0, 0, 0, 0.15);
          animation: slideInUp 0.6s ease-out;
          color: black;
        }

        .create-account {
          padding: 1.5rem 0;
          font-size: 2rem;
          color: black;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .iconos {
          width: 200px;
          display: flex;
          justify-content: space-around;
          margin: auto;
          margin-bottom: 2rem;
          gap: 10px;
        }

        .border-icon {
          height: 45px;
          width: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          color: black;
          cursor: pointer;
        }

        .border-icon:hover {
          background-color: rgba(51, 47, 47, 0.1);
          border-color: rgb(0, 0, 0);
          transform: scale(1.1);
        }

        .cuenta-gratis {
          padding: 1rem 0;
          color: rgba(0, 0, 0, 0.8);
          font-size: 0.9rem;
          margin: 0;
        }

        .alert-message {
          background: rgba(220, 53, 69, 0.9);
          color: white;
          padding: 10px;
          border-radius: 5px;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .alert-message.success {
          background: rgba(40, 167, 69, 0.9);
        }

        .input-group {
          margin-bottom: 1.5rem;
          position: relative;
        }

        .formulario input[type="email"],
        .formulario input[type="password"],
        .formulario input[type="text"] {
          width: 90%;
          display: block;
          margin: auto;
          margin-bottom: 0.5rem;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
          text-align: center;
          outline: none;
          padding: 14px 0;
          font-size: 1.2rem;
          color: rgb(0, 0, 0);
          transition: border-color 0.3s ease;
        }

        .formulario input[type="email"]:focus,
        .formulario input[type="password"]:focus,
        .formulario input[type="text"]:focus {
          border-bottom-color: white;
        }

        .formulario input[type="email"].error,
        .formulario input[type="password"].error,
        .formulario input[type="text"].error {
          border-bottom-color: #dc3545;
        }

        .formulario input::placeholder {
          color: rgba(0, 0, 0, 0.5);
          font-size: 0.95rem;
        }

        .error-text {
          color: #dc3545;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          display: block;
        }

        .submit-btn {
          width: 80%;
          margin: auto;
          border: 2px solid white;
          padding: 15px;
          border-radius: 30px;
          background-color: transparent;
          font-weight: 500;
          margin-top: 2rem;
          font-size: 1.2rem;
          cursor: pointer;
          color: white;
          transition: all 0.3s ease;
          display: block;
        }

        .submit-btn:hover:not(:disabled) {
          background-color: white;
          color: #333;
          transform: translateY(-2px);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-btn.loading {
          background-color: white;
          color: #333;
        }

        @media (max-width: 900px) {
          .container-form {
            flex-direction: column;
          }
          
          .welcome-back {
            display: none;
          }
          
          .formulario {
            width: 90%;
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .formulario {
            padding: 2rem 1.5rem;
          }
          
          .iconos {
            width: 180px;
          }
          
          .border-icon {
            height: 40px;
            width: 40px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;