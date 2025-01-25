import { IncomingMessage, ServerResponse } from 'http';
import { createVisit } from '../services/visits';

export const visitController = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'POST' && req.url === '/visits') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const visitData = JSON.parse(body);

        const visitId = await createVisit({
          stadiumId: visitData.stadiumId,
          visitDate: visitData.visitDate || new Date(),
          createBy: visitData.createBy,
          createDate: new Date(),
          modifyBy: null,
          modifyDate: null,
          isDeleted: false,
        });

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, visitId }));
      } catch (error) {
        console.log('test')
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
};
