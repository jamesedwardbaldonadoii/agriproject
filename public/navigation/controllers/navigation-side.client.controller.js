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
				}, {
					display: 'New Offer', 
					path: 'offer.new'
				}]
			}, {
				display: 'Offers',
				childNav: [{
					display: 'Tech', 
					path: 'offer.filter({tags: "tech"})'
				}, {
					display: 'Machinery', 
					path: 'offer.filter({tags: "machinery"})'
				},{
					display: 'Poultries', 
					path: 'offer.filter({tags: "poultries"})'
				}, {
					display: 'Livestock', 
					path: 'offer.filter({tags: "livestock"})'
				}, {
					display: 'Fisheries', 
					path: 'offer.filter({tags: "fisheries"})'
				}, {
					display: 'Organic', 
					path: 'offer.filter({tags: "organic"})'
				}, {
					display: 'Crops', 
					path: 'offer.filter({tags: "crops"})'
				}, {
					display: 'View All', 
					path: 'offer.filter({tags: "all"})'
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
