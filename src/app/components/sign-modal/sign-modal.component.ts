import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-sign-modal',
  templateUrl: './sign-modal.component.html',
  styleUrls: ['./sign-modal.component.scss']
})
export class SignModalComponent implements OnInit {
  @Input() state: 'sign-up' | 'login' = 'sign-up';

  passwordVisible = false;
  password?: string;

  signForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['']
  });

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['']
  });

  @Output() closeModal = new EventEmitter();
  @Output() applyClick = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signupClickHandler(body: { name: string; email: string; password: string; }) {
    // console.log(body);
    this.applyClick.emit(body);
  }
  loginClickHandler(body: { name: string; password: string; }) {
    this.applyClick.emit(body);
  }
}
