/* Semana 3 — Passado & Histórias */
window.COURSE = window.COURSE || [];

COURSE.push({
  n: 15, w: 3,
  title: 'To Be no passado (Was / Were)',
  goal: 'Dizer onde estava, como estava ou quem era.',
  yt: ['was were inglês passado verbo to be', 'was and were english grammar'],
  learn: [
    { h: 'Só duas formas',
      table: { head: ['Pessoa', 'Passado', 'Exemplo'], rows: [
        ['I, he, she, it', '{was}', '{I was tired.} · {She was at home.}'],
        ['you, we, they', '{were}', '{You were right.} · {They were late.}']
      ] },
      after: ['**Was / were** = era, estava, fui, estive. Mesmo esquema do presente: o que era **am / is** vira **was**; o que era **are** vira **were**.'] },
    { tip: 'Ligação direta: **am, is → was** · **are → were**. Os dois que têm “r” (are, were) andam juntos.' },
    { h: 'Negativa e pergunta',
      table: { head: ['Forma', 'Exemplo'], rows: [
        ['Negativa', "{I wasn't at work.} · {They weren't ready.}"],
        ['Pergunta', '{Were you at home?} · {Was she happy?}'],
        ['Resposta curta', "{Yes, I was.} · {No, she wasn't.}"],
        ['Com WH', '{Where were you?} · {How was your day?}']
      ] } },
    { h: '“Eu nasci” = I was born',
      p: ['Em inglês, nascer é “ser nascido”: {I was born in Brazil.} {My daughter was born in 2018.}',
          'Pergunta: {Where were you born?} · {When were you born?}'] },
    { h: 'Bônus: There was / There were',
      p: ['= **tinha / havia** (existia). {There was a problem.} Tinha um problema. {There were ten people.} Tinha dez pessoas.'] },
    { warn: 'Nunca diga “I were” ou “they was”. **I → was** sempre.' }
  ],
  ex: [
    ['I was at work yesterday.', 'Eu estava no trabalho ontem.'],
    ['Where were you?', 'Onde você estava?'],
    ['How was your day?', 'Como foi seu dia?'],
    ['It was a great day!', 'Foi um ótimo dia!'],
    ['I was born in Brazil.', 'Eu nasci no Brasil.'],
    ['We were very tired.', 'Nós estávamos muito cansados.'],
    ["The meeting wasn't long.", 'A reunião não foi longa.'],
    ['Were you at home last night?', 'Você estava em casa ontem à noite?'],
    ['There was a problem with the model.', 'Teve um problema com o modelo.'],
    ['You were right.', 'Você estava certo.']
  ],
  err: [
    ['I were tired.', 'I **was** tired.', ''],
    ['I born in Brazil.', 'I **was born** in Brazil.', 'Nascer = was born.'],
    ['Did you were at home?', '**Were you** at home?', 'To be não usa did.'],
    ['How was you day?', 'How was **your** day?', 'You = você · your = seu.']
  ],
  quiz: [
    { mc: 'I ___ at work yesterday.', o: ['was', 'were', 'am'] },
    { mc: 'They ___ late.', o: ['were', 'was', 'are'] },
    { mc: 'Where ___ you?', o: ['were', 'was', 'did'] },
    { mc: '“Eu nasci no Brasil”', o: ['I was born in Brazil.', 'I born in Brazil.', 'I am born in Brazil.'] },
    { mc: 'Were you at home? (não)', o: ["No, I wasn't.", "No, I weren't.", "No, I didn't."] },
    { fill: 'How ___ your day?', a: ['was'] },
    { fill: "The meeting ___ long. (negativa)", a: ["wasn't", 'was not'] },
    { fill: '___ were ten people at the meeting. (tinha)', a: ['There'] },
    { build: 'It was a great day', pt: 'Foi um ótimo dia!' },
    { build: 'Were you at home last night', pt: 'Você estava em casa ontem à noite?', x: ['was'] },
    { build: 'There was a problem with the model', pt: 'Teve um problema com o modelo.' }
  ],
  speak: ['How was your day?', 'I was at work yesterday.', 'I was born in Brazil.', 'There was a problem with the model.'],
  mission: ['Responda em voz alta sobre **ontem**: {Where were you in the morning?} {Where were you at night?} {How was your day?} {Were you tired?} {Who was with you?}',
            'E sobre sua vida: {Where were you born?} {Where was your first job?}'],
  cards: [['was', 'era / estava (I, he, she, it)'], ['were', 'eram / estavam (you, we, they)'], ['How was your day?', 'Como foi seu dia?'],
          ['I was born', 'eu nasci'], ['There was…', 'Tinha / havia… (singular)'], ['There were…', 'Tinha / havia… (plural)'], ['yesterday', 'ontem'],
          ['right', 'certo'], ['great', 'ótimo'], ['problem', 'problema']]
});

