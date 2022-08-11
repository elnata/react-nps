require('dotenv').config();
const cors = require("cors")

const app = require('./app');

const SERVICE_PORT = 8000;
const REACT_APP_PORT = process.env.PORT || 3000;
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const whitelist = ["https://f04a-168-0-235-117.ngrok.io"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.listen(SERVICE_PORT, () => {
    console.log(`App listening on port ${SERVICE_PORT}!`);
    console.log(`Proxying requests to React app running on port ${REACT_APP_PORT}!`);
    console.log('\n');
    console.log(`Browse to ${REACT_APP_SERVER_URL} to run the sample...`);
});
