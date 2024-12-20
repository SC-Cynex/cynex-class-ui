const subjectsByCourse = [
        { label: "Programação Orientada a Objetos", value: 1 },
        { label: "Estruturas de Dados", value: "Estruturas de Dados" },
        { label: "Banco de Dados", value: "Banco de Dados" },
        { label: "Engenharia de Requisitos", value: "Engenharia de Requisitos" },
        { label: "Arquitetura de Software", value: "Arquitetura de Software" },
        { label: "Inteligência Artificial", value: "Inteligência Artificial" },
        { label: "Sistemas Distribuídos", value: "Sistemas Distribuídos" },
        { label: "Segurança da Informação", value: "Segurança da Informação" },
        { label: "Cálculo I", value: "Cálculo I" },
        { label: "Lógica de Programação", value: "Lógica de Programação" },
        { label: "Redes de Computadores", value: "Redes de Computadores" },
        { label: "Desenvolvimento Web", value: "Desenvolvimento Web" },
        { label: "Desenvolvimento Mobile", value: "Desenvolvimento Mobile" },
        { label: "Engenharia de Software", value: "Engenharia de Software" },
        { label: "Testes de Software", value: "Testes de Software" },
        { label: "Circuitos Elétricos", value: "Circuitos Elétricos" },
        { label: "Eletrônica Digital", value: "Eletrônica Digital" },
        { label: "Sistemas Embarcados", value: "Sistemas Embarcados" },
        { label: "Microcontroladores", value: "Microcontroladores" },
        { label: "Sistemas de Controle", value: "Sistemas de Controle" },
        { label: "Antenas e Propagação", value: "Antenas e Propagação" },
        { label: "Robótica", value: "Robótica" },
        { label: "Cálculo I", value: "Cálculo I" },
        { label: "Física Geral", value: "Física Geral" },
        { label: "Circuitos Digitais", value: "Circuitos Digitais" },
        { label: "Eletrônica Analógica", value: "Eletrônica Analógica" },
        { label: "Instrumentação", value: "Instrumentação" },
        { label: "Projetos de Eletrônica", value: "Projetos de Eletrônica" },
        { label: "Sistemas de Comunicação", value: "Sistemas de Comunicação" },
        { label: "Termodinâmica", value: "Termodinâmica" },
        { label: "Mecânica dos Fluidos", value: "Mecânica dos Fluidos" },
        { label: "Resistência dos Materiais", value: "Resistência dos Materiais" },
        { label: "Dinâmica dos Corpos Rígidos", value: "Dinâmica dos Corpos Rígidos" },
        { label: "Projeto de Máquinas", value: "Projeto de Máquinas" },
        { label: "Elementos de Máquinas", value: "Elementos de Máquinas" },
        { label: "Cálculo I", value: "Cálculo I" },
        { label: "Física Geral", value: "Física Geral" },
        { label: "Análise Estrutural", value: "Análise Estrutural" },
        { label: "Termodinâmica Aplicada", value: "Termodinâmica Aplicada" },
        { label: "Máquinas Térmicas", value: "Máquinas Térmicas" },
        { label: "Sistemas Mecânicos", value: "Sistemas Mecânicos" },
        { label: "Processos de Fabricação", value: "Processos de Fabricação" },
        { label: "Biologia Celular", value: "Biologia Celular" },
        { label: "Genética Humana", value: "Genética Humana" },
        { label: "Microbiologia", value: "Microbiologia" },
        { label: "Anatomia Humana", value: "Anatomia Humana" },
        { label: "Imunologia", value: "Imunologia" },
        { label: "Bioquímica Clínica", value: "Bioquímica Clínica" },
        { label: "Cálculo I", value: "Cálculo I" },
        { label: "Física Geral", value: "Física Geral" },
        { label: "Biofísica", value: "Biofísica" },
        { label: "Histologia", value: "Histologia" },
        { label: "Farmacologia", value: "Farmacologia" },
        { label: "Microbiologia Clínica", value: "Microbiologia Clínica" },
        { label: "Bioengenharia", value: "Bioengenharia" },
        { label: "Psicologia da Educação", value: "Psicologia da Educação" },
        { label: "História da Educação", value: "História da Educação" },
        { label: "Didática Geral", value: "Didática Geral" },
        { label: "Metodologia da Pesquisa", value: "Metodologia da Pesquisa" },
        { label: "Avaliação Educacional", value: "Avaliação Educacional" },
        { label: "Educação Inclusiva", value: "Educação Inclusiva" },
        { label: "Gestão de Projetos Educacionais", value: "Gestão de Projetos Educacionais" },
        { label: "Educação Infantil", value: "Educação Infantil" },
        { label: "Teorias da Aprendizagem", value: "Teorias da Aprendizagem" },
        { label: "Currículo e Planejamento", value: "Currículo e Planejamento" },
        { label: "Tecnologia Educacional", value: "Tecnologia Educacional" },
        { label: "Direito Constitucional", value: "Direito Constitucional" },
        { label: "Direito Penal", value: "Direito Penal" },
        { label: "Direito Civil", value: "Direito Civil" },
        { label: "Direito Administrativo", value: "Direito Administrativo" },
        { label: "Direito do Trabalho", value: "Direito do Trabalho" },
        { label: "Direito Ambiental", value: "Direito Ambiental" },
        { label: "Direito Empresarial", value: "Direito Empresarial" },
        { label: "Direito Internacional", value: "Direito Internacional" },
        { label: "Ética Profissional", value: "Ética Profissional" },
        { label: "Direito Penal II", value: "Direito Penal II" },
        { label: "Direito Processual Civil", value: "Direito Processual Civil" },
        { label: "Design Gráfico", value: "Design Gráfico" },
        { label: "Design de Interiores", value: "Design de Interiores" },
        { label: "História do Design", value: "História do Design" },
        { label: "Tipografia", value: "Tipografia" },
        { label: "Ilustração Digital", value: "Ilustração Digital" },
        { label: "Design de Produto", value: "Design de Produto" },
        { label: "Teoria do Design", value: "Teoria do Design" },
        { label: "Design de Embalagens", value: "Design de Embalagens" },
        { label: "Design de Interface", value: "Design de Interface" },
        { label: "Design de Experiência do Usuário", value: "Design de Experiência do Usuário" },
        { label: "Fotografia Digital", value: "Fotografia Digital" },
        { label: "Química Orgânica", value: "Química Orgânica" },
        { label: "Processos Químicos Industriais", value: "Processos Químicos Industriais" },
        { label: "Termodinâmica Química", value: "Termodinâmica Química" },
        { label: "Operações Unitárias", value: "Operações Unitárias" },
        { label: "Química Analítica", value: "Química Analítica" },
        { label: "Engenharia de Reações Químicas", value: "Engenharia de Reações Químicas" },
        { label: "Cálculo I", value: "Cálculo I" },
        { label: "Física Geral", value: "Física Geral" },
        { label: "Processos de Separação", value: "Processos de Separação" },
        { label: "Termodinâmica Aplicada", value: "Termodinâmica Aplicada" },
        { label: "Engenharia de Processos", value: "Engenharia de Processos" },
];

export default subjectsByCourse;