COURSE.push({
  n: 16, w: 3,
  title: 'Simple Past — verbos regulares (-ED)',
  goal: 'Usar o passado regular e pronunciar o -ED certo.',
  yt: ['pronúncia ed passado inglês t d id', 'simple past regular verbs'],
  learn: [
    { h: 'A regra',
      p: ['Verbo regular no passado = **verbo + ED**. Igual para todas as pessoas (sem S, sem nada).',
          '{I worked.} {She worked.} {They worked.} = trabalhei / trabalhou / trabalharam.'] },
    { h: 'Escrita',
      table: { head: ['Regra', 'Exemplo'], rows: [
        ['Normal: + ed', '{work} → {worked} · {call} → {called}'],
        ['Termina em e: + d', '{live} → {lived} · {decide} → {decided}'],
        ['Consoante + y: ied', '{study} → {studied} · {try} → {tried}'],
        ['Vogal + y: + ed', '{play} → {played} · {stay} → {stayed}'],
        ['Curto C-V-C: dobra', '{stop} → {stopped} · {plan} → {planned}']
      ] } },
    { h: 'Pronúncia do -ED: 3 sons (o mais importante do dia!)',
      table: { head: ['Som', 'Quando', 'Exemplos'], rows: [
        ['/t/', 'depois de sons “surdos”: p, k, s, sh, ch, f', '{worked} “uórkt” · {stopped} · {watched} · {liked} · {finished}'],
        ['/d/', 'depois de sons “vozeados” e vogais', '{played} “plêid” · {lived} · {called} · {opened} · {studied}'],
        ['/id/', 'SÓ depois de T ou D', '{wanted} “uón-tid” · {needed} · {started} · {decided}']
      ] } },
    { tip: 'Regra de ouro: **o -ED só vira sílaba extra (“id”) se o verbo termina em T ou D**. Em todo o resto, o “e” é mudo. {worked} tem **1** sílaba, não “uór-kéd”.' },
    { warn: 'O erro nº 1 do brasileiro é dizer “uor-KED”, “lai-KED”, “plei-ED”. Ouça os áudios e note: {worked}, {liked}, {played} — tudo numa sílaba só.' },
    { h: 'Verbos regulares para começar',
      li: ['{work · worked}', '{call · called}', '{watch · watched}', '{study · studied}', '{start · started}', '{finish · finished}',
           '{live · lived}', '{need · needed}', '{want · wanted}', '{travel · traveled}', '{change · changed}', '{design · designed}'] }
  ],
  ex: [
    ['I worked late yesterday.', 'Trabalhei até tarde ontem.', '/t/ — “uórkt”'],
    ['She called me this morning.', 'Ela me ligou hoje de manhã.', '/d/'],
    ['We watched a movie.', 'Assistimos um filme.', '/t/'],
    ['I studied English for an hour.', 'Estudei inglês por uma hora.', '/d/'],
    ['The meeting started at nine.', 'A reunião começou às nove.', '/id/ — termina em t'],
    ['I finished the project.', 'Terminei o projeto.', '/t/'],
    ['We lived in another city.', 'Moramos em outra cidade.', '/d/'],
    ['I needed help.', 'Eu precisei de ajuda.', '/id/ — termina em d'],
    ['They traveled to Portugal.', 'Eles viajaram para Portugal.', '/d/'],
    ['I designed this house.', 'Eu projetei esta casa.', '/d/ — design = projetar']
  ],
  err: [
    ['I work yesterday.', 'I work**ed** yesterday.', 'Não esqueça o -ed.'],
    ['“uor-KED” (2 sílabas)', '{worked} (1 sílaba, “uórkt”)', 'Só T/D ganham sílaba.'],
    ['I studyed.', 'I stud**ied**.', ''],
    ['She workeds.', 'She worked.', 'Passado não tem S.']
  ],
  quiz: [
    { mc: 'Passado de work:', o: ['worked', 'workd', 'workied'] },
    { mc: 'Passado de study:', o: ['studied', 'studyed', 'studed'] },
    { mc: 'Passado de stop:', o: ['stopped', 'stoped', 'stopt'] },
    { mc: 'Qual -ED tem sílaba extra “id”?', o: ['wanted', 'worked', 'played'], e: 'Termina em T.' },
    { mc: 'Qual -ED soa /t/?', o: ['watched', 'lived', 'needed'] },
    { mc: 'Qual -ED soa /d/?', o: ['called', 'liked', 'started'] },
    { fill: 'She ___ me this morning. (call)', a: ['called'] },
    { fill: 'The meeting ___ at nine. (start)', a: ['started'] },
    { build: 'I worked late yesterday', pt: 'Trabalhei até tarde ontem.', x: ['work'] },
    { build: 'They traveled to Portugal', pt: 'Eles viajaram para Portugal.', alt: ['They travelled to Portugal'] },
    { build: 'I finished the project', pt: 'Terminei o projeto.' }
  ],
  speak: ['I worked late yesterday.', 'I studied English for an hour.', 'The meeting started at nine.', 'I needed help, so I called my friend.'],
  mission: ['**Treino de pronúncia:** leia a lista de verbos do “Aprender” em voz alta 3 vezes, separando os 3 sons. Use o 🐢 para ouvir devagar.',
            'Depois conte **5 coisas que você fez ontem** usando só verbos regulares: {Yesterday I worked, I called my mother, I watched TV…}'],
  cards: [['worked', 'trabalhei / trabalhou'], ['called', 'liguei / ligou'], ['watched', 'assisti'], ['studied', 'estudei'], ['started', 'começou'],
          ['finished', 'terminei'], ['lived', 'morei'], ['needed', 'precisei'], ['traveled', 'viajei'], ['designed', 'projetei'], ['changed', 'mudou'], ['movie', 'filme']]
});

