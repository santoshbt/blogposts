import {Component, OnInit,Input} from '@angular/core';
import {Observable} from 'rxjs/rx';
import {Post} from './post';
import {PostService} from './post.service';
import {SpinnerComponent} from '../shared/spinner.component';
import {UsersComponent} from '../users/users.component';
import {UsersService} from '../users/user.service';

@Component({
    moduleId: module.id,
    selector: 'posts',    
    providers: [PostService, UsersService],
    templateUrl: 'posts.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
        .panel-default { 
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-color: #dddddd !important;
        }
        .panel-heading {
            /*/border-bottom: 1px solid rgba(0, 0, 0, 0);*/
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-color: #ecf0f1;             
            background-color: #ecf0f1;
        }     
    `]
    
})
export class PostsComponent implements OnInit{
    posts;
    errorMessage : string;
    mode = "Observable";
    isPostLoading = true;
    isCommentLoading;
    currentPost;
    comments;
    users;
    // @Input('data') posts: this.getPosts();
    page: number = 1;

    constructor(
        private postService:PostService,
        private usersService:UsersService
    ) {}

    ngOnInit(){
        
        let timer = Observable.timer(0);
        timer.subscribe(() => {                                    
                                    this.getPosts(),
                                    this.getUsers()                                                                      
                              }
                        );
                        
    }
   
    getPosts(){
        this.postService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error,
                () => {this.isPostLoading = false;}
            );
    }

    selectPost(post){
        this.currentPost = post;
        this.isCommentLoading = true;
        this.postService.getComments(post.id)       
        .subscribe(
            comments => this.currentPost.comments = comments,
            null,
            () => {this.isCommentLoading = false;}
        );
    }

    getUsers(){
        this.usersService.getUsers()
            .subscribe(
                users => this.users = users
            );
    }

    getUserPosts(user){
        this.isPostLoading = true;
        console.log(user); 
        this.postService.getUserPosts(user)
            .subscribe(
                posts => this.posts = posts,
                error => this.errorMessage = <any>error,
                () => {this.isPostLoading = false; }
            )
    }

}
