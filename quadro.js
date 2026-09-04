/* =============================================================================
   Quadro do time — comportamento compartilhado pelas paginas de projeto.

   Tres coisas, e so: marcar tarefa, contar quanto falta, e destacar a secao
   atual na navegacao.

   A marcacao vive em localStorage e a chave inclui o caminho da pagina --
   sem isso os tres quadros dividiriam o mesmo estado e marcar tarefa da Elak
   marcaria a do Gestor. Fica so no aparelho de quem abriu: nao e placar
   compartilhado, e a pagina diz isso em voz alta para ninguem achar que o
   socio do lado esta vendo.
   ============================================================================= */
(function () {
  var CHAVE = 'elak-quadro:' + location.pathname.replace(/\/index\.html$/, '/');
  var salvo = {};
  try {
    salvo = JSON.parse(localStorage.getItem(CHAVE) || '{}');
  } catch (e) {
    salvo = {};
  }

  function grava() {
    try {
      localStorage.setItem(CHAVE, JSON.stringify(salvo));
    } catch (e) {
      /* Aba anonima, site data bloqueado. A pagina funciona igual, so nao lembra. */
    }
  }

  function conta() {
    var feitas = 0;
    var total = 0;
    document.querySelectorAll('ul.tarefas').forEach(function (ul) {
      var dono = ul.dataset.dono;
      var n = 0;
      ul.querySelectorAll('li').forEach(function (li) {
        total++;
        if (li.querySelector('input').checked) {
          n++;
          feitas++;
        }
      });
      var alvo = document.querySelector('[data-conta="' + dono + '"]');
      if (alvo) alvo.textContent = n;
    });
    var p = document.getElementById('placar');
    if (p) p.textContent = feitas + '/' + total;
  }

  document.querySelectorAll('ul.tarefas li').forEach(function (li) {
    var id = li.dataset.id;
    var cx = li.querySelector('input');
    if (id in salvo) cx.checked = salvo[id];
    li.classList.toggle('ok', cx.checked);
    cx.addEventListener('change', function () {
      salvo[id] = cx.checked;
      li.classList.toggle('ok', cx.checked);
      grava();
      conta();
    });
  });
  conta();

  /* Dias restantes, contados em dia de calendario e nao em horas -- senao
     "faltam 7 dias" vira 8 so porque ainda nao deu meia-noite. A data vem do
     HTML (data-prazo="2026-09-11"); pagina sem prazo simplesmente nao mostra. */
  var el = document.getElementById('dias');
  if (el && el.dataset.prazo) {
    var partes = el.dataset.prazo.split('-');
    var alvo = new Date(+partes[0], +partes[1] - 1, +partes[2]);
    var hj = new Date();
    hj = new Date(hj.getFullYear(), hj.getMonth(), hj.getDate());
    var d = Math.round((alvo - hj) / 86400000);
    el.textContent = d > 1 ? d + ' dias' : d === 1 ? '1 dia' : d === 0 ? 'é hoje' : 'passou';
  }

  var links = [].slice.call(document.querySelectorAll('nav a[href^="#"]'));
  var secs = links.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  function ativa() {
    var y = window.scrollY + 120;
    var i = 0;
    secs.forEach(function (s, k) {
      if (s && s.offsetTop <= y) i = k;
    });
    links.forEach(function (a, k) {
      a.classList.toggle('on', k === i);
    });
  }
  window.addEventListener('scroll', ativa, { passive: true });
  ativa();
})();
