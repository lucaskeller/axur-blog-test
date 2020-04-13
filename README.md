# Axut blog test


Para rodar:

```bash
yarn install
yarn start

```

## Directory structure

Main files and directories of the application

```
frontend
├─ config
├─ public          # Public assets (e.g. images)
├─ scripts
└─ src
   ├─ assets       # Images, videos, etc.
   ├─ pages        # Each page with the self contained logic
   ├─ redux
   │  ├─ api       # code that intereacts with the backend
   │  ├─ modules   # redux reducers, constants and action creators
   │  ├─ sagas     # redux sagas
   │  └─ store.js  # where the redux store is created and configured
   ├─ routes       # react-router configuration
   ├─ shared       # utilities
   ├─ config.js
   ├─ history.js
   ├─ index.js     # where the react app is mounted
   └─ yarn.lock
```
