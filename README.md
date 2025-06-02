# 🧠 Mentor de Carreira Júnior – Documentação do Projeto

## 📌 Resumo
Este é um projeto web simples que utiliza a **API do ChatGPT (OpenAI)** para oferecer **mentoria básica de carreira** a jovens iniciantes. A interface é leve, construída com HTML, CSS e JavaScript, permitindo interações diretas com o modelo de linguagem para tirar dúvidas sobre profissões, entrevistas, currículos e escolhas profissionais.

## 🎯 Objetivo
Oferecer uma ferramenta acessível e gratuita que simula um mentor virtual, ajudando estudantes e jovens profissionais a:
- Entender suas habilidades e interesses.
- Escolher áreas de carreira.
- Criar um currículo inicial.
- Simular entrevistas e responder perguntas comuns.
- Obter dicas de mercado.

## 🛠️ Tecnologias Utilizadas
- **HTML5**: Estrutura da interface.
- **CSS3**: Estilização visual.
- **JavaScript**: Lógica para comunicação com a API do GPT.
- **OpenAI API (ChatGPT)**: Inteligência artificial de conversação.

## 📁 Estrutura de Arquivos

```
mentor-carreira-junior/
├── index.html       → Página principal com textarea e botão
├── style.css        → Estilos para tornar a interface mais amigável
└── script.js        → Código JavaScript que envia mensagens para o GPT
```

## ⚙️ Como Funciona

1. O usuário digita uma pergunta ou dúvida no campo de texto.
2. O script envia essa dúvida para a **API do ChatGPT**, usando um prompt inicial personalizado:
   > “Você é um mentor de carreira para jovens iniciantes...”
3. A resposta gerada é exibida diretamente na tela, como se fosse um mentor conversando.

## 🔐 Como Usar a API do ChatGPT

1. Crie uma conta em: [https://platform.openai.com](https://platform.openai.com)
2. Vá em: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
3. Gere uma chave e **copie**.
4. No arquivo `script.js`, substitua:

```js
const apiKey = "SUA_API_KEY_AQUI";
```

Por:

```js
const apiKey = "sk-XXXXXXXXXXXXXXXXXXXX";
```

## 💡 Exemplo de Uso

- **Pergunta**: “Quero uma sugestão de carreira se gosto de desenhar e de internet.”
- **Resposta esperada**:
  > “Você pode considerar áreas como Design Gráfico, UI/UX ou Marketing Digital. Posso te ajudar a entender melhor essas opções!”

## 🧪 Melhorias Futuras

- Interface por voz (usando Web Speech API).
- Modo currículo automático (exportar em PDF).
- Histórico de conversas.
- Versão para celular com PWA.

## 📦 Como Executar

1. Extraia o projeto em uma pasta.
2. Abra o arquivo `index.html` em um navegador.
3. Insira sua pergunta no campo de texto.
4. Veja a resposta gerada usando a IA do GPT.
