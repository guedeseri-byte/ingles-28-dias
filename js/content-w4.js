/* Semana 4 — Futuro, Planos & Comunicação de Emergência */
window.COURSE = window.COURSE || [];

COURSE.push({
  n: 22, w: 4,
  title: 'Futuro: WILL × GOING TO',
  goal: 'Diferenciar planos de promessas, decisões na hora e previsões.',
  yt: ['will vs going to diferença', 'future will going to english beginner'],
  learn: [
    { h: 'A diferença em uma frase',
      p: ['**GOING TO** = já estava **planejado** antes de falar.\n**WILL** = decidido **agora**, na hora, ou é promessa / opinião.',
          '{I\'m going to move to Spain next year.} (plano, já decidimos)\n{It\'s hot. I\'ll open the window.} (decidi agora)'] },
    { h: 'Formas',
      table: { head: ['', 'WILL', 'GOING TO'], rows: [
        ['Afirmativa', "{I'll help you.}", "{I'm going to travel.}"],
        ['Negativa', "{I won't be late.}", "{I'm not going to work tomorrow.}"],
        ['Pergunta', '{Will you call me?}', '{Are you going to apply?}']
      ] },
      after: ['**will + verbo** (igual para todos). **am/is/are + going to + verbo**. {won\'t} = will not.'] },
    { h: 'Quando usar cada um',
      table: { head: ['Uso', 'Exemplo'], rows: [
        ['WILL · decisão na hora', "{I'll have the chicken, please.}"],
        ['WILL · promessa', "{I'll call you tomorrow.} · {I won't forget.}"],
        ['WILL · oferta', "{I'll help you with that.}"],
        ['WILL · opinião / previsão', '{I think it will be a great project.}'],
        ['GOING TO · plano', "{We're going to visit Portugal in July.}"],
        ['GOING TO · previsão com evidência', "{Look at the sky! It's going to rain.}"]
      ] } },
    { tip: 'Pergunte-se: **“eu já tinha decidido isso antes?”** Sim → going to. Não, decidi agora → will.' },
    { h: 'Na fala: “gonna”',
      p: ['Nos filmes e conversas você vai ouvir {gonna}: {I\'m gonna call you.} = I\'m going to call you. É informal — ótimo para entender, use com cuidado em contexto formal.'] },
    { warn: 'Depois de will, **sem “to”**: {I will go}, não “I will to go”. E não use will para algo combinado com hora marcada: {I\'m meeting the client at 3} (present continuous) soa mais natural.' }
  ],
  ex: [
    ["I'm going to move abroad next year.", 'Vou me mudar para o exterior ano que vem.'],
    ["We're going to visit Portugal in July.", 'Vamos visitar Portugal em julho.'],
    ["I'll call you tomorrow.", 'Te ligo amanhã.', 'Promessa.'],
    ["It's cold. I'll close the window.", 'Está frio. Vou fechar a janela.', 'Decisão na hora.'],
    ["I'll have a coffee, please.", 'Vou querer um café, por favor.'],
    ["I won't be late. I promise.", 'Não vou me atrasar. Prometo.'],
    ['I think it will be a great year.', 'Acho que vai ser um ótimo ano.'],
    ['Are you going to apply for the job?', 'Você vai se candidatar à vaga?'],
    ["Look at the clouds! It's going to rain.", 'Olha as nuvens! Vai chover.'],
    ["Don't worry, I'll help you.", 'Não se preocupe, eu te ajudo.']
  ],
  err: [
    ['I will to travel.', 'I will travel.', 'Sem to.'],
    ['I going to travel.', "I**'m** going to travel.", 'Precisa do am/is/are.'],
    ["I'm going to answer the phone! (tocou agora)", "I'll answer it!", 'Decisão na hora → will.'],
    ['Tomorrow I travel to Rio. (futuro)', "Tomorrow I'm going to travel to Rio.", 'Futuro precisa de marcador.']
  ],
  quiz: [
    { mc: 'O telefone tocou agora: “Eu atendo!”', o: ["I'll get it!", "I'm going to get it!", 'I get it!'] },
    { mc: 'Plano decidido mês passado:', o: ["We're going to move in July.", 'We will move in July maybe.', 'We move in July.'] },
    { mc: 'Promessa:', o: ["I'll call you tomorrow.", "I'm going to call you, maybe.", 'I call you tomorrow.'] },
    { mc: 'Nuvens escuras no céu:', o: ["It's going to rain.", 'It will to rain.', 'It rains.'] },
    { mc: 'Negativa de will:', o: ["won't", "willn't", "don't will"] },
    { fill: "I ___ forget. I promise. (negativa de will)", a: ["won't", 'will not'] },
    { fill: 'Are you going ___ apply for the job?', a: ['to'] },
    { fill: "I'm ___ to visit my sister. (going)", a: ['going'] },
    { build: "I'm going to move abroad next year", pt: 'Vou me mudar para o exterior ano que vem.', alt: ['I am going to move abroad next year'] },
    { build: "Don't worry I'll help you", pt: 'Não se preocupe, eu te ajudo.', alt: ["Don't worry, I'll help you"] },
    { build: 'I think it will be a great year', pt: 'Acho que vai ser um ótimo ano.', x: ['to'] }
  ],
  speak: ["I'm going to move abroad next year.", "I'll call you tomorrow.", 'I think it will be a great year.', "Don't worry, I'll help you."],
  mission: ['Fale sobre **seus planos** (going to): 5 frases sobre o próximo ano — trabalho, inglês, família, viagem, mudança.',
            'Depois faça **3 promessas** para você mesmo com will: {I will study every day.} {I won\'t give up.}'],
  cards: [["I'll…", 'eu vou… (decisão na hora / promessa)'], ["I'm going to…", 'eu vou… (plano)'], ["won't", 'não vai (will not)'], ['gonna', 'going to (informal)'],
          ['apply for a job', 'se candidatar a uma vaga'], ['promise', 'prometer / promessa'], ["Don't worry.", 'Não se preocupe.'], ['next year', 'ano que vem'],
          ['move abroad', 'mudar para o exterior'], ['clouds', 'nuvens']]
});

