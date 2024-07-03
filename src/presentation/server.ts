import {CronService} from "./cron/cron-service";
import {CheckService} from "../domanin/use-cases/checks/check.service";
import {LogRepositoryImpl} from "../infrastructure/repositories/log.repository.impl";
import {FileSystemDataSource} from "../infrastructure/datasources/file-system.datasource";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
);

export class Server {

    public static start() {
        console.log('Server started...');

        CronService.createJob('*/5 * * * * *', () => {
            // const url = 'https://www.google.com';
            const url = 'http://localhost:3000';
            new CheckService(
                fileSystemLogRepository,
                () => console.log(`Service ${url} is OK`),
                (error) => console.error(error)
            ).execute(url)
        });

    }

}