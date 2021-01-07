import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpWidgetConfig } from '@onionbutler/ngop';


@Component({
    templateUrl: 'widgets-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetsPageComponent {
    
    readonly widgetConfig: OpWidgetConfig = {
        module: () => import('./test-widget/test-widget.module'),
    };
}
