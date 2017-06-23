import { Routes } from "@angular/router/router";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./posts/post/post.component";

export const appRoutes: Routes = [
    {
        path: 'post/:id',
        component: PostComponent
    },
    {
        path: '',
        component: PostsComponent
    }
]