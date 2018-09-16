(function () {
	"use strict";
	angular.module("main").controller("OfferController", OfferController);

	OfferController.$inject = ["$scope", "$state", "$interval", "$uibModal", "mainSocket", "$sce", "$rootScope"];

	function OfferController($scope, $state, $interval, $uibModal, mainSocket, $sce, $rootScope) {

		var vm = this;
		vm.auth = angular.copy(window.user);
		vm.newOffer = {};
		vm.newOffer.range = {};
		vm.newOffer.videos = [''];
		vm.offers = [];
		vm.tags = ['crops', 'poultries', 'livestock', 'fisheries', 'organic', 'tech'];

		vm.loadTags = function (query) {
			return vm.tags;
		};

		vm.create = function () {
			vm.newOffer.tags = _.pluck(vm.newOffer.tags, 'text');

			mainSocket.emit('offer.create', vm.newOffer, function (res, result) {
				console.log(err, result);
			});
		};

		vm.getOffer = function () {
			var tags = { query: {tags: $state.params.tags, status: 'active'} };

			if ($state.params.tags === 'all') {
				tags = {};
			}

			mainSocket.emit('offer.find', tags, function (res) {
				vm.offers = res;
			});
		};

		vm.invest = function (item) {
			mainSocket.emit('wallet.findOne', {}, function (res) {
				var amount = res.amount;
				if (amount < item.totalInvestment) {
					return alert('Not enought money in your wallet. Please deposit and try again.');
				}

				mainSocket.emit('wallet.update', { $inc: { amount: -(item.totalInvestment) } }, function (res) {

				});

				if (item.investors && item.investors.indexOf(vm.auth._id) < 0) {

					item.investors.push(vm.auth._id);
					item.status = 'closed';

					mainSocket.emit('offer.update', {
						query: {
							_id: item._id
						},
						data: item
					}, function (res) {

					});


					mainSocket.emit('transaction.create', {
						amount: item.totalInvestment,
						type: 'payment',
						wallet: res._id,
						offer: item._id
					}, function (res) {

					});

					$uibModal.open({
				      animation: true,
				      ariaLabelledBy: 'modal-title-bottom',
				      ariaDescribedBy: 'modal-body-bottom',
				      templateUrl: 'myModalContent.html',
				      size: 'sm',
				      controller: function($scope) {
				        $scope.name = 'bottom';  
				      }
				    });
				}
			});
		};


		$scope.$watchCollection(function(){
		    return $state.params.tags;
		}, function(){;
			vm.getOffer();
		});

		$scope.$watch(function () {
            return $state.params.tags;
        }, function (newParams, oldParams) {
            if (newParams !== oldParams) {
            	vm.getOffer();
            }
        });
	}
})();