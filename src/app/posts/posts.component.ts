import { Component } from '@angular/core';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { AppService } from "app/app.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  constructor(
    private appService: AppService
  ) { }
  
  showModal = true;
  private testPosts = this.appService.testPosts


  hideModal(val) {
    this.showModal = val
  }

}