COURSE.push({
  n: 23, w: 4,
  title: 'Should, Must, Have to',
  goal: 'Expressar conselhos, obrigações e regras.',
  yt: ['should must have to diferença inglês', 'mustnt vs dont have to'],
  learn: [
    { h: 'Os três níveis',
      table: { head: ['Verbo', 'Força', 'Significado', 'Exemplo'], rows: [
        ['{should}', '💡 conselho', 'deveria', '{You should rest.}'],
        ['{have to}', '📋 necessidade (vem de fora)', 'tenho que', '{I have to work tomorrow.}'],
        ['{must}', '❗ obrigação forte / regra', 'deve, é obrigatório', '{You must wear a helmet on site.}']
      ] } },
    { h: 'Formas',
      p: ['**should / must + verbo** (igual para todos, sem to, sem s): {She should study.} {You must stop.}',
          '**have to** muda como verbo normal: {I have to} · {she **has** to} · {I **had** to} (passado) · {Do you have to…?}'] },
    { tip: 'No dia a dia, americano usa muito mais {have to} do que must. Use **must** para regras escritas, placas e coisas muito sérias.' },
    { h: '⚠️ A armadilha: mustn\'t × don\'t have to',
      table: { head: ['Frase', 'Significado'], rows: [
        ["{You mustn't smoke here.}", '**É proibido** fumar aqui.'],
        ["{You don't have to come.}", 'Você **não precisa** vir. (é opcional)']
      ] },
      after: ['Parecem iguais em português (“não deve”, “não tem que”), mas são opostos: um proíbe, o outro libera.'] },
    { h: 'Pedindo conselho',
      p: ['{What should I do?} O que eu devo fazer?\n{Should I call him?} Devo ligar pra ele?\n{Do I have to bring anything?} Preciso levar alguma coisa?'] }
  ],
  ex: [
    ['You should drink more water.', 'Você deveria beber mais água.'],
    ['I have to work tomorrow.', 'Tenho que trabalhar amanhã.'],
    ['She has to pick up our daughter at five.', 'Ela tem que buscar nossa filha às cinco.'],
    ['You must wear a helmet on site.', 'É obrigatório usar capacete na obra.'],
    ["You mustn't park here.", 'É proibido estacionar aqui.'],
    ["You don't have to pay. It's free.", 'Você não precisa pagar. É de graça.'],
    ['What should I do?', 'O que eu devo fazer?'],
    ['Should I send the file now?', 'Devo enviar o arquivo agora?'],
    ['I had to stay late yesterday.', 'Tive que ficar até tarde ontem.'],
    ['You should practice every day.', 'Você deveria praticar todo dia.']
  ],
  err: [
    ['You should to rest.', 'You should rest.', 'Sem to.'],
    ['She have to go.', 'She **has** to go.', ''],
    ["You mustn't come. (= não precisa)", "You **don't have to** come.", 'Mustn\'t = proibido!'],
    ['I must to go.', 'I must go. / I have to go.', '']
  ],
  quiz: [
    { mc: 'Conselho: “Você deveria descansar.”', o: ['You should rest.', 'You must to rest.', 'You have rest.'] },
    { mc: '“É proibido fumar.”', o: ["You mustn't smoke.", "You don't have to smoke.", "You shouldn't to smoke."] },
    { mc: '“Você não precisa vir.” (opcional)', o: ["You don't have to come.", "You mustn't come.", "You haven't come."] },
    { mc: 'She ___ to work on Saturday.', o: ['has', 'have', 'must'] },
    { mc: 'Passado de have to:', o: ['had to', 'haved to', 'must'] },
    { fill: 'What ___ I do? (devo)', a: ['should'] },
    { fill: 'I ___ to work tomorrow. (tenho que)', a: ['have'] },
    { build: 'You should drink more water', pt: 'Você deveria beber mais água.', x: ['to'] },
    { build: 'You must wear a helmet on site', pt: 'É obrigatório usar capacete na obra.' },
    { build: "You don't have to pay", pt: 'Você não precisa pagar.' },
    { build: 'Should I send the file now', pt: 'Devo enviar o arquivo agora?' }
  ],
  speak: ['What should I do?', 'I have to work tomorrow.', "You don't have to pay. It's free.", 'You should practice every day.'],
  mission: ['Dê **5 conselhos** a alguém que vai começar a aprender inglês ({You should…}). Diga **3 coisas que você tem que fazer** esta semana ({I have to…}). E **3 regras** do seu trabalho ou da obra ({You must… / You mustn\'t…}).'],
  cards: [['should', 'deveria (conselho)'], ['have to', 'ter que'], ['must', 'dever (obrigação forte)'], ["mustn't", 'é proibido'],
          ["don't have to", 'não precisa'], ['had to', 'tive que'], ['What should I do?', 'O que eu devo fazer?'], ['helmet', 'capacete'],
          ['rest', 'descansar'], ['free', 'grátis / livre'], ['pick up', 'buscar (alguém)']]
});

