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
```
``` txt
tournament_editions
--------------------
id UUID PK
tournament_id FK

name VARCHAR(100)
year INTEGER

host_country_id FK

start_date DATE
end_date DATE

status ENUM(
  'draft',
  'scheduled',
  'in_progress',
  'finished'
)

created_at
updated_at

Ejemplos:

Mundial 2026
Mundial 2030


Si vas a controlar un campeonato tipo Mundial (FIFA World Cup), no modeles solo **teams, standings y partidos**. Normalmente terminarás necesitando:

* Torneos
* Ediciones del torneo (Mundial 2026, Mundial 2030, etc.)
* Fases (grupos, octavos, cuartos, semifinal, final)
* Grupos (A, B, C...)
* Países
* Equipos/selecciones
* Estadísticas (standings)
* Partidos
* Estadísticas de partidos
* Jugadores (opcional pero recomendable)
* Eventos del partido (goles, tarjetas, cambios)
* Configuración general

## Modelo recomendado

### countries

```sql
countries
---------
id UUID PK
name VARCHAR(100)
code CHAR(3) UNIQUE -- FIFA (ARG, BRA, PER)
flag_url TEXT
continent VARCHAR(50)

created_at
updated_at
```

---

### tournaments

Permite manejar varios campeonatos.

```sql
tournaments
------------
id UUID PK
name VARCHAR(100)
description TEXT

created_at
updated_at
```

Ejemplos:

* Mundial FIFA
* Copa América
* Champions League

---

### tournament_editions

Una edición específica.

```sql
tournament_editions
--------------------
id UUID PK
tournament_id FK

name VARCHAR(100)
year INTEGER

host_country_id FK

start_date DATE
end_date DATE

status ENUM(
  'draft',
  'scheduled',
  'in_progress',
  'finished'
)

created_at
updated_at
```

Ejemplos:

* Mundial 2026
* Mundial 2030

---

### teams

```sql
teams
------
id UUID PK

country_id FK

name VARCHAR(100)
short_name VARCHAR(20)

fifa_code CHAR(3)

logo_url TEXT

is_active BOOLEAN

created_at
updated_at
```

---

### stages

Fases del torneo.

```sql
stages
-------
id UUID PK

edition_id FK

name VARCHAR(50)

type ENUM(
  'group',
  'round_of_32',
  'round_of_16',
  'quarter_final',
  'semi_final',
  'third_place',
  'final'
)

order_number INTEGER
```

---

### groups

```sql
groups
--------
id UUID PK

stage_id FK

name VARCHAR(10) -- A, B, C...

created_at
updated_at
```

---

### group_teams

Relación grupo-equipo.

```sql
group_teams
-------------
id UUID PK

group_id FK
team_id FK
```

---

### matches

La tabla más importante.

```sql
matches
---------
id UUID PK

edition_id FK
stage_id FK

group_id FK NULL

home_team_id FK
away_team_id FK

match_date TIMESTAMP

venue VARCHAR(255)

status ENUM(
  'scheduled',
  'live',
  'finished',
  'cancelled'
)

home_score INTEGER
away_score INTEGER

extra_time_home_score INTEGER NULL
extra_time_away_score INTEGER NULL

penalty_home_score INTEGER NULL
penalty_away_score INTEGER NULL

winner_team_id FK NULL

created_at
updated_at
```

---

### standings

Puedes recalcularla dinámicamente, pero para rendimiento suele guardarse.

```sql
standings
-----------
id UUID PK

edition_id FK
group_id FK
team_id FK

played INTEGER
wins INTEGER
draws INTEGER
losses INTEGER

goals_for INTEGER
goals_against INTEGER

goal_difference INTEGER

points INTEGER

position INTEGER

updated_at
```

---

## Eventos del partido (muy recomendable)

### match_events

```sql
match_events
--------------
id UUID PK

match_id FK

minute INTEGER

event_type ENUM(
  'goal',
  'own_goal',
  'yellow_card',
  'red_card',
  'substitution',
  'penalty_goal',
  'penalty_miss'
)

team_id FK

player_id FK NULL
related_player_id FK NULL

description TEXT
```

---

## Jugadores (opcional)

### players

```sql
players
---------
id UUID PK

team_id FK

first_name
last_name

birth_date

shirt_number

position ENUM(
 'GK',
 'DF',
 'MF',
 'FW'
)

photo_url
```

---

## Estadios (te falta)

### venues

```sql
venues
---------
id UUID PK

name VARCHAR(200)

country_id FK

city VARCHAR(100)

capacity INTEGER
```

Luego:

```sql
matches.venue_id FK
```

---

## Configuración (te falta)

### settings

```sql
settings
-----------
key VARCHAR(100) PK
value TEXT
```

Ejemplos:

```text
points_win = 3
points_draw = 1
points_loss = 0

max_substitutions = 5

current_edition = 2026
```

---

# Cosas que normalmente se olvidan

### 1. Usuarios y roles

```sql
users
roles
user_roles
```

Para administradores y operadores.

---

### 2. Predicciones / Quiniela

Si piensas monetizar:

```sql
predictions
```

---

### 3. Noticias

```sql
news
```

---

### 4. Patrocinadores

```sql
sponsors
```

---

### 5. Auditoría

```sql
audit_logs
```

Quién modificó un resultado y cuándo.

---

# Diseño final mínimo (MVP)

Si quieres salir rápido:

```text
countries
teams

tournaments
tournament_editions

stages
groups
group_teams

venues

matches

standings

settings
```

Y para una versión profesional agrega:

```text
players
match_events

users
roles

audit_logs

predictions
```

Este modelo soporta:

* Fase de grupos.
* Eliminación directa.
* Prórroga.
* Penales.
* Múltiples mundiales.
* Múltiples torneos.
* Estadísticas y rankings sin rediseñar la base de datos.

```