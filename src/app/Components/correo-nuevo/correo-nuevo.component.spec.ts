import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoNuevoComponent } from './correo-nuevo.component';

describe('CorreoNuevoComponent', () => {
  let component: CorreoNuevoComponent;
  let fixture: ComponentFixture<CorreoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
