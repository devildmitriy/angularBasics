import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../app.component';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PostFormComponent implements OnInit {

  title = '';
  text = '';
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', { static: false }) inputRef: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post)

      console.log('new Post');
      this.title = this.text = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus()
    console.log(this.inputRef)
  }

}