COURSE.push({
  n: 24, w: 4,
  title: 'Frases de sobrevivência: comida, compras, viagem',
  goal: 'Frases prontas para restaurante, loja, rua e aeroporto.',
  yt: ['english phrases for travel restaurant', 'ordering food in english', 'airport english phrases'],
  learn: [
    { h: 'As 3 frases-coringa',
      p: ['{Can I have…, please?} Pode me ver…? / Eu quero…\n{I\'d like…} Eu gostaria de… (I\'d = I would)\n{Where is…?} Onde fica…?',
          'Com elas + uma palavra, você resolve quase tudo: {Can I have a water, please?} {I\'d like a table for three.} {Where is the bathroom?}'] },
    { h: '🍽️ Restaurante',
      li: ['{A table for three, please.} Mesa para três.', '{Can I see the menu, please?} Posso ver o cardápio?', "{I'd like the chicken, please.} Eu gostaria do frango.",
           '{What do you recommend?} O que você recomenda?', "{I'm allergic to…} Sou alérgico a…", '{Could we have the check, please?} A conta, por favor. (UK: {the bill})'] },
    { h: '🛍️ Compras',
      li: ['{How much is this?} Quanto custa?', "{I'm just looking, thanks.} Só estou olhando.", '{Do you have this in a bigger size?} Tem num tamanho maior?',
           '{Can I try it on?} Posso experimentar?', '{Can I pay by card?} Posso pagar com cartão?', "{I'll take it.} Vou levar."] },
    { h: '🗺️ Na rua',
      li: ['{Excuse me, where is the subway station?} Com licença, onde fica o metrô?', '{How do I get to…?} Como chego em…?', '{Is it far?} É longe?',
           '{Go straight. Turn left. Turn right.} Siga reto. Vire à esquerda. Vire à direita.', "{It's next to the bank.} Fica ao lado do banco."] },
    { h: '✈️ Aeroporto e hotel',
      li: ['{I have a reservation.} Tenho uma reserva.', '{Where is gate 12?} Onde fica o portão 12?', '{Window or aisle?} Janela ou corredor?',
           "{I'm here on vacation / for work.} Estou aqui de férias / a trabalho.", '{What time is check-out?} Que horas é o check-out?'] },
    { tip: 'Sempre comece com {Excuse me} (para chamar atenção) e termine com {please} / {thank you}. Educação compensa muito erro de gramática.' },
    { warn: '“Push” na porta = **empurre** (não puxe!). Puxe = {pull}. E “exquisite” não é esquisito; “pretend” é fingir; “actually” é “na verdade”.' }
  ],
  ex: [
    ['Excuse me, where is the bathroom?', 'Com licença, onde fica o banheiro?'],
    ['A table for three, please.', 'Uma mesa para três, por favor.'],
    ["I'd like the chicken, please.", 'Eu gostaria do frango, por favor.'],
    ['Could we have the check, please?', 'Poderia trazer a conta, por favor?'],
    ['How much is this?', 'Quanto custa isto?'],
    ["I'm just looking, thanks.", 'Só estou olhando, obrigado.'],
    ['Can I try it on?', 'Posso experimentar?'],
    ['How do I get to the train station?', 'Como chego na estação de trem?'],
    ['Is it far from here?', 'É longe daqui?'],
    ['I have a reservation under the name Guedes.', 'Tenho uma reserva no nome Guedes.'],
    ["I'm here for work.", 'Estou aqui a trabalho.']
  ],
  err: [
    ['I want a coffee. (soa seco)', "I'd like a coffee, please. / Can I have a coffee, please?", 'Mais educado.'],
    ['Give me the bill.', 'Could we have the check, please?', ''],
    ['How much costs?', 'How much is it? / How much does it cost?', ''],
    ['Where is the toilet? (nos EUA)', 'Where is the **bathroom** / **restroom**?', '“Toilet” é o vaso. No Reino Unido é comum.']
  ],
  quiz: [
    { mc: 'Pedir a conta (EUA):', o: ['Could we have the check, please?', 'Give me the account.', 'I want pay.'] },
    { mc: 'Forma educada de pedir:', o: ["I'd like a coffee, please.", 'Coffee.', 'Give me coffee.'] },
    { mc: '“Só estou olhando.”', o: ["I'm just looking, thanks.", "I'm only seeing.", 'I just look.'] },
    { mc: '“Posso experimentar?” (roupa)', o: ['Can I try it on?', 'Can I prove it?', 'Can I experiment?'] },
    { mc: 'Placa “PUSH” na porta:', o: ['Empurre.', 'Puxe.', 'Pare.'] },
    { mc: '“Vire à esquerda.”', o: ['Turn left.', 'Turn right.', 'Go straight.'] },
    { fill: 'How do I ___ to the train station? (chego)', a: ['get'] },
    { fill: "I ___ a reservation. (tenho)", a: ['have'] },
    { build: 'Excuse me where is the bathroom', pt: 'Com licença, onde fica o banheiro?', alt: ['Excuse me, where is the bathroom'] },
    { build: 'A table for three please', pt: 'Uma mesa para três, por favor.', alt: ['A table for three, please'] },
    { build: 'Is it far from here', pt: 'É longe daqui?' },
    { build: 'Can I pay by card', pt: 'Posso pagar com cartão?' }
  ],
  speak: ['Excuse me, where is the bathroom?', "I'd like the chicken, please.", 'Could we have the check, please?', 'How do I get to the train station?'],
  mission: ['**Teatro:** imagine que você chegou em Madri com sua família. Fale em voz alta a cena inteira: pedir direção, pedir mesa no restaurante, pedir a comida, perguntar o preço e pedir a conta.',
            'Faça uma **colinha no celular** com as 10 frases que você acha mais úteis.'],
  cards: [["I'd like…", 'eu gostaria de…'], ['Can I have…?', 'Pode me ver…?'], ['the check', 'a conta (EUA)'], ['menu', 'cardápio'],
          ["I'm just looking.", 'Só estou olhando.'], ['try it on', 'experimentar (roupa)'], ['How much is this?', 'Quanto custa isto?'],
          ['Turn left.', 'Vire à esquerda.'], ['Go straight.', 'Siga reto.'], ['far', 'longe'], ['reservation', 'reserva'],
          ['aisle', 'corredor (avião)'], ['push / pull', 'empurre / puxe'], ['bathroom', 'banheiro']]
});

