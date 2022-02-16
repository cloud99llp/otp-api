const LoginMiddleware = require('./login.middleware');

exports.routesConfig = function (app) {

    app.post("/login", [
        LoginMiddleware.verifyUserCredentials,
        LoginMiddleware.callExternalApiToSendMessage,
        LoginMiddleware.sendLoginResponse
    ]);

    app.post("/verify_otp", [
        LoginMiddleware.verifyGeneratedOtpMatchesWithUser,
        LoginMiddleware.sendOtpLoginResponse
    ]);

};