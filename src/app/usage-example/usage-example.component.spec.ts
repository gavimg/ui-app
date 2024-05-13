import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageExampleComponent } from './usage-example.component';

describe('UsageExampleComponent', () => {
  let component: UsageExampleComponent;
  let fixture: ComponentFixture<UsageExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
