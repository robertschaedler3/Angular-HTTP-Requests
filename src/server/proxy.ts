import { Application, Request, Response, NextFunction, response } from 'express';
import * as express from 'express'
import * as https from 'https';

const app: Application = express();
const _port = 5001;
const _app_folder = '/dist';

app.get('/proxy', (req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    https.get('<SOME-EXTERNAL-URL>', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
            res.status(200).send(data);
        });
    });
});

app.listen(_port, () => console.log('running on port ' + _port))