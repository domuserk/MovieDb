import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadRouterComponent } from './head-router.component';

describe('HeadRouterComponent', () => {
  let component: HeadRouterComponent;
  let fixture: ComponentFixture<HeadRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
