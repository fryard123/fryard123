function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("http://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700|Montserrat:400,400i,400,500,600,700,700i|Righteous");
loadCSS("http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
loadCSS("http://cdn.linearicons.com/free/1.0.0/icon-font.min.css"); 