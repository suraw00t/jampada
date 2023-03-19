# jampada project
** Initial Project **
- 1. python3 -m venv backend/venv and activate the python virtual environment
- 2. cd backend/
- 3. poetry install
- 4. cd to frontend
- 5. npm install
# 311-web
##240-311 Web Tech

Tree
-------
jampada
├── backend
│   ├── app
│   │   ├── api
│   │   │   ├── errors
│   │   │   │   ├── http_error.py
│   │   │   │   ├── __init__.py
│   │   │   │   └── validation_error.py
│   │   │   ├── __init__.py
│   │   │   └── v1
│   │   │       ├── __init__.py
│   │   │       └── routes
│   │   │           ├── api.py
│   │   │           ├── __init__.py
│   │   │           ├── sports.py
│   │   │           ├── topics.py
│   │   │           └── users.py
│   │   ├── core
│   │   │   ├── config.py
│   │   │   ├── deps.py
│   │   │   ├── __init__.py
│   │   │   ├── logging.py
│   │   │   ├── oauth2.py
│   │   │   ├── rounding.py
│   │   │   ├── security.py
│   │   │   └── settings
│   │   │       ├── app.py
│   │   │       ├── base.py
│   │   │       ├── development.py
│   │   │       ├── __init__.py
│   │   │       ├── production.py
│   │   │       └── test.py
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models
│   │   │   ├── __init__.py
│   │   │   ├── sports.py
│   │   │   ├── topics.py
│   │   │   └── users.py
│   │   ├── schemas
│   │   │   ├── __init__.py
│   │   │   ├── items.py
│   │   │   ├── sports.py
│   │   │   ├── tokens.py
│   │   │   ├── topics.py
│   │   │   └── users.py
│   │   └── static
│   │       └── images
│   │           └── images.jpg
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── jampada.conf.sample
│   ├── poetry.lock
│   ├── pyproject.toml
│   └── scripts
│       ├── run-api
│       └── run-api-win.ps1
├── frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── component
│       │   ├── Input.js
│       │   ├── Login.js
│       │   ├── Modal.js
│       │   ├── Room.css
│       │   ├── Room.js
│       │   └── Show.js
│       ├── images
│       │   ├── bad.png
│       │   ├── bball.png
│       │   ├── fball.png
│       │   ├── log1.png
│       │   ├── log2.png
│       │   ├── pong.png
│       │   ├── psu.png
│       │   ├── ten.png
│       │   └── vball.png
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── page
│       │   ├── About.js
│       │   ├── Bad.js
│       │   ├── Bball.js
│       │   ├── Fball.js
│       │   ├── Home.css
│       │   ├── Home.js
│       │   ├── Navbar.css
│       │   ├── Navbar.js
│       │   ├── Pong.js
│       │   ├── Register.js
│       │   ├── Signin.js
│       │   ├── Ten.js
│       │   └── Vball.js
│       ├── redux
│       │   ├── actions
│       │   │   ├── authAction.js
│       │   │   └── topicAction.js
│       │   ├── reducers
│       │   │   ├── authReducer.js
│       │   │   ├── index.js
│       │   │   └── topicReducer.js
│       │   └── store.js
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       └── utils
│           └── fetch.js
├── nginx
│   └── nginx.conf
├── README.md
└── scripts
    ├── run-backend.sh
    └── run-frontend.sh

