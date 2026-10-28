/* Semana 2 — Vocabulário Prático & Conectivos */
window.COURSE = window.COURSE || [];

COURSE.push({
  n: 8, w: 2,
  title: 'Conectores: and, but, because, so, or',
  goal: 'Juntar duas frases em uma só.',
  yt: ['conjunctions and but because so or inglês', 'linking words english beginner'],
  learn: [
    { h: 'Os 5 conectores que resolvem 90% das frases',
      table: { head: ['Conector', 'Sentido', 'Exemplo'], rows: [
        ['{and}', 'e (soma)', '{I\'m an architect and I work with BIM.}'],
        ['{but}', 'mas (contraste)', '{I like my job, but I\'m tired.}'],
        ['{because}', 'porque (motivo)', '{I study English because I want to work abroad.}'],
        ['{so}', 'então, por isso (resultado)', '{It\'s raining, so I\'m at home.}'],
        ['{or}', 'ou (opção)', '{Coffee or tea?}']
      ] } },
    { h: 'Because × So: a mesma ideia, de trás pra frente',
      p: ['**because** → o **motivo** vem depois.\n**so** → o **resultado** vem depois.',
          '{I\'m tired __because__ I work a lot.} (motivo: trabalho muito)\n{I work a lot, __so__ I\'m tired.} (resultado: estou cansado)'] },
    { tip: 'Pergunte-se: o que vem depois é a **causa**? → because. É a **consequência**? → so. “So” = “então” do português falado.' },
    { h: 'Por que? Porque!',
      p: ['Em português, “por que” e “porque” soam iguais. Em inglês são palavras diferentes:',
          '{Why?} = Por quê? (pergunta)\n{Because…} = Porque… (resposta)',
          '{Why are you studying English?} — {Because I want a remote job.}'] },
    { h: 'Vírgula',
      p: ['Antes de **but** e **so**, normalmente vai vírgula. Antes de **because**, normalmente não.',
          '{I like it, but it\'s expensive.} · {I\'m hungry, so I\'m cooking.} · {I\'m happy because it\'s Friday.}'] },
    { warn: 'Não junte tudo com “and… and… and…”. Use o conector que mostra a **relação**. É isso que faz você soar mais fluente.' }
  ],
  ex: [
    ["I'm an architect and my wife is a teacher.", 'Sou arquiteto e minha esposa é professora.'],
    ['I like my job, but I want a new challenge.', 'Gosto do meu trabalho, mas quero um novo desafio.'],
    ['I study English because I want to work abroad.', 'Estudo inglês porque quero trabalhar fora.'],
    ["It's late, so I'm going to bed.", 'Está tarde, então vou dormir.'],
    ['Do you want coffee or tea?', 'Você quer café ou chá?'],
    ['Why are you tired? — Because I work a lot.', 'Por que você está cansado? — Porque trabalho muito.'],
    ["The project is big, but the team is small.", 'O projeto é grande, mas a equipe é pequena.'],
    ["My daughter is sick, so I'm working from home.", 'Minha filha está doente, então estou trabalhando de casa.'],
    ['I use Revit and AutoCAD.', 'Uso Revit e AutoCAD.'],
    ["I don't speak English well, but I'm learning.", 'Não falo inglês bem, mas estou aprendendo.']
  ],
  err: [
    ['I study English why I want a job.', 'I study English **because** I want a job.', 'Why = pergunta. Because = resposta.'],
    ["I'm tired, because I work a lot, so.", "I'm tired because I work a lot.", 'Um conector basta.'],
    ['Because I like.', 'Because I like **it**.', 'Like precisa de objeto: like it.']
  ],
  quiz: [
    { mc: "I like coffee, ___ I don't like tea.", o: ['but', 'so', 'because'], e: 'Contraste → but.' },
    { mc: "It's raining, ___ I'm at home.", o: ['so', 'because', 'or'], e: 'Resultado → so.' },
    { mc: "I'm at home ___ it's raining.", o: ['because', 'so', 'but'], e: 'Motivo → because.' },
    { mc: 'Coffee ___ tea?', o: ['or', 'and', 'so'] },
    { mc: '“Por que você estuda inglês?”', o: ['Why do you study English?', 'Because do you study English?', 'What you study English?'] },
    { fill: "I'm tired ___ I work a lot.", a: ['because'] },
    { fill: "I work a lot, ___ I'm tired.", a: ['so'] },
    { build: 'I study English because I want to work abroad', pt: 'Estudo inglês porque quero trabalhar fora.' },
    { build: "It's late, so I'm going to bed", pt: 'Está tarde, então vou dormir.', alt: ["It's late so I'm going to bed"] },
    { build: "I don't speak English well, but I'm learning", pt: 'Não falo inglês bem, mas estou aprendendo.', alt: ["I don't speak English well but I'm learning"] },
    { mc: 'I use Revit ___ AutoCAD.', o: ['and', 'but', 'because'] }
  ],
  speak: ['I study English because I want to work abroad.', "I like my job, but I'm tired.", "It's late, so I'm going to bed.", "I don't speak English well, but I'm learning."],
  mission: ['Escreva **5 pares** de frases simples sobre sua vida e junte cada par com um conector diferente (and, but, because, so, or). Leia em voz alta.',
            'Responda em voz alta: {Why are you studying English?} — {Because…}'],
  cards: [['and', 'e'], ['but', 'mas'], ['because', 'porque'], ['so', 'então / por isso'], ['or', 'ou'], ['Why?', 'Por quê?'],
          ['abroad', 'no exterior'], ['challenge', 'desafio'], ['sick', 'doente'], ['well', 'bem (advérbio)'], ['team', 'equipe']]
});

