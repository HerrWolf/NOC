import {CronService} from "./cron/cron-service";
import {CheckService} from "../domanin/use-cases/checks/check.service";

export class Server {

    public static start() {
        console.log('Server started...');

        CronService.createJob('*/5 * * * * *', () => {
            const url = 'https://www.google.com';
            // const url = 'http://localhost:3000';
            new CheckService(
                () => console.log(`Service ${url} is OK`),
                (error) => console.error(error)
            ).execute(url)
        });

    }

}