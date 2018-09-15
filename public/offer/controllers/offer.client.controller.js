(function () {
	"use strict";
	angular.module("main").controller("OfferController", OfferController);

	OfferController.$inject = ["$scope", "$state", "$interval", "$uibModal", "mainSocket", "$sce", "$http"];

	function OfferController($scope, $state, $interval, $uibModal, mainSocket, $sce, $http) {

		var vm = this;
		vm.auth = angular.copy(window.user);
		vm.tags = [[
			{ "text": "Tag1" },
			{ "text": "Tag2" },
			{ "text": "Tag3" },
			{ "text": "Tag4" },
			{ "text": "Tag5" },
			{ "text": "Tag6" },
			{ "text": "Tag7" },
			{ "text": "Tag8" },
			{ "text": "Tag9" },
			{ "text": "Tag10" }
		]];
	}
})();