import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogCommentListComponent } from '../blog-comment-list/blog-comment-list.component';
import { BlogCommentDetailComponent } from '../blog-comment-detail/blog-comment-detail.component';
import { BlogCommentNewComponent } from '../blog-comment-new/blog-comment-new.component';
import { ParentFilterPipe } from '../blog-comment-list/comment-filter.pipe';

import { BlogRoutingModule } from '../blog-routing.module';

import * as PostActions from '../../state/actions/post.actions';
import * as fromRoot from '../../state/reducers';

describe('BlogCommentNewComponent', () => {
    let component: BlogCommentNewComponent;
    let fixture: ComponentFixture<BlogCommentNewComponent>;
    let store: Store<fromRoot.State>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(fromRoot.reducers),
                OrderModule,
                BlogRoutingModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                BlogListComponent,
                BlogDetailComponent,
                BlogCommentListComponent,
                BlogCommentDetailComponent,
                BlogCommentNewComponent,
                ParentFilterPipe
            ]
        })
        .compileComponents();

        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogCommentNewComponent);
        component = fixture.componentInstance;
        component.post = {
          id: 1,
          title: "title",
          author: "author",
          publish_date: "2017-09-01",
          slug: "p1",
          description: "description",
          content: "content"
        };
        fixture.detectChanges();
        component.ngOnInit();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have a form with invalid state when empty', () => {
        expect(component.commentForm.valid).toBeFalsy();
    });

    it('should have a form with valid state when fields have values', () => {
        let user = component.commentForm.controls['user'];
        let content = component.commentForm.controls['content'];

        user.setValue("Test Name")
        content.setValue("Test content")

        expect(component.commentForm.valid).toBeTruthy();
    });

    it('should dispatch a comment save action on submit', () => {
        let user = component.commentForm.controls['user'];
        let content = component.commentForm.controls['content'];

        user.setValue("Test Name");
        content.setValue("Test content");

        var newComment = {...component.comment}
        for (var k in component.commentForm.value){
            newComment[k] = component.commentForm.value[k];
        };

        const action = new PostActions.CommentAdd(newComment);
        component.save(component.commentForm);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

});
