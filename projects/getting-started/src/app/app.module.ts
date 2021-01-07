import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { OpContentModule, OpCoreModule, OpModalsModule, OpNoticesModule, OpWidgetModule } from '@onionbutler/ngop';
import { AppComponent } from './app.component';
import { DefaultModalWrapperComponent } from './modal-wrappers/default-modal-wrapper.component';
import { DefaultLoaderComponent } from './loaders/default-loader.component';
import { ModalsPageComponent } from './pages/modals/modals-page.component';
import { NotificationsPageComponent } from './pages/notifications/notifications-page.component';
import { InfoNotificationComponent } from './pages/notifications/info-notification/info-notification.component';
import { ErrorNotificationComponent } from './pages/notifications/error-notification/error-notification.component';
import { StartPageComponent } from './pages/start/start-page.component';
import { WidgetsPageComponent } from './pages/widgets/widgets-page.component';
import { TestModalComponent } from './pages/modals/test-modal/test-modal.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                component: StartPageComponent,
            },
            {
                path: 'notifications',
                component: NotificationsPageComponent,
            },
            {
                path: 'widgets',
                component: WidgetsPageComponent,
            },
            {
                path: 'modals',
                component: ModalsPageComponent,
            },
        ], {
            useHash: true,
        }),
        OpCoreModule.forRoot({
            loaders: {
                default: DefaultLoaderComponent,
            },
            notices: {
                default: InfoNotificationComponent,
                error: ErrorNotificationComponent,
            },
            modals: {
                default: DefaultModalWrapperComponent,
            },
        }),
        OpContentModule,
        OpWidgetModule,
        OpModalsModule,
        OpNoticesModule,
    ],
    declarations: [
        AppComponent,
        StartPageComponent,
        WidgetsPageComponent,
        ModalsPageComponent,
        TestModalComponent,
        NotificationsPageComponent,
        DefaultModalWrapperComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
