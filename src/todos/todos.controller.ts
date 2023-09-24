import { Controller, Get, Post } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    @Get()
    listTodos() {
        return 'list todos';
    }

    @Post()
    createTodo() {
        return 'create todo';
    }

    @Get('/:id')
    getTodo() {
        return 'get todo';
    }
}
