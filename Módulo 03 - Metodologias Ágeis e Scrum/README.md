# Sistema de Gestão de Tarefas - TaskFlow

## Integrantes
- João Silva (Front-end)
- Maria Oliveira (Back-end)
- Lucas Santos (DevOps & QA)

## Tecnologias Utilizadas
- **Front-end:** React.js, Tailwind CSS
- **Back-end:** Node.js, Express.js
- **Banco de dados:** PostgreSQL
- **Autenticação:** OAuth 2.0 (Google e Microsoft)
- **Hospedagem:** Vercel (Front), Render (Back)
- **Testes:** Jest, Postman
- **CI/CD:** GitHub Actions
- **Kanban:** Trello

## Descrição do Projeto
TaskFlow é um sistema web para gestão de tarefas com foco em produtividade e colaboração em equipe. Os usuários podem criar quadros, adicionar listas, tarefas e compartilhar com outros membros. Conta com notificações, filtros, comentários e controle de progresso.

## Quantidade Total de Sprints: 20

## Vantagens e Dificuldades da Metodologia Ágil

**Vantagens:**
- Entregas constantes aumentam a motivação da equipe.
- Fácil adaptação a mudanças de requisitos.
- Comunicação constante facilita resolução de problemas.

**Dificuldades:**
- Manter todos os membros alinhados com encontros diários.
- Planejamento para execução de tarefas.

## Sprints

### Sprint 1: Autenticação de usuários
**O que foi feito:**  
- Front-end: Formulário de login com email/senha, Google e Microsoft.  
- Back-end: Métodos `autenticarFormulario`, `autenticarGoogle`, `autenticarMicrosoft`.  
**Desenvolvedores:** João e Maria  
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dias  
**Deploy:** 1 dia  
**Data:** 04/08/2025 - 14/08/2025  

### Sprint 2: Registro de novos usuários
**O que foi feito:**  
- Front-end: Tela de cadastro com validação.  
- Back-end: Métodos `criarUsuario`, `validarSenha`.  
**Desenvolvedores:** João e Maria
**Período de desenvolvimento:** 4 dias  
**Testes:** 2 dias  
**Revisão:** 2 dias  
**Deploy:** 1 dia   
**Data:** 15/08/2025 - 24/08/2025  

### Sprint 3: Criação de quadros de tarefas
**O que foi feito:**  
- Front-end: Interface para criar, visualizar e excluir quadros.  
- Back-end: Métodos `criarQuadro`, `listarQuadros`, `excluirQuadro`.  
**Desenvolvedores:** João (Front-end), Maria (Back-end)
**Período de desenvolvimento:** 6 dias  
**Testes:** 1 dia  
**Revisão:** 1 dia
**Deploy:** 1 dia   
**Data:** 25/08/2025 - 03/09/2025  

### Sprint 4: Adição de listas em quadros
**O que foi feito:**  
- Front-end: Adição de seções dentro de cada quadro.  
- Back-end: Métodos `adicionarLista`, `editarLista`, `removerLista`.  
**Desenvolvedores:** João (UI), Maria (API)
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia   
**Data:** 04/09/2025 - 13/09/2025  

### Sprint 5: CRUD de tarefas
**O que foi feito:**  
- Front-end: Interface completa para gerenciar tarefas.  
- Back-end: Métodos `criarTarefa`, `listarTarefas`, `atualizarTarefa`, `deletarTarefa`.  
**Desenvolvedores:** João e Maria
**Período de desenvolvimento:** 4 dias  
**Testes:** 1 dia  
**Revisão:** 3 dia
**Deploy:** 1 dia   
**Data:** 14/09/2025 - 23/09/2025  

### Sprint 6: Arrastar e soltar tarefas entre listas
**O que foi feito:**  
- Front-end: Drag and Drop com react-beautiful-dnd.  
- Back-end: Atualização de posição da tarefa.  
**Desenvolvedores:** João (UX), Maria (persistência)
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia   
**Data:** 24/09/2025 - 02/10/2025  

### Sprint 7: Compartilhamento de quadros com outros usuários
**O que foi feito:**  
- Front-end: Modal para adicionar colaboradores.  
- Back-end: Controle de permissões de acesso aos quadros.  
**Desenvolvedores:** João (UI), Maria (controle de acesso)
**Período de desenvolvimento:** 4 dias  
**Testes:** 2 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 03/10/2025 - 12/10/2025  

### Sprint 8: Permissões de visualização e edição
**O que foi feito:**  
- Back-end: Níveis de acesso (admin, editor, visualizador).  
- Front-end: Bloqueio de ações conforme permissão.  
**Desenvolvedores:** Maria e João
**Período de desenvolvimento:** 3 dias  
**Testes:** 3 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia   
**Data:** 13/10/2025 - 22/10/2025  

