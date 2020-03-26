import React, { useState } from 'react';

const containerStyle = () => ({
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
});

export default function Map() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={loaded ? containerStyle() : {}}>
      <button onClick={() => setLoaded(!loaded)}>
        {loaded ? 'Hide Map' : 'Show Map'}
      </button>
      {loaded ? (
        <iframe
          title="Corona map WHO."
          class="iframe-widget_3"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
          allowfullscreen=""
          src="https://who.maps.arcgis.com/apps/opsdashboard/index.html#/31ba38ba24924aaeb940f15b5e95a1e6"
          frameborder="0"
          style={{
            display: loaded ? 'inherit' : 'none',
            width: '100%',
            height: '100%',
          }}
        ></iframe>
      ) : null}
    </div>
  );
}
