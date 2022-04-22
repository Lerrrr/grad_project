import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() userName;
  @Input() userAvatar;
  @Input() rate;
  @Input() heading;
  @Input() description;
  @Input() image;
  @Input() video;
  @Input() comments;
  @Input() isLogged;
  @Output() addComment = new EventEmitter();
  @Output() upVoteClick = new EventEmitter();
  @Output() downVoteClick = new EventEmitter();


  inputValue = '';

  isCommentsBlock = false;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
   this.addComment.emit(this.inputValue);
   this.inputValue = '';
  }

  fakeVote(value: string) {
  //   this.rate = value === 'up' ? this.rate + 1 : this.rate - 1;
  }
}
