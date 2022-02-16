const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
require('dotenv').config();

const LoginRoutes = require('./login.routes');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *");
    res.header('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        return res.status(200).send();
    } else {
        return next();
    }
});

app.use(cookieParser());
app.use(express.json());

LoginRoutes.routesConfig(app);

let port = process.env.PORT || 3900
app.listen(port, function(){
    console.log("Server started at port: " + port);
});
