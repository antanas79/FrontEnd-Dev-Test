import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    public title: string;

    constructor(
        private titleService: Title,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        router.events.pipe(
            filter((event) => {
                return event instanceof NavigationEnd;
            }),
            map(() => this.activatedRoute),
            map((route: any) => {
                while (route.firstChild) {
                    route = route.firstChild;
                }

                return route;
            }),
            filter((route: any) => route.outlet === 'primary'),
            mergeMap((route: any) => route.data)
        ).subscribe((event) => {});
    }

    ngOnInit() {}
}
