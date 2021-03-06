import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../shared/models/cat.model';
import { RealEstateProperties } from '../shared/models/realEstateProperties.model';

export type estimateResult = { estimate: number };

@Injectable({
  providedIn: 'root',
})
export class EstimateService {
  constructor(private http: HttpClient) {}

  getEstimate(filters: RealEstateProperties): Observable<estimateResult> {
    return this.http.post<any>('/api/estimate', filters);
  }
}
