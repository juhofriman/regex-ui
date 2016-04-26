declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';

require('./style.less');

bootstrap(AppComponent);
