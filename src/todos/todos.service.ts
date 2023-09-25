import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
    todosRepo: TodosRepository;

    constructor() {
        this.todosRepo = new TodosRepository();
    }

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
