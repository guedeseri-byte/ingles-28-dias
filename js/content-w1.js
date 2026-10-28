/* Semana 1 — Estrutura Base & Identidade
   Formato de cada dia: ver comentários em app.js (learn, ex, err, dlg, quiz, speak, mission, cards).
   Marcação: **negrito**  __destaque__  {inglês clicável com áudio}  ___ = lacuna */
window.COURSE = window.COURSE || [];

COURSE.push({
  n: 1, w: 1,
  title: 'Verb To Be (presente)',
  goal: 'Dizer quem você é, onde está e como se sente.',
  yt: ['verb to be presente inglês', 'verb to be afirmativa negativa interrogativa'],
  learn: [
    { h: 'Um verbo, dois significados',
      p: ['**To be** = **ser** e **estar**. Em português temos dois verbos; em inglês é um só.',
          '{I am tired.} = Eu __estou__ cansado.\n{I am an architect.} = Eu __sou__ arquiteto.',
          'O contexto diz se é “ser” ou “estar”. Você não precisa escolher — é sempre o mesmo verbo.'] },
    { h: 'A conjugação (decore esta tabela)',
      table: { head: ['Pessoa', 'Completo', 'Contraído', 'Tradução'], rows: [
        ['I', '{I am}', "{I'm}", 'eu sou / estou'],
        ['You', '{you are}', "{you're}", 'você é / está'],
        ['He', '{he is}', "{he's}", 'ele é / está'],
        ['She', '{she is}', "{she's}", 'ela é / está'],
        ['It', '{it is}', "{it's}", 'é / está (coisa, animal)'],
        ['We', '{we are}', "{we're}", 'nós somos / estamos'],
        ['They', '{they are}', "{they're}", 'eles são / estão']
      ] },
      after: ['Na conversa, quase todo mundo usa a forma **contraída**: {I\'m}, {you\'re}, {she\'s}.'] },
    { tip: 'Pense em 3 caixinhas: **I → am** · **he / she / it → is** · **todo o resto (you, we, they) → are**. O “am” só anda com o “I”.' },
    { h: 'Negativa: coloque NOT depois do verbo',
      table: { head: ['Completo', 'Contraído'], rows: [
        ['{I am not tired.}', "{I'm not tired.}"],
        ['{She is not at home.}', "{She isn't at home.}"],
        ['{They are not ready.}', "{They aren't ready.}"]
      ] } },
    { warn: 'Não existe “I amn\'t”. Com **I**, a negativa contraída é sempre {I\'m not}.' },
    { h: 'Pergunta: inverta a ordem',
      p: ['Na pergunta, o verbo **pula para a frente** do sujeito. Não precisa de nenhuma palavra extra.'],
      table: { head: ['Afirmação', 'Pergunta'], rows: [
        ['{You are tired.}', '{Are you tired?}'],
        ['{She is at work.}', '{Is she at work?}'],
        ['{They are from Spain.}', '{Are they from Spain?}']
      ] },
      after: ['Respostas curtas: {Yes, I am.} · {No, I\'m not.} · {Yes, she is.} · {No, she isn\'t.}'] },
    { warn: 'Na resposta curta **afirmativa**, não contraia: diga {Yes, I am}, nunca “Yes, I\'m”.' },
    { h: 'Para que serve no dia a dia',
      li: ['Nome: {I\'m Eriton.}', 'Profissão: {I\'m a BIM manager.}', 'Origem: {I\'m from Brazil.}',
           'Lugar: {I\'m at home.} / {I\'m at work.}', 'Sentimento: {I\'m happy.} / {I\'m busy.}',
           'Idade: {My daughter is seven years old.}', 'Descrever: {The office is big.}'] },
    { tip: 'Idade em inglês usa **TO BE**, não “ter”: {I am 35.} — nunca “I have 35 years”.' }
  ],
  ex: [
    ["Hi! I'm Eriton. I'm from Brazil.", 'Oi! Eu sou o Eriton. Sou do Brasil.'],
    ["I'm an architect.", 'Eu sou arquiteto.', 'Profissão sempre com a / an antes.'],
    ["I'm at work now.", 'Estou no trabalho agora.'],
    ["My wife is at home.", 'Minha esposa está em casa.'],
    ["We are a small family.", 'Somos uma família pequena.'],
    ["I'm not tired. I'm hungry!", 'Não estou cansado. Estou com fome!', '“Estar com fome” = be hungry.'],
    ["Are you busy?", 'Você está ocupado?'],
    ["Yes, I am. / No, I'm not.", 'Sim, estou. / Não, não estou.'],
    ["Is she your daughter?", 'Ela é sua filha?'],
    ["It's cold today.", 'Está frio hoje.'],
    ["They aren't ready.", 'Eles não estão prontos.']
  ],
  err: [
    ['I have 35 years.', "I'm 35. / I'm 35 years old.", 'Idade = to be.'],
    ['I am architect.', "I'm **an** architect.", 'Profissão no singular leva a / an.'],
    ['Is my friend.', "**He** is my friend. / **She** is my friend.", 'Em inglês o sujeito nunca some.'],
    ["Yes, I'm.", 'Yes, I am.', 'Resposta curta afirmativa sem contração.'],
    ['I am agree.', 'I agree.', '“Agree” já é verbo (concordar). Não usa to be.']
  ],
  quiz: [
    { mc: 'I ___ an architect.', o: ['am', 'is', 'are'], e: 'I → am.' },
    { mc: 'She ___ at home.', o: ['is', 'am', 'are'], e: 'He / she / it → is.' },
    { mc: 'We ___ from Brazil.', o: ['are', 'is', 'am'], e: 'You / we / they → are.' },
    { fill: 'They ___ ready. (negativa, contraída)', a: ["aren't", 'are not'], pt: 'Eles não estão prontos.' },
    { fill: '___ you tired?', a: ['Are'], pt: 'Você está cansado?' },
    { mc: 'Como responder “Are you busy?” (sim)', o: ['Yes, I am.', "Yes, I'm.", 'Yes, I busy.'], e: 'Afirmativa curta não contrai.' },
    { mc: 'Como dizer “Tenho 35 anos”?', o: ["I'm 35 years old.", 'I have 35 years.', 'I have 35 years old.'], e: 'Idade usa to be.' },
    { build: 'My wife is at home', pt: 'Minha esposa está em casa.' },
    { build: "I'm not tired today", pt: 'Não estou cansado hoje.', alt: ['I am not tired today'] },
    { build: 'Is she your daughter', pt: 'Ela é sua filha?' },
    { fill: "It ___ cold today.", a: ['is', "'s"], pt: 'Está frio hoje.' }
  ],
  speak: ["Hi! I'm Eriton.", "I'm from Brazil.", "I'm an architect.", "I'm at home and I'm happy."],
  mission: ['Grave um áudio de **30 segundos** se apresentando (pode ser no WhatsApp para você mesmo): nome, de onde é, profissão, onde está agora e como se sente.',
            'Modelo: {Hi! I\'m Eriton. I\'m from Brazil. I\'m an architect. I\'m at home now. I\'m a little tired, but I\'m happy.}'],
  cards: [['tired', 'cansado'], ['hungry', 'com fome'], ['happy', 'feliz'], ['busy', 'ocupado'], ['ready', 'pronto'],
          ['at home', 'em casa'], ['at work', 'no trabalho'], ["I'm from Brazil", 'eu sou do Brasil'], ['wife', 'esposa'],
          ['daughter', 'filha'], ['cold', 'frio'], ["Are you busy?", 'Você está ocupado?']]
});

