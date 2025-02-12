// src/domain/use-cases/checks/check-service.ts
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceMultipleUseCase {
    execute( url: string ): Promise<boolean>;
}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckServiceMultiple implements CheckServiceMultipleUseCase {

    constructor( 
        private readonly logRepository: LogRepository[],
        private readonly successCallback: SuccessCallback, 
        private readonly errorCallback: ErrorCallback 
    ) {}

    private callLogs( log: LogEntity ) {
        this.logRepository.forEach( logRepository => logRepository.saveLog( log ) );
    }
  
    public async execute( url: string ): Promise<boolean> {
        
        try {
            const req = await fetch(url);
            if ( !req.ok ) {
                throw new Error(`Error on check service ${url}`);
            }


            const log = new LogEntity({
                message: `Service ${url} working`,
                level: LogSeverityLevel.low,
                origin: 'src/domain/use-cases/checks/check-service.ts',
            });

            
            // Esta es mi solucion
            // this.logRepository.forEach( repo => repo.saveLog( log ) );
            
            // Esta es la del profe
            this.callLogs( log );
            
            this.successCallback && this.successCallback();

            return true;

        } catch (error) {

            const errorMessage = `${url} not working: ${error}`;
            const log = new LogEntity({
                message: errorMessage,
                level: LogSeverityLevel.high,
                origin: 'src/domain/use-cases/checks/check-service.ts',
            });

            
            // Esta es mi solucion
            // this.logRepository.forEach( repo => repo.saveLog( log ) );
            
            // Esta es la del profe
            this.callLogs( log );
            
            this.errorCallback && this.errorCallback( errorMessage );
            return false
            
        }

    }

}