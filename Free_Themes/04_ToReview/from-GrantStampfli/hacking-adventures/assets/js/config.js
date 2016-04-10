window.techno.config = { 
	
		logo: 'http://finer-code.com/content/images/2014/10/logo.png',
		author: {			
				social: [
					{ 
						href: 'https://github.com/grantstampfli',
					  icon: 'fa-github',
						title: 'Github'
					},
					{ 
						href: 'https://www.linkedin.com/in/grantstampfli',
					  icon: 'fa-linkedin',
						title: 'LinkedIn'
					},
					{ 
						href: 'mailto:mail@gstampfli.com',
					  icon: 'fa-envelope',
						title: 'Email'
					},
					{ 
						href: techno.baseUrl + '/rss/',
					  icon: 'fa-rss',
						title: 'Rss'
					}
				]
		},
		disqus: {
				shortname: '[YOUR DISQUS SHORTNAME]'
		},
		google: {
				analytics: function(ga) {
					var account ='[YOUR GA ACCOUNT]';
					var domain = '[YOUR GA DOMAIN]';

					ga('create', account, domain);
					//ga('require', 'displayfeatures');
					ga('send', 'pageview');
				}
		},

		menu: [
				{ route: 'http://finer-code.com', text: 'Home'},
				{ route: 'http://gstampfli.com', text: 'Portfolio'},
				{ route: 'http://res.gstampfli.com', text: 'Resume'}
		]
};
	
