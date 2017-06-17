import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':leave', [   // :leave is alias to '* => void'
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ],
  host: { '[@fadeInOut]': '' }
})

export class ModalComponent implements OnInit {

  constructor() { }

  @Output() toggleModal = new EventEmitter;
  private showModal: boolean

  ngOnInit() {
  }

  hideModal() {
    this.toggleModal.emit(false)
  }

}
