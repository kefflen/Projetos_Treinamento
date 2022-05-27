import dotenv from 'dotenv'
dotenv.config()
import app from "./config/app";
const PORT = process.env.PORT
if (!PORT) throw Error("The env file have not PORT variable")



app.listen(PORT, () => console.log("Running at: http://localhost:"+PORT))

