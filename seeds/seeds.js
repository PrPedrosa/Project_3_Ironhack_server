const fishes = [
    {
      commonName: "Sargo-comum",

      scientificName: "Diplodus sargus",

      image: "",

      description: "Corpo oval de cor prateada, com nove bandas negras verticais e uma mancha negra característica junto à barbatana caudal. Alimenta-se principalmente à noite de moluscos, crustáceos, ouriços-do-mar e algas que encontra no fundo. Apresenta uma forte dentição com várias séries de dentes incisivos e molares em ambos os maxilares, que lhe permitem esmagar os crustáceos e bivalves de que se alimenta. A reprodução ocorre no final do Inverno e início da Primavera, momento em que forma grandes cardumes. Ocorre em geral em cardumes com cerca de uma dezena de indivíduos, muitas vezes incluindo indivíduos de outras espécies, sendo comum em buracos de média dimensão e nas zonas de rebentação junto à costa. É pescado com arrasto e redes de emalhar.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal",

      habitat: "O habitat preferencial são as zonas do infralitoral de fundo rochoso ou semiarenoso.",

      areaFound: "É encontrado no Atlântico Nordeste, Arquipélago da Madeira e Mar Mediterrâneo.",

      maxLength: 45,

      minCatchSize: 15,
    },
    {
      commonName: "Robalo",

      scientificName: "Dicentrarchus labrax",

      image: "",

      description: "Corpo alongado de cor cinzento-prateado com reflexos azuis ou verdes, ventre amarelado ou branco.Os juvenis podem apresentar manchas negras na parte superior, sendo estas raras nos adultos. Os juvenis formam cardumes em conjunto com outras espécies, enquanto os adultos vivem solitários ou em agrupamentos reduzidos. Alimenta-se de crustáceos, peixes e moluscos. É uma espécie migratória que pode penetrar nos estuários. Reproduz-se de janeiro a abril. É pescado com arrasto e redes de emalhar. É a terceira espécie mais produzida por aquicultura em Portugal, depois do pregado e da dourada. O robalo pode ser confundido com a baia (Dicentrarchus punctatus), mas apenas quando juvenil, pois a baia não atinge as mesmas dimensões do robalo.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal.",

      habitat: "Habita os estuários enquanto juvenil, suportando águas de baixa salinidade. Quando adulto habita águas até aos 100 m de profundidade.",

      areaFound: "É encontrado no Atlântico Este, desde as ilhas Britânicas e o sul da Noruega até ao Senegal, incluindo a Macaronésia (Madeira, Canárias e Cabo Verde), à exceção dos Açores. Também se encontra no Mar Mediterrâneo e Mar Negro.",

      maxLength: 100,

      minCatchSize: 36,
    },
    {
      commonName: "Polvo",

      scientificName: "Octopus vulgaris",

      image: "",

      description: "Corpo mole tipo saco, oito braços com duas fiadas de ventosas em cada um, e uma cor e textura que varia com o estado do animal e o fundo em que se encontra, devido à capacidade de camuflagem que apresenta. Alimenta-se de crustáceos (especialmente caranguejos), moluscos e peixes. A única parte rígida do polvo são as mandíbulas, na boca, vulgarmente chamadas de “bico”, e que usa para cortar e triturar os alimentos. Reproduz-se durante todo o ano, com períodos de maior intensidade na Primavera e no Outono e a fêmea morre após efetuar a postura e cuidar de cerca de 500.000 ovos. Os machos morrem depois do período de cópula. É pescado com arrasto e com armadilhas de abrigo (alcatruz) e de gaiola (covo).",

      threatCategory: "Pouco preocupante (LC)",

      habitat: "Águas costeiras até aos 200 m de profundidade",

      areaFound: "É encontrado no Atlântico Nordeste e Mar Mediterrâneo, Península Ibérica e nos Arquipélagos da Madeira e dos Açores.",

      maxLength: 130,

      minCatchWeight: 0.75,
    },
    {
      commonName: "Choco",

      scientificName: "Sepia officinalis",

      image: "",

      description: "Corpo oval achatado, com uma concha interna, a siba, oito braços com fiadas de ventosas e dois tentáculos longos e retrácteis, que utiliza para capturar as presas. O corpo cinzento-esbranquiçado apresenta frequentemente bandas dorsais escuras. Predador noturno, alimenta-se preferencialmente de caranguejos, bivalves e peixes. Migra no Verão para águas mais costeiras. A reprodução ocorre entre Fevereiro e Outubro, com posturas até 4.000 ovos. É pescado com redes de emalhar e com armadilhas de gaiola (covo). Os chocos são chamados de “camaleões do mar” pela capacidade e rapidez de mudarem de cor e padrão do corpo, para comunicarem com outros, para se camuflarem e como aviso aos predadores.",

      threatCategory: "Pouco preocupante (LC)",

      habitat: "Habita junto ao fundo marinho, sendo mais comum até aos 200 m.",

      areaFound: "É encontrado no Atlântico Nordeste, Arquipélago da Madeira e Mar Mediterrâneo.",

      maxLength: 45,

      minCatchSize: 10,
    },
    {
      commonName: "Tainha-Olhalvo",

      scientificName: "Mugil cephalus",

      image: "",

      description: "Corpo alongado, de secção cilíndrica, cabeça maciça e achatada dorsalmente. Coloração cinzenta-azulada ou esverdeada no dorso e ventre claro.  A boca é pequena e terminal e a extremidade posterior do maxilar não é visível com a boca fechada. Apresenta tecido adiposo a cobrir a maior parte da pupila. Barbatanas peitorais curtas, inseridas a meia distância entre os níveis da base das peitorais e da origem da barbatana dorsal. É uma espécie que tolera grandes variações de salinidade e de temperatura (entre 8º a 24ºC). Alimenta-se principalmente de zooplâncton, matéria vegetal morta e detritos. Reproduz-se em água salgada mas passa a maior parte da sua vida em água doce. Durante os meses de outono e inverno os adultos migram para o mar para desovar.",

      threatCategory: "Pouco preocupante (LC)",

      habitat: "Encontra-se perto da costa, em enseadas e lagoas com fundo de areia ou lama, em estuários e ambientes de água doce.",

      areaFound: "É uma espécie cosmopolita nas águas costeiras de zonas tropicais, subtropicais e temperadas de todos os mares.",

      maxLength: 120,

      minCatchSize: 20,
    },
    {
      commonName: "Sargo-safia",

      scientificName: "Diplodus vulgaris",

      image: "",

      description: "Corpo oval e comprido, coloração cinzenta. Apresenta uma grande mancha escura sobre a nuca e uma banda em forma de anel sobre o pedúnculo caudal, estendendo-se para a parte posterior das barbatanas dorsal e anal. Barbatana caudal escura. A sua dieta é composta essencialmente por crustáceos, vermes e moluscos. É uma espécie hermafrodita, que se reproduz de dezembro a março, com um pico em janeiro/ fevereiro. Atinge a idade de primeira maturação aos dois anos, com aproximadamente 15-20 cm de comprimento. Possui valor económico na pesca comercial e na aquariofilia, sendo ainda uma espécie capturada pela pesca de recreio.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal",

      habitat: "Espécie subtropical, eurialina, bentopelágica, que ocorre até 160 m em fundos rochosos e arenosos.",

      areaFound: "É encontrado no Atlântico Este, desde o Golfo da Biscaia até África do Sul, incluindo o Mediterrâneo e o Mar Negro.",

      maxLength: 45,

      minCatchSize: 15,
    },
    {
      commonName: "Dourada",

      scientificName: "Sparus aurata",

      image: "",

      description: "Corpo muito ovalado de cor cinzento-prata e uma mancha dourada entre os olhos, origem do nome “dourada”. Vive solitária ou em pequenos grupos e alimenta-se de moluscos, crustáceos e ouriços-do-mar. Reproduz-se de outubro a dezembro e, apesar de desovar no mar, os juvenis procuram a proteção dos estuários para se desenvolverem. A maioria das douradas nasce macho e só com a maturação sexual é que se pode converter em fêmea. Este hermafroditismo sequencial ocorre também nos sargos e gorazes. É pescada com arrasto e redes de emalhar, sendo a segunda espécie mais produzida em aquicultura em Portugal, apenas ultrapassada pelo pregado.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal",

      habitat: "Habita a coluna de água em zonas até 150 m de profundidade.",

      areaFound: "É encontrada no Atlântico Nordeste e Mar Mediterrâneo.",

      maxLength: 70,

      minCatchSize: 19,
    },
    {
      commonName: "Salema",

      scientificName: "Sarpa salpa",

      image: "",

      description: "Corpo oval-oblongo, lateralmente comprimido, com coloração cinzento-azulada e 10 ou 11 típicas listas longitudinais douradas com reflexos alaranjados. A face ventral é mais clara e não apresenta listras. A cabeça é pequena, mais escura, terminando num focinho rombo, com boca pequena, terminal e com lábios grossos. Na base das barbatanas peitorais apresenta uma pequena mancha negra. A espécie é hermafrodita, reproduzindo-se na primavera e outono. Os indivíduos jovens são predominantemente carnívoros, mas os adultos são essencialmente peixes herbívoros, alimentando-se quase exclusivamente de algas. Ocorre em geral em cardumes numerosos, cujos membros se mantêm densamente agrupados e se movem de forma coordenada. Ao menor sinal de perigo, o cardume inteiro inicia uma rápida manobra de fuga, nadando rapidamente em uníssono, alterando a direção de forma coordenada, como fosse um único indivíduo. É pescada à cana a partir da costa e com pequenas redes de cerco.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal",

      habitat: "Vive entre os 2 e os 100 m. É um típico peixe das pequenas poças da zona entremarés, suportando águas salobras e pouco oxigenadas.",

      areaFound: "Apresenta uma ampla área de distribuição natural, que abrange a generalidade das águas costeiras das regiões intertropicais e subtropicais da margem leste do Oceano Atlântico, incluindo o Mediterrâneo, a costa ibérica e os arquipélagos da Macaronésia.",

      maxLength: 50,

      minCatchSize: 18,
    },
    {
      commonName: "Bodião",

      scientificName: "Symphodus melops",

      image: "",

      description: "Corpo profundo e comprimido lateralmente, com uma única e longa barbatana dorsal. Cor variável, em função da idade do indivíduos. As fêmeas e os juvenis tendem a ser castanhos ou castanho-esverdeados com numerosas manchas no corpo, mais ou menos alinhadas longitudinalmente. Algumas linhas sinuosas na cabela e 5 manchas na barbatana dorsal. Os machos são mais coloridos, tendo um fundo esverdeado ou azulado. Apresenta uma mancha preta no meio do pedúnculo caudal e uma mancha em forma de vírgula atrás do olho. Da sua dieta fazem parte moluscos, vermes e vários crustáceos. A desova ocorre principalmente na primavera. Os machos constroem ninhos de algas em fendas na rocha ou entre algas marinhas em áreas de sedimento.",

      threatCategory: "Pouco preocupante (LC)",

      habitat: "Vive em costas rochosas entre algas, até profundidades de 50m.",

      areaFound: "É encontrada no Atlântico, desde a Noruega até Marrocos e Ações, no Mediterrâneo e no Adriático.",

      maxLength: 30,

      minCatchSize: null,
    },
    {
      commonName: "Sargo-alcorraz",

      scientificName: "Diplodus annularis",

      image: "",

      description: "Corpo oval e comprimido, de coloração cinzenta-amarelada com reflexos prateados, barbatanas pélvicas amareladas e uma mancha negra quase anelar em volta do pedúnculo caudal. Alimenta-se de crustáceos, moluscos,  equinodermes e hidrozoários. Reproduz-se entre abril e junho. Os sexos são separados mas alguns indivíduos são hermafroditas, podendo os machos transformar-se em fêmeas. Corpo oval e comprimido, de coloração cinzenta-amarelada com reflexos prateados, barbatanas pélvicas amareladas e uma mancha negra quase anelar em volta do pedúnculo caudal. Alimenta-se de crustáceos, moluscos,  equinodermes e hidrozoários. Reproduz-se entre abril e junho. Os sexos são separados mas alguns indivíduos são hermafroditas, podendo os machos transformar-se em fêmeas.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal",

      habitat: "Habita no litoral, sobre fundos arenosos e rochosos com algas, principalmente em pradarias marinhas.",

      areaFound: "Encontra-se no Atlântico Este, Ilhas Canárias, Mediterrâneo e Mar Negro.",

      maxLength: 27.5,

      minCatchSize: 15,
    },
    {
      commonName: "Choupa",

      scientificName: "Spondyliosoma cantharus",

      image: "",

      description: "Corpo oval comprimido, perfil da cabeça deprimido por cima dos olhos. Apresenta quatro a seis fiadas de dentes finos e pontiagudos em cada maxila. Coloração cinzenta prateada, sobre os flancos listas longitudinais amarelo dourado, mais ou menos descontínuas. Os adultos são peixes de carca de 35 a 40 cm, podendo atingir os 60cm. Exibe comportamento gregário, formando grandes cardumes. É uma espécie omnívora, alimentando-se de algas e pequenos invertebrados, especialmente crustáceos. A desova ocorre entre fevereiro e maio, dependendo da sua localização e os ovos são depositados na areia. Alguns indivíduos são hermafroditas, podendo as fêmeas transformar-se em machos.",

      threatCategory: "Pouco preocupante (LC) a nível mundial; Comercialmente Ameaçado (CT) em Portugal",

      habitat: "Espécie subtropical, bentopelágica, que ocorre entre os 5m e os 300m de profundidade, tanto em fundos arenosos como rochosos.",

      areaFound: "Encontra-se no Atlântico Este, da Escandinávia ao norte da Namíbia, incluindo o estreito de Gibraltar, Mediterrâneo, Madeira, Ilhas Canárias, Cabo Verde e Mar Negro.",

      maxLength: 60,

      minCatchSize: 23,
    },
]