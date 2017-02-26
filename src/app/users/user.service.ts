import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UsersService{
    private usersUrl = "https://jsonplaceholder.typicode.com/users";

    constructor (private http: Http){}
    
    getUsers(): Observable<User[]>{
        return this.http.get(this.usersUrl)
                    .map((response:Response) => <User[]>response.json() )
    }
   
}


