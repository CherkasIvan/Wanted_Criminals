import {
  Component,
  ViewEncapsulation,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { LoginModalService } from '../../services/login-service/login-service.service';

@Component({
  selector: 'fw-login-modal',
  templateUrl: 'login-modal.component.html',
  styleUrls: ['login-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginModalComponent implements OnInit, OnDestroy {
  @Input()
  public id: string;
  private element: any;

  constructor(private modalService: LoginModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'fw-login-modal') {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('login-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('login-modal-open');
  }
}
