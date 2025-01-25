import { ServerResponse } from 'http';

export const handleError = (res: ServerResponse, error: Error) => {
  console.error('Error:', error.message);

  res.writeHead(400, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ success: false, message: error.message }));
};
