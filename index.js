const express = require('express');
const app = express();
const port = 3000;

// Endpoint for getting information
// app.get('/info', (req, res) => {
//   res.json({
//       message: 'This is your microservice information endpoint',
//           timestamp: new Date()
//             });
//             });
//
//             // Health check endpoint
//             app.get('/health', (req, res) => {
//               res.json({
//                   status: 'OK',
//                       timestamp: new Date()
//                         });
//                         });
//
//                         // Start the server
//                         app.listen(port, () => {
//                           console.log(`Microservice is running on http://localhost:${port}`);
//                           });
//
