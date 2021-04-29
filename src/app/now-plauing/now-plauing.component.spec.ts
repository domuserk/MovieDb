import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlauingComponent } from './now-plauing.component';

describe('NowPlauingComponent', () => {
  let component: NowPlauingComponent;
  let fixture: ComponentFixture<NowPlauingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowPlauingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlauingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
