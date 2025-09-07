        // Função para atualizar a barra de progresso de cada seção
        function updateProgress(sectionId) {
            const section = document.getElementById(sectionId);
            const checkboxes = section.querySelectorAll('input[type="checkbox"]');
            const progressBar = document.getElementById(`progress-${sectionId}`);
            
            let checkedCount = 0;
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    checkedCount++;
                    checkbox.nextElementSibling.classList.add('completed');
                } else {
                    checkbox.nextElementSibling.classList.remove('completed');
                }
            });
            
            const progress = (checkedCount / checkboxes.length) * 100;
            progressBar.style.width = `${progress}%`;
            progressBar.textContent = `${Math.round(progress)}%`;
            
            // Atualizar progresso geral
            updateOverallProgress();
        }
        
        // Função para atualizar o progresso geral
        function updateOverallProgress() {
            const sections = ['intro', 'fundamentos', 'workflow', 'ramificacao', 'github', 'avancado', 'boas-praticas'];
            const progressBar = document.getElementById('progress-geral');
            
            let totalCheckboxes = 0;
            let totalChecked = 0;
            
            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                const checkboxes = section.querySelectorAll('input[type="checkbox"]');
                
                totalCheckboxes += checkboxes.length;
                
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        totalChecked++;
                    }
                });
            });
            
            const overallProgress = (totalChecked / totalCheckboxes) * 100;
            progressBar.style.width = `${overallProgress}%`;
            progressBar.textContent = `${Math.round(overallProgress)}%`;
        }
        
        // Função para marcar todos os itens como concluídos
        function markAllCompleted() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
                checkbox.nextElementSibling.classList.add('completed');
            });
            
            // Atualizar todas as barras de progresso
            const sections = ['intro', 'fundamentos', 'workflow', 'ramificacao', 'github', 'avancado', 'boas-praticas'];
            sections.forEach(sectionId => {
                const progressBar = document.getElementById(`progress-${sectionId}`);
                progressBar.style.width = '100%';
                progressBar.textContent = '100%';
            });
            
            updateOverallProgress();
        }
        
        // Função para reiniciar todo o progresso
        function resetProgress() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
                checkbox.nextElementSibling.classList.remove('completed');
            });
            
            // Reiniciar todas as barras de progresso
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.style.width = '0%';
                bar.textContent = '0%';
            });
        }
        
        // Ativar o item de navegação correspondente à seção visível
        function activateNavItem() {
            const sections = document.querySelectorAll('main section');
            const navLinks = document.querySelectorAll('nav a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150; // Offset para a barra de navegação
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(current)) {
                    link.classList.add('active');
                }
            });
        }

        // Função para mostrar/esconder o menu hambúrguer
        function toggleMenu() {
            const nav = document.getElementById('sidebar');
            nav.classList.toggle('open');
        }

        // Função para fechar o menu em telas pequenas após o clique
        function closeMenu() {
            const nav = document.getElementById('sidebar');
            if (window.innerWidth <= 992) {
                nav.classList.remove('open');
            }
        }

        // Inicializar barras de progresso e eventos
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.textContent = '0%';
            });
            
            window.addEventListener('scroll', activateNavItem);
            activateNavItem(); // Chamar na inicialização para ativar a primeira seção
        });