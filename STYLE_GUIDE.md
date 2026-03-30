# Guia de Estilo Visual - MScHenryAI

Esta guia resume el sistema visual actual del sitio para reutilizarlo en nuevas paginas sin perder coherencia.

## 1) ADN visual

- Direccion: tech-noir profesional.
- Sensacion: tecnica, premium, limpia, enfocada en ingenieria.
- Base: fondo oscuro + acentos electricos (azul/cian) + capas translucidas.
- Principio: alto contraste para lectura y jerarquia clara.

## 2) Tokens de diseno (fuente de verdad)

Archivo base: app/globals.css

### Color

- background: oklch(0 0 0)
- foreground: oklch(0.95 0 0)
- card: oklch(0.08 0 0)
- primary: oklch(0.65 0.2 250)
- accent: oklch(0.55 0.22 250)
- border: oklch(0.2 0.02 250)
- muted: oklch(0.15 0 0)
- muted-foreground: oklch(0.6 0 0)

### Glow

- glow-primary: oklch(0.65 0.2 250 / 0.5)
- glow-accent: oklch(0.55 0.22 250 / 0.3)

### Radius

- radius base: 0.75rem
- Forma dominante: rounded-2xl

### Tipografia

- Sans: Geist (contenido principal)
- Mono: Geist Mono (badges, chips, metadata, tono tecnico)

## 3) Patrones de superficie

### Card base (patron mas usado)

Usar esta base en modulos, bloques y paneles:

- p-6 md:p-8
- rounded-2xl
- bg-card/50 o bg-card/80
- border border-border/50
- backdrop-blur-sm
- transition-all duration-300 a 500
- hover:border-primary/30 o hover:border-primary/50
- hover:shadow-lg hover:shadow-primary/10

### Badge tecnico de seccion

Patron de subtitulo tipo comentario:

- inline-block px-4 py-1.5
- text-sm font-mono
- text-primary
- bg-primary/10
- rounded-full border border-primary/20
- Texto recomendado: // Nombre de Seccion

### Chip de tecnologia

- px-2 py-1
- text-xs font-mono
- bg-background/50 o bg-secondary/50
- text-muted-foreground
- rounded-md border border-border/50

## 4) Layout y ritmo

- Estructura: max-w-7xl mx-auto px-4
- Espaciado vertical por bloques: py-24 a py-32
- Header de pagina: pt-32 pb-20
- Grid principal:
  - Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  - Secciones comparativas: lg:grid-cols-2

## 5) Fondo y atmosfera

- Fondo principal: grid-pattern con opacidad baja (10-30).
- Capas extra recomendadas:
  - bg-gradient-to-b from-background via-transparent to-background
  - bg-gradient-to-br from-primary/5 via-transparent to-accent/5
- Para bloques premium: gradiente suave from-primary/10 via-card/50 to-accent/10.

## 6) Sistema de movimiento

### Entrada

- initial: opacity 0 + y 20 (o 30)
- animate: opacity 1 + y 0
- duration: 0.5 a 0.6
- stagger: delay index * 0.1

### Hover

- Leve elevacion: y -2 a -3
- Leve escala: 1.01 a 1.1 segun componente
- Transiciones entre 0.2 y 0.5

### Transicion de pagina

- blur + desplazamiento suave
- easing: [0.22, 1, 0.36, 1]
- duration: 0.5

## 7) Navegacion, CTA y jerarquia

- CTA primario:
  - bg-primary text-primary-foreground
  - rounded-xl
  - hover: shadow-primary/25
- CTA secundario:
  - bg-secondary/50
  - border border-border/50
  - hover:border-primary/30
- Navbar en vidrio:
  - clase glass
  - rounded-2xl
  - sombra muy ligera al hacer scroll

## 8) Tono visual del contenido

- Titulos contundentes, maximo 1 acento en color primary.
- Subtitulos y texto de apoyo en muted-foreground.
- Datos tecnicos, estados y valores en font-mono.
- Evitar bloques largos sin respiracion; usar cards, chips y sub-bloques.

## 9) Plantilla reutilizable de seccion

Usar este esquema para secciones nuevas:

1. Badge tecnico
2. Titulo con palabra acentuada en primary
3. Parrafo breve (1-3 lineas)
4. Grid de cards con patron base
5. Chips o metadata tecnica en font-mono
6. CTA final (primario + secundario)

## 10) Checklist rapido antes de publicar

- [ ] Fondo con grid-pattern y opacidad baja
- [ ] Jerarquia: badge, titulo, subtitulo, contenido
- [ ] Cards en glass oscuro con border suave
- [ ] Chips y metadatos en font-mono
- [ ] Hovers sutiles, sin animaciones agresivas
- [ ] CTA primario y secundario consistentes
- [ ] Buen comportamiento en mobile (1 columna)
- [ ] Contraste legible en todo el viewport

## 11) Notas de mantenimiento

- app/globals.css es la fuente activa del estilo global.
- styles/globals.css existe, pero no es la referencia principal del App Router.
- Si cambias tokens globales, valida Hero, Navbar, Cards y Footer primero.
