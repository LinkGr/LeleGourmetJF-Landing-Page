let mais_vendidos_container = document.querySelector("#mais-vendidos-row");
let cardapio_container = document.querySelector("#cardapio-itens");

let mais_vendidos = [
  {
    titulo: "Combo de 110 unidades",
    descricao: "Grátis 5 mini-churros.",
    preco: 68.5,
    image_url: "",
  },
  {
    titulo: "Combo de 100 unidades",
    descricao: "Grátis 1 Coca-Cola 2L.",
    preco: 68.5,
    image_url: "",
  },
  {
    titulo: "Combo de 50 unidades",
    descricao: "Grátis 5 mini-churros.",
    preco: 68.5,
    image_url: "",
  },
];

let cardapio = [
  {
    titulo: "Combo Personalizado",
    descricao: "Faça sua encomenda do seu jeito",
    preco: null,
    image_url: "",
  },
  {
    titulo: "Combo de 110 Unidades",
    descricao: "Grátis 1 Coca-Cola 2L",
    preco: 79.99,
    image_url: "",
  },
  {
    titulo: "Combo de 100 Unidades",
    descricao: "Grátis 1 Sukita Laranja 2L",
    preco: 76.99,
    image_url: "",
  },
  {
    titulo: "Combo de 100 Unidades",
    descricao: "Grátis 15 mini-churros",
    preco: 76.99,
    image_url: "",
  },
  {
    titulo: "Combo de 60 Unidades",
    descricao: "Grátis 10 salgados",
    preco: 55,
    image_url: "",
  },
  {
    titulo: "Combo de 50 Unidades + 20 mini-churros",
    descricao: "Grátis 10 salgados",
    preco: 55,
    image_url: "",
  },
  {
    titulo: "Combo de 30 Unidades",
    descricao: "Grátis 1 Coca-Cola 200ml",
    preco: 34.99,
    image_url: "",
  },
];

function onLoad() {
  MaisVendidosContentPlacement();
  CardapioContentPlacement();
}

function MaisVendidosContentPlacement() {
  let html_element = "";
  let whatsapp_link = "";
  let preco = "";

  mais_vendidos.reverse().forEach((element) => {
    whatsapp_link = `https://api.whatsapp.com/send?phone=5532988898577&text=${`Ola, gostaria de um ${element.titulo}`.replace(
      " ",
      "%20"
    )}.`;

    if(element.preco === null) preco = ""
    else {
        preco = "R$" + parseFloat(element.preco).toFixed(2);
    }

    html_element = `
            <section class="mais-vendidos-item">
                <picture>
                    <img src="${element.image_url}" alt="imagem do produto">
                </picture>
                <div>
                    <article>
                        <h3>${element.titulo}</h3>
                        <p>${element.descricao}</p>
                    </article>
                    <div>
                        <p>${preco}</p>
                        <a href="${whatsapp_link}" target="_blank" class="whatsapp-button" >
                            <img src="./src/img/icons/whatsapp-brown.svg" alt="logo do whatsapp">
                        </a>
                    </div>
                </div>
            </section>
        `;

    mais_vendidos_container.insertAdjacentHTML("afterbegin", html_element);
  });
}

function CardapioContentPlacement() {
  let html_element = "";
  let whatsapp_link = "";
  let preco;

  cardapio.reverse().forEach((element) => {
    whatsapp_link = `https://api.whatsapp.com/send?phone=5532988898577&text=${`Ola, gostaria de um ${element.titulo}`.replace(
      " ",
      "%20"
    )}.`;

    if (element.preco === null) preco = "";
    else {
      preco = "R$" + parseFloat(element.preco).toFixed(2);
    }

    html_element = `
        <section class="cardapio-item">
            <picture><img src="${
              element.image_url
            }" alt="imagem do produto"></picture>
            <div>
                <article>
                    <h3>${element.titulo}</h3>
                    <p>${element.descricao}</p>
                </article>
                <div>
                    <p>${preco}</p>
                    <a href="${whatsapp_link}" target="_blank" class="whatsapp-button">
                        <img src="./src/img/icons/whatsapp-brown.svg" alt="logo do whatsapp">
                    </a>
                </div>
            </div>
        </section>
     `;

    cardapio_container.insertAdjacentHTML("afterbegin", html_element);
  });
}
