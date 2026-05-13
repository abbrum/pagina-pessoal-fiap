const menuBtn = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.container-links');

menuBtn.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    if (menuNav.classList.contains('active')) {
        menuBtn.textContent = '✕';
        document.body.style.overflow = 'hidden';
    } else {
        menuBtn.textContent = '☰';
        document.body.style.overflow = 'auto';
    }
});

const navLinks = document.querySelectorAll('.links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('active');
        menuBtn.textContent = '☰';
        document.body.style.overflow = 'auto';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.accordion-header');
    if (header) {
        header.addEventListener('click', () => {
            const section = header.parentElement;
            section.classList.toggle('active');
            console.log("Clique detectado!");
        });
    }
});

const backToTopBtn = document.getElementById('backToTop');
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const form = document.getElementById('contato');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    document.getElementById('nomeError').innerText = "";
    document.getElementById('emailError').innerText = "";
    document.getElementById('mensagemError').innerText = "";
    const msgSucesso = document.getElementById('form-success');
    msgSucesso.style.display = "none";
    
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('e-mail').value.trim(); 
    const mensagem = document.getElementById('mensagem').value.trim();

    let temErro = false;

    // Validação do Nome
    if (nome.length < 3) {
        document.getElementById('nomeError').innerText = "O nome deve ter pelo menos 3 caracteres.";
        temErro = true;
    }

    // Validação do E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Insira um e-mail válido.";
        temErro = true;
    }

    // Validação da Mensagem
    if (mensagem.length < 10) {
        document.getElementById('mensagemError').innerText = "A mensagem deve ter pelo menos 10 caracteres.";
        temErro = true;    }

    
      if (!temErro) {
        console.log("Dados do usuário:", { nome, email, mensagem });
        const msgSucesso = document.getElementById('form-success');
        msgSucesso.innerText = "Mensagem enviada com sucesso!";
        msgSucesso.style.display = "block";        
        
        event.target.reset(); 
        
        setTimeout(() => {
            msgSucesso.style.display = "none";
        }, 3000);
    }
});
