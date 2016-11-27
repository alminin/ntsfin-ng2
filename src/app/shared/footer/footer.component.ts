import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'nts-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {

    isHome: boolean;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.url.forEach((url: UrlSegment[]) => {
            let path: string = url.join('');
            this.isHome = path === 'home';
        });
    }
}
