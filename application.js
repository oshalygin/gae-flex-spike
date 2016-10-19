/* eslint-disable no-console */
"use strict";
import express from "express";
import stormpath from "express-stormpath";
import colors from "colors"; //eslint-disable-line no-unused-vars
import {
    STORMPATH_APPLICATION_HREF,
    STORMPATH_CLIENT_APIKEY_ID,
    STORMPATH_CLIENT_APIKEY_SECRET
} from "/utilities/configurationKeys";


const port = process.env.PORT || 9999; //eslint-disable-line no-process-env
let application = express();

application.use(stormpath.init(application, {
    apiKey: {
        id: STORMPATH_CLIENT_APIKEY_ID,
        secret: STORMPATH_CLIENT_APIKEY_SECRET
    },
    application: {
        href: STORMPATH_APPLICATION_HREF
    },
    website: true
}));

application.get("*", (request, response) => {
    response.status(200).json({
        name: "gae-flex-spike",
        version: 1.0,
        description: "Simple Google App Engine Flexible environment application"
    });
});

application.on("stormpath.ready", () => {

    application.listen(port, (error) => {
        if (!!error) {
            console.log(error.bold.red);
        }
        console.log(`Application running on http://localhost:${port}`.green);
    });

});