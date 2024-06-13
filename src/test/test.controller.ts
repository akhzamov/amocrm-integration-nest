import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    getTest() {
        return { message: 'This is a test response from your Nest.js app on Vercel!' };
    }
}