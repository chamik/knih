(function () {
    function layout(container) {
        const items = Array.from(container.children);

        container.style.position = 'relative';
        for (const item of items) item.style.position = 'absolute';
        if (!items.length) {
            container.style.height = '';
            return;
        }

        const cs = getComputedStyle(container);
        const padLeft = parseFloat(cs.paddingLeft);
        const padTop = parseFloat(cs.paddingTop);
        const width = container.clientWidth - padLeft - parseFloat(cs.paddingRight);

        const first = getComputedStyle(items[0]);
        const marginRight = parseFloat(first.marginRight);
        const colWidth = parseFloat(first.marginLeft) + items[0].getBoundingClientRect().width + marginRight;
        
        const cols = Math.max(1, Math.floor((width + marginRight + 0.5) / colWidth));

        const heights = new Array(cols).fill(0);
        for (const item of items) {
            const s = getComputedStyle(item);
            const col = heights.indexOf(Math.min(...heights));
            item.style.left = padLeft + col * colWidth + 'px';
            item.style.top = padTop + heights[col] + 'px';
            heights[col] += parseFloat(s.marginTop) + item.getBoundingClientRect().height + parseFloat(s.marginBottom);
        }

        container.style.height = Math.max(...heights) + padTop + parseFloat(cs.paddingBottom) + 'px';
    }

    function init(container) {
        let scheduled = false;
        const schedule = () => {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(() => {
                scheduled = false;
                layout(container);
            });
        };

        layout(container);
        const observer = new ResizeObserver(schedule);
        observer.observe(container);
        for (const item of container.children) observer.observe(item);
    }

    document.querySelectorAll('.waterfall').forEach(init);

    // The browser may have already jumped to the #anchor using the pre-layout
    // positions, so jump again now that items are in place.
    if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) target.scrollIntoView();
    }
})();
