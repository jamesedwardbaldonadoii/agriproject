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
			var tags = {query: $state.params};

			if ($state.params.tags === 'all') {
				tags = {};
			}

			mainSocket.emit('offer.find', tags, function (res) {
				vm.offers = res;
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