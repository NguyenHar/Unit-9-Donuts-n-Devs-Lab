import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamouspeopleComponent } from './famouspeople.component';

describe('FamouspeopleComponent', () => {
  let component: FamouspeopleComponent;
  let fixture: ComponentFixture<FamouspeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamouspeopleComponent]
    });
    fixture = TestBed.createComponent(FamouspeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
