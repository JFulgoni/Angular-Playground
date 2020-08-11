import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbActionsComponent } from './db-actions.component';

describe('DbActionsComponent', () => {
  let component: DbActionsComponent;
  let fixture: ComponentFixture<DbActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
