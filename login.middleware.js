
const defaultSampleOtpToVerify = 354638;

module.exports.verifyUserCredentials = async (req, res, next) => {
    try {
        if(req.body.username === "Chandrika" && req.body.password === "AtlasSystems")
            return next();
        return res.status(200).send({
            status: "Failure",
            message: "Incorrect username and password"
        });
    } catch (error) {
        return res.sendStatus(400);
    }
}

module.exports.callExternalApiToSendMessage = async (req, res, next) => {
    try {
        //TODO send sms to user mobile code
        //Save OTP to DB
        return next();
    } catch (error) {
        return res.sendStatus(400);
    }
}

module.exports.sendLoginResponse = async (req, res, next) => {
    return res.status(200).send({
        status: "Success"
    });
}

module.exports.verifyGeneratedOtpMatchesWithUser = async (req, res, next) => {
    try {
        if(parseInt(req.body.otp) === defaultSampleOtpToVerify)
            return next();
        return res.status(200).send({
            status: "Failure",
            message: "Incorrect otp"
        });
    } catch (error) {
        return res.sendStatus(400);
    }
}

module.exports.sendOtpLoginResponse = async (req, res, next) => {
    return res.status(200).send({
        status: "Success",
        jwtToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    });
}