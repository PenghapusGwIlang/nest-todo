import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
    constructor(private readonly todosRepo: TodosRepository) {}

    findAll() {
        return this.todosRepo.findAll();
    }

    findOne(id: number) {
        return this.todosRepo.findOne(id);
    }

    create(todo: string) {
        return this.todosRepo.create(todo);
    }
}
