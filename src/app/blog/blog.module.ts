import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCommentListComponent } from './blog-comment-list/blog-comment-list.component';
import { BlogCommentNewComponent } from './blog-comment-new/blog-comment-new.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, BlogCommentListComponent, BlogCommentNewComponent]
})
export class BlogModule { }
