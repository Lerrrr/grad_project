import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {BehaviorSubject} from 'rxjs';
import {ChangeEvent} from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {
  tabs = [
    {
      name: 'Post',
      icon: 'notification',
      id: 1

    },
    {
      name: 'Images & Video',
      icon: 'picture',
      id: 2
    },
    {
      name: 'Link',
      icon: 'link',
      id: 3
    }
  ];
  defaultFileList: NzUploadFile[] = [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',

    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error'
    }
  ];

  textareaValue$ = new BehaviorSubject('');


  public Editor = ClassicEditor;

  ckEditorConfig: any = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote'
    ]
  };

  @ViewChild('headingInput', {static: false}) headingInputEl: ElementRef;
  @ViewChild('descriptionTextarea', {static: false}) descriptionTextareaEl: ElementRef;


  @Output() createPost = new EventEmitter();
  constructor() { }



  ngOnInit(): void {
  }

  createPostHandler(body: {
    heading: string;
    description: string;
    img: string;
  }) {
    this.createPost.emit(body);
  }

  changeTextareField({ editor }: ChangeEvent) {
    const data = editor.getData();

    this.textareaValue$.next(data);
  }
}
