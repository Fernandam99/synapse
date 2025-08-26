import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [flashMessage, setFlashMessage] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Validación en tiempo real
  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
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
        } else if (value.length < 6) {
          newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
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
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
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
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Simulación de diferentes respuestas del servidor
        if (formData.email === 'error@test.com') {
          setFlashMessage({ type: 'error', message: 'Credenciales incorrectas' });
        } else {
          setFlashMessage({ type: 'success', message: '¡Inicio de sesión exitoso!' });
          console.log('Login exitoso:', formData);
          
          // Redirigir a la página principal después de 1 segundo
          setTimeout(() => {
            navigate('/home');
          }, 1000);
        }
      } catch (error) {
        setFlashMessage({ type: 'error', message: 'Error del servidor. Intenta de nuevo.' });
      }
    } else {
      setFlashMessage({ type: 'error', message: 'Por favor, corrige los errores del formulario' });
    }
    
    setIsSubmitting(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      
      <div className="login-page">
        <div className="container-form">
          {/* Panel de bienvenida */}
          <div className="welcome-back">
            <div className="message">
              <h2>Bienvenido de nuevo</h2>
              <p>Si aún no tienes una cuenta por favor regístrese aquí</p>
              <Link to="/register">
                <button type="button" className="btn-register">
                  Registrarse
                </button>
              </Link>
            </div>
          </div>

          {/* Formulario de Login */}
          <div className="formulario">
            <h2 className="create-account">Iniciar Sesión</h2>

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

            <p className="cuenta-gratis">¿Aún no tienes una cuenta?</p>

            {/* Mensaje flash */}
            {flashMessage.message && (
              <div className={`alert-message ${flashMessage.type === 'success' ? 'success' : 'error'}`}>
                {flashMessage.message}
              </div>
            )}

            {/* Campo Email */}
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                className={errors.email ? 'error' : ''}
                disabled={isSubmitting}
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
                onKeyPress={handleKeyPress}
                className={errors.password ? 'error' : ''}
                disabled={isSubmitting}
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
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Iniciando...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </button>

            {/* Link alternativo */}
            <div className="alt-link">
              <p>
                ¿No tienes cuenta? {' '}
                <Link to="/register" className="link">
                  Crear cuenta aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;