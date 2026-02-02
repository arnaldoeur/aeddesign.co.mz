
import { Palette, Printer, BookOpen, Shirt, FileText, Briefcase, Gift, Flag, Globe, Megaphone, Workflow } from 'lucide-react';
import { ProductItem, ServiceItem, PortfolioItem } from './types';

export const LOGO_URL = "/images/logo-aed.png";

export const PRODUCTS_DATA: ProductItem[] = [
    { id: 'p1', name: 'Rollup Standard', description: 'Estrutura leve + banner impresso.', specs: ['85 x 200 cm', 'Alumínio Standard', 'Saco de transporte'] },
    { id: 'p2', name: 'Rollup Premium', description: 'Base reforçada para maior estabilidade.', specs: ['100 x 220 cm', 'Base Larga', 'Alta Durabilidade'] },
    { id: 'p3', name: 'Quadro Decorativo', description: 'Impressão de alta resolução para interiores.', specs: ['120 x 180 cm', 'PVC Foamboard ou Canvas', 'Acabamento Mate'] },
    { id: 'p4', name: 'Calendário de Parede', description: 'Personalização total com sua marca.', specs: ['12 Folhas', 'Espiral Metálica', 'Papel Couché 170g'] },
    { id: 'p5', name: 'Livro de Facturação', description: 'Para gestão fiscal e administrativa.', specs: ['50 ou 100 jogos', 'Autocopiativo', 'Numeração Sequencial'] },
    { id: 'p6', name: 'Canecas Personalizadas', description: 'Brinde ideal para fidelização.', specs: ['Cerâmica 11oz', 'Sublimação Total', 'Resistente a Microondas'] },
];

