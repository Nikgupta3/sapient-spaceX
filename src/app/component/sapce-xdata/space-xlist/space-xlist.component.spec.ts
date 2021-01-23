import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXlistComponent } from './space-xlist.component';

describe('SpaceXlistComponent', () => {
  let component: SpaceXlistComponent;
  let fixture: ComponentFixture<SpaceXlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
