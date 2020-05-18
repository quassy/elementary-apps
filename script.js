---
---
// Lazy loading
$(document).ready(function() {
  $("img").unveil();
});
// Table sort
$(function(){
  $(".tablesorter").tablesorter();
});
// Redirect https
if (window.location.protocol !== 'https:') {
  window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
}
{% if site.matomo_analytics %}
  // Piwik
  var _paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="{{ site.matomo_analytics }}";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '13']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
{% endif %}

// if site.pwa:
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('{{ site.baseurl }}/sw.js', { scope: '{{ site.baseurl }}/' }).then(function(reg) {
    console.log('Service worker registered. Scope: ' + reg.scope);
  }).catch(function(error) {
    console.log('Service worker failed to register with error: ' + error);
  });
};
