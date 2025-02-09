// src/presentation/server.ts
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRespositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRespositoryImpl( new FileSystemDataSource() );
const emailService = new EmailService();

export class Server {

    public static start() {
        console.log('Server started...');

        // Mandar email
        new SendEmailLogs(emailService, fileSystemLogRepository).execute([
            'webmasterp2m@gmail.com',
            'moctezuma.team@gmail.com'
        ]);

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                // const url = 'http://localhost:3001';

                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`Service ${url} is OK`),
                    (error) => console.log(error)
                ).execute( url )
                
            }
        );

    }

}
