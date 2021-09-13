import { useEffect } from 'react';

function Crisp() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = 'b39189c7-34c8-402b-b864-c37910ccdc58';
    (() => {
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = 1;
      d.getElementsByTagName('body')[0].appendChild(s);
    })();
  });
  return <div></div>;
}

export default Crisp;
