# Relay Vite Example

This is an example of how the Relay Dev extension works with webpack but not Vite.

### Run graphql server

The examples use `graphql-client-example-server`, install and run like this:

```
npm install -g graphql-client-example-server && graphql-client-example-server
```

You will now have a GraphQL server running at https://localhost:4000.

### Run clients

`yarn` will install all dependencies.

`yarn start-vite` will build and start the app in Vite mode. (The relay dev extension doesn't work)

`yarn start-webpack` will build and start the app in Webpack mode. (The relay dev extension does work)

The app is available at https://localhost:9000.
