import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    templateUrl: 'info-notification.component.html',
    styleUrls: [ 'info-notification.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoNotificationComponent {

    id!: number;
}
