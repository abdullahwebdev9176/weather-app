const express = require('express');
const app = express();
const color = require('colors');
const path = require('path');
const routes = require('./routes/index');
const hbs = require('hbs');
const dotenv = require('dotenv');
const expHbs = require('express-handlebars')

dotenv.config();

const PORT = process.env.PORT || 9000;

const staticPath = path.join(__dirname, 'public')
const partialsPath = path.join(__dirname, 'views/partials')
const layoutsDir = path.join(__dirname, 'views/layouts')


app.use(express.json())
app.use(express.static(staticPath))

app.engine('hbs', expHbs.engine({
    extname: 'hbs',
    partialsDir: partialsPath,
    defaultLayout: 'layout',
    layoutsDir: layoutsDir
}))

app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.use('/', routes);



// Server
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`.bgMagenta.bgWhite);
});
