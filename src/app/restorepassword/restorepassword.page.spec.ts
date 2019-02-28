import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorepasswordPage } from './restorepassword.page';

describe('RestorepasswordPage', () => {
  let component: RestorepasswordPage;
  let fixture: ComponentFixture<RestorepasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorepasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorepasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
