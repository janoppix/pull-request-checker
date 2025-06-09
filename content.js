(function () {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setup);
    } else {
      setup();
    }
  
    function setup() {
      observeRouteChanges();
      run(); // Ejecutar al inicio por si ya estamos en la vista correcta
    }
  
    function observeRouteChanges() {
      const targetNode = document.body;
      const config = { childList: true, subtree: true };
  
      let lastUrl = location.href;
  
      const callback = function (mutationsList, observer) {
        if (location.href !== lastUrl) {
          lastUrl = location.href;
          // Esperar un pequeño delay para asegurar que el nuevo DOM esté listo
          setTimeout(run, 300);
        }
      };
  
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
  
    function run() {
      const isComparePage = /^\/[^\/]+\/[^\/]+\/compare/.test(location.pathname);
      if (!isComparePage){
        return;
      }
  
      const target = document.querySelector(".js-range-editor");
      if (!target) return;
  
      if (document.getElementById("my-pr-message")) return;
  
      target.style.position = 'relative';
  
      const style = document.createElement("style");
      style.textContent = `
        @keyframes floatUpDown {
          0%   { top: 38px; }
          50%  { top: 43px; }
          100% { top: 38px; }
        }
  
        #my-pr-message {
          position: absolute;
          top: 38px;
          font-weight: bold;
          color: #fff;
          animation: floatUpDown 1.5s ease-in-out infinite;
          z-index: 9999;
        }
      `;
      document.head.appendChild(style);
  
      const p = document.createElement("p");
      p.id = "my-pr-message";
      p.textContent = "🔪 Recuerda hacer el pull request en base a staging. 🚧";
  
      target.appendChild(p);
    }
  })();
  