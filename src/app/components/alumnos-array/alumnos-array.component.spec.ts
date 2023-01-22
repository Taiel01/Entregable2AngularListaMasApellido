import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosArrayComponent } from './alumnos-array.component';

describe('AlumnosArrayComponent', () => {
  let component: AlumnosArrayComponent;
  let fixture: ComponentFixture<AlumnosArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
