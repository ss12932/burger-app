const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('expres-handlebars');

const routes = require('./routes/handlers');

const PORT = process.env.PORT || 9001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Configure Express Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', routes);

//start server
app.listen(PORT, () => {
  console.log(`Server is starting at PORT ${PORT}`);
});
