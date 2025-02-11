import { app } from "../app";

const port = 5173;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})