COURSE.push({
  n: 2, w: 1,
  title: 'Pronomes (Subject & Object)',
  goal: 'Identificar quem faz e quem recebe a ação.',
  yt: ['subject and object pronouns inglês', 'pronomes pessoais inglês me him her'],
  learn: [
    { h: 'Quem faz × quem recebe',
      p: ['**Sujeito** = quem faz a ação → vem **antes** do verbo.\n**Objeto** = quem recebe a ação → vem **depois** do verbo ou de uma preposição (with, for, to…).',
          '{She loves him.} → __she__ faz (ama), __him__ recebe (é amado).\n{He loves her.} → agora inverteu: __he__ faz, __her__ recebe.'] },
    { h: 'A tabela completa',
      table: { head: ['Sujeito', 'Objeto', 'Possessivo'], rows: [
        ['{I} eu', '{me} me, mim', '{my} meu, minha'],
        ['{you} você', '{you} te, você', '{your} seu, sua'],
        ['{he} ele', '{him} o, ele', '{his} dele'],
        ['{she} ela', '{her} a, ela', '{her} dela'],
        ['{it} (coisa)', '{it}', '{its} dele/dela (coisa)'],
        ['{we} nós', '{us} nos, nós', '{our} nosso'],
        ['{they} eles', '{them} os, eles', '{their} deles']
      ] },
      after: ['A coluna **possessivo** é um bônus: você vai precisar dela para falar da família ({my wife}, {our daughter}).'] },
    { tip: 'Truque rápido: se em português você diria “**me**, **mim**, **comigo**, **o**, **a**, **lhe**”, em inglês é a coluna do **objeto**: {Call me.} (me liga), {for me} (pra mim), {with me} (comigo).' },
    { h: 'Depois de preposição = objeto',
      li: ['{This is for you.} Isto é pra você.', '{Come with us.} Venha com a gente.', '{I work with them.} Eu trabalho com eles.',
           '{Talk to her.} Fale com ela.', '{Look at me.} Olhe pra mim.'] },
    { h: 'O “it” que não existe em português',
      p: ['Em português dizemos “Está chovendo”, “É tarde”, “São 5 horas” — sem sujeito. **Em inglês o sujeito é obrigatório**, então entra o {it}:',
          "{It's raining.} · {It's late.} · {It's 5 o'clock.} · {It's far.} · {It's expensive.}"] },
    { warn: 'Ele/ela para **coisas e animais** é {it}. {The house is big. It is beautiful.} — não “She is beautiful” para uma casa.' },
    { h: 'His × Her (o pulo do gato)',
      p: ['Em português “dele / dela” muda pelo **dono**. Em inglês também!',
          '{his car} = o carro **dele** · {her car} = o carro **dela**',
          '{His wife} = a esposa dele (dono homem) · {Her husband} = o marido dela (dona mulher).'] }
  ],
  ex: [
    ['I love her.', 'Eu amo ela. (Eu a amo.)'],
    ['She helps me every day.', 'Ela me ajuda todo dia.'],
    ['Call me later, please.', 'Me liga mais tarde, por favor.'],
    ['This coffee is for you.', 'Este café é pra você.'],
    ['Come with us!', 'Vem com a gente!'],
    ['I work with them.', 'Eu trabalho com eles.'],
    ['Do you know him?', 'Você conhece ele?'],
    ["It's raining.", 'Está chovendo.', 'O “it” é obrigatório.'],
    ['My wife and I are from Brazil.', 'Minha esposa e eu somos do Brasil.'],
    ['Her name is Ana. His name is Paul.', 'O nome dela é Ana. O nome dele é Paul.'],
    ['Our daughter is very smart.', 'Nossa filha é muito esperta.']
  ],
  err: [
    ['I love she.', 'I love **her**.', 'Depois do verbo: objeto.'],
    ['Help I, please.', 'Help **me**, please.', ''],
    ['Is raining.', "**It**'s raining.", 'Sujeito obrigatório.'],
    ['This is for I.', 'This is for **me**.', 'Depois de preposição: objeto.'],
    ['She is my wife. He name is Ana.', '**Her** name is Ana.', 'Possessivo de “ela” = her.']
  ],
  quiz: [
    { mc: 'Call ___ tomorrow. (me ligue)', o: ['me', 'I', 'my'], e: 'Depois do verbo → objeto.' },
    { mc: 'I work with ___. (eles)', o: ['them', 'they', 'their'], e: 'Depois de preposição → objeto.' },
    { mc: '___ is my friend. (ela)', o: ['She', 'Her', 'Hers'], e: 'Antes do verbo → sujeito.' },
    { mc: '___ raining.', o: ["It's", 'Is', "He's"], e: 'Clima sempre com “it”.' },
    { mc: 'Ana is my wife. ___ name is Ana.', o: ['Her', 'His', 'She'], e: 'Dona mulher → her.' },
    { fill: 'Do you know ___? (ele)', a: ['him'], pt: 'Você conhece ele?' },
    { fill: 'This is for ___. (nós)', a: ['us'], pt: 'Isto é pra nós.' },
    { build: 'She helps me every day', pt: 'Ela me ajuda todo dia.' },
    { build: 'Come with us', pt: 'Vem com a gente.', x: ['we'] },
    { build: 'Our daughter is very smart', pt: 'Nossa filha é muito esperta.' },
    { mc: 'The house is big. ___ is beautiful.', o: ['It', 'She', 'He'], e: 'Coisa → it.' }
  ],
  speak: ['Call me later, please.', 'I work with them.', 'My wife and I are from Brazil.', "It's late. Let's go home."],
  mission: ['Fale 5 frases sobre pessoas da sua vida usando **sujeito + objeto**. Ex: {I love her.} {She helps me.} {My boss calls me every day.} {I talk to them.}',
            'Depois diga o nome de cada pessoa usando **his / her**: {Her name is…} {His name is…}'],
  cards: [['me', 'me, mim'], ['him', 'ele (objeto), o'], ['her', 'ela (objeto) / dela'], ['us', 'nós (objeto), nos'], ['them', 'eles (objeto), os'],
          ['his', 'dele'], ['our', 'nosso(a)'], ['their', 'deles'], ['Call me.', 'Me liga.'], ['with me', 'comigo'],
          ["It's raining.", 'Está chovendo.'], ["It's late.", 'Está tarde.']]
});

