import { FilterLineBase } from '../filter-line-base';
import { customElement, observable, useView, PLATFORM } from 'aurelia-framework';
import { MdcFilterConfiguration } from '../mdc-filter-configuration';

@customElement('number-filter-line')
@useView(PLATFORM.moduleName('./number-filter-line.html'))
export class NumberFilterLine extends FilterLineBase<number> {
  constructor(element: Element, config: MdcFilterConfiguration) {
    super(element);
    this.operators = config.numberOperators;
    this.maxWidth = 150;
  }

  valueChanged() {
    this.valueText = (this.value === undefined || isNaN(this.value))
      ? ''
      : this.value.toString();
  }

  @observable
  valueText: string;
  valueTextChanged() {
    this.value = parseFloat(this.valueText);
  }
}
