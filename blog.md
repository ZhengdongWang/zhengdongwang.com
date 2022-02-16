---
title: Blog index
---

[RSS](/feed.xml)

The posts from January 2021 and before I originally wrote on a different website. It was called 'Walking to the fridge,' subtitle, 'A blog because coronavirus.' My friend Claudia and I traded off every other day for a long time. We've since stopped writing there, but I copied over some of my posts that I want to remember. So sorry if some context is missing. Fun fact: we used to use the font [Lusitana](https://cargocollective.com/anamegda/LUSITANA) by Ana Paula Megda. I still think these are better read it. But consistent fonts on this website is more important.

{% for post in site.posts %}
  * {{ post.date | date: '%Y-%m-%d' }} \| [{{ post.title }}]({{post.url}})
{% endfor %}
