import { Injectable } from '@angular/core';
import { Post } from "app/posts/post/post";

@Injectable()

export class AppService {
    constructor() {}

    testPosts: Post[] = [
        { id: '1', name: 'kyle c' },
        { id: '2', name: 'dan' },
        { id: '3', name: 'kyle h' },
        { id: '4', name: 'kyle c' },
        { id: '5', name: 'dan' },
        { id: '6', name: 'kyle h' },
        { id: '7', name: 'kyle c' },
        { id: '8', name: 'dan' },
        { id: '9', name: 'kyle h' },
    ]
    
}

