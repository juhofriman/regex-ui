import {Component, ViewChild} from 'angular2/core';

@Component({
  selector: 'source-backdrop',
  template: `
  <div class="backdrop">
    <div class="highlights" [innerHtml]="data">
    </div>
  </div>
`
})
class SourceBackdrop {

  private data: String = '';

  set(data) {
    this.data = data.replace(/\n$/g, '\n\n')
        .replace(/angular/g, '<mark>$&</mark>');
  }
}

@Component({
    selector: 'source-textarea',
    directives: [SourceBackdrop],
    template: `
    <div id="data">
      <source-backdrop #backdrop></source-backdrop>
      <textarea #inputdata (keyup)="handleChange($event, inputdata)"></textarea>
    </div>
`
})
export class SourceTextarea {

  @ViewChild(SourceBackdrop)
  private sourceBackdrop: SourceBackdrop;

  handleChange(e, value) {
    this.sourceBackdrop.set(value.value);
  }
}
