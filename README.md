# Sistema NOC (Network Operations Center)

Sistema de monitoreo de servicios desarrollado en Node.js con TypeScript. Permite monitorear servicios y enviar notificaciones cuando ocurren eventos específicos.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (Node Package Manager)

## Instalación

1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd NOC
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env-example .env
```
Editar el archivo `.env` con tus configuraciones

## Variables de Entorno

Copiar el archivo `.env-example` y renombrarlo a `.env`. Configurar las siguientes variables:

```
PORT=3000
MAILER_EMAIL=
MAILER_SECRET_KEY=
PROD=false
```

## Comandos Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo con recarga automática
- `npm run build`: Compila el proyecto TypeScript
- `npm start`: Ejecuta la aplicación en modo producción

## Estructura del Proyecto

```
src/
├── app.ts              # Punto de entrada de la aplicación
├── config/            # Configuraciones
├── domain/           # Reglas de negocio y entidades
│   ├── datasources/
│   ├── entities/
│   ├── repository/
│   └── use-cases/
├── infrastructure/   # Implementaciones concretas
│   ├── datasources/
│   └── repositories/
└── presentation/    # Capa de presentación
    ├── cron/
    └── server.ts
```

## Características

- Arquitectura limpia (Clean Architecture)
- Sistema de logs
- Tareas programadas con cron
- Monitoreo de servicios
- Sistema de notificaciones

## Licencia

ISC - Internet Systems Consortium

La licencia ISC es una licencia de software libre permisiva similar a la licencia MIT pero con un texto más simplificado. Permite:
- Uso comercial
- Modificación
- Distribución
- Uso privado

La única condición es mantener el aviso de copyright y la licencia en cualquier copia del software.