export const SERVICES: ServiceItem[] = [
    {
        id: '1',
        title: 'Design Gráfico Profissional',
        category: 'Criação',
        previewText: 'Identidade visual, logotipos e branding completo para sua empresa.',
        fullDescription: 'Criação de identidades visuais, logótipos, materiais promocionais e artes para redes sociais que comunicam claramente a personalidade da sua marca.',
        image: '/images/portfolio/marketing-cartaz-01.jpg',
        icon: Palette,
        features: ['Logotipos', 'Manual de Marca', 'Social Media'],
        advantages: ['Unidade visual consistente', 'Reconhecimento de marca imediato', 'Arquivos prontos para impressão e digital'],
        applications: ['Logotipos', 'Manuais de marca', 'Flyers', 'Cartões de visita', 'Brochuras', 'Posts para redes sociais']
    },
    {
        id: '2',
        title: 'Print & Impressão Digital',
        category: 'Produção',
        previewText: 'Alta qualidade em vinil, lona, papel e materiais rígidos.',
        fullDescription: 'Impressões de alta qualidade em diferentes formatos (offset e digital) para campanhas, material institucional e promocional.',
        image: '/images/portfolio/sinalizacao-painel-luminoso-02.jpg',
        icon: Printer,
        features: ['Grandes Formatos', 'Vinil Autocolante', 'Lona Frontlight'],
        advantages: ['Rapidez na produção', 'Fidelidade de cor', 'Diversas opções de acabamento'],
        applications: ['Banners', 'Folders', 'Posters', 'Cartões', 'Brochuras']
    },
    {
        id: '3',
        title: 'Livros de Facturação',
        category: 'Office',
        previewText: 'Impressão de livros fiscais e guias personalizados.',
        fullDescription: 'Impressão e encadernação de livros de facturação com layout personalizado para gestão fiscal e administrativa.',
        image: '/images/portfolio/office-livros-faturacao.jpg',
        icon: BookOpen,
        features: ['Facturas', 'Recibos', 'Guias de Entrega'],
        advantages: ['Conformidade fiscal', 'Durabilidade', 'Imagem profissional'],
        applications: ['Documentação fiscal', 'Talões', 'Registos internos'],
        relatedProducts: [PRODUCTS_DATA[4]]
    },
    {
        id: '4',
        title: 'Estampagem',
        category: 'Têxtil',
        previewText: 'Personalização de t-shirts, bonés e fardamentos.',
        fullDescription: 'Estampagem em têxteis e brindes com técnicas variadas (vinil, serigrafia, transfer).',
        image: '/images/portfolio/branding-estampagem-02.jpg',
        icon: Shirt,
        features: ['Serigrafia', 'Transfer', 'Sublimação'],
        advantages: ['Acabamento durável', 'Excelente reprodução de cores', 'Custo-benefício em médias tiragens'],
        applications: ['Camisetas', 'Sacos', 'Uniformes', 'Brindes têxteis']
    },
    {
        id: '5',
        title: 'Bordados',
        category: 'Têxtil',
        previewText: 'Acabamento premium em polos, camisas e bonés.',
        fullDescription: 'Bordados de alta qualidade para uniformes, bonés e peças corporativas com opção de múltiplos pontos e aplicações.',
        image: '/images/portfolio/branding-bordados-03.jpg',
        icon: FileText,
        features: ['Polos', 'Camisas', 'Bonés'],
        advantages: ['Acabamento premium', 'Alta durabilidade à lavagem', 'Sofisticação para a marca'],
        applications: ['Fardas', 'Bonés', 'Patches', 'Toalhas']
    },
    {
        id: '6',
        title: 'Material de Escritório',
        category: 'Office',
        previewText: 'Pastas, blocos e envelopes com sua identidade.',
        fullDescription: 'Produção de pastas, blocos, envelopes e outros materiais de escritório com identidade visual aplicada.',
        image: '/images/portfolio/office-material-escolar-02.jpg',
        icon: Briefcase,
        features: ['Pastas', 'Envelopes', 'Blocos de Notas'],
        advantages: ['Profissionalismo', 'Coerência de marca em todos os pontos de contato'],
        applications: ['Escritórios', 'Eventos', 'Kits corporativos']
    },
    {
        id: '7',
        title: 'Brindes Personalizados',
        category: 'Marketing',
        previewText: 'Canetas, agendas e gifts personalizados.',
        fullDescription: 'Canecas, chaveiros, squeezes, agendas e brindes promocionais com personalização total.',
        image: '/images/portfolio/brindes-canecas-01.jpg',
        icon: Gift,
        features: ['Canetas', 'Agendas', 'Chaveiros'],
        advantages: ['Ferramenta de marketing direta', 'Memorização da marca', 'Durável'],
        applications: ['Eventos', 'Ações promocionais', 'Kits para clientes'],
        relatedProducts: [PRODUCTS_DATA[5], PRODUCTS_DATA[3]]
    },
    {
        id: '8',
        title: 'Bandeiras e Placas',
        category: 'Exterior',
        previewText: 'Sinalética e visibilidade para eventos.',
        fullDescription: 'Soluções de sinalética e estruturas visuais para eventos, feiras e comunicação institucional.',
        image: '/images/portfolio/sinalizacao-placas-ident.jpg',
        icon: Flag,
        features: ['Bandeiras', 'Backdrops', 'Placas PVC'],
        advantages: ['Alta visibilidade', 'Resistência a intempéries', 'Totalmente personalizável'],
        applications: ['Stands', 'Feiras', 'Eventos corporativos', 'Fachadas']
    },
    {
        id: '9',
        title: 'Quadros Gigantes & Roulups',
        category: 'Decoração',
        previewText: 'Impressão em grande formato para impacto visual.',
        fullDescription: 'Produção de quadros de grande formato e rollups profissionais para exibição e promoção.',
        image: '/images/portfolio/office-quadros.jpg',
        features: ['Canvas', 'Rollup 85x200', 'PVC'],
        advantages: ['Impacto visual imediato', 'Materiais de alta durabilidade', 'Portabilidade (Rollups)'],
        applications: ['Decoração', 'Promoções', 'Stands'],
        relatedProducts: [PRODUCTS_DATA[0], PRODUCTS_DATA[1], PRODUCTS_DATA[2]]
    },
    {
        id: '10',
        title: 'Criação de Websites',
        category: 'DIGITAL',
        previewText: 'Desenvolvimento de websites profissionais, responsivos e otimizados para conversão.',
        fullDescription: 'Criação de websites modernos e funcionais, desenhados para fortalecer a presença digital da sua marca. Foco em usabilidade (UX/UI), velocidade de carregamento e otimização para motores de busca (SEO).',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop',
        icon: Globe,
        features: ['Design Responsivo', 'SEO Otimizado', 'UX/UI Moderno'],
        advantages: ['Presença online 24/7', 'Credibilidade para a marca', 'Canal de vendas direto'],
        applications: ['Sites corporativos', 'Lojas virtuais', 'Landing Pages', 'Portfólios']
    },
    {
        id: '11',
        title: 'Marketing Digital',
        category: 'MARKETING',
        previewText: 'Estratégias de tráfego, redes sociais e campanhas para fortalecer a presença da sua marca.',
        fullDescription: 'Soluções completas de marketing digital para alavancar seu negócio. Gestão profissional de redes sociais, campanhas de tráfego pago (Ads) e estratégias de conteúdo para engajar e converter seu público-alvo.',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000&auto=format&fit=crop',
        icon: Megaphone,
        features: ['Gestão de Redes Sociais', 'Tráfego Pago (Ads)', 'Email Marketing'],
        advantages: ['Aumento de visibilidade', 'Segmentação precisa de público', 'Mensuração de resultados em tempo real'],
        applications: ['Promoção de marca', 'Lançamento de produtos', 'Fidelização de clientes', 'Geração de leads']
    },
    {
        id: '12',
        title: 'Implementação de Sistemas Digitais',
        category: 'SISTEMAS',
        previewText: 'Integração de soluções digitais para melhorar processos, vendas e automação empresarial.',
        fullDescription: 'Consultoria e implementação de sistemas digitais (CRM, ERP, Automação) para otimizar os processos internos da sua empresa. Transforme a gestão do seu negócio com ferramentas que aumentam a produtividade e reduzem custos.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
        icon: Workflow,
        features: ['Integração de CRM', 'Automação de Vendas', 'Gestão de Processos'],
        advantages: ['Redução de tarefas manuais', 'Centralização de dados', 'Melhoria na tomada de decisão'],
        applications: ['Gestão comercial', 'Atendimento ao cliente', 'Controle de estoque', 'Fluxos de trabalho']
    }
];

