document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("titulo");
  const subtitulo = document.getElementById("subtitulo");
  const gallery = document.getElementById("gallery");
  const ano = document.getElementById("ano");

  // Conteúdo dinâmico
  titulo.textContent = "📚 Mundo da Matemática";
  subtitulo.textContent = "Clique nas imagens para abrir os aplicativos matemáticos!";
  ano.textContent = new Date().getFullYear();

  // Lista de apps
  const apps = [
    {
      nome: "Basic Math",
      img: "img/basicmath.png",
      url: "https://dvalenascimento.github.io/basicmath/",
    },
    {
      nome: "Tabuada de Pitágoras",
      img: "img/pitágorasbgout.png",
      url: "https://dvalenascimento.github.io/tabuada_pitagoras/",
    },
    {
      nome: "Hissan",
      img: "img/hissan.jpg",
      url: "https://dvalenascimento.github.io/hissan.mjm/",
    },
    {
      nome: "Tabuada Blitz",
      img: "img/tabuadablitz.png",
      url: "https://dvalenascimento.github.io/tabuada_blitz.project/",
    },
    {
      nome: "Visual Percent",
      img: "img/visualpercent.png",
      url: "https://dvalenascimento.github.io/visualpercent/",
    },
    {
      nome: "Calc Pro Plus",
      img: "img/calcproplus.png",
      url: "https://dvalenascimento.github.io/calcPro_Plus.Project/",
    },
  ];

  // Criar cards dinamicamente
  apps.forEach(app => {
    const card = document.createElement("div");
    card.style.width = "200px";
    card.style.background = "#fff";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    card.style.cursor = "pointer";
    card.style.overflow = "hidden";
    card.style.transition = "transform 0.2s, box-shadow 0.2s";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";

    const img = document.createElement("img");
    img.src = app.img;
    img.alt = app.nome;
    img.style.width = "100%";
    img.style.height = "150px";
    img.style.objectFit = "cover";

    const span = document.createElement("span");
    span.textContent = app.nome;
    span.style.padding = "0.75rem";
    span.style.color = "#007acc";
    span.style.fontWeight = "bold";
    span.style.fontSize = "1rem";

    // Efeitos de hover
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });

    // Clique para abrir
    card.addEventListener("click", () => {
      window.location.href = app.url;
    });

    card.appendChild(img);
    card.appendChild(span);
    gallery.appendChild(card);
  });

  // Responsividade JS (opcional extra)
  const resizeHandler = () => {
    document.body.style.fontSize = window.innerWidth < 500 ? "14px" : "16px";
  };

  window.addEventListener("resize", resizeHandler);
  resizeHandler();
});
