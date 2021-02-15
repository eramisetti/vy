import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Program } from '../domain/Program';

@Injectable()
export class ProgramService {

    constructor(private http: HttpClient) {}

    getPastPrograms() {
        return this.http.get<any>('/assets/data/past-programs.json')
            .toPromise()
            .then(res =><Program[]> res.programs)
            .then(data => data);
    }
}
