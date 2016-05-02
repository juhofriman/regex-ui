import {Component, ViewChild, Input} from 'angular2/core';

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

  private data: String = 'Paste text to match to here';

  set(data) {
    this.data = data;
  }
}

@Component({
    selector: 'source-textarea',
    directives: [SourceBackdrop],
    template: `
    <div id="data">
      <source-backdrop></source-backdrop>
      <textarea [(ngModel)]=textToMatchTo (keyup)="evaluate()" placeholder="text-to-match-to-here"></textarea>
    </div>
`
})
export class SourceTextarea {

  @Input()
  private regexString: string = '';

  private textToMatchTo: string = '';

  @ViewChild(SourceBackdrop)
  private sourceBackdrop: SourceBackdrop;

  ngOnChanges(changes) {
    this.evaluate();
  }

  evaluate() {
    try {
      let data = this.textToMatchTo.replace(/\n$/g, '\n\n')
          .replace(new RegExp(this.regexString, 'g'), '<mark>$&</mark>');
      if(this.sourceBackdrop != null) {
        this.sourceBackdrop.set(data);
      }
    } catch (e) {
      this.sourceBackdrop.set(this.textToMatchTo);
    }
  }

}
