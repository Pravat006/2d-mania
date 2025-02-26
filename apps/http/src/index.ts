import  express from 'express';
import { router } from './routes/v0/index';




const app = express();

app.use("/api/v0",router);
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
}
);

app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is running on port : http://localhost:${process.env.PORT || 8000}`);
  
});


