import { Component, ViewChild } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent {

  @ViewChild('carrousel', {read: DragScrollComponent}) carrousel?: DragScrollComponent;

  moveLeft() {
    this.carrousel?.moveLeft();
  }

  moveRight() {
    this.carrousel?.moveRight();
  }

}
