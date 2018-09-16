(function () {
	"use strict";
	angular.module("main").controller("AccountClientController", AccountClientController);

	AccountClientController.$inject = ["$scope", "$state", "$interval", "$uibModal", "mainSocket", "$sce", "$rootScope"];

	function AccountClientController($scope, $state, $interval, $uibModal, mainSocket, $sce, $rootScope) {

		var vm = this;
		vm.auth = angular.copy(window.user);
		vm.deposit = 0;

		vm.depositAmount = function () {
			mainSocket.emit('wallet.update', { $inc: { amount: vm.deposit } }, function (res) {
				mainSocket.emit('transaction.create', {
					amount: item.totalInvestment,
					type: 'deposit',
					wallet: res._id,
				}, function (res) {

				});
			});
		};
	}
})();