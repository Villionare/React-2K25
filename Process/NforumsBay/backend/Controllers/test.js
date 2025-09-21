const test = (req, res) => {
    console.log(req.params.id);
    res.send('<b><font color="red">message": "server is running</font></b>');
}

export default test;