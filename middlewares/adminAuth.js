function admin_auth(req, res, next) {
    if (req.session.user != undefined) {
        next();
    } else {
        res.redirect("/login");
    }
}

module.exports = admin_auth;