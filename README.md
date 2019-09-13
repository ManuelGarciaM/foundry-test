## Foundry Demo

The main application is in this repository, with install instructions below. It was created using MEAN.js which can be found [here](https://meanjs.org/). The additions I made were relatively quick and dirty, and the rest of the boilerplate can be ignored. To give you a quick overview of where the guts are:

-`modules/core/client/controllers/home.client.controller.js` //For the client-side display of the map marker
-`modules/core/server/controllers/core.server.controller.js` //For the API endpoint for `/poi`
-`modules/core/server/routes/core.server.routes.js` //For defining the route for the endpoint

I used Leaflet to display the map/marker. Tested in Chrome and Firefox - there is an issue with the marker not showing until you mouseover the map in Firefox.

And finally: pseudocode challenges (1 & 2) are located in the directory `/pseudo`.

### Install & Run Instructions
 However, to run MEAN.js requires:
- Node.js
- npm
- mongoDB
- bower
- gulp

After these are all installed, from the project directory run:
```
$ npm install
```

And to run the application:
```
$ npm start
```

In a browser, then go to [http://localhost:3000](http://localhost:3000)


### License
[The MIT License](LICENSE.md)
