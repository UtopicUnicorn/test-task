import { TestBed } from '@angular/core/testing';

import { UserEditorService } from './user-editor.service';

describe('UserEditorService', () => {
  let service: UserEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
