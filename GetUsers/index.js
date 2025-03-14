const userDAO = require("../common/database/dao/userDAO");
const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/users", 
    async(req, res) => {
        req.context.log('Get all Users');
        try {
            const users = await userDAO.getUsers();
            res.json(users);
        } catch {
            res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
);

module.exports = createHandler(app);

// module.exports = async function (context, req) {
//     try {
//         const users = await userDAO.getUsers();        
//         context.res = {
//             body: users,
//             contentType: 'application/json'
//         };
//     } catch(err){
//         context.res = {
//             status: 500,
//             body: {
//                 message: "Internal Server Error"
//             },
//             contentType: 'application/json'
//         };
//     }
// }