COURSE.push({
  n: 9, w: 2,
  title: 'Preposições IN, ON, AT',
  goal: 'Usar certo com horários, dias, datas e lugares.',
  yt: ['in on at preposições tempo e lugar', 'prepositions of time and place in on at'],
  learn: [
    { h: 'A pirâmide (o macete mais famoso)',
      p: ['Pense numa pirâmide de cabeça pra baixo:',
          '**IN** = grande, geral (mês, ano, país, cidade)\n**ON** = médio (dia, data, superfície)\n**AT** = pequeno, exato (hora, ponto, endereço)'] },
    { h: 'Tempo',
      table: { head: ['Prep.', 'Usa com', 'Exemplos'], rows: [
        ['{in}', 'mês, ano, estação, partes do dia', '{in May} · {in 2026} · {in summer} · {in the morning} · {in the afternoon}'],
        ['{on}', 'dia da semana, data, dia especial', '{on Monday} · {on May 5th} · {on my birthday} · {on weekends}'],
        ['{at}', 'hora exata, momentos', "{at 8 o'clock} · {at noon} · {at night} · {at lunch}"]
      ] } },
    { warn: 'Exceção que todo mundo erra: {in the morning}, {in the afternoon}, {in the evening}… mas **{at night}**.' },
    { h: 'Lugar',
      table: { head: ['Prep.', 'Ideia', 'Exemplos'], rows: [
        ['{in}', 'DENTRO de algo / área', '{in Brazil} · {in São Paulo} · {in the office} · {in the car} · {in my bag}'],
        ['{on}', 'EM CIMA, superfície, linha', '{on the table} · {on the wall} · {on the 3rd floor} · {on the bus}'],
        ['{at}', 'PONTO, local de atividade', '{at home} · {at work} · {at school} · {at the bus stop} · {at the door}']
      ] } },
    { tip: 'Transporte: carro e táxi = **in** (você entra encolhido). Ônibus, trem, avião = **on** (você entra em pé e anda dentro). {in the car} · {on the bus} · {on the plane}.' },
    { h: 'Expressões prontas — decore como bloco',
      li: ['{at home} em casa (sem “the”)', '{at work} no trabalho', '{on the phone} no telefone', '{on time} na hora, pontual',
           '{in time} a tempo', '{on the internet} na internet', '{in the picture} na foto'] }
  ],
  ex: [
    ["I wake up at six in the morning.", 'Acordo às seis da manhã.'],
    ['I have a meeting on Monday.', 'Tenho uma reunião na segunda.'],
    ['My birthday is in March.', 'Meu aniversário é em março.'],
    ['We live in Brazil.', 'Moramos no Brasil.'],
    ["I'm at work.", 'Estou no trabalho.'],
    ['The keys are on the table.', 'As chaves estão na mesa.'],
    ["My office is on the second floor.", 'Meu escritório fica no segundo andar.'],
    ["She's in the car.", 'Ela está no carro.'],
    ["I'm on the bus.", 'Estou no ônibus.'],
    ['I study English at night.', 'Estudo inglês à noite.'],
    ["Please be on time.", 'Por favor, seja pontual.']
  ],
  err: [
    ['I work in Monday.', 'I work **on** Monday.', 'Dia da semana → on.'],
    ['I am in home.', "I'm **at** home.", 'Expressão fixa.'],
    ['in the night', '**at** night', 'Exceção.'],
    ['at 2026', '**in** 2026', 'Ano → in.'],
    ['I am in the bus.', "I'm **on** the bus.", 'Ônibus → on.']
  ],
  quiz: [
    { mc: 'I have a meeting ___ Monday.', o: ['on', 'in', 'at'] },
    { mc: 'My birthday is ___ March.', o: ['in', 'on', 'at'] },
    { mc: "The meeting is ___ 10 o'clock.", o: ['at', 'on', 'in'] },
    { mc: 'I study ___ night.', o: ['at', 'in', 'on'], e: 'Exceção: at night.' },
    { mc: "I'm ___ home.", o: ['at', 'in', 'on'] },
    { mc: "She's ___ the car.", o: ['in', 'on', 'at'] },
    { mc: "I'm ___ the bus.", o: ['on', 'in', 'at'] },
    { fill: 'The keys are ___ the table.', a: ['on'] },
    { fill: 'We live ___ Brazil.', a: ['in'] },
    { fill: 'I wake up at six ___ the morning.', a: ['in'] },
    { build: 'My office is on the second floor', pt: 'Meu escritório é no segundo andar.', x: ['in'] },
    { build: 'I have a meeting on Friday at ten', pt: 'Tenho uma reunião na sexta às dez.', x: ['in'] }
  ],
  speak: ['I wake up at six in the morning.', "I'm at work.", 'My birthday is in March.', 'I have a meeting on Monday at ten.'],
  mission: ['Responda em voz alta, sempre com a preposição certa:',
            '{When is your birthday?} (in / on) · {What time do you wake up?} (at) · {Where do you work?} (in / at) · {Where is your phone now?} (on / in)',
            'Bônus: olhe ao redor e diga onde estão 5 objetos: {My laptop is on the desk. My keys are in my bag.}'],
  cards: [['in May', 'em maio'], ['on Monday', 'na segunda'], ["at 8 o'clock", 'às 8 horas'], ['at night', 'à noite'],
          ['in the morning', 'de manhã'], ['on the table', 'na mesa'], ['on the bus', 'no ônibus'], ['in the car', 'no carro'],
          ['on time', 'na hora / pontual'], ['floor', 'andar / chão'], ['meeting', 'reunião'], ['birthday', 'aniversário']]
});