COURSE.push({
  n: 17, w: 3,
  title: 'Simple Past — os 20 irregulares',
  goal: 'Dominar os verbos irregulares mais usados.',
  yt: ['20 verbos irregulares mais usados inglês', 'irregular verbs english pronunciation'],
  learn: [
    { h: 'Por que esses 20?',
      p: ['Os verbos mais comuns do inglês são justamente os irregulares. Com estes 20 você conta quase qualquer história.',
          'A boa notícia: como no regular, **a forma é a mesma para todas as pessoas**. {I went} · {she went} · {they went}.'] },
    { h: 'Os 20 (toque para ouvir)',
      table: { head: ['Verbo', 'Passado', 'Significado'], rows: [
        ['{go}', '{went}', 'ir → fui'], ['{have}', '{had}', 'ter → tive'], ['{do}', '{did}', 'fazer → fiz'], ['{get}', '{got}', 'conseguir, receber, ficar'],
        ['{make}', '{made}', 'fazer, criar'], ['{say}', '{said}', 'dizer'], ['{see}', '{saw}', 'ver'], ['{come}', '{came}', 'vir'],
        ['{take}', '{took}', 'pegar, levar'], ['{know}', '{knew}', 'saber, conhecer'], ['{think}', '{thought}', 'pensar, achar'],
        ['{give}', '{gave}', 'dar'], ['{find}', '{found}', 'encontrar'], ['{tell}', '{told}', 'contar, dizer a alguém'],
        ['{buy}', '{bought}', 'comprar'], ['{eat}', '{ate}', 'comer'], ['{leave}', '{left}', 'sair, deixar'],
        ['{feel}', '{felt}', 'sentir'], ['{meet}', '{met}', 'conhecer, encontrar'], ['{write}', '{wrote}', 'escrever']
      ] } },
    { tip: 'Decore em **famílias**:\n• **-ought**: {think → thought}, {buy → bought}, {bring → brought}\n• **-ew**: {know → knew}, {fly → flew}\n• **-t**: {feel → felt}, {leave → left}, {meet → met}\n• **vogal muda**: {come → came}, {give → gave}, {write → wrote}' },
    { h: 'Do × Make (os dois são “fazer”)',
      p: ['{do} = executar tarefa: {do homework}, {do the dishes}, {do a good job}.',
          '{make} = criar / produzir algo: {make dinner}, {make a model}, {make a decision}, {make money}.'] },
    { warn: 'Não junte as regras: “wented”, “goed”, “buyed” não existem. Irregular é só a forma da tabela.' }
  ],
  ex: [
    ['I went to the office.', 'Fui ao escritório.'],
    ['We had a long meeting.', 'Tivemos uma reunião longa.'],
    ['I did my homework.', 'Fiz meu dever de casa.'],
    ['I got an email from the client.', 'Recebi um email do cliente.'],
    ['She made dinner.', 'Ela fez o jantar.'],
    ['I saw a great movie.', 'Vi um filme ótimo.'],
    ['I thought it was easy.', 'Achei que era fácil.'],
    ['He told me the news.', 'Ele me contou a novidade.'],
    ['I bought a new laptop.', 'Comprei um notebook novo.'],
    ['We met at a conference.', 'Nós nos conhecemos numa conferência.'],
    ['I left work at six.', 'Saí do trabalho às seis.'],
    ['I felt very happy.', 'Me senti muito feliz.']
  ],
  err: [
    ['I goed to work.', 'I **went** to work.', ''],
    ['I buyed a car.', 'I **bought** a car.', ''],
    ['I maked a decision.', 'I **made** a decision.', ''],
    ['She said me the news.', 'She **told** me the news.', 'Tell + pessoa. Say + algo.']
  ],
  quiz: [
    { mc: 'Passado de go:', o: ['went', 'goed', 'gone'] },
    { mc: 'Passado de buy:', o: ['bought', 'buyed', 'brought'] },
    { mc: 'Passado de think:', o: ['thought', 'thinked', 'taught'] },
    { mc: 'Passado de see:', o: ['saw', 'seed', 'seen'] },
    { mc: 'Passado de leave:', o: ['left', 'leaved', 'lived'] },
    { mc: 'She ___ me the news. (contou)', o: ['told', 'said', 'telled'], e: 'Tell + pessoa.' },
    { mc: 'I ___ a decision. (tomei)', o: ['made', 'did', 'took'], e: 'Make a decision.' },
    { fill: 'We ___ at a conference. (meet)', a: ['met'] },
    { fill: 'I ___ an email from the client. (get)', a: ['got'] },
    { fill: 'We ___ a long meeting. (have)', a: ['had'] },
    { build: 'I went to the office', pt: 'Fui ao escritório.', x: ['go'] },
    { build: 'I bought a new laptop', pt: 'Comprei um notebook novo.' }
  ],
  speak: ['I went to the office and I had a long meeting.', 'I got an email from the client.', 'I thought it was easy.', 'We met at a conference.'],
  mission: ['Faça os 20 verbos como **flashcard falado**: diga o presente, cubra a coluna e diga o passado. Repita até errar zero.',
            'Depois conte **o que você fez no último fim de semana** com pelo menos 8 irregulares: {I went…, I ate…, I saw…, I bought…}'],
  cards: [['went', 'fui (go)'], ['had', 'tive (have)'], ['did', 'fiz (do)'], ['got', 'recebi / consegui (get)'], ['made', 'fiz / criei (make)'],
          ['said', 'disse (say)'], ['saw', 'vi (see)'], ['came', 'vim (come)'], ['took', 'peguei / levei (take)'], ['knew', 'sabia (know)'],
          ['thought', 'pensei / achei (think)'], ['gave', 'dei (give)'], ['found', 'encontrei (find)'], ['told', 'contei (tell)'],
          ['bought', 'comprei (buy)'], ['ate', 'comi (eat)'], ['left', 'saí / deixei (leave)'], ['felt', 'senti (feel)'], ['met', 'conheci (meet)'], ['wrote', 'escrevi (write)']]
});