COURSE.push({
  n: 3, w: 1,
  title: 'Present Continuous (agora)',
  goal: 'Falar o que você está fazendo neste momento.',
  yt: ['present continuous inglês explicação', 'present continuous vs simple present'],
  learn: [
    { h: 'A fórmula',
      p: ['**Sujeito + am/is/are + verbo com -ING**',
          'É o “estou fazendo” do português. O -ING = o “-ndo” (trabalha__ndo__, estuda__ndo__).',
          '{I am working.} = Estou trabalhando.\n{She is sleeping.} = Ela está dormindo.'] },
    { tip: 'Você já sabe 50% disso: é o **to be** de ontem + verbo com -ing. {I\'m} + {working}.' },
    { h: 'Como escrever o -ING',
      table: { head: ['Regra', 'Exemplo'], rows: [
        ['Normal: + ing', '{work} → {working} · {study} → {studying}'],
        ['Termina em -e: tira o e', '{make} → {making} · {write} → {writing}'],
        ['Consoante-vogal-consoante curta: dobra', '{run} → {running} · {sit} → {sitting} · {stop} → {stopping}'],
        ['Termina em -ie: vira y', '{lie} → {lying} · {die} → {dying}']
      ] } },
    { h: 'Negativa e pergunta (igual ao to be!)',
      table: { head: ['Forma', 'Exemplo'], rows: [
        ['Afirmativa', "{I'm working.}"],
        ['Negativa', "{I'm not working.} · {She isn't working.}"],
        ['Pergunta', '{Are you working?} · {Is she working?}'],
        ['Com pergunta aberta', '{What are you doing?} O que você está fazendo?']
      ] } },
    { h: 'Quando usar',
      li: ['**Agora mesmo:** {I\'m cooking dinner.}', '**Situação temporária** (esta semana, este mês): {I\'m learning English this month.}',
           '**Mudança acontecendo:** {My daughter is growing fast.}'],
      after: ['Palavras que combinam: {now}, {right now}, {at the moment}, {today}, {this week}.'] },
    { warn: 'Verbos de **sentimento / pensamento** quase nunca vão para -ing: like, love, want, need, know, understand, believe. Diga {I want coffee}, não “I\'m wanting coffee”. Diga {I understand}, não “I\'m understanding”.' }
  ],
  ex: [
    ["I'm working on a Revit model.", 'Estou trabalhando num modelo no Revit.'],
    ['My daughter is sleeping.', 'Minha filha está dormindo.'],
    ['What are you doing?', 'O que você está fazendo?'],
    ["I'm studying English right now.", 'Estou estudando inglês agora.'],
    ["It's raining again.", 'Está chovendo de novo.'],
    ["We're having dinner.", 'Estamos jantando.', '“Have dinner” = jantar. Aqui “have” aceita -ing.'],
    ["I'm not watching TV.", 'Não estou vendo TV.'],
    ['Is she driving?', 'Ela está dirigindo?'],
    ["They're waiting for you.", 'Eles estão esperando por você.'],
    ["I'm looking for my keys.", 'Estou procurando minhas chaves.']
  ],
  err: [
    ['I working now.', "I**'m** working now.", 'Não esqueça o am/is/are.'],
    ['She is work.', 'She is work**ing**.', 'Precisa do -ing.'],
    ["I'm wanting a coffee.", 'I want a coffee.', 'Want não vai para -ing.'],
    ['What you are doing?', 'What **are you** doing?', 'Na pergunta o verbo vem antes do sujeito.'],
    ['I am makeing.', 'I am **making**.', 'Termina em -e: tira o e.']
  ],
  quiz: [
    { mc: 'I ___ working now.', o: ['am', 'is', 'are'] , e: 'I → am.' },
    { mc: 'She is ___ (dormir).', o: ['sleeping', 'sleep', 'sleeps'] },
    { mc: 'Escrita correta de make + ing:', o: ['making', 'makeing', 'makking'], e: 'Tira o e final.' },
    { mc: 'Escrita correta de run + ing:', o: ['running', 'runing', 'runeing'], e: 'Dobra a consoante.' },
    { fill: 'What are you ___? (fazendo)', a: ['doing'] },
    { fill: "They ___ waiting for you. (contraído ou não)", a: ['are', "'re"] },
    { mc: 'Qual está CERTO?', o: ['I want a coffee.', "I'm wanting a coffee.", 'I wanting a coffee.'], e: 'Want não vai para -ing.' },
    { build: 'I am studying English right now', pt: 'Estou estudando inglês agora.', alt: ["I'm studying English right now"] },
    { build: 'What are you doing', pt: 'O que você está fazendo?' },
    { build: 'My daughter is not sleeping', pt: 'Minha filha não está dormindo.', alt: ["My daughter isn't sleeping"] },
    { fill: "I'm ___ for my keys. (procurando)", a: ['looking'] }
  ],
  speak: ["I'm studying English right now.", 'What are you doing?', "I'm working on a Revit model.", 'My daughter is sleeping.'],
  mission: ['**Narrador da vida real:** durante o dia de hoje, narre em voz alta (ou baixinho) 10 coisas que você está fazendo.',
            '{I\'m drinking coffee.} {I\'m opening my laptop.} {I\'m walking to the car.} {I\'m talking to my wife.} {I\'m looking for my phone.}'],
  cards: [['I am working', 'estou trabalhando'], ['sleeping', 'dormindo'], ['What are you doing?', 'O que você está fazendo?'],
          ['right now', 'agora mesmo'], ['at the moment', 'no momento'], ['waiting for', 'esperando por'], ['looking for', 'procurando'],
          ['cooking', 'cozinhando'], ['driving', 'dirigindo'], ['having dinner', 'jantando'], ['this week', 'esta semana']]
});

