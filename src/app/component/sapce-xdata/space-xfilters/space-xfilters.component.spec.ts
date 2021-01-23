import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXfiltersComponent } from './space-xfilters.component';

describe('SpaceXfiltersComponent', () => {
  let component: SpaceXfiltersComponent;
  let fixture: ComponentFixture<SpaceXfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceXfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
