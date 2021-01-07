import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    templateUrl: 'test-widget.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestWidgetComponent {}