COURSE.push({
  n: 4, w: 1,
  title: 'Simple Present (I, You, We, They)',
  goal: 'Falar sobre sua rotina e hábitos.',
  yt: ['simple present inglês rotina', 'simple present afirmativa negativa'],
  learn: [
    { h: 'O presente “de sempre”',
      p: ['Para **rotina, hábito e fatos**. Com **I, you, we, they** o verbo fica do jeito que está no dicionário — sem mudar nada.',
          '{I work.} Eu trabalho. · {We live in Brazil.} Nós moramos no Brasil. · {They like pizza.} Eles gostam de pizza.'] },
    { h: 'Verbos que você vai usar todo dia',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{work}', 'trabalhar'], ['{live}', 'morar, viver'], ['{like}', 'gostar'], ['{have}', 'ter'], ['{want}', 'querer'],
        ['{need}', 'precisar'], ['{go}', 'ir'], ['{eat}', 'comer'], ['{drink}', 'beber'], ['{use}', 'usar'], ['{speak}', 'falar (idioma)'], ['{wake up}', 'acordar']
      ] } },
    { h: 'Negativa: DON\'T + verbo',
      p: ['{I don\'t like coffee.} Eu não gosto de café.\n{We don\'t work on Sundays.} Não trabalhamos aos domingos.',
          '**Don\'t** = do + not. Ele é só um “ajudante”: não tem tradução, só marca a negativa.'] },
    { warn: 'Brasileiro adora dizer “I no like”. Em inglês o “não” antes do verbo é sempre {don\'t}: {I don\'t like}, {I don\'t know}, {I don\'t understand}.' },
    { h: 'Agora (continuous) × Sempre (simple)',
      table: { head: ['Sempre / rotina', 'Agora / temporário'], rows: [
        ['{I work in an office.}', "{I'm working at home today.}"],
        ['{I drink coffee every morning.}', "{I'm drinking tea now.}"],
        ['{We live in Brazil.}', "{We're living with my parents this month.}"]
      ] } },
    { h: 'Palavras de rotina',
      li: ['{every day} todo dia · {every morning} toda manhã', '{on Mondays} às segundas · {on weekends} nos fins de semana',
           '{in the morning} de manhã · {in the afternoon} à tarde · {at night} à noite'] },
    { tip: 'Ordem natural: **quem + verbo + o quê + quando**. {I + drink + coffee + every morning.} Tempo vai no **final** da frase.' }
  ],
  ex: [
    ['I work in an office.', 'Eu trabalho num escritório.'],
    ['I wake up at six.', 'Eu acordo às seis.'],
    ['We live in Brazil.', 'Nós moramos no Brasil.'],
    ['I drink coffee every morning.', 'Eu bebo café toda manhã.'],
    ['I use Revit every day.', 'Eu uso Revit todo dia.'],
    ["I don't work on Sundays.", 'Eu não trabalho aos domingos.'],
    ['They speak Spanish.', 'Eles falam espanhol.'],
    ['I have a daughter.', 'Eu tenho uma filha.'],
    ["I don't understand.", 'Eu não entendo.'],
    ['We want to live in Spain.', 'Nós queremos morar na Espanha.', 'want + to + verbo.']
  ],
  err: [
    ['I am work in an office.', 'I work in an office.', 'Simple present não usa am/is/are.'],
    ['I no like coffee.', "I **don't** like coffee.", ''],
    ['I like very much pizza.', 'I like pizza very much.', '“Very much” vai no final.'],
    ['Every day I drink coffee in the morning I.', 'I drink coffee every morning.', 'Quem + verbo + o quê + quando.']
  ],
  quiz: [
    { mc: 'I ___ in an office.', o: ['work', 'am work', 'working'], e: 'Rotina → simple present.' },
    { mc: 'We ___ pizza. (não gostamos)', o: ["don't like", 'no like', 'not like'] },
    { mc: 'Qual frase fala de ROTINA?', o: ['I drink coffee every morning.', "I'm drinking coffee now."] },
    { mc: 'Qual fala de AGORA?', o: ["I'm working at home today.", 'I work at home.'] },
    { fill: 'I ___ up at six. (acordo)', a: ['wake'] },
    { fill: "I ___ understand. (negativa)", a: ["don't", 'do not'] },
    { build: 'I use Revit every day', pt: 'Eu uso Revit todo dia.' },
    { build: "I don't work on Sundays", pt: 'Não trabalho aos domingos.', alt: ['I do not work on Sundays'] },
    { build: 'We want to live in Spain', pt: 'Queremos morar na Espanha.' },
    { mc: 'Ordem certa:', o: ['I like pizza very much.', 'I like very much pizza.', 'I very much like pizza very.'] },
    { fill: 'I ___ a daughter. (tenho)', a: ['have'] }
  ],
  speak: ['I wake up at six.', 'I drink coffee every morning.', 'I use Revit every day.', "I don't work on Sundays."],
  mission: ['Descreva sua rotina em **8 frases**, do acordar ao dormir, em voz alta. Escreva no bloco de notas também.',
            'Modelo: {I wake up at six. I drink coffee. I take my daughter to school. I work from eight to six. I have lunch at noon. I study English at night. I go to bed at eleven.}'],
  cards: [['wake up', 'acordar'], ['live', 'morar'], ['need', 'precisar'], ['want', 'querer'], ['every day', 'todo dia'],
          ['every morning', 'toda manhã'], ['on weekends', 'nos fins de semana'], ['at night', 'à noite'], ["I don't know", 'eu não sei'],
          ["I don't understand", 'eu não entendo'], ['go to bed', 'ir dormir'], ['have lunch', 'almoçar']]
});

