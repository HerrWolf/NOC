import { PrismaClient, ServerityLevel } from "@prisma/client";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

const prisma = new PrismaClient();

const severityEnum = {
    low: ServerityLevel.LOW,
    medium: ServerityLevel.MEDIUM,
    high: ServerityLevel.HIGH
}

export class PostgresLogDatasource implements LogDatasource {

    async saveLog(log: LogEntity): Promise<void> {

        const level = severityEnum[log.level];

        const newLog = await prisma.logModel.create({
            data: {
                ...log,
                level
            }
        });
        console.log(`Postgres log saved: ${newLog.id}`);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        
        const level = severityEnum[severityLevel];

        const logs = await prisma.logModel.findMany({
            where: {
                level
            }
        });

        return logs.map( LogEntity.fromObject );
    }

}