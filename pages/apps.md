---
layout: page
title: Apps for elementary
permalink: /apps/
---

<table class="overview tablesorter">
  <thead>
    <tr>
      <th>Name</th>
      <th>Info</th>
      <th>Authors</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.pages %}
      {% if post.layout == 'app' && post.published == 'true' %}
        <tr id="{{ post.url }}">
          <td>
            <a href="{{ site.baseurl }}{{ post.url }}" style="font-weight:bold">
              {{ post.title }}
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

<p>
  We currently have {{ site.pages | size }} <a href="{{ site.baseurl }}/apps/">apps</a> and pieces of <a href="{{ site.baseurl }}/art/">art</a> in our database. Something missing? <a href="https://github.com/quassy/elementary-apps/issues/new">Report it at GitHub.</a>
</p>