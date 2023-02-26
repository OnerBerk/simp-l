import * as http from 'http';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = 8082 || process.env.PORT;
export const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            data: 'IT Works!',
        }),
    );
});
server.listen(PORT, () => {
    console.log(`Simp'L server is running on ${PORT}`);
});