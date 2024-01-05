import { APP_BASE_HREF } from '@angular/common';
import * as express from 'express';
import path from 'path';
import router from './server/api.routing';

const distFolder = path.join(process.cwd(), 'dist', 'pardu');
const app = express();
const port = process.env['PORT'] || 3000;

app.use('/api', router);

app.get(
  '*.*',
  express.static(distFolder, {
    maxAge: '1y',
  }),
);

app.get('*', (request, response) => {
  response.sendFile(path.join(distFolder, 'index.html'), {
    //@ts-ignore
    req: request,
    res: response,
    providers: [
      {
        provide: APP_BASE_HREF,
        useValue: request.baseUrl,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
