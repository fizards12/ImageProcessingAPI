import express from 'express';
import call from './methodCallback';
import checkOrigin from './Middleware/checkOrigin';
import checkResized from './Middleware/checkResized';

const app = express();
const port = 5000;

app.use(express.static('src'));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

app.get('/image', checkOrigin, checkResized, call);

export default app;
