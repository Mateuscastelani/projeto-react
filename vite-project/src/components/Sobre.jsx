import React from 'react';

function Sobre() {
    return (
        <div>
            <main id="inicio">
                <section id="sobre">
                    <h2>Sobre Mim</h2>
                    <p>
                        Olá! Meu nome é Mateus Castelani, tenho 21 anos e sou estudante de Tecnologia da Informação.
                    </p>
                    <article>
                        <h3>Iformações Pessoais</h3>
                        <ul>
                            <li><strong>Nome:</strong> Mateus Castelani</li>
                            <li><strong>Idade:</strong> 21 anos</li>
                            <li><strong>Curso:</strong> Tecnologia da Informação</li>
                            <li><strong>Interesses:</strong> Desenvolvimento web, inteligência artificial, jogos e música.</li>
                        </ul>
                    </article> 

                    <article>
                        <h3>Sobre o Site</h3>
                        <p>
                            Este site foi criado para compartilhar meus pensamentos, projetos e experiências na área de tecnologia. Aqui você encontrará artigos sobre desenvolvimento web, tutoriais, análises de jogos e muito mais.
                        </p>
                        </article>
                </section>
            </main>

            <footer>
                <p>© 2024 Meu Blog Pessoal. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Sobre;