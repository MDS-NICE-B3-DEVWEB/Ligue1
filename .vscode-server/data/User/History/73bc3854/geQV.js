import React, { useEffect } from 'react';
import './Match.css';

function Match() {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'js-statorium-id-166';
    script.src = 'https://statorium.com/components/com_statoriumwidgets/assets/js/widget.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    script.onload = () => {
      if (window.jsStatoriumWidget) {
        const jsStatoriumWidgetClone = Object.assign({}, window.jsStatoriumWidget);
        jsStatoriumWidgetClone.setOptions({
          targetId: 'js-statorium-widget-166',
          widgetID: 16,
        });
        jsStatoriumWidgetClone.render();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="js-statorium-widget-164"></div>;
}

export default Match;