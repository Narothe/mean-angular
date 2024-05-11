// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'blog-item',
//   standalone: true,
//   imports: [],
//   templateUrl: './blog-item.component.html',
//   styleUrl: './blog-item.component.css'
// })
// export class BlogItemComponent {
//
// }

import { Component, Input } from '@angular/core';
import {BlogItemImageComponent} from "../blog-item-image/blog-item-image.component";
import {BlogItemTextComponent} from "../blog-item-text/blog-item-text.component";

@Component({
  selector: 'blog-item',
  standalone: true,
  imports: [BlogItemImageComponent, BlogItemTextComponent],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
  @Input() image?: string;
  @Input() text?: string;

}