COURSE.push({
  n: 10, w: 2,
  title: 'Question Words (WH)',
  goal: 'Usar Who, What, Where, When, Why, How.',
  yt: ['wh questions inglês what where when why who how', 'question words english'],
  learn: [
    { h: 'As palavras de pergunta',
      table: { head: ['Palavra', 'Significado', 'Exemplo'], rows: [
        ['{What}', 'O que / qual', '{What is your name?}'],
        ['{Where}', 'Onde', '{Where do you live?}'],
        ['{When}', 'Quando', '{When is the meeting?}'],
        ['{Who}', 'Quem', '{Who is she?}'],
        ['{Why}', 'Por que', '{Why are you here?}'],
        ['{How}', 'Como', '{How are you?}'],
        ['{Which}', 'Qual (entre opções)', '{Which one do you want?}'],
        ['{What time}', 'Que horas', '{What time is it?}']
      ] } },
    { h: 'A família do HOW',
      table: { head: ['Expressão', 'Significado', 'Exemplo'], rows: [
        ['{How much}', 'Quanto (preço, incontável)', '{How much is it?}'],
        ['{How many}', 'Quantos (contável)', '{How many people work here?}'],
        ['{How old}', 'Quantos anos', '{How old is your daughter?}'],
        ['{How long}', 'Quanto tempo', '{How long does it take?}'],
        ['{How often}', 'Com que frequência', '{How often do you study?}']
      ] } },
    { h: 'A fórmula (você já sabe!)',
      p: ['**WH + to be + sujeito?** → {Where are you?} {What is this?}',
          '**WH + do/does + sujeito + verbo?** → {Where do you work?} {What does she do?}',
          'É só colocar a palavra WH **na frente** das perguntas do Dia 1 e do Dia 6.'] },
    { tip: 'Pergunta de sim/não: {Do you work here?} → Coloque **Where** na frente: {Where do you work?} Pronto, virou pergunta aberta.' },
    { warn: 'Quando **Who** ou **What** é o sujeito (quem faz a ação), não usa do: {Who works here?} ✅ · “Who does work here?” ❌.' },
    { h: 'What × Which',
      p: ['{What} = qual, de forma aberta: {What is your favorite food?}',
          '{Which} = qual, entre opções que estão na mesa: {Which one, the blue or the red?}'] }
  ],
  ex: [
    ["What's your name?", 'Qual é o seu nome?'],
    ['Where do you work?', 'Onde você trabalha?'],
    ['When is the deadline?', 'Quando é o prazo?'],
    ['Who is your manager?', 'Quem é seu gerente?'],
    ['Why do you want this job?', 'Por que você quer esta vaga?'],
    ['How are you?', 'Como você está?'],
    ['How much is it?', 'Quanto custa?'],
    ['How old is your daughter?', 'Quantos anos tem sua filha?'],
    ['How long does it take?', 'Quanto tempo leva?'],
    ['How often do you use Revit?', 'Com que frequência você usa o Revit?'],
    ['What time is it?', 'Que horas são?']
  ],
  err: [
    ['Where you live?', 'Where **do** you live?', 'Faltou o do.'],
    ['How many costs?', '**How much** is it?', 'Preço → how much.'],
    ['How much people?', '**How many** people?', 'Contável → how many.'],
    ['What is the time?', 'What time is it?', 'O primeiro até existe, mas o natural é este.'],
    ['How old you have?', 'How old **are** you?', 'Idade → to be.']
  ],
  quiz: [
    { mc: '___ do you live? — In Brazil.', o: ['Where', 'When', 'Who'] },
    { mc: '___ is the meeting? — On Monday.', o: ['When', 'Where', 'Why'] },
    { mc: '___ is she? — My manager.', o: ['Who', 'What', 'How'] },
    { mc: '___ is it? — Ten dollars.', o: ['How much', 'How many', 'How long'] },
    { mc: '___ people work here?', o: ['How many', 'How much', 'How often'] },
    { mc: '___ is your daughter? — She is seven.', o: ['How old', 'How many', 'How long'] },
    { fill: '___ do you study English? — Because I want a new job.', a: ['Why'] },
    { fill: 'Where ___ she work?', a: ['does'] },
    { build: 'How often do you use Revit', pt: 'Com que frequência você usa o Revit?' },
    { build: 'What time is it', pt: 'Que horas são?' },
    { build: 'How long does it take', pt: 'Quanto tempo leva?', x: ['do'] },
    { mc: 'Quem trabalha aqui?', o: ['Who works here?', 'Who does work here?', 'Who do works here?'], e: 'Who é o sujeito → sem do.' }
  ],
  speak: ['Where do you work?', 'How much is it?', 'How old is your daughter?', 'Why do you want this job?'],
  mission: ['Imagine uma **entrevista de emprego**. Escreva 6 perguntas com WH que o recrutador faria (What, Where, When, Why, How long, How often) e responda cada uma em voz alta.',
            'Ex: {Why do you want this job?} → {Because I love BIM and I want to work with international teams.}'],
  cards: [['What', 'o que / qual'], ['Where', 'onde'], ['When', 'quando'], ['Who', 'quem'], ['Why', 'por que'], ['How', 'como'],
          ['Which', 'qual (entre opções)'], ['How much', 'quanto (preço)'], ['How many', 'quantos'], ['How long', 'quanto tempo'],
          ['How often', 'com que frequência'], ['deadline', 'prazo'], ['manager', 'gerente']]
});

