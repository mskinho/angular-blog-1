import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCommentDetailComponent } from './blog-comment-detail.component';

describe('BlogCommentDetailComponent', () => {
  let component: BlogCommentDetailComponent;
  let fixture: ComponentFixture<BlogCommentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCommentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCommentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