COURSE.push({
  n: 18, w: 3,
  title: 'Passado: Did / Didn\'t',
  goal: 'Fazer perguntas e negar no passado.',
  yt: ['did didnt passado negativa interrogativa inglês', 'simple past questions did'],
  learn: [
    { h: 'O DID é o “do” do passado',
      p: ['Lembra do **do/does** do Dia 6? No passado ele vira **did** — para todas as pessoas.',
          '**Pergunta:** Did + sujeito + verbo **normal**? → {Did you work yesterday?}\n**Negativa:** sujeito + didn\'t + verbo **normal** → {I didn\'t work yesterday.}'] },
    { h: 'O verbo volta ao normal!',
      p: ['O **did** já carrega o passado. Então o verbo principal volta para a forma do dicionário:',
          '{I went.} → {I didn\'t go.} (não “didn\'t went”)\n{She saw it.} → {Did she see it?} (não “did she saw”)'] },
    { tip: 'Pense no **did** como um caminhão que leva o passado. Se ele aparece, o verbo “desce” do caminhão e fica leve: **sem -ed, sem forma irregular**.' },
    { h: 'Respostas curtas e WH',
      table: { head: ['Pergunta', 'Resposta'], rows: [
        ['{Did you call her?}', "{Yes, I did.} · {No, I didn't.}"],
        ['{What did you do yesterday?}', '{I worked and I studied.}'],
        ['{Where did you go?}', '{I went to the beach.}'],
        ['{Why did you leave?}', '{Because I was tired.}'],
        ['{How did it go?}', '{It went well!} (Como foi? Foi bem!)']
      ] } },
    { warn: 'Com **was / were** NÃO use did: {Were you tired?} ✅ · “Did you were tired?” ❌ · {I wasn\'t there.} ✅ · “I didn\'t was” ❌.' }
  ],
  ex: [
    ['What did you do yesterday?', 'O que você fez ontem?'],
    ['Did you finish the project?', 'Você terminou o projeto?'],
    ["Yes, I did. / No, I didn't.", 'Sim, terminei. / Não, não terminei.'],
    ["I didn't go to work.", 'Não fui trabalhar.'],
    ["She didn't call me.", 'Ela não me ligou.'],
    ['Where did you go on vacation?', 'Para onde você foi nas férias?'],
    ['Did you sleep well?', 'Você dormiu bem?'],
    ['How did the meeting go?', 'Como foi a reunião?'],
    ["I didn't understand the question.", 'Não entendi a pergunta.'],
    ['Why did you choose architecture?', 'Por que você escolheu arquitetura?']
  ],
  err: [
    ["I didn't went.", "I didn't **go**.", 'Depois de didn\'t, verbo normal.'],
    ['Did you saw it?', 'Did you **see** it?', ''],
    ['You did call him?', '**Did you** call him?', ''],
    ['Did you were there?', '**Were** you there?', 'To be não usa did.']
  ],
  quiz: [
    { mc: '___ you finish the project?', o: ['Did', 'Do', 'Were'] },
    { mc: "I didn't ___ to work.", o: ['go', 'went', 'going'] },
    { mc: 'Did she ___ you?', o: ['call', 'called', 'calls'] },
    { mc: '___ you tired yesterday?', o: ['Were', 'Did', 'Was'], e: 'Tired = to be.' },
    { mc: 'Did you sleep well? (sim)', o: ['Yes, I did.', 'Yes, I slept.', 'Yes, I was.'] },
    { fill: 'What ___ you do yesterday?', a: ['did'] },
    { fill: "I ___ understand the question. (negativa)", a: ["didn't", 'did not'] },
    { fill: 'Where did you ___ on vacation? (go)', a: ['go'] },
    { build: 'How did the meeting go', pt: 'Como foi a reunião?', x: ['went'] },
    { build: 'Why did you choose architecture', pt: 'Por que você escolheu arquitetura?' },
    { build: "She didn't call me", pt: 'Ela não me ligou.', x: ['called'] }
  ],
  speak: ['What did you do yesterday?', 'Did you sleep well?', "I didn't understand the question.", 'Why did you choose architecture?'],
  mission: ['Entrevista com você mesmo: faça e responda em voz alta **6 perguntas com did** sobre ontem e sobre sua vida.',
            '{What did you do yesterday? Did you work? What did you eat for lunch? Why did you choose architecture? When did you start working with BIM?}'],
  cards: [['Did you…?', 'Você … ? (passado)'], ["didn't", 'não (passado)'], ['What did you do?', 'O que você fez?'], ['Where did you go?', 'Aonde você foi?'],
          ['How did it go?', 'Como foi?'], ['It went well.', 'Foi bem.'], ['vacation', 'férias'], ['choose', 'escolher'], ['sleep well', 'dormir bem']]
});

