import express from 'express';
import cors from 'cors'
import { Deta } from 'deta'

import profileRoutes from './routes/profile.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.use('/profile', profileRoutes);

app.get('/', (res, req, ) => {
    res.send('welcome to test app')
})

const DetaKey = 'a0dqo7y7_XkymC8Cm2bhvvmEMKT5iF5puUXefSaZa';
const Deta_Id = 'a0dqo7y7';

const PORT = process.env.PORT || 5000

const deta = Deta(DetaKey);
export const db = deta.Base('test_App')
    // .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
    // .catch((err) => console.log(err))


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
