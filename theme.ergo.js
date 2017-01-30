/*
This is a minimal skeleton config for ergo cms. See online for more options
*/




module.exports = {
	name: "HTML5 UP - Future Imperfect",
	url: "https://github.com/ergo-cms/theme-future-imperfect",
	asset_paths: ['assets', 'images'],
	default_fields: {

		image: 'post.jpg',
		author_image: 'avatar.jpg',
		author_url: '/authors.html',
		tags_url: '/tags.html',
		categories_url: '/categories.html',
		feed_url: '/rss.xml',

		// gracefully accept paginate plugin support
		auto_paginate: function(list, params, list_name) { 
			if (!!this.paginate) 
				return this.paginate.call(this, list, params, list_name);
			else
				return list; // do nothing, if paginate not available
			},
	}
};



