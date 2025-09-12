---
layout: page
title: O stránce
---

## O stránce
{: .text-brown}

Tato stránka slouží převážně pro mě -- pro uchování pocitů a dojmů po přečtení knihy. Taky se hodí jako rychlá reference lidem, kterým nějakou specifickou knihu doporučuji.

{% assign pagecounter = 0 %}
{% assign bookcounter = 0 %}
{% for post in site.posts %}
    {% if post.books%}
        {% assign bookcounter = bookcounter | plus: post.books %}
    {% else %}
        {% assign bookcounter = bookcounter | plus: 1 %}
    {% endif %}
    
    {% assign pagecounter = pagecounter | plus: post.pages %}
{% endfor %}

Dohromady jsem něco málo napsal o {{bookcounter}} knihách ({{pagecounter}} stránkách).

Můj hlavní web s články najdeš na [chamik.eu](https://chamik.eu). Zdroj stránky nalezneš na mém [Githubu](https://github.com/chamik/knih).