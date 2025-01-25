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

        if (!visitData.stadiumid || !visitData.createby) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({ success: false, message: 'stadiumid and createby are required.' })
          );
          return;
        }
        const visitId = await createVisit(
          {
            stadiumid: visitData.stadiumid,
            visitdate: visitData.visitdate || new Date(),
            createby: visitData.createby,
            createdate: new Date(),
            modifyby: null,
            modifydate: null,
            isdeleted: false
          },
          { stadiumid: visitData.stadiumid }
        );

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, visitId }));
      } catch (error) {
        console.error('Error creating visit:', error);

        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      }
    });

    req.on('error', (error) => {
      console.error('Request error:', error);

      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, message: 'Not Found' }));
  }
};
