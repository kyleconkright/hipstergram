import { Routes } from "@angular/router/router";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./posts/post/post.component";
import { PostPreviewComponent } from "./posts/post-preview/post-preview.component";

export const appRoutes: Routes = [
    {
        path: '',
        component: PostsComponent,
        // pathMatch: 'full'
    },
    {
        path: ':id',
        component: PostPreviewComponent,
        outlet: 'post'
    },
    {
        path: 'post/:id',
        component: PostComponent
    },
    { path: '**', redirectTo: '' }

]