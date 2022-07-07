// Importing dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  defaultLayout: 'main',
});

// Importing files
const routes = require('./routes/handlers');

const PORT = process.env.PORT || 9001;
const app = express();

app.use(express.static(process.cwd() + '/public')); // serving static files

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Configure Express Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is starting at PORT ${PORT}`);
});