COURSE.push({
  n: 11, w: 2,
  title: 'Can e Could',
  goal: 'Pedir favores, ajuda e dizer o que sabe fazer.',
  yt: ['can could inglês diferença', 'can for ability and permission'],
  learn: [
    { h: 'CAN: 3 usos',
      table: { head: ['Uso', 'Exemplo'], rows: [
        ['Habilidade (sei / consigo)', '{I can speak Spanish.} · {I can use Revit.}'],
        ['Permissão (posso?)', '{Can I sit here?} · {Can I ask a question?}'],
        ['Pedido (pode?)', '{Can you help me?} · {Can you repeat, please?}']
      ] } },
    { h: 'A fórmula é a mais fácil do inglês',
      p: ['**Sujeito + can + verbo puro.** Igual para todo mundo — sem S, sem to, sem do.',
          '{I can} · {she can} · {they can} + {swim}.',
          'Negativa: {can\'t} (cannot). Pergunta: inverta → {Can you…?}'] },
    { warn: '✅ {She can drive.}  ❌ She cans drive / She can to drive / She can drives.' },
    { h: 'COULD: educado e passado',
      p: ['**Pedido mais educado** (use com chefe, cliente, estranhos): {Could you help me, please?} {Could I have the menu?}',
          '**Passado de can** (conseguia, sabia): {I could swim when I was five.} {I couldn\'t sleep last night.}'] },
    { tip: 'Escala de educação: {Help me.} (ordem) → {Can you help me?} (normal) → {Could you help me, please?} (educado). Em inglês, **please** e **could** abrem portas.' },
    { h: 'Pronúncia: can × can\'t',
      p: ['Como o “t” final quase some, a diferença está na **força**:',
          '{I can swim.} → “can” fraco, rápido, quase “kn”.\n{I can\'t swim.} → “can\'t” forte, com o “a” aberto e uma pausinha no final.'] }
  ],
  ex: [
    ['I can use Revit and AutoCAD.', 'Sei usar Revit e AutoCAD.'],
    ["I can't speak English very well.", 'Não consigo falar inglês muito bem.'],
    ['Can you help me?', 'Você pode me ajudar?'],
    ['Could you help me, please?', 'Você poderia me ajudar, por favor?'],
    ['Can I ask a question?', 'Posso fazer uma pergunta?'],
    ['Could you speak more slowly, please?', 'Você poderia falar mais devagar, por favor?'],
    ['Can I pay by card?', 'Posso pagar com cartão?'],
    ['My daughter can swim.', 'Minha filha sabe nadar.'],
    ["I couldn't sleep last night.", 'Não consegui dormir ontem à noite.'],
    ['Could I have a glass of water?', 'Eu poderia tomar um copo de água?']
  ],
  err: [
    ['I can to help you.', 'I can help you.', 'Sem “to” depois de can.'],
    ['She cans drive.', 'She can drive.', 'Can nunca leva S.'],
    ['Do you can help me?', 'Can you help me?', 'Can faz pergunta sozinho, sem do.'],
    ['I no can.', "I can't.", '']
  ],
  quiz: [
    { mc: 'I ___ speak Spanish.', o: ['can', 'cans', 'can to'] },
    { mc: 'Pedido educado ao cliente:', o: ['Could you send me the file, please?', 'Send me the file.', 'You send the file?'] },
    { mc: '___ I sit here?', o: ['Can', 'Do', 'Am'] },
    { mc: 'She ___ drive.', o: ["can't", "don't can", 'no can'] },
    { mc: 'Passado: “Não consegui dormir”', o: ["I couldn't sleep.", "I can't sleep.", "I don't could sleep."] },
    { fill: '___ you help me? (pode)', a: ['Can', 'Could'] },
    { fill: 'Could you speak more ___, please? (devagar)', a: ['slowly'] },
    { build: 'Can I pay by card', pt: 'Posso pagar com cartão?' },
    { build: 'I can use Revit and AutoCAD', pt: 'Sei usar Revit e AutoCAD.', x: ['to'] },
    { build: 'Could you help me please', pt: 'Você poderia me ajudar, por favor?', alt: ['Could you help me, please'] },
    { mc: 'My daughter ___ swim.', o: ['can', 'cans', 'can to'] }
  ],
  speak: ['Can you help me?', 'Could you speak more slowly, please?', 'I can use Revit and AutoCAD.', "I can't speak English very well, but I'm learning."],
  mission: ['Faça duas listas em voz alta: **5 coisas que você sabe fazer** ({I can…}) e **3 que não sabe** ({I can\'t…}).',
            'Depois treine 5 pedidos educados com {Could you…, please?} — pense em situações reais: restaurante, trabalho, aeroporto.'],
  cards: [['can', 'poder / saber / conseguir'], ["can't", 'não pode / não sabe'], ['could', 'poderia / conseguia'], ['Can you help me?', 'Pode me ajudar?'],
          ['Could you…, please?', 'Você poderia…, por favor?'], ['Can I…?', 'Posso…?'], ['slowly', 'devagar'], ['pay by card', 'pagar com cartão'],
          ['swim', 'nadar'], ['drive', 'dirigir'], ['a glass of water', 'um copo de água']]
});