COURSE.push({
  n: 19, w: 3,
  title: 'Used to (hábitos do passado)',
  goal: 'Dizer o que você costumava fazer antigamente.',
  yt: ['used to inglês costumava', 'used to vs be used to'],
  learn: [
    { h: 'Used to = costumava',
      p: ['**Sujeito + used to + verbo normal** → um hábito ou situação do passado que **não acontece mais**.',
          '{I used to draw by hand.} = Eu costumava desenhar à mão. (hoje não desenho mais)\n{I used to live in another city.} = Eu morava em outra cidade.'] },
    { tip: 'Muitas vezes o “-ava / -ia” do português (morava, trabalhava, jogava) que indica **hábito antigo** é exatamente {used to}.' },
    { h: 'Negativa e pergunta (com did!)',
      table: { head: ['Forma', 'Exemplo'], rows: [
        ['Afirmativa', '{I used to smoke.}'],
        ['Negativa', "{I didn't use to like coffee.} (sem o d!)"],
        ['Pergunta', '{Did you use to play soccer?}'],
        ['Resposta', "{Yes, I did.} · {No, I didn't.}"]
      ] },
      after: ['Com **did / didn\'t**, o “used” perde o **d**: {use to}. Mesma regra de ontem: o did leva o passado.'] },
    { h: 'Pronúncia',
      p: ['Fala-se **“iústu”** — o “s” é som de S (não Z) e o “d” some: {used to}, {I used to work}.'] },
    { warn: 'Não confunda com {be used to} = **estar acostumado**. {I\'m used to working late.} = Estou acostumado a trabalhar até tarde. Por enquanto, foque só no {used to} = costumava.' },
    { h: 'Antes × Agora (estrutura ótima para entrevista)',
      p: ['{I used to work with AutoCAD, but now I use Revit.}', '{I used to be shy, but now I talk to everyone.}'] }
  ],
  ex: [
    ['I used to draw by hand.', 'Eu costumava desenhar à mão.'],
    ['I used to work with AutoCAD, but now I use Revit.', 'Eu trabalhava com AutoCAD, mas agora uso Revit.'],
    ['We used to live in a small apartment.', 'Nós morávamos num apartamento pequeno.'],
    ['My daughter used to sleep a lot.', 'Minha filha costumava dormir muito.'],
    ["I didn't use to like vegetables.", 'Eu não gostava de legumes.'],
    ['Did you use to play soccer?', 'Você costumava jogar futebol?'],
    ['There used to be a park here.', 'Antigamente tinha um parque aqui.'],
    ['I used to be shy.', 'Eu era tímido.'],
    ['We used to travel every summer.', 'A gente viajava todo verão.']
  ],
  err: [
    ['I use to live there. (passado)', 'I **used** to live there.', 'Afirmativa com -d.'],
    ["I didn't used to like it.", "I didn't **use** to like it.", 'Com didn\'t, sem d.'],
    ['I used to living there.', 'I used to **live** there.', 'Verbo normal depois de used to.'],
    ['I am used to play soccer. (= costumava)', 'I **used to** play soccer.', '“Be used to” é outra coisa.']
  ],
  quiz: [
    { mc: 'Eu costumava desenhar à mão.', o: ['I used to draw by hand.', 'I use to draw by hand.', 'I used to drawing by hand.'] },
    { mc: "I didn't ___ to like coffee.", o: ['use', 'used', 'using'] },
    { mc: '___ you use to play soccer?', o: ['Did', 'Do', 'Were'] },
    { mc: '“Used to” fala de…', o: ['hábito do passado que acabou', 'algo que vou fazer', 'algo que faço sempre'] },
    { fill: 'We ___ to live in a small apartment.', a: ['used'] },
    { fill: 'I used to ___ shy. (ser)', a: ['be'] },
    { build: 'I used to work with AutoCAD but now I use Revit', pt: 'Eu trabalhava com AutoCAD, mas agora uso Revit.', alt: ['I used to work with AutoCAD, but now I use Revit'] },
    { build: 'There used to be a park here', pt: 'Antigamente tinha um parque aqui.' },
    { build: 'Did you use to play soccer', pt: 'Você costumava jogar futebol?', x: ['used'] },
    { fill: 'We used to ___ every summer. (viajar)', a: ['travel'] }
  ],
  speak: ['I used to draw by hand.', 'I used to work with AutoCAD, but now I use Revit.', 'Did you use to play soccer?', "I didn't use to like vegetables."],
  mission: ['**Antes × agora:** fale 6 frases comparando sua vida de 10 anos atrás com hoje. {I used to…, but now I…}',
            'Tema extra para entrevista: como sua forma de trabalhar mudou com o BIM.'],
  cards: [['used to', 'costumava'], ["didn't use to", 'não costumava'], ['draw by hand', 'desenhar à mão'], ['shy', 'tímido'],
          ['vegetables', 'legumes / verduras'], ['apartment', 'apartamento'], ['summer', 'verão'], ['but now', 'mas agora'], ['soccer', 'futebol']]
});

