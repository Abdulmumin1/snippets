---
title: 'Devcanvas - How I ended up building it'

description: 'A platform for storing code snippets, an idea I conceived while helping someone debug their code. The platform used to be called snippetland, but after getting deep in building and also trying to establish the name and stuff, I realized that another service named Snippetland that does the same thing (even better) exists.'

date: '2024-09-11'

lastmod: '2024-09-11'

categories:
  - product launch
  - devcanvas
  - codepen

published: true
---

<svelte:head>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

</svelte:head>

DevCanvas (devcanvas.art) began as a fun experiment born from my journey learning SvelteKit and Supabase. What started as a simple platform for storing code snippets quickly evolved into something much more cooler: _an online editor that makes it easy to prototype and share ideas quickly and effortlessly._

### The Evolution

A platform for storing code snippets, an idea I conceived while helping someone debug their code. The platform used to be called snippetland, but after getting deep in building and also trying to establish the name and stuff, I realized that another service named Snippetland that does the same thing (even better) exists.

> Note: Devcanvas is not a competitive product, but rather a stepping stone for me into the indie hacking world. As said - "Imitate until you innovate"

Snippetland early twitter posts:

![](https://paper-attachments.dropboxusercontent.com/s_DDD6D2B338E4CBBF14FF9A9AD7E8FDAF3F25B78364C5817500612BBD417A94F1_1726696577573_tweet_1690427906751651841_20240918_225354_via_10015_io.png)

The current form, which is a full-fledged online editor with cool features was just an experimentation. I first demoed it on twitter a long time ago.

![](https://paper-attachments.dropboxusercontent.com/s_DDD6D2B338E4CBBF14FF9A9AD7E8FDAF3F25B78364C5817500612BBD417A94F1_1726696723556_image.png)

Seeing these again, devcanvas has definitely come a really long way.

Storing snippets still exists on DevCanvas, but haven't gotten any updates for a while now.

### Feature Summary

- Easy prototyping
- Effortless sharing
- Real-time editing (i.e fast previews)
- Super neat interface (from my perspective at least)

DevCanvas offers a robust set of features designed to enhance the frontend development experience. These include built-in support for popular tools like Tailwind CSS, Font Awesome, and GSAP, which can be accessed with just a click.

Devcanvas also supports SCSS, catering to developers who prefer using SCSS for their styling needs. Additionally, DevCanvas provides responsive design testing, allowing developers to see how their projects look on different devices.

### Collaboration and Sharing

One of the standout features of DevCanvas is its ability to keep projects private (a feature most keep behind a paywall), with sharing options limited to those with the link.

Projects can be embedded in websites, blogs, and documentation, making it simple to showcase work or integrate it into other content. Shareable URLs and code snippets in over 50 languages further enhance Devcanvas's utility for both teaching and sharing code.

### Getting Started

To start using DevCanvas, simply navigate to the website and begin creating your frontend projects. The intuitive interface allows for easy prototyping and experimentation, making it a great sandbox for developers of all levels.

### Embedding Projects

Embedding your DevCanvas projects into other platforms is straightforward. Use the provided iframe code snippet and paste it into your desired location on websites, blogs, or documentation. This feature is ideal for showcasing your work or integrating interactive elements into your content.

### Unique Features.

Compared to other online frontend editors, DevCanvas stands out with its built-in plugins for Tailwind CSS, Font Awesome, and GSAP, which are just a click away. This saves developers time and effort, allowing them to focus more on the creative aspects of their projects.

DevCanvas is designed with ease of use in mind, making it accessible to both beginners and experienced developers.

### PWA Support

As a Progressive Web App (PWA), DevCanvas also offers offline support, allowing users to continue working even when they are not connected to the internet. This feature is particularly beneficial for developers who need to work in environments with limited connectivity.

### Challenges

Got myself into a trial and error loop making the preview as fast as possible, most of the problem coming from network resource the might be brought in into the editor. Whoa, I just conceived a superb idea while writing this (would implement later).

Initially the Editor we utilize is Monaco Editor, but it really resource intensive and have a huge impact on performance in both the speed and memory consumption.

I quickly switch to Codemirror, after a feedback pointing out this issue, which is more lighter and efficient. I also kinda like the DX better than monaco editor.

Another challenge was SSR that had to be turned off, because it caused alot of problems rendering the editor, as they heavily rely on client side APIs.

### Tech Stack

Devcanvas is built with Sveltekit, TailwindCSS, Supabase and no Typescript (I wish I did though).

Though not the coolest or hardest product to build or make money from, The process of building it was incredibly enjoyable, and using it is just as fun – hence the tagline, "The Editor with Super Powers".

Currently, DevCanvas is completely free to use.

### Open Source

DevCanvas is proudly open source, even though, It has always just been me building this for while. I hope to get others involved in this to make DevCanvas even better and cooler.

> Warning: Lots of technical debt and ugly code, but i'm working to make it better for contribution.

Go ahead and drop us a star: [https://github.com/Abdulmumin1/devcanvas](https://github.com/Abdulmumin1/devcanvas)

Have questions, suggestions, critique or feedback, I'd love to hear from you!

**Try Devcanvas: [https://devcanvas.art](https://devcanvas.art/new)**

Also checkout my next product CommentRig (www.commentrig.com) - A modern comment management for websites.

**Stay Subtle 💛!**