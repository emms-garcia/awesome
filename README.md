# awesome

**Work in Progress**

## Setup

### Backend

To setup the backend for development, in the repo root run:
```
docker-compose build
docker-compose up

make upgrade-db
```

### Frontend

To setup the frontend for development, inside `awesome-ui` run:
```
npm install
npm start
```

App should be accessible at: `http://localhost:3000/`.


## Notes

- If not using `docker-machine` (or the assigned IP changes) the `baseUrl` in `awesome/awesome-ui/src/utils/api.js` should change accordingly.
