<h1 align="center">FIFA World Cup 2026™</h1>


Para una API profesional en **Node.js 24 + Express 5**, una estructura limpia, escalable y fácil de mantener podría ser:

```text
worldcup-2026-api/
│
├── src/
│   │
│   ├── app.js                 # Configuración de Express
│   ├── server.js              # Punto de entrada
│   │
│   ├── config/
│   │   ├── env.js
│   │   ├── database.js
│   │   └── logger.js
│   │
│   ├── routes/
│   │   ├── index.routes.js
│   │   ├── teams.routes.js
│   │   ├── matches.routes.js
│   │   ├── groups.routes.js
│   │   └── standings.routes.js
│   │
│   ├── controllers/
│   │   ├── teams.controller.js
│   │   ├── matches.controller.js
│   │   ├── groups.controller.js
│   │   └── standings.controller.js
│   │
│   ├── services/
│   │   ├── teams.service.js
│   │   ├── matches.service.js
│   │   └── standings.service.js
│   │
│   ├── repositories/
│   │   ├── teams.repository.js
│   │   ├── matches.repository.js
│   │   └── standings.repository.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── logger.middleware.js
│   │   └── validate.middleware.js
│   │
│   ├── validators/
│   │   ├── teams.validator.js
│   │   └── matches.validator.js
│   │
│   ├── models/
│   │   ├── Team.js
│   │   ├── Match.js
│   │   └── Group.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── response.js
│   │
│   └── docs/
│       └── swagger.js
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── LICENSE
```

### Flujo de responsabilidades

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database
```

Ejemplo:

```text
GET /api/v1/teams

teams.routes.js
      ↓
teams.controller.js
      ↓
teams.service.js
      ↓
teams.repository.js
      ↓
PostgreSQL
```

### Si usarás versionado de API

Aún mejor:

```text
src/
└── api/
    └── v1/
        ├── routes/
        ├── controllers/
        └── validators/
```

De esta forma en el futuro puedes agregar:

```text
/api/v1/teams
/api/v2/teams
```

sin romper clientes existentes.

### Dependencias recomendadas

```bash
npm install express cors helmet morgan dotenv
npm install zod
```

Desarrollo:

```bash
npm install -D eslint prettier
```

### Scripts recomendados

```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "node --watch src/server.js",
    "lint": "eslint .",
    "format": "prettier --write .",
    "test": "node --test"
  }
}
```

Esta estructura sigue patrones utilizados en APIs empresariales porque separa claramente **rutas, lógica de negocio, acceso a datos, validaciones y configuración**, lo que facilita el crecimiento del proyecto cuando empieces a manejar equipos, partidos, grupos, estadísticas y clasificación del Mundial 2026.

mi-proyecto-node/
├── .env.development
├── .env.production
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json              # Si usas TypeScript (muy recomendado en Node 24)
├── dist/                      # Código compilado para producción
└── src/
    ├── app.ts                 # Configuración de Express/Fastify y middlewares
    ├── server.ts              # Punto de entrada (punto de arranque del servidor)
    │
    ├── @types/                # Definiciones de tipos personalizadas (TS)
    │
    ├── config/                # Variables de entorno y configuraciones globales
    │   └── environment.ts
    │
    ├── constants/             # Constantes, enums y códigos de error
    │
    ├── controllers/           # Capa de Transporte (Manejo de HTTP req/res)
    │   └── user.controller.ts
    │
    ├── dtos/                  # Data Transfer Objects (Validación de entrada)
    │   └── user.dto.ts
    │
    ├── errors/                # Manejo personalizado de errores
    │   └── custom-error.ts
    │
    ├── middlewares/           # Middlewares globales (auth, logging, error handler)
    │   ├── auth.middleware.ts
    │   └── error.middleware.ts
    │
    ├── models/                # Esquemas de Base de Datos (Mongoose, Prisma, Sequelize)
    │   └── user.model.ts
    │
    ├── repositories/          # Capa de Datos (Consultas directas a la BD)
    │   └── user.repository.ts
    │
    ├── routes/                # Definición de rutas y mapeo a controladores
    │   ├── index.ts           # Enrutador central
    │   └── user.routes.ts
    │
    ├── services/              # Capa de Negocio (La lógica principal de la app)
    │   └── user.service.ts
    │
    └── utils/                 # Funciones utilitarias (hashing, helpers de fechas)
        └── logger.ts