import CounterActions from '../actions';

class OtherComponent {
  constructor($ngRedux) {
    'ngInject';
    this.$ngRedux = $ngRedux;
    $ngRedux.
      connect(this.mapStateToThis, CounterActions)(this);
  }

  mapStateToThis(state) {
    return {
      myStore: state.name
    };
  }
}

export const otherComponent = {
  template: require('./otherComponent.html'),
  controller: OtherComponent,
};
