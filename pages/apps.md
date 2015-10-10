---
layout: page
title: Apps for elementary
permalink: /apps/
---

We currently have {{ site.pages | size }} [apps]({{ site.baseurl }}/apps/) and pieces of [art]({{ site.baseurl }}/art/) in our database. Something missing? [*Report it at GitHub.*](https://github.com/quassy/elementary-apps/issues/new)

<table class="overview tablesorter">
  <thead>
    <tr>
      <th>Name</th>
      <th>Info</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted = site.pages | sort:"updated" %}
    {% for post in sorted | sort:"updated" %}
      {% if post.layout == 'app' && post.published != 'false' %}
        <tr id="{{ post.url }}">
          <td>
            <a href="{{ site.baseurl }}{{ post.url }}" style="font-weight:bold">
              {% if post.title %}{{ post.title }}{% else %}{{ post.name | remove: ".md" }}{% endif %}
            </a>
            {% if post.installation %}<span class="octicon octicon-package" title="Package available"></span>{% endif %}
            {% if post.screenshots %}<span class="octicon octicon-device-desktop" title="Screenshot available"></span>{% endif %}
            <br/>
            {% include list_links.html %}
          </td>
          <td>
            {{ post.generic }}<br/>
            {{ post.license }}
          </td>
          <td>
            {% include list_authors.html %}
          </td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>

<p><a class="b" href="https://github.com/quassy/elementary-apps/issues/new"><span class="octicon octicon-pencil"></span> Report a missing app on GitHub!</a></p>