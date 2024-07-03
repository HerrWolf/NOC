import { LogEntity, LogSeverityLevel } from "../../domanin/entities/log.entity";
import {LogRepository} from "../../domanin/repository/log.repository";
import {LogDataSource} from "../../domanin/datasources/log.datasource";

export class LogRepositoryImpl extends LogRepository {

    constructor(
        private readonly logDataSource: LogDataSource
    ) {
        super();
    }

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDataSource.saveLog(log);
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDataSource.getLogs(severityLevel);
    }



}