// // index.js
// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use('/auth', authRoutes);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// // prisma.js
// const { PrismaClient } = require('../../generated/prisma/client'); 
// const prisma = new PrismaClient();
// module.exports = prisma;


// // authController.js
// const prisma = require('../database/prisma'); 
// const bcrypt = require('bcrypt'); 
// const jwt = require('jsonwebtoken'); 

// const register = async (req, res) => {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10); 
//     const user = await prisma.user.create({
//         data: {
//             username,
//             email,
//             password: hashedPassword,
//         },
//     });
//     res.status(201).json({ id: user.id, username: user.username, email: user.email });
// };

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
// };

// module.exports = {
//     register,
//     login
// };


// // authMiddleware.js
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const encryptPassword = async (req, res, next) => {
//     try {
//         req.body.password = await bcrypt.hash(req.body.password, 10);
//         next();
//     } catch (error) {
//         return serverErrorResponse(error, res);
//     }
// };

// const verifyToken = async (req, res, next) => {
//     try {
//         const authorization = req.header("Authorization");
//         if (!authorization) {
//             return res.status(401).json(defaultResponse(401, false, "Token invalid"));
//         }

//         const token = authorization.split(" ")[1];
//         const { id } = jwt.verify(token, process.env.JWT_SECRET);

//         const user = await User.findUnique({ where: { id } }); 
//         if (!user) {
//             return res.status(404).json(defaultResponse(404, false, "User not registered"));
//         }

//         req.body.user_id = id; 
//         next();
//     } catch (error) {
//         return serverErrorResponse(error, res);
//     }
// };

// module.exports = { encryptPassword, verifyToken };



// // authRoutes.js
// const express = require('express');
// const { register, login } = require('../controllers/authController');
// const { encryptPassword } = require('../middleware/authMiddleware'); 

// const router = express.Router();

// router.post('/register', encryptPassword, register);
// router.post('/login', login);

// module.exports = router;
