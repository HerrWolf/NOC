// src/presentation/server.ts
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {

    public static start() {
        console.log('Server started...');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                // const url = 'http://localhost:3001';

                new CheckService(
                    () => console.log(`Service ${url} is OK`),
                    (error) => console.log(error)
                ).execute( url )
                
            }
        );

    }

}
