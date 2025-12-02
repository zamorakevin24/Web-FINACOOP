# Página Web FINACOOP

## 📁 Estructura del Proyecto

```
Pagina web Finacoop/
│
├── index.html              # Página principal
├── css/                    # Carpeta de estilos
│   ├── normalize.css       # Reset CSS para consistencia entre navegadores
│   ├── styles.css          # Estilos principales
│   └── responsive.css      # Estilos para dispositivos móviles y tablets
│
├── img/                    # Carpeta para imágenes
│   ├── logo-finacoop.png   # Logo de FINACOOP (debes agregarlo)
│   └── edificio-finacoop.jpg # Imagen del edificio (debes agregarla)
│
├── pages/                  # Páginas secundarias
│   ├── activos-eventuales.html
│   ├── productos.html
│   ├── comites.html
│   ├── oficinas.html
│   └── noticias.html
│
└── assets/                 # Recursos adicionales
    └── icons/              # Iconos y elementos gráficos
```

## 🎨 Esquema de Colores

- **Azul Principal**: `#0066a1` - Para encabezados y elementos principales
- **Verde Secundario**: `#6db33f` - Para acentos y llamadas a la acción
- **Blanco**: `#ffffff` - Fondo y texto sobre fondos oscuros
- **Gris Oscuro**: `#2c3e50` - Footer y textos secundarios

## 🖼️ Imágenes Necesarias

Debes agregar las siguientes imágenes en la carpeta `img/`:

1. **logo-finacoop.png** - Logo de FINACOOP
2. **edificio-finacoop.jpg** - Foto del edificio principal

## 📝 Cómo Agregar Contenido

### Para agregar una nueva sección:
1. Edita el archivo `index.html`
2. Agrega tu contenido dentro de una etiqueta `<section>`
3. Dale una clase descriptiva (ej: `class="about-us"`)
4. Agrega los estilos correspondientes en `css/styles.css`

### Para agregar nuevas páginas:
1. Crea un nuevo archivo HTML en la carpeta `pages/`
2. Copia la estructura del `index.html` (header y footer)
3. Cambia solo el contenido del `<main>`
4. Asegúrate de actualizar las rutas de los archivos CSS (usa `../css/`)

## 🎯 Características Implementadas

✅ Diseño completamente responsive (móvil, tablet, escritorio)
✅ Navegación clara e intuitiva
✅ Sección de horarios de atención
✅ Información de contacto destacada
✅ Estructura semántica HTML5
✅ Estilos organizados y modulares
✅ Variables CSS para fácil personalización

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador web
2. Para editar, usa cualquier editor de texto (VS Code recomendado)
3. Los cambios se reflejan automáticamente al recargar el navegador

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles (iOS y Android)

## 🛠️ Próximos Pasos

1. Agregar las imágenes del logo y edificio
2. Crear las páginas secundarias (productos, oficinas, etc.)
3. Agregar más contenido según las necesidades
4. Optimizar imágenes para web
5. Agregar un formulario de contacto (opcional)

## 💡 Consejos

- Mantén las imágenes optimizadas (tamaño máximo recomendado: 500KB)
- Usa nombres descriptivos para archivos y clases CSS
- Prueba siempre en diferentes dispositivos
- Mantén la consistencia en colores y tipografía
