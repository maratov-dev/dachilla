import { injectable } from 'inversify';
import * as dotenv from 'dotenv';

@injectable()
export class Config {
    constructor() {
        dotenv.config();
    }
}
