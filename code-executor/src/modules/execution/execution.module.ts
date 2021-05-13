import { Module } from '@nestjs/common';
import { ExecutionController } from './execution.controller';
import { ExecutionService } from './execution.service';

@Module({
  imports: [],
  controllers: [ExecutionController],
  providers: [ExecutionService]
})
export class ExecutionModule {}
