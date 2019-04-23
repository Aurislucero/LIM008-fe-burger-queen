import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './firestore.service';

const input: object[] =[{
  nombreCliente: "",
  pedido : [] ,
  total:""
}];

const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(input)
}
const angularFirestoreStub = {
  collection: 
  jasmine.createSpy('collection').and.returnValue(collectionStub)
}
describe('FirestoreService', () => {
  let service: FirestoreService;
  let angularFirestore: AngularFirestore;
  beforeEach(() => {TestBed.configureTestingModule({
    providers: [
      FirestoreService,
      { provide: AngularFirestore,
        useValue: angularFirestoreStub }
    ]
  });
  service = TestBed.get(FirestoreService);
    angularFirestore = TestBed.get(AngularFirestore);
});

  it('should be created', () => {
    const service: FirestoreService = TestBed.get(FirestoreService);
    expect(service).toBeTruthy();
  });
});
