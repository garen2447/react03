# Proyecto: Aplicación de Whiskys - React + Firebase

## Funcionalidades

- **Inicio de sesión y registro de usuarios**: Los usuarios pueden registrarse e iniciar sesión utilizando Firebase Authentication.
- **Dashboard protegido**: Solo los usuarios autenticados pueden acceder al dashboard. Los usuarios no autenticados son redirigidos a la página de inicio de sesión.
- **Exploración de whiskys**: Los usuarios pueden ver una lista de whiskys con su información básica (nombre, marca, precio, año, etc.).
- **Rutas protegidas**: Las rutas como el dashboard solo son accesibles por usuarios autenticados, utilizando el componente `PrivateRoute`.

## Tecnologías utilizadas

- **React**
- **Vite**
- **Firebase Authentication**
- **React Router**
- **React-Firebase-Hooks**
- **Bulma**

## Instalación

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/garen2447/react03.git

2. **Entrar al directorio del proyecto**:
    cd react03

3. **Instalar las dependencias**:
npm install

4. **Instalar las dependencias**:
Configurar Firebase:

- **Crea un proyecto en Firebase**
- **Agrega Firebase a tu proyecto siguiendo la documentación de Firebase**
- **Copia las credenciales de Firebase en el archivo src/config/firebase.js. Asegúrate de que el archivo firebase.js esté correctamente configurado para la autenticación y el acceso a la base de datos**

5. **Iniciar el servidor de desarrollo**:
npm run dev

6. **Acceder a la aplicación**:
Para saber en qué puerto está corriendo la aplicación, simplemente mira la salida en la terminal después de ejecutar npm run dev. Vite te mostrará algo similar a esto:

VITE v2.0.0  ready in 3000ms

  VITE server running at:

  - Local:   http://localhost:3000/
  - Network: http://192.168.0.x:3000/ (si tienes acceso desde otros dispositivos en la misma red)

   