COURSE.push({
  n: 25, w: 4,
  title: 'Pedir para repetir e explicar',
  goal: 'Nunca mais travar quando não entender algo.',
  yt: ['how to ask someone to repeat in english', 'phrases when you dont understand english'],
  learn: [
    { h: 'O superpoder do iniciante',
      p: ['Você **não precisa entender tudo**. Precisa saber **pedir ajuda** sem travar. Nativos fazem isso o tempo todo entre eles.',
          'Fingir que entendeu é o pior caminho — gera confusão depois. Perguntar é sinal de profissionalismo.'] },
    { h: 'Não entendi / repita',
      li: ['{Sorry?} / {Pardon?} — Como? (curto e educado)', '{Could you repeat that, please?} Poderia repetir, por favor?',
           '{Could you speak more slowly, please?} Poderia falar mais devagar?', "{Sorry, I didn't catch that.} Desculpe, não peguei.",
           "{I'm sorry, I don't understand.} Desculpe, não entendo."] },
    { h: 'O que significa?',
      li: ['{What does “deadline” mean?} O que significa “deadline”?', '{How do you say “obra” in English?} Como se diz “obra” em inglês?',
           '{How do you spell that?} Como se soletra?', '{What do you call this in English?} Como se chama isto em inglês?', '{Can you write it down, please?} Pode escrever pra mim?'] },
    { h: 'Confirmar que entendeu',
      li: ['{Do you mean…?} Você quer dizer…?', '{So, you want me to…?} Então você quer que eu…?', '{Just to confirm, the meeting is on Monday?} Só pra confirmar, a reunião é na segunda?'] },
    { h: 'Ganhar tempo para pensar',
      li: ['{Let me think.} Deixa eu pensar.', '{Well…} Bom…', '{How can I say this…} Como posso dizer…', '{Give me a second.} Me dá um segundo.'] },
    { tip: 'Frase de ouro para reuniões e entrevistas: {Sorry, my English is not perfect yet. Could you speak a little more slowly?} — as pessoas **sempre** ajudam, e você ganha simpatia.' },
    { warn: '{What does it mean?} ✅ · “What means…?” ❌. Lembre do Dia 6: pergunta com verbo normal precisa de **does**.' }
  ],
  ex: [
    ['Sorry, could you repeat that, please?', 'Desculpe, poderia repetir, por favor?'],
    ['Could you speak more slowly, please?', 'Poderia falar mais devagar, por favor?'],
    ["Sorry, I didn't catch that.", 'Desculpe, não peguei.'],
    ['What does “schedule” mean?', 'O que significa “schedule”?'],
    ['How do you say “obra” in English?', 'Como se diz “obra” em inglês?'],
    ['How do you spell that?', 'Como se soletra isso?'],
    ['Do you mean the new project?', 'Você quer dizer o projeto novo?'],
    ['Just to confirm, the deadline is on Friday?', 'Só pra confirmar, o prazo é na sexta?'],
    ['Let me think…', 'Deixa eu pensar…'],
    ["Sorry, my English is not perfect yet.", 'Desculpe, meu inglês ainda não é perfeito.']
  ],
  err: [
    ['What means “deadline”?', 'What **does** “deadline” **mean**?', ''],
    ['Repeat, please.', 'Could you repeat that, please?', 'Muito seco. Use could.'],
    ['How do you say in English “obra”?', 'How do you say “obra” in English?', 'A palavra vem antes de “in English”.'],
    ['Fingir que entendeu e responder “yes”.', "Sorry, I didn't catch that.", 'Perguntar é melhor que errar depois.']
  ],
  quiz: [
    { mc: 'Você não entendeu o que a pessoa disse:', o: ["Sorry, I didn't catch that.", 'Yes, yes.', 'Repeat.'] },
    { mc: '“O que significa X?”', o: ['What does X mean?', 'What means X?', 'What is mean X?'] },
    { mc: '“Como se diz ‘obra’ em inglês?”', o: ['How do you say “obra” in English?', 'How say “obra” English?', 'What is “obra” say?'] },
    { mc: 'Para confirmar um detalhe:', o: ['Just to confirm, the meeting is at ten?', 'Confirm me the meeting.', 'The meeting? Ten? Yes?'] },
    { mc: 'Para ganhar tempo:', o: ['Let me think.', 'Wait me.', 'I think me.'] },
    { fill: 'Could you speak more ___, please? (devagar)', a: ['slowly'] },
    { fill: 'How do you ___ that? (soletra)', a: ['spell'] },
    { fill: 'Do you ___ the new project? (quer dizer)', a: ['mean'] },
    { build: 'Could you repeat that please', pt: 'Poderia repetir, por favor?', alt: ['Could you repeat that, please'] },
    { build: 'Can you write it down please', pt: 'Pode escrever pra mim, por favor?', alt: ['Can you write it down, please'] },
    { build: 'My English is not perfect yet', pt: 'Meu inglês ainda não é perfeito.' }
  ],
  speak: ['Sorry, could you repeat that, please?', 'Could you speak more slowly, please?', 'What does that mean?', "Sorry, my English is not perfect yet."],
  mission: ['Decore as **5 frases de emergência** até saírem sem pensar: {Sorry?} · {Could you repeat that, please?} · {Could you speak more slowly?} · {What does … mean?} · {How do you say … in English?}',
            'Assista um vídeo em inglês e, cada vez que não entender algo, **pause e fale** uma dessas frases em voz alta.'],
  cards: [["I didn't catch that.", 'Não peguei (o que você disse).'], ['Could you repeat that?', 'Pode repetir?'], ['What does it mean?', 'O que significa?'],
          ['How do you say…?', 'Como se diz…?'], ['How do you spell it?', 'Como se soletra?'], ['Do you mean…?', 'Você quer dizer…?'],
          ['Just to confirm…', 'Só pra confirmar…'], ['Let me think.', 'Deixa eu pensar.'], ['write it down', 'anotar / escrever'], ['yet', 'ainda (não)']]
});

