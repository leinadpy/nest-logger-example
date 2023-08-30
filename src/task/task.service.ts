import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class TaskService {
  private readonly logger: Logger = new Logger(TaskService.name);

  someMethod() {
    this.logger.log('This is a log message.');
    this.logger.debug('Debugging some process...');
    this.logger.warn(' Warning: Something seems off!');
    this.logger.error('Oops! An error occurred.');
  }
}
