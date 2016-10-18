/* eslint-disable no-console */
"use strict";
import express from "express";
import colors from "colors"; //eslint-disable-line no-unused-vars

const port = process.env.PORT || 9999; //eslint-disable-line no-process-env
let application = express();



application.get("*", (request, response) => {
    response.status(200).json({
        name: "gae-flex-spike",
        version: 1.0,
        description: "Simple Google App Engine Flexible environment application"
    });
});

application.listen(port, (error) => {
    if (!!error) {
        console.log(error.bold.red);
    }
    console.log(`Application running on http://localhost:${port}`.green);
});
