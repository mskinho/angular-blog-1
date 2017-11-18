import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCommentListComponent } from './blog-comment-list/blog-comment-list.component';
import { BlogCommentNewComponent } from './blog-comment-new/blog-comment-new.component';
import { ParentFilterPipe } from './blog-comment-list/comment-filter.pipe';
import { BlogCommentDetailComponent } from './blog-comment-detail/blog-comment-detail.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        OrderModule
    ],
    declarations: [
        BlogListComponent, 
        BlogDetailComponent, 
        BlogCommentListComponent, 
        BlogCommentNewComponent,
        ParentFilterPipe,
        BlogCommentDetailComponent
    ]
})
export class BlogModule { }
