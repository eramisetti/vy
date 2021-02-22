import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Program } from '../domain/Program';
import {MenuItem} from 'primeng/api';
import { YogaClasses } from '../domain/YogaClasses';

@Injectable()
export class VYService {

    constructor(private http: HttpClient) {}

    getPastPrograms() {
        return this.http.get<any>('/assets/data/past-programs.json')
            .toPromise()
            .then(res =><Program[]> res.programs)
            .then(data => data);
    }

    getNewProgram() {
        return this.http.get<any>('/assets/data/newProgram.json')
        .toPromise()
        .then(res =><Program[]> res.newProgram)
        .then(data => data);
    }

    getYtt() {
        return this.http.get<any>('/assets/data/ytt.json')
        .toPromise()
        .then(res =><Program[]> res.ytt)
        .then(data => data);
    }

    getMenu() {
        return this.http.get<any>('/assets/data/menu.json')
            .toPromise()
            .then(res =><MenuItem[]> res.menu)
            .then(data => data);
    }

    getAnnouncements() {
        return this.http.get<any>('/assets/data/announcements.json')
            .toPromise()
            .then(res =><Program[]> res.announcements)
            .then(data => data);
    }

    getYogaClasses() {
        return this.http.get<any>('/assets/data/yoga-classes-timings.json')
        .toPromise()
        .then(res =><YogaClasses[]> res.yogaClasses)
        .then(data => data);
    }
}
