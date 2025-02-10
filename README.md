# 🔮 CryptoTracker App

Una aplicación móvil desarrollada en **React Native** que te permite explorar las criptomonedas más populares. Consulta los precios, detalles en tiempo real utilizando la API de **Coinlore**. Además, podrás ver información detallada en modales interactivos y navegar fácilmente gracias a una interfaz amigable.

## 🚀 Características

- 💸 **Consulta de Criptomonedas:** Muestra una lista de criptomonedas con sus precios actualizados.
- 🔍 **Detalles en Modal:** Al tocar una criptomoneda, verás más información en un modal.
- 🔄 **Navegación con Tabs:** Fácil navegación entre diferentes secciones de la app.
- 📊 **Actualización en Tiempo Real:** Datos obtenidos directamente desde la API de Coinlore.
- 🌟 **Diseño Moderno:** Interfaz limpia y moderna utilizando ✨ **React Native** y 🖌️ **expo-router**.

## 🔧 Tecnologías y Librerías Utilizadas

- **[React Native](https://reactnative.dev/)** - Framework para desarrollo móvil.
- **[Expo](https://expo.dev/)** - Plataforma para construir aplicaciones nativas con React.
- **[Zustand](https://github.com/pmndrs/zustand)** - Librería para manejo de estado.
- **[Axios](https://axios-http.com/)** - Cliente HTTP para hacer peticiones a la API.
- **[React Navigation](https://reactnavigation.org/)** - Navegación entre pantallas.
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/)** - Iconos personalizables.
- **[Jest](https://jestjs.io/)** - Framework para pruebas unitarias.

## 🚫 Requisitos

- Node.js ≥ 22.11.0
- npm o yarn
- Expo CLI (instalar con `npm install -g expo-cli`)

## 💡 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/brayanyepesc/byp
   cd byp
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia la aplicación:**
   ```bash
   npm start
   ```
   Luego, escanea el código QR con la app de Expo Go o ejecuta en tu emulador.

## 📊 Capturas de Pantalla

| Inicio                            | Detalles de Criptomoneda             | Modal Interactivo              |
|----------------------------------|--------------------------------------|--------------------------------|
| ![Inicio](screenshots/home.png)  | ![Detalles](screenshots/detail.png)  | ![Modal](screenshots/modal.png) |

## 🔢 Scripts Disponibles

- `npm start`: Inicia el proyecto en modo desarrollo.
- `npm run android`: Ejecuta la app en un emulador Android.
- `npm run ios`: Ejecuta la app en un emulador iOS.
- `npm run web`: Corre la app en el navegador.
- `npm test`: Ejecuta las pruebas unitarias.

## 🔗 API Utilizada

- **[Coinlore API](https://www.coinlore.com/cryptocurrency-data-api)**: Proporciona datos actualizados de criptomonedas.

## 🚧 Estructura del Proyecto

```
/
├── components/       # Componentes reutilizables
├── tabs/             # Pantallas principales de la aplicación
├── utils/            # Funciones y helpers
├── assets/           # Imágenes, fuentes, etc.
├── app/_layout.tsx   # Punto de entrada de la aplicación
└── package.json      # Configuración del proyecto
```

## 🛠️ Dependencias

```json
"dependencies": {
  "@expo/vector-icons": "^14.0.2",
  "@react-navigation/native": "^7.0.14",
  "axios": "^1.7.9",
  "expo": "~52.0.32",
  "expo-font": "~13.0.3",
  "expo-router": "~4.0.17",
  "react": "18.3.1",
  "react-native": "0.76.7",
  "zustand": "^5.0.3"
},
"devDependencies": {
  "@babel/core": "^7.25.2",
  "jest": "^29.2.1",
  "typescript": "~5.3.3"
}
```

## 🚜 Contacto

👤 **Brayan Yepes**  
🔗 [LinkedIn](https://www.linkedin.com/in/brayan-yepesc/)  
📧 abrayan.claye@gmail.com

---

🌟 **¡Espero sigamos en contacto, quedo atento!** 🌟

---

🌟 **Salu2** 🌟