COURSE.push({
  n: 20, w: 3,
  title: 'Expressões de tempo no passado',
  goal: 'Situar suas histórias no tempo correto.',
  yt: ['yesterday last ago inglês expressões de tempo passado', 'sequence words first then after that finally'],
  learn: [
    { h: 'Quando aconteceu',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{yesterday}', 'ontem'], ['{yesterday morning}', 'ontem de manhã'], ['{last night}', 'ontem à noite'],
        ['{the day before yesterday}', 'anteontem'], ['{last week}', 'semana passada'], ['{last month}', 'mês passado'],
        ['{last year}', 'ano passado'], ['{two days ago}', 'dois dias atrás'], ['{a long time ago}', 'muito tempo atrás'],
        ['{in 2019}', 'em 2019'], ['{when I was a child}', 'quando eu era criança']
      ] } },
    { h: 'LAST e AGO: os dois que mais confundem',
      p: ['**last** = passado(a), vem **antes**: {last week}, {last Monday}, {last summer}. Sem “the”!',
          '**ago** = atrás, vem **depois** do tempo: {three years ago}, {ten minutes ago}.'] },
    { warn: '“Ontem à noite” = {last night}. Não diga “yesterday night”. E é {last week}, não “the last week” / “past week”.' },
    { h: 'Conectores de história (sequência)',
      table: { head: ['Inglês', 'Português'], rows: [
        ['{First,}', 'Primeiro,'], ['{Then,}', 'Depois, / Aí'], ['{After that,}', 'Depois disso,'], ['{Later,}', 'Mais tarde,'], ['{Finally,}', 'Por fim,']
      ] },
      after: ['Com eles e os verbos no passado, você já conta qualquer história: {First, I woke up late. Then, I missed the bus. After that, I ran to the office. Finally, I arrived at ten.}'] },
    { tip: 'A expressão de tempo vai normalmente **no começo ou no fim** da frase: {Last week I went to Rio.} ou {I went to Rio last week.}' }
  ],
  ex: [
    ['I called her yesterday.', 'Liguei pra ela ontem.'],
    ['I slept badly last night.', 'Dormi mal ontem à noite.'],
    ['We moved here five years ago.', 'Nos mudamos pra cá há cinco anos.'],
    ['Last week I had three meetings.', 'Semana passada tive três reuniões.'],
    ['I started working with BIM ten years ago.', 'Comecei a trabalhar com BIM há dez anos.'],
    ['When I was a child, I wanted to be an architect.', 'Quando eu era criança, queria ser arquiteto.'],
    ['First, I opened the model. Then, I checked the clashes.', 'Primeiro abri o modelo. Depois conferi as interferências.'],
    ['After that, I sent the report.', 'Depois disso, mandei o relatório.'],
    ['Finally, I went home.', 'Por fim, fui pra casa.'],
    ['I saw him the day before yesterday.', 'Vi ele anteontem.']
  ],
  err: [
    ['yesterday night', 'last night', ''],
    ['ago three years', 'three years **ago**', 'Ago vem depois.'],
    ['in the last week (= semana passada)', 'last week', 'Sem “in the”.'],
    ['I go to Rio last week.', 'I **went** to Rio last week.', 'Expressão de passado → verbo no passado.']
  ],
  quiz: [
    { mc: 'Ontem à noite:', o: ['last night', 'yesterday night', 'past night'] },
    { mc: 'Há três anos:', o: ['three years ago', 'ago three years', 'before three years'] },
    { mc: 'Semana passada:', o: ['last week', 'the last week', 'past week'] },
    { mc: 'Anteontem:', o: ['the day before yesterday', 'before yesterday day', 'two yesterday'] },
    { mc: 'I ___ to Rio last week.', o: ['went', 'go', 'goes'] },
    { fill: 'We moved here five years ___.', a: ['ago'] },
    { fill: 'I had three meetings ___ week.', a: ['last'] },
    { fill: '___, I opened the model. (primeiro)', a: ['First'] },
    { build: 'I started working with BIM ten years ago', pt: 'Comecei a trabalhar com BIM há dez anos.' },
    { build: 'When I was a child I wanted to be an architect', pt: 'Quando eu era criança, queria ser arquiteto.', alt: ['When I was a child, I wanted to be an architect'] },
    { build: 'After that I sent the report', pt: 'Depois disso, mandei o relatório.', alt: ['After that, I sent the report'] }
  ],
  speak: ['I slept badly last night.', 'We moved here five years ago.', 'When I was a child, I wanted to be an architect.', 'First, I opened the model. Then, I checked the clashes.'],
  mission: ['Conte **a história da sua carreira** em 8 frases com expressões de tempo e conectores: {I started college in… Then… Five years ago… Last year… Finally…}',
            'Essa história é ouro para entrevista. Grave, ouça e regrave até ficar fluido.'],
  cards: [['last night', 'ontem à noite'], ['last week', 'semana passada'], ['last year', 'ano passado'], ['ago', 'atrás (há…)'],
          ['the day before yesterday', 'anteontem'], ['a long time ago', 'muito tempo atrás'], ['when I was a child', 'quando eu era criança'],
          ['First', 'Primeiro'], ['Then', 'Depois / aí'], ['After that', 'Depois disso'], ['Finally', 'Por fim'], ['moved', 'me mudei']]
});

