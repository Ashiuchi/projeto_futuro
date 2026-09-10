const DISCURSIVAS_DATA = [
  {
    id: "disc-anpd-01",
    type: "P4 - ANPD & BACEN",
    title: "Vazamento de Dados Pessoais em Meio de Pagamento Instantâneo (Pix) e Resposta Regulatória à ANPD e BACEN",
    maxLines: 80,
    points: 50,
    area: "Segurança da Informação, LGPD & Regulação",
    context: "Uma instituição participante do Sistema de Pagamentos Instantâneos (SPI) sofreu um incidente de segurança cibernética que resultou no acesso indevido e exfiltração de dados cadastrais e chaves Pix de 100.000 clientes. A autoridade regulatória do SFN (BACEN) e a Autoridade Nacional de Proteção de Dados (ANPD) instauraram procedimentos fiscalizatórios conjuntos.",
    tasks: [
      "1. Apresente as ações técnicas imediatas do time de resposta a incidentes (CSIRT) para contenção, erradicação e preservação de evidências forenses com base na ISO/IEC 27001/27002.",
      "2. Discorra sobre os critérios e prazos regulatórios para a comunicação do incidente à ANPD e aos titulares de dados conforme a LGPD e o Guia Orientativo de Incidentes de Segurança da ANPD.",
      "3. Analise as possíveis sanções administrativas previstas no Art. 52 da LGPD e a dosimetria conforme a Resolução CD/ANPD nº 4/2023, bem como as medidas corretivas de governança e segurança exigidas (Resolução CMN 4.893 e ISO 27701/29151)."
    ],
    keywords: ["CSIRT", "Comunicação à ANPD", "Prazo de 3 dias úteis", "Art. 52 da LGPD", "Resolução CD/ANPD nº 4/2023 (Dosimetria)", "Relatório de Impacto (RIPD)", "Preservação de Evidências", "Resolução CMN 4.893", "ISO/IEC 27701"]
  },
  {
    id: "disc-p4-01",
    type: "P4 - BACEN & BB",
    title: "Arquitetura de Microsserviços Resiliente e Segura para Transações Instantâneas (Pix)",
    maxLines: 80,
    points: 50,
    area: "Engenharia de Software & Segurança",
    context: "O Banco Central do Brasil necessita atualizar o barramento de mensageria e processamento de liquidação instantânea (SPI) para suportar picos de 50.000 transações por segundo, garantindo tolerância a falhas, conformidade com a Resolução CMN 4.893 e rastreabilidade total.",
    tasks: [
      "1. Apresente os componentes essenciais da arquitetura baseada em microsserviços (API Gateway, Service Mesh, Barramento de Mensageria assíncrona com Kafka/RabbitMQ e Circuit Breaker).",
      "2. Explique como tratar a consistência e transações distribuídas entre múltiplos serviços sem bloqueio global, detalhando o padrão Saga (coreografado vs orquestrado) e idempotência.",
      "3. Descreva a estratégia de segurança em profundidade: autenticação mTLS entre serviços, OAuth2/OIDC, gestão de segredos e monitoramento com SIEM e tracing distribuído (OpenTelemetry/Jaeger)."
    ],
    keywords: ["API Gateway", "Kafka/RabbitMQ", "mTLS", "Saga Pattern", "Idempotência", "Circuit Breaker", "Resolução CMN 4.893", "Tracing Distribuído", "Alta Disponibilidade"]
  },
  {
    id: "disc-p4-02",
    type: "P4 - Tríplice Coroa",
    title: "Governança de Dados, MLOps e Detecção de Fraudes Financeiras em Tempo Real",
    maxLines: 80,
    points: 50,
    area: "Ciência de Dados & MLOps",
    context: "Em um cenário de integração de dados do Open Finance, a autoridade monetária busca implementar um pipeline de Inteligência Artificial para identificação precoce de anomalias em operações de crédito e lavagem de dinheiro (AML), respeitando a LGPD e evitando viés algorítmico.",
    tasks: [
      "1. Proponha o pipeline de engenharia de dados e MLOps, desde a ingestão (Data Lake/Data Mesh) até o treinamento, deploy em contêineres e monitoramento contínuo.",
      "2. Aborde os desafios de Data Drift e Concept Drift no mercado financeiro e como estruturar o retreinamento automatizado.",
      "3. Explique os mecanismos de Governança, Ética e Explicabilidade (XAI com SHAP/LIME) para justificar as decisões do modelo perante a auditoria e garantir a privacidade dos titulares conforme a LGPD."
    ],
    keywords: ["MLOps", "Data Drift", "Concept Drift", "Data Mesh", "XAI (SHAP/LIME)", "LGPD", "Pipeline CI/CD para ML", "Auditoria Algorítmica"]
  },
  {
    id: "disc-p4-03",
    type: "P4 - BACEN & ANPD",
    title: "Estratégia de Nuvem Híbrida e DevSecOps para Continuidade de Negócios no Setor Público",
    maxLines: 80,
    points: 50,
    area: "Infraestrutura & DevSecOps",
    context: "Com a modernização das plataformas centrais, foi desenhado um plano de migração para nuvem híbrida (On-Premises + Multi-Cloud), demandando orquestração via Kubernetes, automação com IaC (Ansible/Terraform) e rígidos limites de RPO e RTO.",
    tasks: [
      "1. Compare os modelos de nuvem (IaaS, PaaS, SaaS) e justifique a escolha de uma arquitetura híbrida e multi-região para sistemas de missão crítica.",
      "2. Detalhe como a esteira de DevSecOps deve incorporar testes de segurança automatizados (SAST, DAST, análise de vulnerabilidade de imagens de contêineres) sem degradar o time-to-market.",
      "3. Defina a estratégia de contingência e recuperação de desastres (Disaster Recovery), explicando os conceitos de RPO (Recovery Point Objective) e RTO (Recovery Time Objective) e réplicas ativas."
    ],
    keywords: ["Nuvem Híbrida", "Multi-Região", "Kubernetes", "DevSecOps", "SAST/DAST", "RPO", "RTO", "Disaster Recovery", "Ansible/IaC"]
  },
  {
    id: "disc-p3-01",
    type: "P3 - Atualidades",
    title: "O Impacto da Inteligência Artificial e da Economia Digital na Soberania Financeira",
    maxLines: 40,
    points: 30,
    area: "Atualidades & Economia Digital",
    context: "O avanço das Moedas Digitais de Banco Central (CBDC / DREX), dos ativos virtuais e da IA Generativa traz oportunidades de inclusão financeira, mas também desafios para a estabilidade monetária, a cibersegurança e a proteção de dados dos cidadãos.",
    tasks: [
      "1. Analise como a digitalização dos pagamentos e as CBDCs impactam o papel dos Bancos Centrais na condução da política monetária.",
      "2. Discuta os principais riscos cibernéticos e de proteção de privacidade decorrentes da hiperconectividade no setor financeiro.",
      "3. Conclua apresentando o equilíbrio necessário entre inovação financeira e regulação prudencial."
    ],
    keywords: ["DREX / CBDC", "Inclusão Financeira", "Estabilidade Monetária", "Cibersegurança", "LGPD", "Regulação Prudencial"]
  }
];
