import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    templateUrl: 'test-modal.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestModalComponent {}