COURSE.push({
  n: 12, w: 2,
  title: 'Rotina + Advérbios de frequência',
  goal: 'Dizer com que frequência você faz as coisas.',
  yt: ['adverbs of frequency always usually sometimes never', 'daily routine english vocabulary'],
  learn: [
    { h: 'A escala da frequência',
      table: { head: ['Advérbio', '%', 'Significado'], rows: [
        ['{always}', '100%', 'sempre'], ['{usually}', '90%', 'geralmente'], ['{often}', '70%', 'frequentemente'],
        ['{sometimes}', '50%', 'às vezes'], ['{rarely}', '10%', 'raramente'], ['{never}', '0%', 'nunca']
      ] } },
    { h: 'Onde colocar na frase',
      p: ['**Antes** do verbo principal: {I always drink coffee.} {She never eats meat.}',
          '**Depois** do to be: {I\'m always tired.} {He is never late.}',
          '{Sometimes} é flexível — pode abrir a frase: {Sometimes I work on Saturdays.}'] },
    { tip: 'Regra de bolso: **“antes do verbo, depois do BE”**. Repita 3x.' },
    { warn: '{Never} já é negativo. ✅ {I never drink.}  ❌ I don\'t never drink.' },
    { h: 'Vocabulário da rotina (em ordem)',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{wake up}', 'acordar'], ['{get up}', 'levantar da cama'], ['{take a shower}', 'tomar banho'], ['{brush my teeth}', 'escovar os dentes'],
        ['{get dressed}', 'se vestir'], ['{have breakfast}', 'tomar café da manhã'], ['{take my daughter to school}', 'levar minha filha na escola'],
        ['{go to work}', 'ir trabalhar'], ['{have lunch}', 'almoçar'], ['{get home}', 'chegar em casa'], ['{cook dinner}', 'fazer o jantar'],
        ['{go to bed}', 'ir dormir']
      ] } },
    { h: 'Perguntando a frequência',
      p: ['{How often do you…?} Com que frequência você…?',
          'Respostas: {every day} · {once a week} (1x por semana) · {twice a month} (2x por mês) · {three times a week} · {on weekends}'] }
  ],
  ex: [
    ['I always wake up at six.', 'Sempre acordo às seis.'],
    ['I usually have breakfast at home.', 'Geralmente tomo café em casa.'],
    ["I'm always tired on Mondays.", 'Sempre estou cansado às segundas.', 'Depois do be.'],
    ['I often work late.', 'Frequentemente trabalho até tarde.'],
    ['Sometimes I work on Saturdays.', 'Às vezes trabalho aos sábados.'],
    ['My wife rarely drinks coffee.', 'Minha esposa raramente toma café.'],
    ['I never go to bed before eleven.', 'Nunca vou dormir antes das onze.'],
    ['How often do you exercise?', 'Com que frequência você se exercita?'],
    ['Twice a week.', 'Duas vezes por semana.'],
    ['I take a shower and get dressed.', 'Tomo banho e me visto.']
  ],
  err: [
    ['I drink always coffee.', 'I **always drink** coffee.', 'Antes do verbo.'],
    ["I always am tired.", "I'm **always** tired.", 'Depois do be.'],
    ["I don't never drink.", 'I never drink.', 'Never já nega.'],
    ['I take a bath every morning (quando é chuveiro).', 'I take a **shower** every morning.', 'Bath = banheira. Shower = chuveiro.']
  ],
  quiz: [
    { mc: 'Ordem certa:', o: ['I always drink coffee.', 'I drink always coffee.', 'Always I coffee drink.'] },
    { mc: 'Ordem certa:', o: ["I'm never late.", 'I never am late.', 'Never I am late.'] },
    { mc: '50% das vezes:', o: ['sometimes', 'usually', 'rarely'] },
    { mc: '“Nunca bebo”', o: ['I never drink.', "I don't never drink.", 'I not never drink.'] },
    { mc: 'Banho de chuveiro:', o: ['take a shower', 'take a bath', 'make a shower'] },
    { fill: 'How ___ do you exercise?', a: ['often'] },
    { fill: '___ a week. (duas vezes)', a: ['Twice'] },
    { build: 'I usually have breakfast at home', pt: 'Geralmente tomo café da manhã em casa.' },
    { build: 'Sometimes I work on Saturdays', pt: 'Às vezes trabalho aos sábados.', alt: ['I sometimes work on Saturdays'] },
    { build: 'My wife rarely drinks coffee', pt: 'Minha esposa raramente toma café.' },
    { fill: 'I brush my ___. (dentes)', a: ['teeth'] }
  ],
  speak: ['I always wake up at six.', "I'm always tired on Mondays.", 'Sometimes I work on Saturdays.', 'How often do you exercise?'],
  mission: ['Conte sua rotina **com frequência**: 8 frases, cada uma com um advérbio diferente. Ex: {I always take my daughter to school. I usually have lunch at noon. I never go to bed early.}',
            'Depois pergunte (e responda) 3 {How often…?}'],
  cards: [['always', 'sempre'], ['usually', 'geralmente'], ['often', 'frequentemente'], ['sometimes', 'às vezes'], ['rarely', 'raramente'],
          ['never', 'nunca'], ['get up', 'levantar'], ['take a shower', 'tomar banho'], ['get dressed', 'se vestir'], ['get home', 'chegar em casa'],
          ['once a week', 'uma vez por semana'], ['twice', 'duas vezes'], ['brush my teeth', 'escovar os dentes']]
});

