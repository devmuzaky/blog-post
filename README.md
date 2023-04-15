Personal Blog
=============

This is a personal blog built with Angular and Scully. The blog allows you to create and publish blog posts using Markdown files. The application is fully responsive and optimized for SEO, thanks to Scully's static site generation capabilities.

Table of Contents
-----------------

- Features
- Getting Started
- Usage
- Contact


Features
--------

-   The Blog App is built with Angular and Scully
-   Scully site generator for static site generation
-   Markdown support for writing blog posts
-   Responsive design using Bootstrap
-   Routing using Angular routing capabilities

Getting Started
---------------

1.  Clone the repository: `git clone https://github.com/devmuzaky/blog-post.git`
2.  Install dependencies: `npm install`
3.  Serve the application: `ng serve`

Usage
-----

To create a new blog post, add a new Markdown file in the
`root/mdfiles` directory. The file name should be in the format `yyyy-mm-dd-title-of-post.md`, where `yyyy-mm-dd` is the date of the post and `title-of-post` is the title of the post in lowercase and separated by hyphens.

Here's an example of how the file should be structured:


```

---
title: My First Blog Post
description: A short description of my first blog post
author: Moe Zaky
published: true
publishedAt: 2022-04-15
tags:
- Angular
- Scully
---

# My First Blog Post

This is the content of my first blog post. Enjoy!

```

Once you've created the Markdown file, run `npm run build` to generate 
the static site. The generated files will be in the `dist/posts` directory.


Contact
-------

You can find me on the following platforms:

- Twitter: [@devmuzaky](https://twitter.com/devmuzaky)
- LinkedIn: [@devmuzaky](https://www.linkedin.com/in/devmuzaky/)