COURSE.push({
  n: 26, w: 4,
  title: 'Phrasal Verbs essenciais (Top 15)',
  goal: 'Entender verbos como get up, turn on, look for, give up.',
  yt: ['phrasal verbs mais usados inglês', 'top 15 phrasal verbs for beginners'],
  learn: [
    { h: 'O que é um phrasal verb',
      p: ['É um **verbo + uma partícula** (up, on, off, for, out…) que juntos ganham um **significado novo**.',
          '{look} = olhar · {look for} = **procurar** · {look after} = **cuidar de**\n{give} = dar · {give up} = **desistir**',
          'Por isso não dá pra traduzir palavra por palavra: decore como **uma palavra só**.'] },
    { h: 'Os 15 do dia a dia',
      table: { head: ['Phrasal verb', 'Significado', 'Exemplo'], rows: [
        ['{wake up}', 'acordar', '{I wake up at six.}'],
        ['{get up}', 'levantar (da cama)', '{I get up at six thirty.}'],
        ['{turn on}', 'ligar (aparelho)', '{Turn on the lights.}'],
        ['{turn off}', 'desligar', '{Turn off your phone.}'],
        ['{look for}', 'procurar', "{I'm looking for my keys.}"],
        ['{look after}', 'cuidar de', '{She looks after our daughter.}'],
        ['{give up}', 'desistir', "{Don't give up!}"],
        ['{find out}', 'descobrir', '{I found out the problem.}'],
        ['{come back}', 'voltar', "{I'll come back later.}"],
        ['{go out}', 'sair (para se divertir)', '{We go out on Fridays.}'],
        ['{put on}', 'vestir, colocar', '{Put on your jacket.}'],
        ['{take off}', 'tirar (roupa) / decolar', '{Take off your shoes.} · {The plane took off.}'],
        ['{pick up}', 'buscar, pegar', '{I pick up my daughter at five.}'],
        ['{call back}', 'retornar a ligação', "{I'll call you back.}"],
        ['{set up}', 'configurar, montar', "{I'm setting up the new project.}"]
      ] } },
    { tip: 'Pares de opostos fixam melhor: {turn on ↔ turn off} · {put on ↔ take off} · {go out ↔ come back} · {wake up → get up}.' },
    { h: 'Separáveis: o objeto pode ir no meio',
      p: ['{Turn on the TV.} = {Turn the TV on.} — os dois estão certos.',
          'Mas com **pronome** (it, them, me…), ele **tem** que ir no meio: {Turn it on.} ✅ · “Turn on it” ❌.',
          '{Pick me up at five.} · {Call me back.} · {Put it on.}'] },
    { warn: '{Look for} não separa: {I\'m looking for it.} ✅ · “looking it for” ❌. Na dúvida, siga os exemplos da tabela.' }
  ],
  ex: [
    ['I wake up at six, but I get up at six thirty.', 'Acordo às seis, mas levanto às seis e meia.'],
    ['Can you turn off the lights?', 'Pode desligar as luzes?'],
    ["I'm looking for a remote job.", 'Estou procurando um emprego remoto.'],
    ['My wife looks after our daughter in the morning.', 'Minha esposa cuida da nossa filha de manhã.'],
    ["Don't give up!", 'Não desista!'],
    ['I found out the problem in the model.', 'Descobri o problema no modelo.'],
    ["I'll call you back in ten minutes.", 'Te ligo de volta em dez minutos.'],
    ['Can you pick me up at the airport?', 'Você pode me buscar no aeroporto?'],
    ['Put on your jacket. It\'s cold.', 'Coloque sua jaqueta. Está frio.'],
    ['The plane took off at noon.', 'O avião decolou ao meio-dia.'],
    ["We're setting up the new office.", 'Estamos montando o escritório novo.']
  ],
  err: [
    ['Turn on it.', 'Turn **it** on.', 'Pronome no meio.'],
    ['I search my keys.', "I'm **looking for** my keys.", 'Mais natural.'],
    ['I desisted.', 'I **gave up**.', '“Desist” existe, mas é formal e raro.'],
    ['Open the light.', '**Turn on** the light.', 'Luz e aparelho: turn on / turn off.']
  ],
  quiz: [
    { mc: 'Desistir:', o: ['give up', 'give in up', 'look up'] },
    { mc: 'Procurar:', o: ['look for', 'look after', 'look at'] },
    { mc: 'Cuidar de:', o: ['look after', 'look for', 'take off'] },
    { mc: 'Ligar a TV:', o: ['turn on the TV', 'open the TV', 'put on the TV'] },
    { mc: 'Com pronome:', o: ['Turn it off.', 'Turn off it.', 'Turn it of.'] },
    { mc: '“Te ligo de volta.”', o: ["I'll call you back.", "I'll call back you.", "I'll back call you."] },
    { fill: 'Put ___ your jacket. (vista)', a: ['on'] },
    { fill: 'I pick ___ my daughter at five. (busco)', a: ['up'] },
    { fill: 'I found ___ the problem. (descobri)', a: ['out'] },
    { build: "I'm looking for a remote job", pt: 'Estou procurando um emprego remoto.' },
    { build: "Don't give up", pt: 'Não desista!' },
    { build: 'Can you pick me up at the airport', pt: 'Você pode me buscar no aeroporto?' }
  ],
  speak: ["I'm looking for a remote job.", "Don't give up!", "I'll call you back in ten minutes.", 'Can you turn off the lights?'],
  mission: ['Use os 15 phrasal verbs **narrando seu dia de hoje**, do acordar ao dormir: {I woke up at six. I got up. I turned on the coffee machine. I put on my clothes…}',
            'Escolha os 5 que mais usa e coloque-os no self-talk de amanhã.'],
  cards: [['wake up', 'acordar'], ['get up', 'levantar'], ['turn on', 'ligar'], ['turn off', 'desligar'], ['look for', 'procurar'], ['look after', 'cuidar de'],
          ['give up', 'desistir'], ['find out', 'descobrir'], ['come back', 'voltar'], ['go out', 'sair (passear)'], ['put on', 'vestir / colocar'],
          ['take off', 'tirar (roupa) / decolar'], ['pick up', 'buscar / pegar'], ['call back', 'retornar ligação'], ['set up', 'configurar / montar']]
});

