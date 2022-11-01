---
layout: page
title: O stránce
---

## O stránce
{: .text-brown}

Tato stránka slouží převážně pro mě; pro uchování pocitů a dojmů po přečtení knihy, které se kvůli mé špatné paměti po pár dnech rozplynou jako dým. Taky se hodí jako rychlá reference lidem, kterým nějakou specifickou knihu doporučuji.

Moji hlavní stránku můžete nalézt na [chamik.eu](https://chamik.eu){:target="_blank" .text-brown}.

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
