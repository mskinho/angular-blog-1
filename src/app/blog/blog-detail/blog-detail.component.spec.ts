import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogCommentListComponent } from '../blog-comment-list/blog-comment-list.component';
import { BlogCommentDetailComponent } from '../blog-comment-detail/blog-comment-detail.component';
import { BlogCommentNewComponent } from '../blog-comment-new/blog-comment-new.component';
import { ParentFilterPipe } from '../blog-comment-list/comment-filter.pipe';

import { BlogRoutingModule } from '../blog-routing.module';

import * as PostActions from '../../state/actions/post.actions';
import * as fromRoot from '../../state/reducers';

describe('BlogDetailComponent', () => {
    let component: BlogDetailComponent;
    let fixture: ComponentFixture<BlogDetailComponent>;
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
            ],
            providers: [{
                provide: ActivatedRoute,
                useValue: {
                    params: Observable.of({id: 123})
                }
            }]
        })
        .compileComponents();

        store = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display a loading message when first opened', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').textContent).toContain('Loading...');
    });

    it('should dispatch a load detail action when initiated', () => {
        component.ngOnInit();
        const action = new PostActions.PostLoadDetail(123);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch a load comments action when initiated', () => {
        component.ngOnInit();
        const action = new PostActions.CommentLoadList(123);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should display the post when a detail success action is dispatched', () => {
        const blog = {
            id: 1,
            title: "post 1",
            author: "first author",
            publish_date: "2017-03-01",
            slug: "post-1",
            description: "description of post 1",
            content: "content of post 1"
        };

        const action = new PostActions.PostDetailSuccess(blog);
        store.dispatch(action)

        expect(component.post).toEqual(blog);

    });

    it('should display the comments when a comment success action is dispatched', () => {
        component.post = {
            id: 123,
            title: "post 1",
            author: "first author",
            publish_date: "2017-03-01",
            slug: "post-1",
            description: "description of post 1",
            content: "content of post 1"
        };
        const comments = [{
            id: 22,
            postId: 123,
            parent_id: null,
            user: "Name",
            date: "2017-06-08",
            content: "Content"
        }];

        const action = new PostActions.CommentListSuccess(comments);
        store.dispatch(action)

        expect(component.comments).toEqual(comments);

    });

});
