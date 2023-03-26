import { Request, Response } from 'express';
export class HomeController {
    home = (req: Request, res: Response) => {
        return res
            .status(200)
            .send(` you're at home 🏠`);
    };
}