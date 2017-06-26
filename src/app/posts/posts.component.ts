import { Component, OnInit } from '@angular/core';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { AppService } from "app/app.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }
  
  showModal = true;

  ngOnInit() {
    
  }

  hideModal(val) {
    this.showModal = val
  }

}
