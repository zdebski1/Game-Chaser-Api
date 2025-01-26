"use strict";
// import jwt from 'jsonwebtoken';
// const authenticateUser = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1]; // Assuming token is passed as Bearer <token>
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }
//   try {
//     const decoded = jwt.verify(token, 'your-secret-key');
//     req.user = decoded; // Assuming the user ID is in the token payload
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// };
// export default authenticateUser;
//# sourceMappingURL=authentication.js.map