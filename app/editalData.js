const EDITAL_DATA = [
  {
    id: "port",
    name: "Língua Portuguesa & Redação Oficial",
    code: "PORT-RED",
    block: "Conhecimentos Básicos",
    items: 25,
    color: "#3B82F6",
    synergies: ["BACEN", "ANPD", "BB"],
    topics: [
      { id: "port-1", title: "1. Compreensão e interpretação de textos de gêneros variados", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-2", title: "2. Reconhecimento de tipos e gêneros textuais", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-3", title: "3. Domínio da ortografia oficial e acentuação", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-4", title: "4. Domínio dos mecanismos de coesão textual (referenciação, conectores, tempos/modos verbais)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-5", title: "5. Morfossintaxe do período (classes de palavras, coordenação e subordinação)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-6", title: "6. Pontuação (vírgula, dois-pontos, travessão, aspas)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-7", title: "7. Concordância verbal e nominal; Regência verbal e nominal; Crase", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-8", title: "8. Colocação dos pronomes átonos (próclise, mesóclise e ênclise)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-9", title: "9. Reescrita de frases e parágrafos, significação e reorganização textual", targets: ["BACEN", "ANPD", "BB"] },
      { id: "port-10", title: "10. Redação Oficial (Manual de Redação da Presidência da República: padrão ofício, e-mail corporativo, atos normativos)", targets: ["ANPD"] }
    ]
  },
  {
    id: "dir-const-cid",
    name: "Direito Constitucional & Cidadania",
    code: "CONST-CID",
    block: "Base Jurídica & Cidadania",
    items: 10,
    color: "#8B5CF6",
    synergies: ["BACEN", "ANPD"],
    topics: [
      { id: "const-1", title: "1. CF/88: Princípios Fundamentais (Arts. 1º a 4º) e Organização do Estado", targets: ["BACEN", "ANPD"] },
      { id: "const-2", title: "2. Art. 5º da CF/88: Direitos Individuais, Sigilo Bancário e Fiscal, Habeas Data e Mandado de Segurança", targets: ["BACEN", "ANPD"] },
      { id: "const-2b", title: "2.1 Proteção de Dados Pessoais como Direito Fundamental (Art. 5º, LXXIX - EC 115/2022 e Competência Privativa da União Art. 22, XXX)", targets: ["BACEN", "ANPD"] },
      { id: "const-3", title: "3. Administração Pública na CF/88 (Arts. 37 a 41: LIMPE, Concursos, Teto, Estabilidade, Servidores)", targets: ["BACEN", "ANPD"] },
      { id: "const-4", title: "4. Do Sistema Financeiro Nacional na CF/88 (Art. 192) e Ordem Econômica (Arts. 170 a 173)", targets: ["BACEN"] },
      { id: "cid-1", title: "5. Ética e Conduta: Decreto nº 1.171/1994 e Resolução CD/ANPD nº 24/2025 (Comissão de Ética da ANPD)", targets: ["ANPD", "BACEN"] },
      { id: "cid-2", title: "6. Sistema de Integridade e Transparência Pública (Decreto nº 11.529 e Resolução ANPD nº 22/2024 - Plano de Integridade)", targets: ["ANPD", "BACEN"] },
      { id: "cid-3", title: "7. Enfrentamento ao Assédio e Discriminação: Lei 14.457/2022, Dec. 11.122/2024, Portaria MGI 617/2025 e Resolução CD/ANPD nº 25/2025", targets: ["ANPD"] }
    ]
  },
  {
    id: "dir-adm-licit",
    name: "Direito Administrativo & Licitações",
    code: "ADM-LICIT",
    block: "Legislação Administrativa",
    items: 8,
    color: "#EC4899",
    synergies: ["BACEN", "ANPD"],
    topics: [
      { id: "adm-1", title: "1. Princípios da Administração Pública (expressos e implícitos) e Regime Jurídico Administrativo", targets: ["BACEN", "ANPD"] },
      { id: "adm-2", title: "2. Organização Administrativa: Autarquias Especiais e Agências Reguladoras (Autonomia do BACEN LC 179 e Natureza Jurídica da ANPD Lei 14.460)", targets: ["BACEN", "ANPD"] },
      { id: "adm-3", title: "3. Poderes Administrativos: Normativo, Hierárquico, Disciplinar e Poder de Polícia Sancionador", targets: ["BACEN", "ANPD"] },
      { id: "adm-4", title: "4. Atos Administrativos: Requisitos (CO-FI-FO-MO-OB), atributos (PATI), anulação, revogação e convalidação", targets: ["BACEN", "ANPD"] },
      { id: "adm-5", title: "5. Processo Administrativo Federal (Lei nº 9.784/1999) e Rito Sancionador", targets: ["ANPD", "BACEN"] },
      { id: "adm-6", title: "6. Regime Jurídico dos Servidores Federais (Lei nº 8.112/1990: provimento, vacância, direitos, deveres, PAD)", targets: ["BACEN", "ANPD"] },
      { id: "adm-7", title: "7. Nova Lei de Licitações e Contratos (Lei nº 14.133/2021, Dec. 11.246/2022 e Pregão Eletrônico Dec. 10.024/2019)", targets: ["ANPD"] },
      { id: "adm-8", title: "8. Instrumentos Administrativos: Termos de Referência (TR), Estudos Técnicos Preliminares (ETP), atas e contratos", targets: ["ANPD"] },
      { id: "adm-9", title: "9. Improbidade Administrativa (Lei nº 8.429/1992 com alterações da Lei nº 14.230/2021 - Dolo Específico)", targets: ["BACEN", "ANPD"] },
      { id: "adm-10", title: "10. Lei de Acesso à Informação - LAI (Lei nº 12.527/2011) e Proteção e Defesa do Usuário de Serviços Públicos (Lei nº 13.460/2017)", targets: ["ANPD", "BACEN"] }
    ]
  },
  {
    id: "lgpd-reg",
    name: "Proteção de Dados Pessoais & Regulação ANPD",
    code: "LGPD-ANPD",
    block: "Núcleo Central ANPD & BACEN",
    items: 20,
    color: "#0284C7",
    synergies: ["ANPD", "BACEN", "BB"],
    topics: [
      { id: "lgpd-1", title: "1. Fundamentos Constitucionais, Princípios e Conceitos Essenciais da LGPD (Lei nº 13.709/2018)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "lgpd-2", title: "2. Bases Legais para o Tratamento de Dados Pessoais Comuns e Dados Sensíveis (Art. 7º e 11)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "lgpd-3", title: "3. Tratamento de Dados Pessoais pelo Poder Público (Arts. 23 a 30 da LGPD) e Compartilhamento de Dados", targets: ["BACEN", "ANPD"] },
      { id: "lgpd-4", title: "4. Direitos dos Titulares de Dados Pessoais (Art. 18) e Mecanismos de Atendimento", targets: ["BACEN", "ANPD", "BB"] },
      { id: "lgpd-5", title: "5. Agentes de Tratamento (Controlador e Operador), Responsabilidade Civil e Ressarcimento de Danos", targets: ["BACEN", "ANPD", "BB"] },
      { id: "lgpd-6", title: "6. O Encarregado pelo Tratamento de Dados (DPO) e Resolução CD/ANPD nº 15/2024 (Regulamento do Encarregado)", targets: ["ANPD", "BACEN"] },
      { id: "lgpd-7", title: "7. Relatório de Impacto à Proteção de Dados Pessoais (RIPD / DPIA)", targets: ["ANPD", "BACEN"] },
      { id: "lgpd-8", title: "8. Comunicação e Gestão de Incidentes de Segurança à ANPD e aos Titulares de Dados", targets: ["ANPD", "BACEN", "BB"] },
      { id: "lgpd-9", title: "9. Transferência Internacional de Dados Pessoais e Cláusulas-Padrão Contratuais da ANPD", targets: ["ANPD", "BACEN"] },
      { id: "lgpd-10", title: "10. Agentes de Tratamento de Pequeno Porte (Resolução CD/ANPD nº 2/2022 - regras diferenciadas)", targets: ["ANPD"] },
      { id: "lgpd-11", title: "11. Processo Fiscalizatório e Sancionador da ANPD (Resolução CD/ANPD nº 1/2021) e Dosimetria de Sanções (Resolução CD/ANPD nº 4/2023)", targets: ["ANPD"] },
      { id: "lgpd-12", title: "12. Resoluções e Guias Orientativos da ANPD (Cookies, Segurança da Informação, Hipóteses Legais)", targets: ["ANPD"] },
      { id: "lgpd-13", title: "13. Marco Civil da Internet (Lei nº 12.965/2014) e sua interface com a LGPD", targets: ["ANPD", "BACEN"] },
      { id: "lgpd-14", title: "14. Proteção de Dados nas Relações de Consumo: Código de Defesa do Consumidor (Lei nº 8.078/1990) e LGPD", targets: ["ANPD", "BACEN", "BB"] }
    ]
  },
  {
    id: "seg-inf",
    name: "Segurança da Informação & Gestão de Riscos",
    code: "SEG-RISCOS",
    block: "Conhecimentos Específicos",
    items: 15,
    color: "#EF4444",
    synergies: ["ANPD", "BACEN", "BB"],
    topics: [
      { id: "seg-1", title: "1. Gestão e Resposta a Incidentes de Segurança Cibernética (fases CSIRT e comunicação à ANPD)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "seg-2", title: "2. Família de Normas ISO/IEC: ISO 27001 (SGSI), ISO 27002 (Controles) e ISO 29151 / ISO 27701 (Proteção de PII e Privacidade)", targets: ["ANPD", "BACEN", "BB"] },
      { id: "seg-3", title: "3. Gestão de Riscos: metodologias de mapeamento, mensuração, tratamento e matriz de riscos", targets: ["ANPD", "BACEN", "BB"] },
      { id: "seg-4", title: "4. Medidas Técnicas e Administrativas de Segurança: Políticas de Segurança, Controles de Acesso e Classificação de Dados", targets: ["ANPD", "BACEN", "BB"] },
      { id: "seg-5", title: "5. Gestão de Identidades e Acesso (IAM): Autenticação, Autorização, SSO, SAML, OAuth2, OpenID Connect e MFA", targets: ["BACEN", "ANPD", "BB"] },
      { id: "seg-6", title: "6. Criptografia Simétrica e Assimétrica, Hashes, Assinatura Digital e ICP-Brasil; Proteção em Trânsito e Repouso", targets: ["BACEN", "ANPD", "BB"] },
      { id: "seg-7", title: "7. Principais Ataques e Vulnerabilidades: OWASP Top 10, Ransomware, Engenharia Social, Phishing, DDoS", targets: ["BACEN", "ANPD", "BB"] },
      { id: "seg-8", title: "8. Soluções de Segurança: Firewall NGFW, IDS/IPS, SIEM, Proxy, PAM, Antivírus, EDR/XDR", targets: ["BACEN", "ANPD", "BB"] },
      { id: "seg-9", title: "9. Frameworks de Cibersegurança: MITRE ATT&CK, CIS Controls v8 e NIST Cybersecurity Framework (NIST CSF)", targets: ["BACEN", "ANPD", "BB"] },
      { id: "seg-10", title: "10. Segurança em Nuvens e Contêineres (DevSecOps e Privacy by Design)", targets: ["BACEN", "ANPD", "BB"] }
    ]
  },
  {
    id: "dados-ia",
    name: "Inteligência Artificial & Ciência de Dados",
    code: "IA-DADOS",
    block: "Conhecimentos Específicos",
    items: 15,
    color: "#6366F1",
    synergies: ["ANPD", "BACEN", "BB"],
    topics: [
      { id: "ia-1", title: "1. Conceitos Principais: Inteligência Artificial, Aprendizado de Máquina (Machine Learning) e Sistemas de IA", targets: ["BACEN", "ANPD", "BB"] },
      { id: "ia-2", title: "2. Modelos de IA e Tipos de Aprendizado: Supervisionado, Não Supervisionado, Por Reforço e Transferência", targets: ["BACEN", "ANPD", "BB"] },
      { id: "ia-3", title: "3. Inteligência Artificial e Proteção de Dados Pessoais (LGPD, tomada de decisão automatizada e Art. 20)", targets: ["ANPD", "BACEN", "BB"] },
      { id: "ia-4", title: "4. Governança e Ética na IA: Transparência, Explicabilidade (XAI - SHAP/LIME), viés algorítmico, segurança e mitigação de discriminação", targets: ["ANPD", "BACEN", "BB"] },
      { id: "ia-5", title: "5. Grandes Modelos de Linguagem (LLM), IA Generativa, Fine-Tuning, Prompt Engineering e RAG", targets: ["BACEN", "ANPD", "BB"] },
      { id: "ia-6", title: "6. Processamento de Linguagem Natural (PLN/NLP), Tokenização, TF-IDF e Embeddings", targets: ["BACEN", "BB", "ANPD"] },
      { id: "ia-7", title: "7. Big Data e Qualidade de Dados (5 Vs, limpeza, integridade e consistência)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "ia-8", title: "8. MLOps: versionamento de modelos, pipelines, deploy e monitoramento de Data Drift / Concept Drift", targets: ["BACEN", "BB"] }
    ]
  },
  {
    id: "pol-reg",
    name: "Teoria da Regulação & Políticas Públicas",
    code: "REG-POL",
    block: "Conhecimentos Específicos ANPD",
    items: 10,
    color: "#0D9488",
    synergies: ["ANPD", "BACEN"],
    topics: [
      { id: "reg-1", title: "1. Teoria da Regulação: Direito Administrativo Regulatório e Poder Regulatório do Estado", targets: ["ANPD", "BACEN"] },
      { id: "reg-2", title: "2. Regulação Econômica e Fundamentos da Economia aplicados à regulação", targets: ["ANPD", "BACEN"] },
      { id: "reg-3", title: "3. Regulação e Proteção de Dados: Teoria Positiva e Normativa da Regulação", targets: ["ANPD"] },
      { id: "reg-4", title: "4. Teoria e Risco de Captura e Teoria dos Jogos aplicada à regulação", targets: ["ANPD"] },
      { id: "reg-5", title: "5. Análise de Impacto Regulatório (AIR) e Avaliação de Resultado Regulatório (ARR)", targets: ["ANPD", "BACEN"] },
      { id: "reg-6", title: "6. Políticas Públicas: Ciclo de formulação, implementação, monitoramento e avaliação (indicadores e metas)", targets: ["ANPD"] },
      { id: "reg-7", title: "7. Planejamento Governamental e Gestão por Resultados: PPA, LDO, LOA e Gestão de Projetos (PMBOK)", targets: ["ANPD"] },
      { id: "reg-8", title: "8. Gestão Organizacional e Inovação no Setor Público: Plataforma GOV.BR, transformação digital e gestão por competências", targets: ["ANPD"] }
    ]
  },
  {
    id: "eng-sw",
    name: "Engenharia de Software & Arquitetura",
    code: "ENG-SW",
    block: "Conhecimentos Específicos",
    items: 24,
    color: "#10B981",
    synergies: ["BACEN", "BB", "ANPD"],
    topics: [
      { id: "sw-1", title: "1. Arquitetura Web Moderna: HTTP/2, gRPC, WebSockets, TLS, proxies reversos, cache, balanceamento e escalabilidade", targets: ["BACEN", "BB", "ANPD"] },
      { id: "sw-2", title: "2. DevOps e DevSecOps: pipelines de CI/CD e segurança integrada", targets: ["BACEN", "BB", "ANPD"] },
      { id: "sw-3", title: "3. Desenvolvimento Seguro: OWASP Top 10, sanitização e validação de inputs", targets: ["BACEN", "BB", "ANPD"] },
      { id: "sw-4", title: "4. Testes de software: Unitários, Integração, TDD e BDD", targets: ["BACEN", "BB"] },
      { id: "sw-5", title: "5. Microsserviços: API Gateway, Circuit Breaker, Event-Driven e Serverless", targets: ["BACEN", "BB", "ANPD"] },
      { id: "sw-6", title: "6. Práticas de UX e UI design (usabilidade e acessibilidade)", targets: ["BACEN", "BB"] },
      { id: "sw-7", title: "7. Programação assíncrona, RESTful APIs, GraphQL e Web Services", targets: ["BACEN", "BB", "ANPD"] },
      { id: "sw-8", title: "8. Padrões de projeto: GoF e Princípios GRASP", targets: ["BACEN", "BB"] },
      { id: "sw-9", title: "9. Controle de versão com Git (GitFlow, branches, merge, rebase)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "sw-10", title: "10. Linguagens de programação: Python e Java (POO, coleções, concorrência)", targets: ["BACEN", "BB"] },
      { id: "sw-11", title: "11. Transações distribuídas (Teorema CAP, 2PC, Saga Pattern)", targets: ["BACEN", "BB"] },
      { id: "sw-12", title: "12. Distributed Ledger Technology - DLT (Blockchain, contratos inteligentes, DREX)", targets: ["BACEN", "BB"] }
    ]
  },
  {
    id: "infra",
    name: "Infraestrutura em TI & Nuvem",
    code: "INFRA",
    block: "Conhecimentos Específicos",
    items: 17,
    color: "#06B6D4",
    synergies: ["BACEN", "BB", "ANPD"],
    topics: [
      { id: "inf-1", title: "1. Infraestrutura como Código (IaC) e automação (Ansible, Puppet)", targets: ["BACEN", "ANPD"] },
      { id: "inf-2", title: "2. Docker e Kubernetes: boas práticas e orquestração de containers", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-3", title: "3. Serviços Microsoft Windows Server: DNS, DHCP, Radius, Certificados (PKI), Active Directory", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-4", title: "4. Monitoração e Observabilidade: Prometheus, Grafana, Elastic Stack (ELK), APM e tracing", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-5", title: "5. Protocolos de aplicação: SMTP, HTTP, HTTPS, SSL/TLS, LDAP, NFS, SMB", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-6", title: "6. Alta Disponibilidade, Tolerância a Falhas e Continuidade de Negócios (RPO e RTO)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-7", title: "7. Computação em Nuvem (IaaS, PaaS, SaaS, multi-cloud e Azure/AWS/GCP)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-8", title: "8. Virtualização (Hyper-V, VMware, KVM) e Sistemas Operacionais (Linux e Windows)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "inf-9", title: "9. Redes de Computadores: LAN, WAN, VLANs, roteamento e SDN", targets: ["BACEN", "BB", "ANPD"] }
    ]
  },
  {
    id: "bd-est",
    name: "Bancos de Dados & Análise Estatística",
    code: "BD-EST",
    block: "Conhecimentos Específicos",
    items: 10,
    color: "#14B8A6",
    synergies: ["BACEN", "BB", "ANPD"],
    topics: [
      { id: "bd-1", title: "1. SGBDs Relacionais e NoSQL (chave-valor, documentos, colunas, grafos)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "bd-2", title: "2. Modelagem de dados: conceitual ER, relacional e normalização (1FN a 3FN)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "bd-3", title: "3. Linguagem SQL (queries, JOINs, agregações, subqueries, transações ACID)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "bd-4", title: "4. Arquiteturas de BI: Data Warehouse, Data Mart, Data Lake e Data Mesh", targets: ["BACEN", "BB", "ANPD"] },
      { id: "est-1", title: "5. Estatística Descritiva: tabelas, gráficos, histogramas e curvas de frequência", targets: ["BACEN", "BB", "ANPD"] },
      { id: "est-2", title: "6. Medidas de Posição (média, mediana, moda) e Dispersão (variância, desvio-padrão)", targets: ["BACEN", "BB", "ANPD"] },
      { id: "est-3", title: "7. Inferência Estatística, Amostragem e Testes de Hipóteses aplicados a relatórios", targets: ["ANPD", "BACEN"] },
      { id: "est-4", title: "8. Elaboração de Pareceres, Relatórios Técnicos e Notas Informativas com dados", targets: ["ANPD"] }
    ]
  },
  {
    id: "econ",
    name: "Fundamentos de Economia",
    code: "ECON",
    block: "Conhecimentos Básicos BACEN",
    items: 10,
    color: "#F59E0B",
    synergies: ["BACEN"],
    topics: [
      { id: "macro-1", title: "1. Macroeconomia: Contas nacionais (PIB, PNB, ótica da produção/renda/despesa)", targets: ["BACEN"] },
      { id: "macro-2", title: "2. Macroeconomia: Agregados monetários (M1 a M4) e base monetária", targets: ["BACEN"] },
      { id: "macro-3", title: "3. Macroeconomia: Multiplicador monetário, criação e destruição de moeda", targets: ["BACEN"] },
      { id: "macro-4", title: "4. Macroeconomia: Contas do sistema monetário e balanço de pagamentos", targets: ["BACEN"] },
      { id: "micro-1", title: "5. Microeconomia: Estrutura de mercado, papel dos preços e custo de oportunidade", targets: ["BACEN"] },
      { id: "micro-2", title: "6. Microeconomia: Fronteiras das possibilidades de produção (FPP)", targets: ["BACEN"] },
      { id: "micro-3", title: "7. Microeconomia: Teoria do consumidor (curvas de indiferença e restrição orçamentária)", targets: ["BACEN"] },
      { id: "micro-4", title: "8. Microeconomia: Efeitos preço, renda e substituição", targets: ["BACEN"] },
      { id: "micro-5", title: "9. Microeconomia: Oferta, demanda, equilíbrio de mercado e elasticidades", targets: ["BACEN"] }
    ]
  }
];
