import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Post } from 'app/posts/post/post';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService {

    public posts: Post[];
    private post: Post = new Post()

    constructor(
        private http: Http,
    ) {
        this.getPosts();
    }

    getPosts() {
        this.http.get('http://localhost:8080/posts')
            .map((res) => res.json())
            .subscribe(res => this.posts = res.map(res => this.post.fromApi(res)))
    }

    getTestPost() {
        this.http.get('http://localhost:8080/post')
            .map((res) => res.json())
    }
    
}

