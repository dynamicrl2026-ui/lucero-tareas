# 🎯 GUÍA TÉCNICA RÁPIDA - PetShop Lucero

## 📝 Variables CSS Disponibles

```css
:root {
    /* Colores */
    --primary-color: #ff9800;           /* Naranja - Marca */
    --secondary-color: #2196F3;         /* Azul - Acentos */
    --success-color: #4CAF50;           /* Verde - Éxito */
    --danger-color: #f44336;            /* Rojo - Peligro */
    --dark-color: #2c3e50;              /* Gris oscuro - Texto */
    --light-color: #ecf0f1;             /* Gris claro - Fondos */
    --text-color: #333;                 /* Texto principal */
    --text-light: #666;                 /* Texto secundario */
    --bg-color: #f8f9fa;                /* Fondo página */
    --white: #ffffff;                   /* Blanco puro */
    
    /* Diseño */
    --border-radius: 12px;              /* Radio de bordes */
    --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    --box-shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.15);
    --spacing-xs: 0.5rem;               /* 8px */
    --spacing-sm: 1rem;                 /* 16px */
    --spacing-md: 1.5rem;               /* 24px */
    --spacing-lg: 2rem;                 /* 32px */
    --spacing-xl: 3rem;                 /* 48px */
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🎨 Clases de Botones

```html
<!-- Botón primario (Naranja) -->
<button class="cta-button cta-primary">Explorar Catálogo</button>

<!-- Botón secundario (Azul) -->
<button class="cta-button cta-secondary">Añadir al Carrito</button>
```

## 📱 Breakpoints para Media Queries

```css
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 480px) { /* Móviles */ }
```

## 🎭 Animaciones Disponibles

```css
/* Incluidas en style.css */
@keyframes slideDown     /* Cae desde arriba */
@keyframes slideInRight  /* Entra desde derecha */
@keyframes fadeIn        /* Aparece gradualmente */
@keyframes fadeInDown    /* Aparece y baja */
@keyframes fadeInUp      /* Aparece y sube */
```

## 🔧 Clases CSS Principales

```css
.header              /* Encabezado sticky */
.navbar              /* Navegación */
.logo-container      /* Logo + tagline */
.hero                /* Sección hero */
.benefits-grid       /* Grid de beneficios */
.promotions-grid     /* Grid de promociones */
.products-grid       /* Grid de productos */
.contact-wrapper     /* Contenedor formulario */
.footer              /* Pie de página */
.cta-button          /* Botones de acción */
.product-card        /* Tarjetas de producto */
.benefit-card        /* Tarjetas de beneficios */
.promo-card          /* Tarjetas promocionales */
```

## 📐 Grid Responsiva

```css
/* Automática - Se adapta según pantalla */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

## 🎪 Estructura Recomendada para Nuevas Secciones

```html
<section class="nueva-seccion">
    <div class="container">
        <h2 class="section-title">Titulo con Linea Decorativa</h2>
        <div class="seccion-grid">
            <div class="seccion-card">
                <div class="icon">🎯</div>
                <h3>Título</h3>
                <p>Descripción</p>
            </div>
        </div>
    </div>
</section>
```

## 🎨 Paleta Predefinida

| Uso | Color | Hex |
|---|---|---|
| Principal | 🟠 | #ff9800 |
| Secundario | 🔵 | #2196F3 |
| Success | 🟢 | #4CAF50 |
| Error | 🔴 | #f44336 |
| Oscuro | ⬛ | #2c3e50 |
| Claro | ⬜ | #ecf0f1 |

## 📊 Tipografía

```css
body {
    font-family: 'Poppins', sans-serif;  /* General */
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
}

blockquote {
    font-family: 'Lora', serif;          /* Decorativa */
}
```

## 🚀 Optimizaciones Implementadas

### Performance
```html
<!-- Lazy loading en imágenes -->
<img src="..." loading="lazy">

<!-- Preconectar a Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### SEO
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<link rel="canonical" href="...">
```

### Accesibilidad
```html
<label for="name">Nombre</label>
<input id="name" type="text" required>

<img alt="Descripción importante">
```

## 🔗 Scripts Incluidos

```html
<!-- Al final del body -->
<script src="script.js"></script>
```

## ⌨️ Funciones JavaScript

```javascript
// Menu toggle en móviles
menuToggle.addEventListener('click', ...)

// Validación de formularios
contactForm.addEventListener('submit', ...)

// Newsletter
newsletterForm.addEventListener('submit', ...)

// Agregar al carrito
addToCartButtons.forEach(...)

// Parallax hero
window.addEventListener('scroll', ...)

// Intersection Observer para animaciones
const observer = new IntersectionObserver(...)
```

## 🎯 Componentes Reutilizables

### Card Genérica
```html
<article class="product-card">
    <div class="product-image">
        <img src="..." alt="...">
        <span class="product-badge">Nuevo</span>
    </div>
    <div class="product-content">
        <h3>Título</h3>
        <p>Descripción</p>
        <div class="product-rating">⭐⭐⭐⭐⭐</div>
        <div class="product-price">$XX.XX</div>
        <button class="cta-button cta-secondary">Acción</button>
    </div>
</article>
```

### Formulario
```html
<form class="contact-form">
    <div class="form-group">
        <label for="name">Campo</label>
        <input type="text" id="name" required>
    </div>
    <button type="submit" class="cta-button">Enviar</button>
</form>
```

## 📈 Estadísticas CSS

- **Total de líneas**: 580+
- **Variables CSS**: 20+
- **Media queries**: 3
- **Animaciones**: 5 @keyframes
- **Transiciones**: Globales
- **Colores**: 10 principales + variaciones

## 🔧 Personalización Rápida

Para cambiar el color principal a toda la web:

```css
:root {
    --primary-color: #00AA00; /* Tu color aquí */
}
```

## 📱 Testing Responsivo

```
320px   → iPhone SE
375px   → iPhone XR
768px   → iPad Mini
1024px  → iPad Pro
1200px  → Desktop
1920px  → Full HD
```

## 🎁 Extras Incluidos

- ✅ Google Fonts preconectadas
- ✅ Smooth scroll global
- ✅ Efectos parallax en hero
- ✅ Validación de email con regex
- ✅ Intersection Observer para animaciones
- ✅ Menu toggle responsive
- ✅ Forms con focus states
- ✅ Social media links funcionales
- ✅ Maps embebido
- ✅ Newsletter signup

---

## 🆘 Troubleshooting Rápido

### Las imágenes no se ven
```html
<!-- Verifica la ruta correcta -->
<img src="imagenes/comida_perros.webp">
```

### El responsive no funciona
```html
<!-- Asegúrate que está en el head -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Los gradientes se ven mal
```css
/* Usa prefijos para compatibilidad -->
background: linear-gradient(...);
-webkit-background-clip: text;
```

### El menú no se abre en móviles
```javascript
// Verifica que script.js está cargado
<script src="script.js"></script>
```

---

## 📞 Soporte

Para dudas sobre la implementación:
- Revisa inline comments en CSS
- Consulta la estructura HTML semántica
- Verifica console.log en Development Tools

---

*Última versión: 2.0 Professional Edition - 2026*
