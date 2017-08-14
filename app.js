const express = require("express");
const moment = require("moment");
const path = require("path");

const app = express();

app.get("/:date", (req, res) => {
    let date = req.params.date
    let stamp = {"unix" : null, "natural": null};
    if(moment.unix(date).isValid()){
        stamp.unix = date;
        stamp.natural = moment.unix(date).format("MMMM DD, YYYY")

    } else if(moment(date).isValid()){
        stamp.unix = moment(date).format("X");
        stamp.natural = date;
    } 
    res.send(stamp);

});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(process.env.PORT || 8080, () => console.log("app is go"));