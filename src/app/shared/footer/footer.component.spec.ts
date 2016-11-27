import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SpyLocation } from '@angular/common/testing';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { FooterComponent } from './footer.component';

@Injectable()
class ActivatedRouteStub {

    // ActivatedRoute.params is Observable
    private subject = new BehaviorSubject(this.testUrl);
    url = this.subject.asObservable();

    // Test url
    private _testUrl: UrlSegment[];
    get testUrl() { return this._testUrl; }
    set testUrl(url: UrlSegment[]) {
        this._testUrl = url;
        this.subject.next(url);
    }

}

let comp: FooterComponent;
let fixture: ComponentFixture<FooterComponent>;
let de: DebugElement;
// let el: HTMLElement;
let activatedRoute: ActivatedRouteStub;

describe('FooterComponent', () => {

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();

        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRoute }
            ]
        });

        fixture = TestBed.createComponent(FooterComponent);

        comp = fixture.componentInstance;

    });

    it('should evaluate isHome to true when active route is home', () => {
        activatedRoute.testUrl = [new UrlSegment('home', null)];
        fixture.detectChanges();
        expect(comp.isHome).toBe(true);
    });

    it('should evaluate isHome to false when active route is not home', () => {
        activatedRoute.testUrl = [new UrlSegment('', null)];
        fixture.detectChanges();
        expect(comp.isHome).toBe(false);
    });


});
