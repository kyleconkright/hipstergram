import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from "@angular/router";
import { Post } from "app/posts/post/post";
import { AppService } from "app/app.service";

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
  animations: [
    trigger('loadingState', [
      transition(':enter', [   // :leave is alias to '* => void'
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ],
  host: { '[@loadingState]': '' }
})
export class PostPreviewComponent implements OnInit {

 private post: Post = new Post()

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.post = this.appService.posts.find(res => res.id === params.id)
      console.log(this.post)
    })
  }

}