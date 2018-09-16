(function () {
	"use strict";
	angular.module("main").controller("InvestmentController", InvestmentController);

	InvestmentController.$inject = ["$scope", "$state", "$interval", "$uibModal", "mainSocket", "$sce", "$rootScope"];

	function InvestmentController($scope, $state, $interval, $uibModal, mainSocket, $sce, $rootScope) {

		var vm = this;
		vm.auth = angular.copy(window.user);
		vm.balance = 0;
		vm.transactions = [];
		vm.actives = [];

		vm.getTransactionList = function () {
			mainSocket.emit('transaction.find', {}, function (res) {
				vm.transactions = res;
			});
		};

		vm.getActiveInvestments = function () {
			mainSocket.emit('offer.find', {investors: vm.auth._id, status: closed}, function (res) {
				vm.actives = res;
			});
		};

		vm.getTransactionList();
		vm.getActiveInvestments();
	}
})();