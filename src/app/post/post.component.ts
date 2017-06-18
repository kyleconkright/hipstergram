import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  private testPosts: Array<any> = [1, .10];
  @Input() post: String

  constructor() { }

  ngOnInit() {

  }

}