COURSE.push({
  n: 5, w: 1,
  title: 'Simple Present (He, She, It + S)',
  goal: 'Descrever a rotina de outra pessoa.',
  yt: ['simple present terceira pessoa regras s es ies', 'third person s pronunciation'],
  learn: [
    { h: 'A única regra que muda',
      p: ['Com **he, she, it** (ou um nome: my wife, my boss, the office), o verbo ganha **-S**.',
          '{I work} → {She works}. {I live} → {He lives}. {They like} → {My wife likes}.'] },
    { tip: 'Lembre como: **“ele/ela — S de Solitário”**. Uma pessoa só (he, she, it) → verbo com S.' },
    { h: 'Regras de escrita',
      table: { head: ['Regra', 'Exemplos'], rows: [
        ['Normal: + s', '{works} · {likes} · {drinks} · {lives}'],
        ['Termina em s, sh, ch, x, o: + es', '{watches} · {washes} · {fixes} · {goes} · {does}'],
        ['Consoante + y: troca por ies', '{study} → {studies} · {try} → {tries}'],
        ['Vogal + y: só + s', '{play} → {plays} · {buy} → {buys}'],
        ['Irregular', '{have} → {has}']
      ] } },
    { h: 'Pronúncia do S (3 sons)',
      table: { head: ['Som', 'Exemplos'], rows: [
        ['/s/ (sss)', '{works} · {likes} · {stops}'],
        ['/z/ (zzz)', '{lives} · {plays} · {goes}'],
        ['/iz/ (vira sílaba)', '{watches} · {fixes} · {uses}']
      ] },
      after: ['Não se preocupe em acertar 100% agora — o importante é **não esquecer o S**.'] },
    { h: 'Negativa: DOESN\'T (e o S some!)',
      p: ['{She doesn\'t like coffee.} — o S foi para o **doesn\'t** (does = do + s). Por isso o verbo volta ao normal.',
          '✅ {He doesn\'t work.}   ❌ He doesn\'t works.'] },
    { warn: 'Só um S por frase: ou no verbo ({she works}), ou no ajudante ({she doesn\'t work}). Nunca nos dois.' }
  ],
  ex: [
    ['My wife works from home.', 'Minha esposa trabalha de casa.'],
    ['My daughter goes to school in the morning.', 'Minha filha vai pra escola de manhã.'],
    ['She studies a lot.', 'Ela estuda muito.'],
    ['He watches TV at night.', 'Ele assiste TV à noite.'],
    ['My boss has a big office.', 'Meu chefe tem um escritório grande.'],
    ["She doesn't like coffee.", 'Ela não gosta de café.'],
    ["He doesn't speak English.", 'Ele não fala inglês.'],
    ['It costs ten dollars.', 'Custa dez dólares.'],
    ['The project starts on Monday.', 'O projeto começa na segunda.'],
    ['My daughter plays with her friends.', 'Minha filha brinca com as amigas.']
  ],
  err: [
    ['She work at home.', 'She work**s** at home.', 'He/she/it → S.'],
    ["He doesn't works.", "He doesn't work.", 'Com doesn\'t, o verbo perde o S.'],
    ['She haves a car.', 'She **has** a car.', 'Have → has.'],
    ['He studys.', 'He stud**ies**.', 'Consoante + y → ies.'],
    ["She don't like it.", "She **doesn't** like it.", 'He/she/it → doesn\'t.']
  ],
  quiz: [
    { mc: 'My wife ___ from home.', o: ['works', 'work', 'working'] },
    { mc: 'He ___ TV at night.', o: ['watches', 'watchs', 'watch'], e: 'Termina em ch → es.' },
    { mc: 'She ___ a lot.', o: ['studies', 'studys', 'study'], e: 'Consoante + y → ies.' },
    { mc: 'My boss ___ a big office.', o: ['has', 'haves', 'have'] },
    { mc: "She doesn't ___ coffee.", o: ['like', 'likes', 'liking'], e: 'Depois de doesn\'t, sem S.' },
    { fill: 'My daughter ___ to school. (go)', a: ['goes'] },
    { fill: 'He ___ speak English. (negativa)', a: ["doesn't", 'does not'] },
    { fill: 'She ___ with her friends. (play)', a: ['plays'] },
    { build: 'My wife works from home', pt: 'Minha esposa trabalha de casa.', x: ['work'] },
    { build: "She doesn't like coffee", pt: 'Ela não gosta de café.', x: ['likes'] },
    { build: 'The project starts on Monday', pt: 'O projeto começa na segunda.' }
  ],
  speak: ['My wife works from home.', 'She studies a lot.', "He doesn't speak English.", 'My daughter goes to school in the morning.'],
  mission: ['Escolha **2 pessoas** (sua esposa, sua filha, um colega). Descreva a rotina de cada uma em 5 frases, em voz alta.',
            'Modelo: {My daughter wakes up at seven. She has breakfast. She goes to school. She plays in the afternoon. She doesn\'t like vegetables!}'],
  cards: [['works', 'trabalha'], ['goes', 'vai'], ['has', 'tem'], ['studies', 'estuda'], ['watches', 'assiste'],
          ["doesn't", 'não (he/she/it)'], ['boss', 'chefe'], ['costs', 'custa'], ['starts', 'começa'], ['plays', 'brinca / joga'],
          ['breakfast', 'café da manhã'], ['from home', 'de casa']]
});

