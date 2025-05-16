import { TestBed } from '@angular/core/testing';
import { ProductserviceService } from './productservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ correct import

describe('ProductserviceService', () => {
  let service: ProductserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductserviceService]
    });
    service = TestBed.inject(ProductserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
