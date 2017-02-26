import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Post} from './post';

@Injectable()
export class PostService{
    private posts_url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http:Http){
    }

    getPosts(){
        return this._http.get(this.posts_url)
                    .map(res => res.json());                
    }

    getComments(post_id:number){
        return this._http.get(
            this.posts_url + "/" + post_id + "/comments"
        ).map(res => res.json());
    }

    getUserPosts(user){
        return this._http.get(
            this.posts_url + "?userId=" + user.userId
        ).map(response => response.json());
    }
}