COURSE.push({
  n: 6, w: 1,
  title: 'Perguntas com Do e Does',
  goal: 'Fazer perguntas diretas para outras pessoas.',
  yt: ['perguntas do does inglês', 'do does questions short answers'],
  learn: [
    { h: 'A fórmula da pergunta',
      p: ['**Do / Does + sujeito + verbo normal + resto?**',
          '{Do you like coffee?} Você gosta de café?\n{Does she work here?} Ela trabalha aqui?',
          'O **do / does** não tem tradução — ele só avisa: “vem pergunta aí”.'] },
    { h: 'Do ou Does?',
      table: { head: ['Sujeito', 'Ajudante', 'Exemplo'], rows: [
        ['I, you, we, they', '{Do}', '{Do you speak English?}'],
        ['he, she, it', '{Does}', '{Does he speak English?}']
      ] },
      after: ['É a mesma lógica de ontem: o **S** de he/she/it vai para o ajudante (does), e o verbo fica sem S.'] },
    { warn: '✅ {Does she work?}   ❌ Does she works? — o S já está no “does”.' },
    { h: 'Respostas curtas',
      table: { head: ['Pergunta', 'Sim', 'Não'], rows: [
        ['{Do you like it?}', '{Yes, I do.}', "{No, I don't.}"],
        ['{Does she work here?}', '{Yes, she does.}', "{No, she doesn't.}"],
        ['{Do they live here?}', '{Yes, they do.}', "{No, they don't.}"]
      ] },
      after: ['Responder só “Yes” ou “No” não é errado, mas a resposta curta soa muito mais natural.'] },
    { h: 'Com palavras de pergunta (spoiler do Dia 10)',
      li: ['{Where do you live?} Onde você mora?', '{What do you do?} O que você faz? (= qual sua profissão?)',
           '{What does she do?} O que ela faz?', '{When do you work?} Quando você trabalha?'] },
    { tip: '{What do you do?} é a pergunta nº 1 em entrevista e networking = “Com o que você trabalha?”. Resposta: {I\'m a BIM manager.} ou {I work with BIM.}' },
    { warn: 'Se a frase tem **to be** (am/is/are), NÃO use do: {Are you tired?} ✅ · “Do you are tired?” ❌. **Do** é só para os outros verbos.' }
  ],
  ex: [
    ['Do you speak English?', 'Você fala inglês?'],
    ['Yes, I do. A little.', 'Sim, falo. Um pouco.'],
    ['Does she work here?', 'Ela trabalha aqui?'],
    ['What do you do?', 'Com o que você trabalha?'],
    ["I'm an architect. I work with BIM.", 'Sou arquiteto. Trabalho com BIM.'],
    ['Where do you live?', 'Onde você mora?'],
    ['Do you have children?', 'Você tem filhos?'],
    ['Yes, I have a daughter.', 'Sim, tenho uma filha.'],
    ['Does it work?', 'Isso funciona?'],
    ['Do you need help?', 'Você precisa de ajuda?']
  ],
  err: [
    ['Does she works here?', 'Does she work here?', 'Sem S depois de does.'],
    ['Do she like it?', '**Does** she like it?', 'She → does.'],
    ['Do you are Brazilian?', 'Are you Brazilian?', 'Com to be, sem do.'],
    ['You like coffee? (em contexto formal)', 'Do you like coffee?', 'Na conversa informal até passa, mas aprenda o padrão.'],
    ['What you do?', 'What **do you** do?', '']
  ],
  quiz: [
    { mc: '___ you speak English?', o: ['Do', 'Does', 'Are'] },
    { mc: '___ she work here?', o: ['Does', 'Do', 'Is'] },
    { mc: 'Does he ___ coffee?', o: ['like', 'likes', 'liking'] },
    { mc: '___ you tired?', o: ['Are', 'Do', 'Does'], e: 'Tired vem com to be.' },
    { mc: 'Resposta curta: “Does she live here?” (não)', o: ["No, she doesn't.", "No, she don't.", 'No, she not.'] },
    { fill: 'Do you have children? — Yes, I ___.', a: ['do'] },
    { fill: 'What ___ you do? (sua profissão)', a: ['do'] },
    { build: 'Where do you live', pt: 'Onde você mora?' },
    { build: 'Does it work', pt: 'Isso funciona?', x: ['works'] },
    { build: 'Do you need help', pt: 'Você precisa de ajuda?' },
    { fill: 'What ___ she do?', a: ['does'] }
  ],
  speak: ['Do you speak English?', 'What do you do?', 'Where do you live?', 'Does it work?'],
  mission: ['Escreva **8 perguntas** que você faria a alguém numa entrevista ou num primeiro encontro de trabalho (Do/Does). Depois responda você mesmo, em voz alta.',
            'Ex: {Do you use Revit?} → {Yes, I do. I use it every day.}'],
  cards: [['Do you…?', 'Você…? (pergunta)'], ['Does she…?', 'Ela…? (pergunta)'], ['What do you do?', 'Com o que você trabalha?'],
          ['Where do you live?', 'Onde você mora?'], ['Yes, I do.', 'Sim. (resposta curta)'], ["No, I don't.", 'Não. (resposta curta)'],
          ['Do you need help?', 'Você precisa de ajuda?'], ['children', 'filhos / crianças'], ['a little', 'um pouco'], ['Does it work?', 'Isso funciona?']]
});