COURSE.push({
  n: 13, w: 2,
  title: 'Vocabulário do trabalho',
  goal: 'Nomes de objetos, rotinas e tarefas do trabalho.',
  yt: ['office vocabulary english', 'english for architects vocabulary', 'business english meetings beginner'],
  learn: [
    { h: 'Na mesa de trabalho',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{desk}', 'mesa de trabalho'], ['{laptop}', 'notebook'], ['{screen}', 'tela, monitor'], ['{keyboard}', 'teclado'],
        ['{printer}', 'impressora'], ['{chair}', 'cadeira'], ['{notebook}', 'caderno (!)'], ['{charger}', 'carregador'], ['{headset}', 'fone com microfone']
      ] } },
    { warn: '**Notebook** em inglês é **caderno**! Computador portátil = {laptop}.' },
    { h: 'O dia a dia no escritório',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{meeting}', 'reunião'], ['{deadline}', 'prazo'], ['{task}', 'tarefa'], ['{report}', 'relatório'], ['{schedule}', 'cronograma, agenda'],
        ['{team}', 'equipe'], ['{client}', 'cliente'], ['{project}', 'projeto (o trabalho todo)'], ['{feedback}', 'retorno, opinião'], ['{file}', 'arquivo']
      ] } },
    { h: 'Arquitetura & BIM',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{floor plan}', 'planta baixa'], ['{section}', 'corte'], ['{elevation}', 'fachada / elevação'], ['{drawings}', 'pranchas, desenhos'],
        ['{sheet}', 'prancha (no Revit)'], ['{model}', 'modelo'], ['{construction site}', 'obra'], ['{clash detection}', 'detecção de interferências'],
        ['{coordination}', 'compatibilização'], ['{building}', 'edifício'], ['{contractor}', 'construtora, empreiteiro']
      ] } },
    { h: 'Verbos de trabalho',
      li: ['{send an email} enviar um email', '{check} conferir · {review} revisar', '{update the model} atualizar o modelo',
           '{schedule a meeting} marcar uma reunião', '{share my screen} compartilhar minha tela', '{work from home} trabalhar de casa', '{be in a meeting} estar em reunião'] },
    { tip: 'Em vez de decorar palavras soltas, decore **frases-bloco**: {I\'m in a meeting.} {Can you share your screen?} {The deadline is on Friday.} Elas saem prontas na hora H.' }
  ],
  ex: [
    ['I have a meeting at ten.', 'Tenho uma reunião às dez.'],
    ['The deadline is on Friday.', 'O prazo é na sexta.'],
    ["I'm sending the email now.", 'Estou enviando o email agora.'],
    ['Can you check the drawings?', 'Você pode conferir as pranchas?'],
    ["I'm working from home today.", 'Estou trabalhando de casa hoje.'],
    ['The team is updating the model.', 'A equipe está atualizando o modelo.'],
    ['Can you share your screen?', 'Você pode compartilhar sua tela?'],
    ["Sorry, I'm in a meeting.", 'Desculpe, estou em reunião.'],
    ['I run clash detection every week.', 'Rodo a detecção de interferências toda semana.'],
    ['The client wants changes in the floor plan.', 'O cliente quer mudanças na planta.'],
    ['I manage BIM coordination for big projects.', 'Eu gerencio a compatibilização BIM de grandes projetos.']
  ],
  err: [
    ['My notebook is slow.', 'My **laptop** is slow.', 'Notebook = caderno.'],
    ['I go to the obra.', 'I go to the **construction site**.', ''],
    ['I make a meeting.', 'I **have** a meeting. / I **schedule** a meeting.', ''],
    ['The prazo is Friday.', 'The **deadline** is on Friday.', '']
  ],
  quiz: [
    { mc: 'Computador portátil:', o: ['laptop', 'notebook', 'desktop'] },
    { mc: 'Prazo:', o: ['deadline', 'schedule', 'meeting'] },
    { mc: 'Planta baixa:', o: ['floor plan', 'low plant', 'section'] },
    { mc: 'Obra:', o: ['construction site', 'work', 'building'] },
    { mc: 'Compartilhar a tela:', o: ['share my screen', 'divide my screen', 'show my monitor'] },
    { fill: 'I have a ___ at ten. (reunião)', a: ['meeting'] },
    { fill: 'Can you ___ the drawings? (conferir)', a: ['check', 'review'] },
    { build: "I'm working from home today", pt: 'Estou trabalhando de casa hoje.' },
    { build: 'The deadline is on Friday', pt: 'O prazo é na sexta.', x: ['in'] },
    { build: 'The team is updating the model', pt: 'A equipe está atualizando o modelo.' },
    { mc: 'Desculpe, estou em reunião.', o: ["Sorry, I'm in a meeting.", "Sorry, I'm on a meeting room.", 'Sorry, I meeting.'] }
  ],
  speak: ['I have a meeting at ten.', 'Can you share your screen?', 'The deadline is on Friday.', 'I manage BIM coordination for big projects.'],
  mission: ['Ande pelo seu escritório (ou casa) e **diga o nome de 15 objetos** em inglês, apontando. Depois descreva **o que você faz no trabalho** em 6 frases.',
            'Modelo: {I\'m a BIM manager. I coordinate the models. I run clash detection. I have meetings with the team. I check the drawings. I send reports to the client.}'],
  cards: [['desk', 'mesa de trabalho'], ['laptop', 'notebook (computador)'], ['screen', 'tela'], ['printer', 'impressora'], ['deadline', 'prazo'],
          ['task', 'tarefa'], ['report', 'relatório'], ['floor plan', 'planta baixa'], ['section', 'corte'], ['construction site', 'obra'],
          ['contractor', 'construtora / empreiteiro'], ['share my screen', 'compartilhar minha tela'], ['check', 'conferir'], ['file', 'arquivo']]
});