COURSE.push({
  n: 21, w: 3, review: true,
  title: 'Revisão + História no passado',
  goal: 'Entender uma narrativa simples no passado.',
  yt: ['english story past tense beginner listening', 'easy english podcast beginner', 'graded reader english level 1 audiobook'],
  dlgLabel: 'História',
  learn: [
    { h: 'Mapa do passado',
      table: { head: ['Situação', 'Use', 'Exemplo'], rows: [
        ['Estado (era / estava)', '{was / were}', '{I was tired.}'],
        ['Ação regular', 'verbo + ed', '{I worked.}'],
        ['Ação irregular', 'forma da lista', '{I went.}'],
        ['Negar / perguntar ação', "{did / didn't} + verbo normal", "{Did you go?} {I didn't go.}"],
        ['Hábito antigo', '{used to} + verbo', '{I used to draw by hand.}'],
        ['Quando', '{yesterday · last · ago}', '{two years ago}']
      ] } },
    { h: 'Como ouvir uma história (ou podcast)',
      li: ['**1ª vez:** só ouça, sem ler. Tente pegar a ideia geral.', '**2ª vez:** ouça lendo o inglês.',
           '**3ª vez:** toque em PT só nas frases que não entendeu.', '**4ª vez:** ouça de novo sem ler — agora você entende tudo. Essa sensação vicia. 😄'] },
    { tip: 'Ao ouvir, cace os verbos no passado: cada vez que escutar um, pense no presente dele. Isso treina o ouvido para o -ED e para os irregulares.' }
  ],
  dlg: [
    { t: '📖 História: A Big Day', intro: 'Ouça a história inteira 2 vezes antes de olhar o português.',
      lines: [
        ['📖', 'Last year, Paulo had a big day.', 'Ano passado, o Paulo teve um grande dia.'],
        ['📖', 'He was an architect in a small office in Brazil.', 'Ele era arquiteto num pequeno escritório no Brasil.'],
        ['📖', 'He used to work late every night, and he was always tired.', 'Ele costumava trabalhar até tarde toda noite, e estava sempre cansado.'],
        ['📖', 'One morning, he got an email from a company in Spain.', 'Uma manhã, ele recebeu um email de uma empresa na Espanha.'],
        ['📖', 'They wanted a BIM manager for a new project.', 'Eles queriam um gerente BIM para um novo projeto.'],
        ['📖', "At first, he didn't answer. He was nervous because his English wasn't very good.", 'No começo ele não respondeu. Estava nervoso porque o inglês dele não era muito bom.'],
        ['📖', 'His wife said: "You can do it!"', 'A esposa dele disse: “Você consegue!”'],
        ['📖', 'So he studied English every day for a month.', 'Então ele estudou inglês todo dia por um mês.'],
        ['📖', 'Then, he had the interview. He was nervous, but he spoke slowly and clearly.', 'Depois, teve a entrevista. Estava nervoso, mas falou devagar e com clareza.'],
        ['📖', 'They asked about his projects, and he told them about his work with Revit.', 'Perguntaram sobre os projetos, e ele contou sobre o trabalho com Revit.'],
        ['📖', 'Two weeks later, he got the job!', 'Duas semanas depois, ele conseguiu a vaga!'],
        ['📖', 'That night, Paulo and his family went to a restaurant. They felt very happy.', 'Naquela noite, o Paulo e a família foram a um restaurante. Eles se sentiram muito felizes.']
      ] },
    { t: '☕ Como foi o fim de semana?', intro: 'Conversa de segunda-feira.',
      lines: [
        ['Sam', 'Hi! How was your weekend?', 'Oi! Como foi seu fim de semana?'],
        ['Eri', 'It was great, thanks! I went to the beach with my family.', 'Foi ótimo, obrigado! Fui à praia com minha família.'],
        ['Sam', 'Nice! Did you swim?', 'Legal! Você nadou?'],
        ['Eri', "No, I didn't. The water was cold. But my daughter played in the sand all day.", 'Não. A água estava fria. Mas minha filha brincou na areia o dia todo.'],
        ['Sam', 'What did you do on Sunday?', 'O que você fez no domingo?'],
        ['Eri', 'We stayed at home. I studied English and we watched a movie.', 'Ficamos em casa. Estudei inglês e vimos um filme.']
      ] }
  ],
  quiz: [
    { mc: 'O que o Paulo era?', o: ['An architect.', 'A teacher.', 'A manager in Spain.'] },
    { mc: 'O que ele costumava fazer?', o: ['Work late every night.', 'Travel every month.', 'Study English every day.'] },
    { mc: 'Por que ele não respondeu no começo?', o: ["His English wasn't very good.", 'He was on vacation.', "He didn't like Spain."] },
    { mc: 'O que a esposa disse?', o: ['You can do it!', "Don't do it!", 'Call them now!'] },
    { mc: 'Quando ele conseguiu a vaga?', o: ['Two weeks later.', 'Two days later.', 'Last year.'] },
    { mc: 'No fim de semana, a filha…', o: ['played in the sand.', 'swam all day.', 'stayed at home.'] },
    { fill: 'He ___ an email from a company in Spain. (get)', a: ['got'] },
    { fill: "He ___ answer at first. (negativa)", a: ["didn't", 'did not'] },
    { fill: 'He used to ___ late every night.', a: ['work'] },
    { build: 'Two weeks later he got the job', pt: 'Duas semanas depois, ele conseguiu a vaga!', alt: ['Two weeks later, he got the job'] },
    { build: 'How was your weekend', pt: 'Como foi seu fim de semana?', x: ['did'] },
    { build: 'We stayed at home and watched a movie', pt: 'Ficamos em casa e vimos um filme.' }
  ],
  speak: ['How was your weekend?', 'It was great, thanks! I went to the beach.', 'He was nervous, but he spoke slowly and clearly.', 'Two weeks later, he got the job!'],
  mission: ['**Reconte a história do Paulo** com suas palavras, em voz alta, sem olhar. Não precisa ser perfeito — use os verbos no passado.',
            'Depois ouça um episódio curto de podcast para iniciantes (5–10 min) e escreva 5 verbos no passado que você reconheceu.'],
  cards: [['How was your weekend?', 'Como foi seu fim de semana?'], ['beach', 'praia'], ['sand', 'areia'], ['stayed', 'fiquei'], ['nervous', 'nervoso'],
          ['interview', 'entrevista'], ['company', 'empresa'], ['got the job', 'conseguiu a vaga'], ['clearly', 'com clareza'], ['later', 'depois / mais tarde']]
});