export const PORTFOLIO: PortfolioItem[] = [
    {
        id: '1',
        title: 'Campanha Dezembro Vermelho',
        category: 'MARKETING DIGITAL',
        image: '/images/portfolio/red-december-campaign.jpg',
        client: 'Confidencial',
        year: '2025'
    },
    {
        id: '2',
        title: 'Sinalização Luminosa Bexpress',
        category: 'SINALIZAÇÃO',
        image: '/images/portfolio/bexpress-signage.jpg',
        client: 'Bexpress Brindes',
        year: '2025'
    },
    {
        id: '3',
        title: 'Uniformes Executivos & ONG',
        category: 'BRANDING',
        image: '/images/portfolio/ngo-vests.jpg',
        client: 'Múltiplos (IPAS/ProDISA)',
        year: '2025'
    },
    {
        id: '4',
        title: 'Branding de Viaturas',
        category: 'SINALIZAÇÃO',
        image: '/images/portfolio/gestory-car-branding.jpg',
        client: 'Gestory Company',
        year: '2025'
    },
    {
        id: '5',
        title: 'Decoração de Evento Infantil',
        category: 'EVENTOS',
        image: '/images/portfolio/miyuk-event-decor.jpg',
        client: 'Particular',
        year: '2025'
    },
    {
        id: '6',
        title: 'Brindes Corporativos Premium',
        category: 'OFFICE & BRINDES',
        image: '/images/portfolio/bexpress-mugs.jpg',
        client: 'Bexpress',
        year: '2025'
    },
    // Novas Adições
    { id: '7', title: 'Backdrop de Evento', category: 'EVENTOS', image: '/images/portfolio/eventos-backdrop-01.jpg', client: 'Confidencial', year: '2025' },
    { id: '8', title: 'Bordado Personalizado', category: 'BRANDING', image: '/images/portfolio/branding-bordados-01.jpg', client: 'Confidencial', year: '2025' },
    { id: '9', title: 'Bordados Institucionais', category: 'BRANDING', image: '/images/portfolio/branding-bordados-02.jpg', client: 'Confidencial', year: '2025' },
    { id: '10', title: 'Detalhe de Bordado', category: 'BRANDING', image: '/images/portfolio/branding-bordados-03.jpg', client: 'Confidencial', year: '2025' },
    { id: '11', title: 'Canecas Promocionais', category: 'OFFICE & BRINDES', image: '/images/portfolio/brindes-canecas-01.jpg', client: 'Confidencial', year: '2025' },
    { id: '12', title: 'Decoração de Viatura', category: 'SINALIZAÇÃO', image: '/images/portfolio/sinalizacao-viatura-01.jpg', client: 'Confidencial', year: '2025' },
    { id: '13', title: 'Cartões de Visita', category: 'BRANDING', image: '/images/portfolio/branding-cartoes-visita.jpg', client: 'Confidencial', year: '2025' },
    { id: '14', title: 'Design de Logotipo', category: 'BRANDING', image: '/images/portfolio/branding-logotipo-creation.jpg', client: 'Confidencial', year: '2025' },
    { id: '15', title: 'Coletes de Trabalho', category: 'BRANDING', image: '/images/portfolio/branding-colete-01.jpg', client: 'Confidencial', year: '2025' },
    { id: '16', title: 'Coletes Executivos', category: 'BRANDING', image: '/images/portfolio/branding-coletes-executivos.jpg', client: 'Confidencial', year: '2025' },
    { id: '17', title: 'Estampagem Personalizada', category: 'BRANDING', image: '/images/portfolio/branding-estampagem-01.jpg', client: 'Confidencial', year: '2025' },
    { id: '18', title: 'Estampagem Institucional', category: 'BRANDING', image: '/images/portfolio/branding-estampagem-02.jpg', client: 'Confidencial', year: '2025' },
    { id: '19', title: 'Material Escolar Personalizado', category: 'OFFICE & BRINDES', image: '/images/portfolio/office-material-escolar-01.jpg', client: 'Instituições de Ensino', year: '2025' },
    { id: '20', title: 'Kits Escolares', category: 'OFFICE & BRINDES', image: '/images/portfolio/office-material-escolar-02.jpg', client: 'Instituições de Ensino', year: '2025' },
    { id: '21', title: 'Livros de Faturação', category: 'OFFICE & BRINDES', image: '/images/portfolio/office-livros-faturacao.jpg', client: 'Empresarial', year: '2025' },
    { id: '22', title: 'Quadros Decorativos', category: 'OFFICE & BRINDES', image: '/images/portfolio/office-quadros.jpg', client: 'Consultório', year: '2025' },
    { id: '23', title: 'Cenário Infantil Temático', category: 'EVENTOS', image: '/images/portfolio/eventos-cenario-infantil-01.jpg', client: 'Aniversário', year: '2025' },
    { id: '24', title: 'Decoração de Festa', category: 'EVENTOS', image: '/images/portfolio/eventos-cenario-infantil-02.jpg', client: 'Aniversário', year: '2025' },
    { id: '25', title: 'Painel Luminoso Interior', category: 'SINALIZAÇÃO', image: '/images/portfolio/sinalizacao-painel-luminoso-01.jpg', client: 'Comercial', year: '2025' },
    { id: '26', title: 'Light Box Publicitário', category: 'SINALIZAÇÃO', image: '/images/portfolio/sinalizacao-painel-luminoso-02.jpg', client: 'Comercial', year: '2025' },
    { id: '27', title: 'Sinalização Interior', category: 'SINALIZAÇÃO', image: '/images/portfolio/sinalizacao-painel-interior.jpg', client: 'Escritório', year: '2025' },
    { id: '28', title: 'Placas de Identificação', category: 'SINALIZAÇÃO', image: '/images/portfolio/sinalizacao-placas-ident.jpg', client: 'Institucional', year: '2025' },
    { id: '29', title: 'Cartaz Promocional 01', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-01.jpg', client: 'Divulgação', year: '2025' },
    { id: '30', title: 'Cartaz Promocional 02', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-02.jpg', client: 'Divulgação', year: '2025' },
    { id: '31', title: 'Cartaz Promocional 03', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-03.jpg', client: 'Divulgação', year: '2025' },
    { id: '32', title: 'Cartaz Promocional 04', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-04.jpg', client: 'Divulgação', year: '2025' },
    { id: '33', title: 'Cartaz Promocional 05', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-05.jpg', client: 'Divulgação', year: '2025' },
    { id: '34', title: 'Cartaz Promocional 06', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-06.jpg', client: 'Divulgação', year: '2025' },
    { id: '35', title: 'Cartaz Promocional 07', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-07.jpg', client: 'Divulgação', year: '2025' },
    { id: '36', title: 'Cartaz Promocional 08', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-cartaz-08.jpg', client: 'Divulgação', year: '2025' },
    { id: '37', title: 'Folhetos Promocionais', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-folhetos-01.jpg', client: 'Publicidade', year: '2025' },
    { id: '38', title: 'Flyers Campanha', category: 'MARKETING DIGITAL', image: '/images/portfolio/marketing-folhetos-02.jpg', client: 'Publicidade', year: '2025' },
];
