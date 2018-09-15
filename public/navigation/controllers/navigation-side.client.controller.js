(function () {
	"use strict";

	angular.module("main").controller("NavigationSideController", NavigationSideController);

	NavigationSideController.$inject = ["Authentication"];

	function NavigationSideController(Authentication){

		var vm = this;
		this.navigations = [
			{
				display: 'My Acount', 
				path: 'account'
			}, {
				display: 'Investments',
				childNav: [{
					display: 'Active', 
					path: 'investments.active'
				}, {
					display: 'History', 
					path: 'investments.history'
				}]
			}, {
				display: 'Offers',
				childNav: [{
					display: 'Crops', 
					path: 'test.one'
				}, {
					display: 'Poultries', 
					path: 'test.two'
				}, {
					display: 'Livestock', 
					path: 'test.two'
				}, {
					display: 'Fisheries', 
					path: 'test.two'
				}, {
					display: 'Organic', 
					path: 'test.two'
				}, {
					display: 'Tech', 
					path: 'test.two'
				}, {
					display: 'View All', 
					path: 'test.two'
				}]
			},
			{
				display: 'AV-Wallet', 
				path: 'wallet'
			},
			{
				display: 'Logout', 
				path: 'logout'
			}
		];
	}

})();
