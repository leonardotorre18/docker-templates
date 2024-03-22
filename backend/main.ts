import express, { type Express, type Response, type Request} from 'express'

const PORT: number = 3000

const server: Express = express()

server.get('/', (req: Request, res: Response) => res.json({ message: 'Hello World!!!' }))

server.listen(PORT, () => console.log('Server is running on port ' + PORT))