# 🌿 Habit & Task Tracker

¡Bienvenido! Este proyecto es una aplicación web minimalista diseñada para la gestión de tareas y el seguimiento de hábitos diarios. Permite registrar rutinas, visualizar el progreso mediante un contador de rachas de días cumplidos y mantener la privacidad de los datos al guardarlo todo de forma local.

Aplicación web de gestión de hábitos y tareas desarrollada en JavaScript nativo bajo la arquitectura MVCS. Registra el progreso diario, calcula rachas de días cumplidos y persiste los datos localmente mediante localStorage.

---

## 🚀 Características Principales

*   **Control de Rachas:** Contador automático de días consecutivos completados para medir tu constancia.
*   **Arquitectura MVCS:** Separación limpia de responsabilidades (Modelo, Vista, Controlador, Servicio).
*   **Privacidad Local:** Persistencia de datos inmediata en el `localStorage` del navegador, sin bases de datos externas.
*   **Vanilla JS:** Código 100% nativo, ligero, rápido y sin dependencias ni frameworks pesados.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5** - Estructura semántica de la interfaz.
*   **CSS3** - Diseño minimalista con variables y layouts modernos (Flexbox/Grid).
*   **JavaScript (ES6+)** - Lógica de programación nativa y manipulación del DOM.
*   **Web Storage API** - Uso de `localStorage` para la persistencia de datos.

---

## 📂 Estructura del Proyecto (MVCS)

El proyecto sigue el patrón arquitectónico **Modelo-Vista-Controlador-Servicio** para mantener un código escalable y organizado:

```text
├── index.html          # Punto de entrada de la aplicación
├── style/
│   └── styles.css      # Estilos globales y diseño minimalista
└── src/
    ├── main.js          # Inicializador de la aplicación
    ├── model/         # Define la estructura de los datos (Habit, Task)
    ├── view/          # Gestiona el DOM, eventos y renderizado de pantalla
    ├── controller/    # Conecta las vistas con los servicios (Lógica de control)
    └── service/       # Maneja la persistencia y operaciones del localStorage
```

---

## ⚙️ Instalación y Uso Local

No requiere de compiladores, servidores complejos ni gestores de paquetes.

1. **Clona el repositorio:**
   ```bash
   git clone github.com
   ```
2. **Navega al directorio:**
   ```bash
   cd tu-repositorio
   ```
3. **Abre el proyecto:**
   * Simplemente haz doble clic en el archivo `index.html` para abrirlo en tu navegador.
   * *(Recomendado)* Usa la extensión **Live Server** de VS Code para una mejor experiencia de desarrollo.
