import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErrorForbiddenComponent } from './page-error-forbidden.component';

describe('PageErrorForbiddenComponent', () => {
  let component: PageErrorForbiddenComponent;
  let fixture: ComponentFixture<PageErrorForbiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageErrorForbiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageErrorForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
