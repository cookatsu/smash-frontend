import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaempferComponent } from './kaempfer.component';

describe('KaempferComponent', () => {
  let component: KaempferComponent;
  let fixture: ComponentFixture<KaempferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaempferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaempferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
