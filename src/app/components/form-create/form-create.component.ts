import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzUploadModule } from 'ng-zorro-antd/upload';


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

  @ViewChild('headingInput', {static: false}) headingInputEl: ElementRef;
  @ViewChild('descriptionTextarea', {static: false}) descriptionTextareaEl: ElementRef;
  constructor() { }



  ngOnInit(): void {
  }

  createPost(body: {
    heading: string;
    description: string;
  }) {
    console.log(body);
  }
}
