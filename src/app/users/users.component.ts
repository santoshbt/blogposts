import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/rx';
import {User} from './user'; 
import {UsersService} from './user.service';

@Component({
    moduleId: module.id,
    selector: 'users',
    template: `  `
})

export class UsersComponent implements OnInit{
    users : User[];

    constructor(private usersService: UsersService ){}

    ngOnInit(){
        this.getUsers();
    }

    getUsers(){
        this.usersService.getUsers()
            .subscribe(
                users => this.users = users
            );
    }

}