COURSE.push({
  n: 7, w: 1, review: true,
  title: 'Revisão da Semana 1',
  goal: 'Juntar tudo em diálogos curtos e identificar o que aprendeu.',
  yt: ['basic english conversation beginner', 'english listening practice beginner introduce yourself', 'learn english with songs beginner'],
  dlgLabel: 'Diálogos',
  learn: [
    { h: 'O resumo da semana numa tabela',
      table: { head: ['Dia', 'Fórmula', 'Exemplo'], rows: [
        ['1 · To be', 'I am / he is / we are', "{I'm an architect.}"],
        ['2 · Pronomes', 'sujeito × objeto', '{She helps me.}'],
        ['3 · Agora', 'am/is/are + -ing', "{I'm working.}"],
        ['4 · Rotina', 'verbo normal', '{I work every day.}'],
        ['5 · He/she/it', 'verbo + s', '{She works.}'],
        ['6 · Perguntas', 'do/does + verbo', '{Do you work here?}']
      ] } },
    { h: 'O mapa das perguntas',
      p: ['Tem **to be**? → inverta: {Are you…?} {Is she…?}',
          'Tem verbo com **-ing**? → inverta o to be: {Are you working?}',
          'Outro verbo (work, like, have…)? → use **do / does**: {Do you work?} {Does she like…?}'] },
    { tip: 'Hoje é dia de **ouvir**. O objetivo não é entender 100%, é reconhecer as estruturas: “opa, isso é o -ing!”, “isso é o does!”.' },
    { h: 'Como estudar com músicas',
      li: ['Escolha músicas lentas e com letra clara (pop/folk).', 'Ouça 1x só ouvindo, 1x lendo a letra, 1x cantando junto.',
           'Procure na letra: **am/is/are**, verbos com **-ing**, **don\'t / doesn\'t**.', 'Busque no YouTube: “learn english with songs beginner”.'] }
  ],
  dlg: [
    { t: '🤝 Conhecendo alguém', intro: 'Dois profissionais se conhecem num evento.',
      lines: [
        ['Tom', "Hi! I'm Tom. Nice to meet you.", 'Oi! Eu sou o Tom. Prazer.'],
        ['Eri', "Nice to meet you too. I'm Eriton.", 'Prazer também. Sou o Eriton.'],
        ['Tom', 'Where are you from?', 'De onde você é?'],
        ['Eri', "I'm from Brazil. And you?", 'Sou do Brasil. E você?'],
        ['Tom', "I'm from Canada. What do you do?", 'Sou do Canadá. Com o que você trabalha?'],
        ['Eri', "I'm an architect. I work with BIM.", 'Sou arquiteto. Trabalho com BIM.'],
        ['Tom', 'Cool! Do you use Revit?', 'Legal! Você usa Revit?'],
        ['Eri', 'Yes, I do. I use it every day.', 'Sim. Uso todo dia.'],
        ['Tom', 'Are you here with your family?', 'Você está aqui com sua família?'],
        ['Eri', "No, I'm not. My wife and my daughter are at home.", 'Não. Minha esposa e minha filha estão em casa.']
      ] },
    { t: '📞 Ligação de trabalho', intro: 'Uma colega liga no meio do dia.',
      lines: [
        ['Ana', 'Hi, Eriton! Are you busy?', 'Oi, Eriton! Você está ocupado?'],
        ['Eri', "A little. I'm working on a model. What's up?", 'Um pouco. Estou trabalhando num modelo. O que houve?'],
        ['Ana', 'Does the client like the new design?', 'O cliente gosta do novo projeto?'],
        ['Eri', "Yes, he does. But he doesn't like the colors.", 'Sim. Mas ele não gosta das cores.'],
        ['Ana', 'No problem. Do you need help?', 'Sem problema. Você precisa de ajuda?'],
        ['Eri', 'Yes, please. Call me later.', 'Sim, por favor. Me liga mais tarde.']
      ] }
  ],
  quiz: [
    { mc: 'Where ___ you from?', o: ['are', 'do', 'is'], e: 'Ser de algum lugar = to be.' },
    { mc: 'What ___ you do?', o: ['do', 'are', 'does'] },
    { mc: 'No diálogo, o Eriton usa Revit…', o: ['every day', 'on weekends', 'never'] },
    { mc: 'Onde estão a esposa e a filha?', o: ['At home.', 'At work.', 'In Canada.'] },
    { mc: "Does the client like the colors?", o: ["No, he doesn't.", 'Yes, he does.', 'Yes, he is.'] },
    { mc: 'She ___ (trabalha) from home.', o: ['works', 'work', 'is work'] },
    { fill: "I'm ___ on a model. (trabalhando)", a: ['working'] },
    { fill: 'Call ___ later. (me)', a: ['me'] },
    { build: 'Nice to meet you too', pt: 'Prazer também.' },
    { build: 'Are you here with your family', pt: 'Você está aqui com sua família?' },
    { build: "My daughter doesn't like coffee", pt: 'Minha filha não gosta de café.', x: ['likes', "don't"] },
    { mc: '“I am agree” está…', o: ['Errado: o certo é “I agree”.', 'Certo.'], say: 'I agree.' }
  ],
  speak: ["Hi! I'm Eriton. Nice to meet you.", "I'm from Brazil. I'm an architect.", 'I work with BIM. I use Revit every day.', 'Are you busy? Call me later.'],
  mission: ['**Apresentação de 1 minuto.** Junte tudo da semana: quem você é, profissão, família, rotina, o que está fazendo agora. Grave e ouça.',
            'Depois assista a um vídeo de “introduce yourself in English” e anote 3 frases que você ainda não sabia.'],
  cards: [['Nice to meet you.', 'Prazer em conhecer.'], ['Where are you from?', 'De onde você é?'], ["What's up?", 'E aí? / O que houve?'],
          ['No problem.', 'Sem problema.'], ['client', 'cliente'], ['design', 'projeto / desenho'], ['And you?', 'E você?']]
});