COURSE.push({
  n: 27, w: 4,
  title: 'Shadowing (repetição em tempo real)',
  goal: 'Repetir um áudio com a mesma entonação, ao mesmo tempo.',
  yt: ['shadowing technique english', 'english shadowing practice beginner', 'connected speech english gonna wanna'],
  dlgLabel: 'Treino',
  learn: [
    { h: 'O que é Shadowing',
      p: ['**Shadow** = sombra. Você vira a “sombra” do áudio: fala **junto**, imitando ritmo, entonação e pausas — como um karaokê de conversa.',
          'Treina ao mesmo tempo **ouvido, pronúncia e fluência**. É a técnica favorita de quem aprende idioma rápido.'] },
    { h: 'O método em 5 passos',
      table: { head: ['Passo', 'O que fazer'], rows: [
        ['1. Ouvir', 'Ouça o trecho 2x sem ler. Só sinta a música da frase.'],
        ['2. Ler + ouvir', 'Ouça lendo o texto. Marque onde a voz sobe e desce.'],
        ['3. Eco', 'Frase por frase: ouça uma, pause, repita idêntico. (Toque em cada fala.)'],
        ['4. Sombra', 'Toque “Ouvir tudo” e fale **junto**, ao mesmo tempo, sem parar.'],
        ['5. Gravar', 'Grave você fazendo a sombra e compare. Repita no dia seguinte.']
      ] } },
    { tip: 'Comece com a velocidade **Lenta** (aba Mais › Voz). Quando conseguir acompanhar, passe para Normal. Exagere a entonação — parece teatro, e é assim que funciona.' },
    { h: 'Fala conectada: por que nativos “engolem” palavras',
      table: { head: ['Escrito', 'Falado', 'Exemplo'], rows: [
        ['going to', '{gonna}', "{I'm gonna call you.}"],
        ['want to', '{wanna}', '{I wanna go home.}'],
        ['got to / have got to', '{gotta}', '{I gotta go.}'],
        ['let me', '{lemme}', '{Lemme see.}'],
        ['did you', '“didja”', '{Did you see it?}'],
        ['what do you', '“whaddaya”', '{What do you want?}']
      ] },
      after: ['Você não precisa falar assim, mas precisa **reconhecer** — é por isso que filme parece rápido demais.'] },
    { h: 'Escolhendo vídeos para shadowing',
      li: ['Trechos de **30 s a 1 min**, com legenda em inglês.', 'Fala clara e não muito rápida: entrevistas, TED-Ed, vídeos de “English with…”.',
           'Repita o **mesmo** trecho por 3–5 dias. Profundidade vence quantidade.'] }
  ],
  dlg: [
    { t: '🎧 Treino 1 — Apresentação profissional', intro: 'Faça os 5 passos com este texto. Ele serve para entrevistas.',
      lines: [
        ['🎧', 'Hi, my name is Eriton, and I’m an architect from Brazil.', 'Oi, meu nome é Eriton e sou arquiteto do Brasil.'],
        ['🎧', 'I work as a BIM manager.', 'Trabalho como gerente BIM.'],
        ['🎧', 'I coordinate models, I check clashes, and I help the team work better.', 'Coordeno modelos, confiro interferências e ajudo a equipe a trabalhar melhor.'],
        ['🎧', 'I’ve used Revit every day for many years.', 'Uso o Revit todos os dias há muitos anos.'],
        ['🎧', 'Right now, I’m improving my English,', 'Agora estou melhorando meu inglês,'],
        ['🎧', 'because I want to work with international teams.', 'porque quero trabalhar com equipes internacionais.']
      ] },
    { t: '🎧 Treino 2 — Conversa rápida', intro: 'Ritmo de conversa real, com fala conectada.',
      lines: [
        ['Kim', "Hey! What are you gonna do this weekend?", 'Ei! O que você vai fazer neste fim de semana?'],
        ['Eri', "I don't know yet. I wanna rest a little.", 'Ainda não sei. Quero descansar um pouco.'],
        ['Kim', 'Did you see the new project?', 'Você viu o projeto novo?'],
        ['Eri', "Not yet. Lemme check it after lunch.", 'Ainda não. Deixa eu ver depois do almoço.'],
        ['Kim', "OK. I gotta go. See you tomorrow!", 'OK. Tenho que ir. Até amanhã!'],
        ['Eri', 'See you!', 'Até!']
      ] }
  ],
  quiz: [
    { mc: 'No shadowing, você deve…', o: ['falar junto com o áudio, imitando o ritmo', 'traduzir cada frase', 'só ler em silêncio'] },
    { mc: 'Qual o primeiro passo?', o: ['Ouvir sem ler', 'Gravar', 'Falar junto'] },
    { mc: '“gonna” =', o: ['going to', 'got to', 'want to'], say: "I'm gonna call you." },
    { mc: '“wanna” =', o: ['want to', 'going to', 'what do you'], say: 'I wanna go home.' },
    { mc: '“I gotta go” =', o: ['Tenho que ir.', 'Eu vou ir.', 'Eu quero ir.'], say: 'I gotta go.' },
    { mc: '“Lemme check” =', o: ['Deixa eu ver.', 'Me checa.', 'Eu vou checar amanhã.'], say: 'Lemme check.' },
    { mc: 'Melhor tamanho de trecho para treinar:', o: ['30 s a 1 min', '20 minutos', '1 hora'] },
    { fill: "What are you ___ do this weekend? (going to, informal)", a: ['gonna', 'going to'] },
    { build: 'I want to work with international teams', pt: 'Quero trabalhar com equipes internacionais.' },
    { build: "I don't know yet", pt: 'Ainda não sei.' },
    { build: 'See you tomorrow', pt: 'Até amanhã!' }
  ],
  speak: ['Hi, my name is Eriton, and I’m an architect from Brazil.', 'I coordinate models, I check clashes, and I help the team work better.', 'Right now, I’m improving my English.', "I gotta go. See you tomorrow!"],
  mission: ['Faça os **5 passos** do shadowing com o Treino 1 até conseguir falar junto sem travar. Grave o passo 5.',
            'Depois escolha **um trecho de 1 minuto** de um vídeo no YouTube (com legenda em inglês) e faça o mesmo. Repita esse trecho nos próximos 3 dias.'],
  cards: [['shadowing', 'falar junto com o áudio (sombra)'], ['gonna', 'going to'], ['wanna', 'want to'], ['gotta', 'got to / tenho que'], ['lemme', 'let me / deixa eu'],
          ['improve', 'melhorar'], ['See you!', 'Até mais!'], ['Not yet.', 'Ainda não.'], ['rest', 'descansar']]
});

