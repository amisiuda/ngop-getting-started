import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpNoticeService } from '@onionbutler/ngop';


@Component({
    templateUrl: 'notifications-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsPageComponent {
    
    private notificationId = 0;


    constructor(private noticesService: OpNoticeService) {}


    showNotification(): void {
        this.show();
    };


    showErrorNotification(): void {
        this.show('error');
    };


    private show(type?: string): void {
        this.noticesService.show({
            type,
            data: {
                id: ++this.notificationId,
            },
        });
    };
}
