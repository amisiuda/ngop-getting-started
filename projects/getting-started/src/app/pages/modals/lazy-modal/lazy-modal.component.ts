import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    templateUrl: 'lazy-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyModalComponent {}
