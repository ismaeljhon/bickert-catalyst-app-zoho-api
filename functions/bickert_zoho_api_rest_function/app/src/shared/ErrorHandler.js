module.exports = {
    send(res, error) {
        res.status(500);
        res.send(error);
    }
}