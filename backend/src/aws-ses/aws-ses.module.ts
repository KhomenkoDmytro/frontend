import { Module } from '@nestjs/common';
import { AwsSesService } from './aws-ses.service';


@Module({
  providers: [AwsSesService],
})
export class AwsSesModule {}
