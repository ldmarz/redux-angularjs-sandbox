import angular from 'angular';

import {testComponent} from './testComponent/testComponent';
import {otherComponent} from './otherComponent/otherComponent';
import mainController from './main/mainController';
import ngRedux from 'ng-redux';
import rootReducer from './reducers';

const app = 'app';

function config($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(rootReducer);
}

angular
  .module(app, [ngRedux])
  .controller('MainController', mainController)
  .component('testComponent', testComponent)
  .component('otherComponent', otherComponent)
  .config(config)
  .run();