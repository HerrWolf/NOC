import { LogModel } from '../../data/mongo';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


export class MongoLogDatasource implements LogDatasource {
    
    async saveLog(log: LogEntity): Promise<void> {

        const newLog = await LogModel.create(log);
        await newLog.save();
        console.log(`Mongo log saved: ${newLog.id}`);

    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const logs = await LogModel.find({ level: severityLevel });

        // Estas 2 lineas de codigo son equivalentes
        // return logs.map( mongoLog => LogEntity.fromObject(mongoLog) );
        return logs.map( LogEntity.fromObject );

    }

}