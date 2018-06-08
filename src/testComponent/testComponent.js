import CounterActions from '../actions';

class TestComponentController {
  constructor($ngRedux) {
    'ngInject';
    this.$ngRedux = $ngRedux;
    this.yourName = '';
    $ngRedux.
      connect(this.mapStateToThis, CounterActions)(this);
  }

  mapStateToThis(state) {
    return {
      myStore: state.name
    };
  }

  dispatch() {
    this.$ngRedux.dispatch({type: CounterActions.WRITE_NAME, name: this.yourName})
  }
}

export const testComponent = {
  template: require('./testComponent.html'),
  controller: TestComponentController,
};
