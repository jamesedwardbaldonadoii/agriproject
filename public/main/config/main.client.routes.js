angular.module("main")
	.config(["$stateProvider", "$urlRouterProvider", 
		function ($stateProvider, $urlRouterProvider) {

			var home = {
				name: "home",
				url: "/",
				templateUrl: "main/views/main.client.view.html"
			}

			var home = {
				name: "account",
				url: "/account",
				templateUrl: "account/views/account.client.view.html"
			}

			var feeds = {
				main: {
					name: "feeds",
					url: "/feeds",
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

/*			var feeds
			.state('contacts', {
        url: "/contacts",
        params: {
            param1: null
        },
        templateUrl: 'contacts.html'
    })
*/
			$stateProvider.state(home);
			$stateProvider.state(feeds.main);
			$stateProvider.state(feeds.first);
			$stateProvider.state(feeds.second);
		}
	]);