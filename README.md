# Sensible Nearby

## TO RUN:

### Proxy Server

A proxy server is provided to manage calls to 3rd party APIs.

In order to run the proxy server, you must provide a `.env` file containing the relevant google places API_KEY. The file should exist at `./proxy-server/.env`, and should match the provided `./proxy-server/.env.template` template.

To start the server:

```
cd proxy-server
npm i
npm start
```

### React Server

A Development react server can be launched from the root of this project with the command:

```
npm i
npm run dev
```
