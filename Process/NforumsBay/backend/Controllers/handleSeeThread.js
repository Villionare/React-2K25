const handleSeeThread = (req, res) => {

    if (req.session.user) {
        res.send("this threads page is opened by the admin");
    } else {

        console.log(req.session.user ?? null);

        res.send("this threads page is opened by the anoynymous");
    }

}

export default handleSeeThread