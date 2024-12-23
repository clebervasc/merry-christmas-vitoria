import { useState } from "react";

import Map from "../../components/Map";
import Timeline from "../../components/Timeline"
import Modal from "../../components/Modal"

const points = [
  {
    "title": "Primeira Vez que te Vi",
    "description": "Eu te vi pela primeira vez em uma hamburgueria vegana kkkk. É, o amor começou em um lugar onde a gente jamais imaginaria, já que somos #TeamCarnivoro. Mas meu mundo parou no momento em que te vi, foi incrível como naquele lugar eu só tinha olhos pra você! 🍔❤️",
    "contentType": "image",
    "content": "https://static.vecteezy.com/ti/fotos-gratis/t2/37371298-ai-gerado-uma-casal-do-amor-faz-uma-em-forma-de-coracao-gesto-enquanto-a-por-do-sol-ai-fundo-foto.jpg",
    "gift": "Um encontro para comermos um hambúrguer de verdade e darmos boas risadas!",
    "coordinates": [-47.3376610, -22.7419474]
  },
  {
    "title": "Primeiro Date",
    "description": "Lembro da nossa primeira vez no Méqui. Você estava toda suja de cheddar e não parava de rir! Eu não consegui deixar de achar a cena fofa e engraçada ao mesmo tempo. Você foi um dos primeiros motivos de eu começar a amar suas risadas e a sua espontaneidade. Aquele foi o melhor horario de almoço que eu tive até então! Eu nunca vou esquecer. 💛",
    "contentType": "image",
    "content": "https://link-para-imagem.jpg",
    "gift": "Um encontro no McDonald's, mas dessa vez sem o cheddar espalhado por todo lado! 😂",
    "coordinates": [-47.3498109, -22.7524136]
  },
  {
    "title": "Primeira Conversa Sobre Família",
    "description": "Aquele dia na minha casa foi inesquecível! Eu tava tão nervoso que parecia até um adolescente falando sobre família como se fosse um trabalho de escola. Mas você foi incrível, me ouviu, riu das minhas histórias e ainda compartilhou coisas tão bonitas sobre a sua vida. Eu percebi ali que você era a pessoa mais especial que já conheci. ❤️",
    "contentType": "image",
    "content": "https://link-para-imagem.jpg",
    "gift": "Um jantar só nós dois, pra relembrar como tudo começou.",
    "coordinates": [-47.3505161, -22.7183844]
  },
  {
    "title": "O Abraço na Hora Difícil",
    "description": "Quando você me contou que sua avó estava no hospital, eu pude ver o quanto esse momento estava mexendo com você. Te abracei forte, porque queria te dar todo o apoio do mundo. Ali eu soube o quanto eu queria estar ao seu lado para tudo. ❤️",
    "contentType": "image",
    "content": "https://link-para-imagem.jpg",
    "gift": "um abraço apertado sempre que precisar, assim como aquele.",
    "coordinates": [-47.3599027, -22.7094504]
  },
  {
    "title": "Primeira Busca pelo Luca",
    "description": "Quando fomos buscar o Luca pela primeira vez, nem parecia que tinha sido só coincidência a gente falar 'Carry' na mesma hora! Era como se as nossas mentes já estivessem sincronizadas. Foi o começo de um trio que eu nem sabia que precisava tanto na vida. 🐶❤️",
    "contentType": "text",
    "content": "https://link-para-imagem-cachorro.jpg",
    "gift": "Um dia especial com o Luca: passear, brincar e terminar com pizza (pra gente, claro).",
    "coordinates": []
  },
  {
    "title": "A Casa que Não Deu Certo",
    "description": "Quando fomos olhar aquela casa e percebemos que não ia rolar, eu lembro só de querer resolver tudo pra você e o Luca. Eu já sabia que você era o meu lugar no mundo, e que fazer você feliz era a coisa mais importante. ❤️",
    "contentType": "text",
    "content": "https://link-para-imagem-casa.jpg",
    "gift": "",
    "coordinates": []
  },
  {
    "title": "Conhecendo Seu Irmão",
    "description": "Aquele dia em que você me levou para conhecer seu irmão e eu levei cerveja. Vocês armando esquema para o Rafa conversar comigo, fingindo que iam levar o lixo... Achei que estava em um reality show, mas era só o amor conspirando. 🍻❤️",
    "contentType": "image",
    "content": "",
    "gift": "Mais momentos em família com risadas e cerveja gelada!",
    "coordinates": []
  },
  {
    "title": "O Dia da Mudança (A casa que deu certo)",
    "description": "Aquele dia foi especial, mesmo com caixas pra lá e pra cá e a bagunça da mudança. Parecia que estávamos oficialmente construindo algo juntos, mesmo sem termos dado 'nome' pra isso. Eu sabia que queria estar ao seu lado pra sempre. ❤️",
    "contentType": "image",
    "content": "https://link-para-imagem-mudanca.jpg",
    "gift": "Uma noite no sofá assistindo um filme com vinho (ou cerveja).",
    "coordinates": []
  },
  {
    "title": "Primeira Vez no Hopi Hari",
    "description": "A primeira vez que fomos ao Hopi Hari foi uma experiência tão divertida! Eu percebi o quanto você se entregou à diversão, e como isso me contagiou. Foi um dia de muitas risadas e aventura. Eu nunca imaginei que o parque fosse ser tão divertido até estar ao seu lado. 🎢❤️",
    "contentType": "image",
    "content": "https://link-para-imagem.jpg",
    "gift": "um retorno ao Hopi Hari, para reviver esse dia incrível.",
    "coordinates": [-47.00766654497832, -23.097043996199865]
  },
  {
    "title": "O Pedido de Namoro",
    "description": "Eu criei uma história sobre o nosso futuro, mas na verdade eu só queria construir ele com você. E aquele jantar foi só o acompanhamento perfeito pra uma das noites mais especiais da minha vida. ❤️🐟",
    "contentType": "image",
    "content": "https://link-para-imagem-pedido.jpg",
    "gift": "Um jantar especial com o mesmo salmão e muito amor.",
    "coordinates": []
  },
  {
    "title": "Primeira Vez",
    "description": "Esperei, porque sabia que valia cada segundo. Quando finalmente aconteceu, foi como se o mundo inteiro sumisse e só restasse você. Não foi só incrível, foi perfeito, porque foi com você. ❤️🔥",
    "contentType": "text",
    "content": "https://link-para-imagem-intima.jpg",
    "gift": "Um dia de spa em casa, pra cuidar de você como você merece.",
    "coordinates": []
  },
  {
    "title": "Conhecendo Sua Avó",
    "description": "O dia que você me levou para conhecer sua avó foi uma das primeiras vezes em que realmente senti que estava me tornando parte da sua vida. Foi um momento muito importante para mim, porque mostrou o quanto você me via como alguém significativo. ❤️🤏🏻",
    "contentType": "image",
    "content": "https://link-para-imagem.jpg",
    "gift": "um dia com a vó lia <3",
    "coordinates": []
  },
  {
    "title": "Primeira Vez na Praia",
    "description": "Lembro da brisa do mar, do sol brilhando e de como você parecia mais linda do que nunca. Aquele dia foi perfeito, porque estava ao seu lado. 🌊☀️",
    contentType: "carousel",
    content: [
      "https://static.vecteezy.com/ti/fotos-gratis/t2/37371298-ai-gerado-uma-casal-do-amor-faz-uma-em-forma-de-coracao-gesto-enquanto-a-por-do-sol-ai-fundo-foto.jpg",
      "https://static.vecteezy.com/ti/fotos-gratis/t2/37371298-ai-gerado-uma-casal-do-amor-faz-uma-em-forma-de-coracao-gesto-enquanto-a-por-do-sol-ai-fundo-foto.jpg",
      "https://static.vecteezy.com/ti/fotos-gratis/t2/37371298-ai-gerado-uma-casal-do-amor-faz-uma-em-forma-de-coracao-gesto-enquanto-a-por-do-sol-ai-fundo-foto.jpg",
    ],
    "gift": "Um final de semana no litoral só pra gente.",
    "coordinates": []
  },
  {
    "title": "Conhecendo Minha Família",
    "description": "Quando te apresentei pra minha família e meu irmão se empolgou com as bebidas... Foi um caos, mas você encarou como uma rainha! Esse dia mostrou que você é parte de tudo pra mim, até nos momentos mais malucos. ❤️🥂",
    "contentType": "text",
    "content": "",
    "gift": "Outro encontro especial com a família",
    "coordinates": []
  },
  {
    "title": "Centro de SP e o Estacionamento Fechado",
    "description": "Nosso passeio pelo centro de SP... Voltamos cheios de compras e um detalhe: sem carro, porque o estacionamento estava fechado! No dia foi um  desespero. Hoje a gente ri disso haha, a gente sempre acha uma forma de transformar caos em comédia. 🛍️🚗❤️",
    "contentType": "text",
    "content": "",
    "gift": "Uma ida ao centro de SP com tudo planejado e sem sustos!",
    "coordinates": []
  },
  {
    "title": "Um Mês na Casa Nova",
    "description": "Lembro como se fosse ontem: a gente sentou pra tomar cerveja e comemorar um mês na sua nova casa. Foi simples, mas tão especial. Um dia normal que ficou mágico só porque você estava nele. 🍻❤️",
    "contentType": "image",
    "content": "https://link-para-imagem-cerveja.jpg",
    "gift": "Um brinde com cervejas especiais pra lembrar daquele dia.",
    "coordinates": []
  },
  {
    "title": "Seu Cuidado Quando Eu Tive Dengue",
    "description": "Eu na pior fase, e você lá, cuidando de mim como se fosse a coisa mais natural do mundo. Não era só dengue que você curava... Era meu coração que você preenchia de amor. ❤️",
    "contentType": "text",
    "content": "",
    "gift": "Uma viagem só nossa, pra cuidar de nós dois.",
    "coordinates": []
  },
  {
    "title": "Visitando o Local do Nosso Casamento",
    "description": "O dia em que visitamos o lugar do nosso casamento... Nem noivos ainda, mas nossos olhares já diziam 'é aqui que nossa história vai brilhar'. Foi mágico, foi nós. 💍❤️",
    "contentType": "image",
    "content": "https://link-para-imagem-local-casamento.jpg",
    "gift": "Um passeio de volta ao nosso lugar especial para reviver aquele momento.",
    "coordinates": []
  },
  {
    "title": "O Pedido de Casamento",
    "description": "Eu, pelado, fingindo que caí. Você, sem acreditar no que estava acontecendo. Foi doido, foi engraçado, foi a gente. E você disse 'sim'! 💍😂❤️",
    "contentType": "text",
    "content": "https://link-para-imagem-pedido-casamento.jpg",
    "gift": "Um dia para reviver o pedido, mas sem tombos dessa vez. 😜",
    "coordinates": []
  },
  {
    "title": "Seu Aniversário na Praia",
    "description": "Eu só queria que o seu aniversário fosse perfeito... E foi. A praia, o sol, você sorrindo. Tudo que eu precisava estava ali: você e o mar dizendo 'parabéns' junto comigo. 🌊🎉❤️",
    "contentType": "image",
    "content": "https://link-para-imagem-aniversario-praia.jpg",
    "gift": "Outro aniversário inesquecível, com vista para o mar e muito amor.",
    "coordinates": []
  },
  {
    "title": "A Casa dos Sonhos",
    "description": "A gente procurando uma casa 'pra mim', mas no fundo eu já sabia que era pra nós. E quando você viu que era a casa dos seus sonhos, o brilho nos seus olhos fez tudo valer a pena. 🏡❤️",
    "contentType": "image",
    "content": "https://link-para-imagem-casa-sonhos.jpg",
    "gift": "Mais memórias felizes na nossa casa, nosso lar.",
    "coordinates": []
  },
  {
    "title": "Mudança Para Nossa Casa",
    "description": "O dia da mudança... com meu pai, caixas e muita risada. Foi bagunçado, foi cansativo, mas foi o começo do nosso lar, cheio de amor e histórias pra contar. 🚛❤️",
    "contentType": "image",
    "content": "",
    "gift": "Uma noite só nossa, celebrando tudo que construímos juntos.",
    "coordinates": []
  },
  {
    "title": "Primeiro Natal Juntos",
    "description": "Você e sua animação com o Natal... Contagiou até meu Grinch interior! Nunca pensei que fosse gostar tanto dessa época, mas com você tudo é mágico. 🎄❤️",
    "contentType": "image",
    "content": "https://link-para-imagem-natal.jpg",
    "gift": "Um Natal ainda mais especial, do jeitinho que você merece.",
    "coordinates": []
  }
];

function MapPage() {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTimelineClick = (index) => setCurrentPoint(index);
  const handleMarkerClick = (index) => {
    setCurrentPoint(index);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="MapPage">

      <>
        <Map
          points={points}
          onMarkerClick={handleMarkerClick}
          currentPoint={currentPoint}
        />
        <Timeline
          points={points}
          currentPoint={currentPoint}
          onClick={handleTimelineClick}
        />
        <Modal
          open={modalOpen}
          onClose={closeModal}
          point={points[currentPoint]}
        />
      </>
    </div>
  );
}

export default MapPage;
