import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { PostsComponent } from './posts/posts.component';
import {SpinnerComponent} from './shared/spinner.component';
import {UsersComponent} from './users/users.component';
import {PaginationComponent} from './shared/pagination.component';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostsComponent,
    SpinnerComponent,
    UsersComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2PaginationModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
