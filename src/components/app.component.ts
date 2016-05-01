import {Component, ViewChild} from 'angular2/core';
import {SourceTextarea} from './textarea.component';
import {RegexInput} from './regexInput.component';

@Component({
    selector: 'regex-app',
    directives: [SourceTextarea, RegexInput],
    template: `
    <div id="main-container">
      <regex-input (regexString)="newRegexInput($event)"></regex-input>
      <source-textarea [regexString]="regexString"></source-textarea>
    </div>
`
})
export class AppComponent {

  @ViewChild(SourceTextarea)
  private sourceTextArea: SourceTextarea;

  private regexString: string = '';

  newRegexInput(newRegex) {
    this.regexString = newRegex;
  }
}