COURSE.push({
  n: 28, w: 4, review: true,
  title: 'Revisão Geral & Autoavaliação',
  goal: 'Resumir tudo e listar os pontos que precisam de reforço.',
  yt: ['job interview english practice beginner', 'english conversation practice intermediate', 'tell me about yourself job interview answer'],
  dlgLabel: 'Entrevista',
  learn: [
    { h: '🏁 Você chegou ao Dia 28!',
      p: ['Em 4 semanas você passou por **presente, passado e futuro**, aprendeu a fazer perguntas, conectar ideias, pedir ajuda e se apresentar profissionalmente.',
          'Hoje: (1) relembre o mapa geral, (2) avalie cada tema com sinceridade, (3) faça a entrevista simulada, (4) monte seu plano de reforço.'] },
    { h: 'O mapa do inglês em uma tabela',
      table: { head: ['Tempo', 'Afirmativa', 'Negativa', 'Pergunta'], rows: [
        ['To be (presente)', "{I'm ready.}", "{I'm not ready.}", '{Are you ready?}'],
        ['Agora (-ing)', "{I'm working.}", "{I'm not working.}", '{Are you working?}'],
        ['Rotina', '{I work. / She works.}', "{I don't work. / She doesn't work.}", '{Do you work? / Does she work?}'],
        ['To be (passado)', '{I was there.}', "{I wasn't there.}", '{Were you there?}'],
        ['Passado', '{I worked. / I went.}', "{I didn't work.}", '{Did you work?}'],
        ['Plano', "{I'm going to travel.}", "{I'm not going to travel.}", '{Are you going to travel?}'],
        ['Decisão / promessa', "{I'll help.}", "{I won't forget.}", '{Will you help?}'],
        ['Modais', '{I can / should / have to…}', "{I can't / shouldn't / don't have to…}", '{Can I…? / Should I…?}']
      ] } },
    { self: true },
    { tip: '**E depois dos 28 dias?** 1) Continue a aba **Revisar** todo dia — 5 minutos mantêm tudo vivo. 2) Refaça os dias que marcou 😟. 3) Shadowing de 1 vídeo por semana. 4) Self-talk diário. 5) Quando se sentir pronto, comece conversas reais (aulas de conversação, grupos online).' }
  ],
  dlg: [
    { t: '💼 Entrevista simulada', intro: 'Ouça, depois responda você mesmo a cada pergunta do entrevistador (pause após cada fala dele).',
      lines: [
        ['HR', 'Hi, Eriton. Thank you for coming. How are you today?', 'Oi, Eriton. Obrigado por vir. Como você está hoje?'],
        ['Eri', "I'm fine, thank you. A little nervous, but happy to be here.", 'Estou bem, obrigado. Um pouco nervoso, mas feliz por estar aqui.'],
        ['HR', 'Tell me about yourself.', 'Fale sobre você.'],
        ['Eri', "I'm an architect from Brazil. I work as a BIM manager, and I coordinate big projects.", 'Sou arquiteto do Brasil. Trabalho como gerente BIM e coordeno grandes projetos.'],
        ['HR', 'How long have you worked with BIM?', 'Há quanto tempo você trabalha com BIM?'],
        ['Eri', 'I started working with BIM many years ago. I used to draw in AutoCAD, but now I use Revit every day.', 'Comecei com BIM há muitos anos. Desenhava no AutoCAD, mas agora uso o Revit todo dia.'],
        ['HR', 'Why do you want this job?', 'Por que você quer esta vaga?'],
        ['Eri', 'Because I want to work with international teams, and I think I can help your company.', 'Porque quero trabalhar com equipes internacionais, e acho que posso ajudar sua empresa.'],
        ['HR', 'What are your plans for the future?', 'Quais são seus planos para o futuro?'],
        ['Eri', "I'm going to keep improving my English, and I want to grow as a BIM leader.", 'Vou continuar melhorando meu inglês e quero crescer como líder BIM.'],
        ['HR', 'Do you have any questions?', 'Você tem alguma pergunta?'],
        ['Eri', 'Yes. Could you tell me more about the team?', 'Sim. Você poderia me contar mais sobre a equipe?']
      ] }
  ],
  quiz: [
    { mc: 'She ___ at home now. (está)', o: ['is', 'are', 'does'] },
    { mc: 'I ___ studying English right now.', o: ['am', 'is', 'do'] },
    { mc: 'My wife ___ from home.', o: ['works', 'work', 'is work'] },
    { mc: '___ you use Revit?', o: ['Do', 'Are', 'Does'] },
    { mc: "I'm tired ___ I worked a lot.", o: ['because', 'so', 'but'] },
    { mc: 'The meeting is ___ Monday ___ ten.', o: ['on / at', 'in / on', 'at / in'], say: 'The meeting is on Monday at ten.' },
    { mc: '___ much is it?', o: ['How', 'What', 'Who'] },
    { mc: 'Where ___ you yesterday?', o: ['were', 'did', 'was'] },
    { mc: "I didn't ___ the email.", o: ['see', 'saw', 'seen'] },
    { mc: 'I ___ to draw by hand. (costumava)', o: ['used', 'use', 'using'] },
    { mc: 'Plano já decidido:', o: ["I'm going to move abroad.", 'I will move abroad maybe.', 'I move abroad.'] },
    { mc: '“Você não precisa vir.”', o: ["You don't have to come.", "You mustn't come.", "You shouldn't to come."] },
    { mc: 'Não entendeu:', o: ['Sorry, could you repeat that?', 'Yes, OK.', 'Repeat.'] },
    { fill: "Don't give ___! (desista)", a: ['up'] },
    { build: 'Could you tell me more about the team', pt: 'Você poderia me contar mais sobre a equipe?' },
    { build: 'I started working with BIM many years ago', pt: 'Comecei a trabalhar com BIM há muitos anos.' }
  ],
  speak: ["I'm an architect from Brazil. I work as a BIM manager.", 'I used to draw in AutoCAD, but now I use Revit every day.',
          'I want to work with international teams.', "I'm going to keep improving my English."],
  mission: ['**Sua apresentação final:** grave 2 minutos respondendo às perguntas da entrevista simulada, sem ler. Compare com o áudio do Dia 1. 🎉',
            'Preencha a autoavaliação (aba Aprender) e siga o plano de reforço gerado.'],
  cards: [['Tell me about yourself.', 'Fale sobre você.'], ['Thank you for coming.', 'Obrigado por vir.'], ['grow', 'crescer'],
          ['keep improving', 'continuar melhorando'], ['Do you have any questions?', 'Você tem alguma pergunta?'], ['leader', 'líder']]
});
