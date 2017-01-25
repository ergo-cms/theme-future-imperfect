# Future Imperfect - Ergo CMS

This is the ergo-cms compatible version of the "Future Imperfect" theme by [HTML5 UP](https://html5up.net/).

![Future Imperfect Theme](images/future-imperfect.jpg "Future Imperfect Theme")

## Notes

This theme provides the following layout files, which are commonly available for most standard 'blog' style installations:

* homepage.html. Use this layout by making sure the following line is in the header area of your home page (typically @/index.tex@):

```
layout = homepage.html
```

* page.html. This is the 'default' page for all pages that aren't part of a blog. They are your standard pages (like, about.html, etc).
* post.html. This is the page that is used in blog posts. It has features such an author, date and provides a Disqus comments area.
* list.html. This page is used for building pages that have 'lists of things', such as a list of blog posts. The [default ergo skeleton package](https://ergo-cms/ergo-skel) uses this page in @/blog/index.tex@, by setting the following fields in it's header area:
bc. layout = list.html
list_type = blog

* keyed_list.html. Similar to above `list.html`, but this page builds a '2-tier list of things', such as categories or tags.

There are two partial files that are included, that may be overridden easily:

* footer_text.html. This controls the text that appears in the footer area.
* menu.tex. This controls the menus in the top navigation area.
* home_about.tex. This is a small 'about' section that exists on the homepage.
* side_menu.tex. This is the menu for the side.

Also supported:

* tags and categories (or category). Simply define either/both of these in the header area of any post/page:

```
tags = Crazy Ideas, food
category: foodie
```

* popular and featured posts. Simply define them with 'true' in the header area of any post/page, to make them more prominent on the home page.

```
featured = true
```

## The easy installation

```
ergo theme install future-imperfect
```

This will download and install the theme into the _themes folder and set it is as the current one. You can then rebuild your site with (a 'clean' is always recommended when switching themes):

```
ergo build --clean
```

## The long winded installation

If you prefer to do things manually to install a theme, then follow these instructions.

Download and extract this theme into your `_themes` folder as 'future-imperfect' and then edit your `config.ergo.js` file and change the setting theme to:

```
	theme = 'future-imperfect',
```

Note that you may choose whatever folder name you like.

Then, rebuild your website using:

```
ergo build --clean
```

# Credits

Original README from HTML5 UP:

```
Future Imperfect by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


It's been a long time coming, but I've finally gotten around to creating a brand new
blog-style template (and the first since Striped, which came out waaaaay back in 2013).
Anyway, Future Imperfect features a clean, expansive layout, a toggleable search box,
and -- because pretty much all modern browsers can use it now -- a whole lot of flexbox
action. Enjoy it :)

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		Misc. Sass functions (@HugoGiraudel)
		Respond.js (j.mp/respondjs)
		Skel (skel.io)

```


