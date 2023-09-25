import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    listTodos() {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() body: CreateTodoDto) {
        return this.todosService.create(body.content);
    }

    @Get('/:id')
    getTodo(@Param('id') id: string) {
        return this.todosService.findOne(+id);
    }
}
