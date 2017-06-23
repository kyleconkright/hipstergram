import { Component, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  // private testPosts: Array<any> = new Array(45)
  showModal = true;

  testPosts = [
    {id: 1, name: 'kyle c'},
    {id: 2, name: 'dan'},
    {id: 3, name: 'kyle h'},
    {id: 4, name: 'kyle c'},
    {id: 5, name: 'dan'},
    {id: 6, name: 'kyle h'},
    {id: 7, name: 'kyle c'},
    {id: 8, name: 'dan'},
    {id: 9, name: 'kyle h'},
  ]

  constructor() { }

  ngOnInit() {
  }

  hideModal(val) {
    this.showModal = val
  }

}
