# Sistema NOC (Network Operations Center)

Sistema de monitoreo de servicios desarrollado en Node.js con TypeScript. Permite monitorear servicios y enviar notificaciones cuando ocurren eventos específicos.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (Node Package Manager)

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/HerrWolf/NOC.git
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
PORT=3000               # Puerto donde correrá el servidor
MAILER_SERVICE=gmail   # Servicio de correo (ej: gmail)
MAILER_EMAIL=         # Tu correo electrónico
MAILER_SECRET_KEY=    # Contraseña de aplicación del correo
PROD=false            # Ambiente de producción
```

### Configuración del Servicio de Email (Gmail)

1. Ir a la configuración de tu cuenta de Google
2. Activar la verificación en dos pasos
3. Generar una contraseña de aplicación para el MAILER_SECRET_KEY

## Comandos Disponibles

- `npm run dev`: Inicia la aplicación en modo desarrollo con recarga automática
- `npm run build`: Compila el proyecto TypeScript
- `npm start`: Ejecuta la aplicación en modo producción

## Estructura del Proyecto

```
src/
├── app.ts                 # Punto de entrada de la aplicación
├── config/               # Configuraciones
├── domain/              # Reglas de negocio y entidades
│   ├── datasources/     # Interfaces de fuentes de datos
│   ├── entities/        # Entidades del dominio
│   ├── repository/      # Interfaces de repositorios
│   └── use-cases/       # Casos de uso
│       ├── checks/      # Verificación de servicios
│       └── email/       # Manejo de correos
├── infrastructure/      # Implementaciones concretas
│   ├── datasources/    # Implementación de fuentes de datos
│   └── repositories/   # Implementación de repositorios
└── presentation/       # Capa de presentación
    ├── cron/          # Tareas programadas
    ├── email/         # Servicio de correos
    └── server.ts      # Servidor de la aplicación
```

## Características

- Arquitectura limpia (Clean Architecture)
- Sistema de logs persistente en archivos
- Tareas programadas con cron
- Monitoreo de servicios
- Sistema de notificaciones por email
- Manejo de logs con:
  - Registro en archivos
  - Envío por correo electrónico
  - Rotación de archivos de logs

## Licencia

ISC - Internet Systems Consortium

La licencia ISC es una licencia de software libre permisiva similar a la licencia MIT pero con un texto más simplificado. Permite:
- Uso comercial
- Modificación
- Distribución
- Uso privado

La única condición es mantener el aviso de copyright y la licencia en cualquier copia del software.
