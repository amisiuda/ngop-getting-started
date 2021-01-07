import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
    templateUrl: 'start-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent {
    
    readonly isLoading$ = new BehaviorSubject<boolean>(true);


    ngAfterViewInit(): void {
        this.reload();
    }


    reload(): void {
        this.isLoading$.next(true);
        setTimeout(() => {
            this.isLoading$.next(false);
        }, 2000);
    }
}
