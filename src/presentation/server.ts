// src/presentation/server.ts
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRespositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRespositoryImpl( 
    new FileSystemDataSource()
    // new MongoLogDatasource()
    // new PostgresLogDatasource()
);

const logRepository2 = new LogRespositoryImpl(
    new MongoLogDatasource()
);
const logRepository3 = new LogRespositoryImpl(
    new PostgresLogDatasource()
);

const emailService = new EmailService();

export class Server {

    public static async start() {
        console.log('Server started...');

        // Mandar email
        // new SendEmailLogs(emailService, logRepository).execute([
        //     'webmasterp2m@gmail.com',
        //     'moctezuma.team@gmail.com'
        // ]);

        // const logs = await logRepository.getLogs(LogSeverityLevel.medium);
        // console.log(logs);

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         // const url = 'https://google.com';
        //         const url = 'http://localhost:3001';

        //         new CheckServiceMultiple(
        //             [logRepository, logRepository2, logRepository3],
        //             () => console.log(`Service ${url} is OK`),
        //             (error) => console.log(error)
        //         ).execute( url )
                
        //     }
        // );

    }

}
