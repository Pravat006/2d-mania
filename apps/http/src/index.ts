import  express from 'express';
import { router } from './routes/v0/index';


import client from "@repo/db/src/index";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


app.use("/api/v0",router);
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
}
);

app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running on port : http://localhost:${process.env.PORT || 8000}`);
  
});


