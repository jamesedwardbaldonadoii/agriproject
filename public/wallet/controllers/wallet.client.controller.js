(function () {
	"use strict";
	angular.module("main").controller("WalletController", WalletController);

	WalletController.$inject = ["$scope", "$state", "$interval", "$uibModal", "mainSocket", "$sce", "$rootScope"];

	function WalletController($scope, $state, $interval, $uibModal, mainSocket, $sce, $rootScope) {

		var vm = this;
		vm.auth = angular.copy(window.user);
		vm.balance = 0;
		vm.transactions = 0;

		vm.getWalletBalance = function () {
			mainSocket.emit('wallet.findOne', {}, function (res) {
				vm.balance = res.amount;
			});
		};

		vm.getWalletBalance();
	}
})();