### Sprint 9: Filtro por prioridade e data de entrega
**O que foi feito:**  
- Front-end: Filtros por select e data.  
- Back-end: Queries com filtros dinâmicos.  
**Desenvolvedores:** João (UX), Maria (queries)
**Período de desenvolvimento:** 6 dias  
**Testes:** 1 dia  
**Revisão:** 1 dia
**Deploy:** 1 dia   
**Data:** 23/10/2025 - 01/11/2025  

### Sprint 10: Integração com calendário Google
**O que foi feito:**  
- Front-end: Botão de sincronizar tarefas com Google Calendar.  
- Back-end: Integração com API do Google.  
**Desenvolvedores:** João e Lucas
**Período de desenvolvimento:** 5 dias  
**Testes:** 2 dia  
**Revisão:** 1 dia
**Deploy:** 1 dia   
**Data:** 02/11/2025 - 10/11/2025  

### Sprint 11: Comentários em tarefas
**O que foi feito:**  
- Front-end: Campo e visualização de comentários.  
- Back-end: Tabela de comentários e API REST.  
**Desenvolvedores:** João e Maria
**Período de desenvolvimento:** 6 dias  
**Testes:** 1 dia  
**Revisão:** 1 dia
**Deploy:** 1 dia   
**Data:** 11/11/2025 - 20/11/2025  

### Sprint 12: Notificações em tempo real (Socket.IO)
**O que foi feito:**  
- Back-end: Websockets para notificação de eventos.  
- Front-end: Exibição de notificações em tempo real.  
**Desenvolvedores:** Lucas e João
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia   
**Data:** 21/11/2025 - 30/11/2025  

### Sprint 13: Sistema de etiquetas coloridas nas tarefas
**O que foi feito:**  
- Front-end: Interface para criar e atribuir etiquetas.  
- Back-end: CRUD de etiquetas e associação com tarefas.  
**Desenvolvedores:** João e Maria
**Período de desenvolvimento:** 4 dias  
**Testes:** 2 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 01/12/2025 - 10/12/2025  

### Sprint 14: Página de perfil do usuário
**O que foi feito:**  
- Front-end: Tela com dados pessoais, preferências e senha.  
- Back-end: Métodos `atualizarPerfil`, `alterarSenha`.  
**Desenvolvedores:** João e Maria
**Período de desenvolvimento:** 6 dias  
**Testes:** 1 dia  
**Revisão:** 1 dia
**Deploy:** 1 dia  
**Data:** 11/12/2025 - 20/12/2025  

### Sprint 15: Upload de arquivos nas tarefas
**O que foi feito:**  
- Front-end: Interface de upload com visualização.  
- Back-end: Upload para bucket S3 e associação com tarefas.  
**Desenvolvedores:** João (UI), Lucas (infraestrutura)
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 21/12/2025 - 30/12/2025  

### Sprint 16: Sistema de busca global (Elasticsearch)
**O que foi feito:**  
- Back-end: Integração com Elasticsearch.  
- Front-end: Campo de busca global com sugestões.  
**Desenvolvedores:** Maria (API), João (interface)
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 02/01/2026 - 11/01/2026  

### Sprint 17: Exportação de tarefas (PDF/CSV)
**O que foi feito:**  
- Back-end: Geração de relatórios PDF/CSV.  
- Front-end: Botão de exportar no painel do usuário.  
**Desenvolvedores:** Lucas e Maria
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 12/01/2026 - 21/01/2026  

### Sprint 18: Dashboard com gráficos de produtividade
**O que foi feito:**  
- Front-end: Gráficos com Chart.js.  
- Back-end: APIs com dados agregados.  
**Desenvolvedores:** João e Lucas
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 22/01/2026 - 31/01/2026  

### Sprint 19: Testes automatizados e cobertura de código
**O que foi feito:**  
- Back-end: Testes com Jest.  
- Front-end: Testes de componentes com Testing Library.  
**Desenvolvedores:** Lucas e Maria
**Período de desenvolvimento:** 5 dias  
**Testes:** 1 dia  
**Revisão:** 2 dia
**Deploy:** 1 dia  
**Data:** 01/02/2026 - 10/02/2026  

### Sprint 20: Documentação final e deploy completo
**O que foi feito:**  
- Documentação técnica e manual do usuário.  
- Deploy no Vercel e Render.  
**Desenvolvedores:** Todos
**Período de desenvolvimento:** 2 dias  
**Testes:** 2 dia  
**Revisão:** 4 dia
**Deploy:** 2 dia  
**Data:** 11/02/2026 - 21/02/2026