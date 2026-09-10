const FLASHCARDS_DATA = [
  // --- ANPD & LGPD REGULAÇÃO (EDITAL IADES 2025) ---
  {
    id: "fc-anpd-1",
    category: "ANPD & LGPD",
    question: "Qual é a orientação da ANPD para a comunicação de incidentes de segurança com dados pessoais?",
    answer: "Conforme o Art. 48 da LGPD e o Guia Orientativo da ANPD, o controlador deve comunicar à ANPD e aos titulares em PRAZO RAZOÁVEL. A ANPD estabeleceu como parâmetro o prazo de 3 (TRÊS) DIAS ÚTEIS, contados do momento em que o controlador teve ciência do incidente com risco ou dano relevante."
  },
  {
    id: "fc-anpd-2",
    category: "ANPD & LGPD",
    question: "Quais são as sanções administrativas e os limites de multa previstos na LGPD e na Resolução CD/ANPD nº 4/2023 (Dosimetria)?",
    answer: "1. Advertência;\n2. Multa simples de até 2% do faturamento da pessoa jurídica (limitada a R$ 50 MILHÕES por infração);\n3. Multa diária (com teto total de R$ 50 mi);\n4. Publicização da infração;\n5. Bloqueio dos dados pessoais afetados;\n6. Eliminação dos dados pessoais;\n7. Suspensão parcial do funcionamento do banco de dados por até 6 meses;\n8. Proibição parcial ou total do exercício de atividades de tratamento."
  },
  {
    id: "fc-anpd-3",
    category: "ANPD & LGPD",
    question: "Segundo a Resolução CD/ANPD nº 15/2024, quais as regras para a nomeação e atuação do Encarregado (DPO)?",
    answer: "O Encarregado pode ser pessoa física ou jurídica, integrante ou não do quadro da organização. A nomeação formal é ato do controlador, que deve divulgar publicamente sua identidade e contato. O Encarregado atua como canal de comunicação entre titular, ANPD e controlador, com autonomia técnica."
  },
  {
    id: "fc-anpd-4",
    category: "ANPD & LGPD",
    question: "O que estabelece a Resolução CD/ANPD nº 2/2022 para Agentes de Tratamento de Pequeno Porte?",
    answer: "Concede tratamento jurídico diferenciado (dispensa da obrigação de indicar encarregado sob certas condições, prazos em dobro para atendimento a requisições e comunicações de incidentes, e flexibilização na elaboração do registro das operações de tratamento)."
  },
  {
    id: "fc-anpd-5",
    category: "ANPD & Cidadania",
    question: "O que diz o Decreto nº 11.529/2023 e a Resolução nº 22/2024 sobre o Sistema de Integridade da ANPD?",
    answer: "Institui o Sistema de Integridade, Transparência e Acesso à Informação (SITAI) no âmbito federal. A Resolução ANPD nº 22/2024 aprova o Plano de Integridade da autarquia, visando prevenir, detectar e remediar fraudes, assédio, atos de corrupção e desvios de conduta funcional."
  },

  // --- SEGURANÇA DA INFORMAÇÃO & NORMAS ISO ---
  {
    id: "fc-sec-1",
    category: "Segurança da Informação",
    question: "Qual a finalidade específica da norma ISO/IEC 29151 e como ela se diferencia da ISO/IEC 27002?",
    answer: "A ISO 27002 fornece o código de prática para controles gerais de segurança da informação. A ISO/IEC 29151 estabelece requisitos e diretrizes de controle adicionais voltados ESPECIFICAMENTE para a proteção de Dados de Identificação Pessoal (PII) contra acessos e vazamentos, alinhada à ISO 27001."
  },
  {
    id: "fc-sec-2",
    category: "Segurança da Informação",
    question: "Quais são as 5 funções essenciais do NIST Cybersecurity Framework (CSF 2.0)?",
    answer: "1. Govern (Governar - adicionada na v2.0)\n2. Identify (Identificar)\n3. Protect (Proteger)\n4. Detect (Detectar)\n5. Respond (Responder)\n6. Recover (Recuperar)"
  },
  {
    id: "fc-sec-3",
    category: "Segurança da Informação",
    question: "Qual a diferença entre Autenticação com OAuth 2.0 e OpenID Connect (OIDC)?",
    answer: "OAuth 2.0 é um framework exclusivamente de AUTORIZAÇÃO (emite Access Tokens para acessar APIs). O OpenID Connect (OIDC) adiciona uma camada de AUTENTICAÇÃO sobre o OAuth 2.0 (emite um ID Token em formato JWT para verificar a identidade do usuário)."
  },

  // --- DIREITO CONSTITUCIONAL & ADMINISTRATIVO ---
  {
    id: "fc-const-1",
    category: "Direito Constitucional",
    question: "Qual foi a mudança trazida pela Emenda Constitucional nº 115/2022 no Art. 5º da CF/88?",
    answer: "Incluiu o inciso LXXIX, tornando a PROTEÇÃO DE DADOS PESSOAIS UM DIREITO FUNDAMENTAL expressamente autônomo, inclusive nos meios digitais, e fixou a competência privativa da União para legislar sobre a matéria (Art. 22, XXX)."
  },
  {
    id: "fc-adm-1",
    category: "Direito Administrativo",
    question: "Qual a natureza jurídica da ANPD e do BACEN na organização do Estado?",
    answer: "Ambos são AUTARQUIAS FEDERAIS DE NATUREZA ESPECIAL (Administração Indireta da União). Possuem autonomia técnica, decisória e administrativa, com patrimônio próprio e quadro de pessoal regido pelo regime jurídico federal."
  },
  {
    id: "fc-adm-2",
    category: "Direito Administrativo & Licitações",
    question: "Quais são as modalidades de licitação da Nova Lei de Licitações (Lei nº 14.133/2021)?",
    answer: "1. Pregão (obrigatório para bens e serviços comuns);\n2. Concorrência;\n3. Concurso;\n4. Leilão;\n5. Diálogo Competitivo (nova modalidade para soluções inovadoras/complexas).\n*(Foram extintas: Tomada de Preços e Convite)*"
  },
  {
    id: "fc-adm-3",
    category: "Direito Administrativo",
    question: "Quais são as fases do Processo Administrativo Sancionador da Lei nº 9.784/1999 e Resolução ANPD nº 1/2021?",
    answer: "1. Instauração / Notificação prévia;\n2. Instrução probatória (garantia de ampla defesa e contraditório);\n3. Relatório da fiscalização;\n4. Decisão motivada da autoridade competente;\n5. Fase recursal (recurso administrativo com efeito suspensivo ou devolutivo)."
  },

  // --- ENGENHARIA DE SOFTWARE & ARQUITETURA ---
  {
    id: "fc-sw-1",
    category: "Engenharia de Software",
    question: "Em arquitetura de microsserviços, o que é o Circuit Breaker e quais seus 3 estados?",
    answer: "É um padrão de tolerância a falhas que impede que uma falha em cascata derrube o sistema. Seus 3 estados são:\n1. Closed (Fechado): fluxo normal;\n2. Open (Aberto): requisições são rejeitadas imediatamente sem chamar o serviço falho (fail-fast);\n3. Half-Open (Semi-aberto): testa poucas requisições para verificar se o serviço recuperou."
  },
  {
    id: "fc-sw-2",
    category: "Engenharia de Software",
    question: "No padrão Saga, qual a diferença entre Orquestração e Coreografia?",
    answer: "Na Orquestração, um serviço central orquestrador comanda cada passo e aciona as transações de compensação. Na Coreografia, os serviços publicam eventos em filas (Kafka/RabbitMQ) e reagem de forma descentralizada."
  },

  // --- INTELIGÊNCIA ARTIFICIAL & GOVERNANÇA ---
  {
    id: "fc-ia-1",
    category: "Inteligência Artificial & IA",
    question: "O que prevê o Art. 20 da LGPD quanto à Tomada de Decisão Automatizada por IA?",
    answer: "O titular dos dados tem o direito de solicitar a REVISÃO DE DECISÕES TOMADAS UNICAMENTE COM BASE EM TRATAMENTO AUTOMATIZADO que afetem seus interesses (como crédito ou perfil de risco), e o controlador deve fornecer informações claras e adequadas a respeito dos critérios e procedimentos utilizados (Explicabilidade / XAI)."
  }
];
