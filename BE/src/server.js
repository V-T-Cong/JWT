require('dotenv')

import express from 'express';
import initWebroutes from './routes/web';
import configViewEngine from './config/viewEngine';

const app = express();
const PORT = process.env.PORT || 8080;

// 
configViewEngine(app);

initWebroutes(app);

app.listen(PORT, () => {
    console.log("App is running on port::",+PORT);
});