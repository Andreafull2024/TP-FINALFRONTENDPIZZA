import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/registro.css';
import Swal from 'sweetalert2';
import { API_URL } from "../config";   // 👈 importamos la URL

function RegisterForm() {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const registrarUsuario = async () => {
    if (usuario && correo && clave) {
      try {
        await axios.post(`${API_URL}/clientes/register`, {
          nombre_usuario: usuario.trim(),
          email: correo,
          contraseña: clave,
        });

        Swal.fire({
          icon: 'success',
          title: 'Registro completo',
          text: 'Tu cuenta fue creada correctamente',
          confirmButtonColor: '#2a9d8f',
        });

        navigate('/usuarios');
      } catch (error) {
        const mensaje = error.response?.data?.message || 'Error al registrar';
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: mensaje,
          confirmButtonColor: '#d62828',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor completá todos los campos',
        confirmButtonColor: '#f4a261',
      });
    }
  };

  return (
    <main>
      <div className="formulario">
        <h3>Registrarse</h3>
        <input
          type="text"
          placeholder="Nuevo usuario"
          className="form-control"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo"
          className="form-control"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="form-control"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
        <button className="boton-login" onClick={registrarUsuario}>
          Registrarme
        </button>
        <button id="volver" onClick={() => navigate('/')}>
          Volver
        </button>
      </div>
    </main>
  );
}

export default RegisterForm;
