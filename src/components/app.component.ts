import {Component} from 'angular2/core';
import {SourceTextarea} from './textarea.component';
import {RegexInput} from './regexInput.component';

@Component({
    selector: 'regex-app',
    directives: [SourceTextarea, RegexInput],
    template: `
    <div id="main-container">
      <regex-input></regex-input>
      <source-textarea></source-textarea>
    </div>
`
})
export class AppComponent { }
