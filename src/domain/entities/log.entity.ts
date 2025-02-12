// src/domain/entities/log.entity.ts
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high',
}

export interface logEntityOptions {
    message: string;
    level: LogSeverityLevel;
    origin: string;
    createdAt?: Date;
}

export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public origin: string;
    public createdAt: Date;

    constructor( options: logEntityOptions ) {
        const { message, level, origin, createdAt = new Date() } = options;

        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJson( json: string ): LogEntity {
        json = (json === '') ? '{}' : json;
        
        const { message, level, createdAt, origin } = JSON.parse(json);

        const log = new LogEntity({
            message,
            level,
            createdAt,
            origin,
        });

        return log;
    }

    static fromObject = ( object: { [key: string]: any } ): LogEntity => {

        const { message, level, createdAt, origin } = object;
        
        const log = new LogEntity({
            message,
            level: level,
            createdAt,
            origin,
        });

        return log;

    }

}