const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/ibf2021-d21'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/ibf2021-d21/index.html'));});
app.listen(process.env.PORT || 8080);