COURSE.push({
  n: 14, w: 2, review: true,
  title: 'Revisão + Self-talk',
  goal: 'Falar frases do seu dia em voz alta em inglês.',
  yt: ['self talk english practice', 'how to think in english', 'english speaking practice alone'],
  dlgLabel: 'Monólogos',
  learn: [
    { h: 'O que é Self-talk',
      p: ['É **falar sozinho em inglês** durante o dia. Parece estranho, mas é a técnica nº 1 de quem aprende sem morar fora: você treina a boca e o cérebro a **montar frases sem traduzir**.',
          'Não precisa de ninguém. Só de 5–10 minutos espalhados no dia (no carro, no banho, lavando louça).'] },
    { h: 'Os 4 tipos de self-talk',
      table: { head: ['Tipo', 'Gramática', 'Exemplo'], rows: [
        ['Narrar', 'Present continuous', "{I'm making coffee. I'm opening my email.}"],
        ['Rotina', 'Simple present + frequência', '{I usually work until six.}'],
        ['Explicar', 'because / so / but', "{I'm tired because I slept late.}"],
        ['Perguntar-se', 'WH + do/does', '{What do I need today? Where are my keys?}']
      ] } },
    { tip: 'Travou numa palavra? **Não pare.** Diga em português e siga: {I need to buy… “fermento”… for the cake.} Depois procure a palavra e use de novo.' },
    { h: 'Resumo da Semana 2',
      table: { head: ['Dia', 'Ponto-chave'], rows: [
        ['8', '{and · but · because · so · or}'], ['9', '{in} (grande) · {on} (dia/superfície) · {at} (ponto/hora)'],
        ['10', '{What · Where · When · Who · Why · How}'], ['11', '{can} + verbo · {Could you…, please?}'],
        ['12', '{always · usually · sometimes · never} antes do verbo'], ['13', '{meeting · deadline · floor plan · construction site}']
      ] } }
  ],
  dlg: [
    { t: '☀️ Monólogo da manhã', intro: 'Ouça como seria um self-talk real. Depois faça o seu.',
      lines: [
        ['Eu', "OK, it's six thirty. I'm getting up.", 'OK, são seis e meia. Estou levantando.'],
        ['Eu', "I'm making coffee, but I'm still sleepy.", 'Estou fazendo café, mas ainda estou com sono.'],
        ['Eu', 'Where is my phone? Oh, it\'s on the table.', 'Cadê meu celular? Ah, está na mesa.'],
        ['Eu', 'I have a meeting at nine, so I need to hurry.', 'Tenho reunião às nove, então preciso me apressar.'],
        ['Eu', 'My daughter usually wakes up at seven.', 'Minha filha geralmente acorda às sete.'],
        ['Eu', 'Can I take her to school today? Yes, I can.', 'Posso levar ela na escola hoje? Sim, posso.']
      ] },
    { t: '💼 No escritório', intro: 'Diálogo com tudo da semana.',
      lines: [
        ['Mia', 'Good morning! How are you?', 'Bom dia! Como você está?'],
        ['Eri', "I'm fine, but I'm busy. The deadline is on Friday.", 'Estou bem, mas ocupado. O prazo é na sexta.'],
        ['Mia', 'How often do you meet the client?', 'Com que frequência você se reúne com o cliente?'],
        ['Eri', 'Usually once a week, on Tuesdays.', 'Geralmente uma vez por semana, às terças.'],
        ['Mia', 'Could you share the model with me?', 'Você poderia compartilhar o modelo comigo?'],
        ['Eri', 'Sure. I can send it after lunch.', 'Claro. Posso enviar depois do almoço.'],
        ['Mia', 'Why after lunch?', 'Por que depois do almoço?'],
        ['Eri', "Because I'm updating the floor plans now.", 'Porque estou atualizando as plantas agora.']
      ] }
  ],
  quiz: [
    { mc: 'Quando é o prazo no diálogo?', o: ['On Friday.', 'On Tuesday.', 'After lunch.'] },
    { mc: 'Com que frequência ele encontra o cliente?', o: ['Once a week.', 'Every day.', 'Twice a week.'] },
    { mc: 'Por que ele só envia depois do almoço?', o: ["Because he's updating the floor plans.", "Because he's tired.", 'Because the client is late.'] },
    { mc: "I'm tired ___ I slept late.", o: ['because', 'so', 'or'] },
    { mc: 'The meeting is ___ nine.', o: ['at', 'on', 'in'] },
    { mc: '___ do you work? — In São Paulo.', o: ['Where', 'When', 'How'] },
    { fill: '___ you share the model with me? (poderia)', a: ['Could'] },
    { fill: 'My daughter ___ wakes up at seven. (geralmente)', a: ['usually'] },
    { build: 'I have a meeting at nine so I need to hurry', pt: 'Tenho reunião às nove, então preciso me apressar.', alt: ['I have a meeting at nine, so I need to hurry'] },
    { build: 'Where is my phone', pt: 'Cadê meu celular?' },
    { build: 'I can send it after lunch', pt: 'Posso enviar depois do almoço.', x: ['to'] },
    { mc: 'Ordem certa:', o: ["I'm always busy on Fridays.", 'I always am busy on Fridays.', "I'm busy always on Fridays."] }
  ],
  speak: ["I'm making coffee, but I'm still sleepy.", 'I have a meeting at nine, so I need to hurry.', 'Could you share the model with me?', "Because I'm updating the floor plans now."],
  mission: ['**Desafio de self-talk:** hoje faça 3 sessões de 3 minutos (manhã, tarde, noite). Em cada uma, use pelo menos: 1 frase com -ing, 1 com because/so, 1 com frequência, 1 pergunta WH.',
            'Grave a sessão da noite e compare com a gravação do Dia 7. Você vai notar a diferença. 💪'],
  cards: [['sleepy', 'com sono'], ['hurry', 'se apressar'], ['still', 'ainda'], ['Sure.', 'Claro.'], ['after lunch', 'depois do almoço'],
          ["I'm fine.", 'Estou bem.'], ['Good morning!', 'Bom dia!']]
});
