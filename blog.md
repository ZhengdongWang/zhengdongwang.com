---
layout: page
title: Blog index
---

# Blog index

{% for post in site.posts %}
  * {{ post.date | date: '%Y-%m-%d' }} \| [{{ post.title }}]({{post.url}})
{% endfor %}
