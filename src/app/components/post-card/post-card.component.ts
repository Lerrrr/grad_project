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
  @Output() addComment = new EventEmitter();
  @Output() upVoteClick = new EventEmitter();

  inputValue = '';

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
   this.addComment.emit(this.inputValue);
   this.inputValue = '';
  }
}
