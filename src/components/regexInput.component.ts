import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'regex-input',
    template: `
    <div id="regex-input">
      <input #regexstring (keyup)="handleChange($event, regexstring)" size="40" value=""/>
    </div>
`
})
export class RegexInput {
  @Output() regexString = new EventEmitter<String>();

  handleChange(e, regex) {
    this.regexString.next(regex.value);
  }
}
