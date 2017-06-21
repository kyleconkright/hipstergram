import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private testPosts:Array<any> = new Array(45)
  showModal = true;

  hideModal(val) {
    this.showModal = val
  }

}
