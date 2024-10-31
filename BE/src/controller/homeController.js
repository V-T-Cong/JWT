const handleHelloWorld = (req, res) => {
    const name = 'JWT';
    return res.render("home.ejs", {name});
}

const handleLogin = (req, res) => {
    return res.render("user.ejs");
}

module.exports = {
    handleHelloWorld,
    handleLogin
}