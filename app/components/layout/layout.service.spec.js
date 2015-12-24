'use strict';

describe('layoutService', function () {
  beforeEach(module('nx.layout'));

  var layoutService, $rootScope;

  beforeEach(inject(function (_layoutService_, _$rootScope_) {
    layoutService = _layoutService_;
    $rootScope = _$rootScope_;
  }));

  it('is initially set to the default layout', function () {
    expect($rootScope.layout).toEqual('default');
    expect($rootScope.layoutClass).toEqual('layout-default');
    expect($rootScope.customLayout).toBeFalsy();
  });

  it('can be set to a custom layout', function () {
    layoutService.setLayout('classy');

    expect($rootScope.layout).toEqual('classy');
    expect($rootScope.layoutClass).toEqual('layout-classy');
    expect($rootScope.customLayout).toBeTruthy();
  });

  it('resets to the default layout on route change', function () {
    layoutService.setLayout('classy');
    $rootScope.$broadcast('$routeChangeStart');
    $rootScope.$broadcast('$routeChangeSuccess');

    expect($rootScope.layout).toEqual('default');
    expect($rootScope.layoutClass).toEqual('layout-default');
    expect($rootScope.customLayout).toBeFalsy();
  });

  it('can be set to a custom layout during route change', function () {
    $rootScope.$broadcast('$routeChangeStart');
    layoutService.setLayout('classy');
    $rootScope.$broadcast('$routeChangeSuccess');

    expect($rootScope.layout).toEqual('classy');
    expect($rootScope.layoutClass).toEqual('layout-classy');
    expect($rootScope.customLayout).toBeTruthy();
  });
});
