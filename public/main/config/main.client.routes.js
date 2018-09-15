angular.module("main")
	.config(["$stateProvider", "$urlRouterProvider", 
		function ($stateProvider, $urlRouterProvider) {

			const home = {
				name: "home",
				url: "/",
				templateUrl: "main/views/main.client.view.html"
			};

			const offer = {
				main: {
					name: "offer",
					url: "/offer",
					templateUrl: "offer/views/offer.client.view.html"
				},
				new: {
					name: "offer.new",
					url: "/",
					templateUrl: "offer/views/offer-new.client.view.html"
				},
				filter: {
					name: "offer.filter",
					url: "/",
					params: {
						tags: null,
					},
					templateUrl: "offer/views/offer-list.client.view.html"
				},
				invest: {
					name: "offer.invest",
					url: "/",
					templateUrl: "offer/views/offer-list.client.view.html"
				}
			};

			const wallet = {
				name: "wallet",
				url: "/wallet/",
				templateUrl: "wallet/views/wallet.client.view.html"
			}
			
			const account = {
				name: "account",
				url: "/account/",
				templateUrl: "account/views/account.client.view.html"
			}

			var feeds = {
				main: {
					name: "feeds",
					url: "/feeds/",
					templateUrl: "feeds/views/feeds.client.view.html"
				},
				first: {
					name: "feeds.first",
					url: "/",
					templateUrl: "feeds/views/feeds-first.client.view.html"
				},
				second: {
					name: "feeds.second",
					url: "/",
					templateUrl: "feeds/views/feeds-second.client.view.html"
				}
			};

			$stateProvider.state(home);
			$stateProvider.state(wallet);
			$stateProvider.state(account);
			
			$stateProvider.state(feeds.main);
			$stateProvider.state(feeds.first);
			$stateProvider.state(feeds.second);


			$stateProvider.state(offer.main);
			$stateProvider.state(offer.new);
			$stateProvider.state(offer.filter);
			$stateProvider.state(offer.invest);
		}
	]);