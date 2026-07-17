# 🏠 Casa 210 | Plataforma de Reservas e Hospedagem

Um sistema web completo (Full-stack) desenvolvido para gerenciar as reservas de uma casa de praia em Maragogi. A aplicação oferece uma interface fluida para os hóspedes explorarem o imóvel, consultarem a disponibilidade em tempo real e solicitarem reservas que são sincronizadas automaticamente com o Google Agenda.

---

## 📸 Demonstração do Projeto

> **Nota:** Adicione aqui um GIF ou imagens mostrando o site em funcionamento.
> 
> ![Página Inicial da Casa 210](link_da_imagem_ou_gif_aqui)
> ![Fluxo de Reserva e Calendário](link_da_imagem_ou_gif_aqui)

**🌐 Acesso ao vivo:** [Visite o site da Casa 210](https://beach-house-host.vercel.app/)

---

## ✨ Principais Funcionalidades

* **Calendário Inteligente:** Bloqueio automático de datas passadas e de dias já reservados.
* **Sincronização em Tempo Real:** Leitura e gravação de eventos diretamente no Google Agenda utilizando uma Service Account.
* **Notificações Automatizadas:** Disparo instantâneo de e-mails transacionais (via Resend) a cada nova solicitação de reserva.
* **Design Responsivo:** Interface moderna e amigável para dispositivos móveis, garantindo a melhor experiência (UX) para o usuário final.
* **Guia Local:** Seção dedicada com dicas de turismo, regras da casa e galeria de fotos.

---

## 🛠️ Tecnologias Utilizadas

**Front-end:**
* React (com Vite para build ultra-rápido)
* Tailwind CSS (para estilização utilitária e responsiva)
* React Calendar (para a interface de seleção de datas)
* Lucide React (para a iconografia)

**Back-end & Infraestrutura:**
* Node.js (Vercel Serverless Functions para a API)
* Google Calendar API (Gerenciamento do banco de dados de reservas)
* Resend API (Serviço de disparo de e-mails HTTP)
* Vercel (Hospedagem e CI/CD)

---

## 🚀 Como rodar o projeto localmente

Se você deseja clonar e rodar este projeto na sua máquina, siga os passos abaixo:

### Pré-requisitos
Certifique-se de ter o **Node.js** e o **Git** instalados na sua máquina.

### 1. Clonando o repositório
```bash
git clone https://github./seu-usuario/beach-house-host.git
cd beach-house-host
```
### 2. Instalando as dependências
```bash
npm install
```
### 3. Configurando as Variáveis de Ambiente
Crie um arquivo chamado .env.local na raiz do projeto. Você precisará de credenciais do Google Cloud e do Resend para o sistema funcionar corretamente:
```bash
# Frontend
VITE_GOOGLE_CALENDAR_ID="seu_id_do_calendario"
VITE_GOOGLE_API_KEY="sua_chave_publica_do_google"

# Backend
CLOUD_RESERVE_MANAGER_MAIL="email_do_bot_google_cloud"
GOOGLE_PRIVATE_KEY="sua_chave_privada_gigante"
RESEND_TO_EMAIL="seu_email_para_receber_notificacoes"
RESEND_API_KEY="sua_chave_do_resend"
```

### 4. Iniciando o servidor de desenvolvimento
Como o projeto utiliza Vercel Serverless Functions, utilize a CLI da Vercel para emular o ambiente completo na sua máquina:
```bash
vercel dev
```

## 👨‍💻 Autor
Desenvolvido por: Caio Amarante Calderaro

LinkedIn: [Caio Amarante](https://www.linkedin.com/in/caio-amarante-calderaro-b30ba938b/)

E-mail: caioac2006@gmail.com