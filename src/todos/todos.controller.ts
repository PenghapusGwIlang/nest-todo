import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
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
    async getTodo(@Param('id') id: string) {
        const todo = await this.todosService.findOne(+id);

        if (!todo) {
            throw new NotFoundException('Todo not found');
        }

        return todo;
    }
}
