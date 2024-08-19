import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetododepagoListarComponent } from './metododepago-listar.component';

describe('MetododepagoListarComponent', () => {
  let component: MetododepagoListarComponent;
  let fixture: ComponentFixture<MetododepagoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetododepagoListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetododepagoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
