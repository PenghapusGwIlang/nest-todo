import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Controller('todos')
export class TodosController {
    @Get()
    listTodos() {
        return 'list todos';
    }

    @Post()
    createTodo(@Body() body: CreateTodoDto) {
        return body;
    }

    @Get('/:id')
    getTodo(@Param('id') id: string) {
        return `get todo ${id}`;
    }
}
