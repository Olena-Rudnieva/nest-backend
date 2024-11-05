import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStart(): string {
    return 'This is Products App!';
  }
}
