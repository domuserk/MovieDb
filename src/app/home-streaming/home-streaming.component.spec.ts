import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStreamingComponent } from './home-streaming.component';

describe('HomeStreamingComponent', () => {
  let component: HomeStreamingComponent;
  let fixture: ComponentFixture<HomeStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
