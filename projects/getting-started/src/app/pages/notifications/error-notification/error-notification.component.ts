import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    templateUrl: 'error-notification.component.html',
    styleUrls: [ 'error-notification.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorNotificationComponent {

    id!: number;
}
