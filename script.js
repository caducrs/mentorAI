async function enviarPergunta() {
    const input = document.getElementById("userInput").value;
    const respostaEl = document.getElementById("resposta");
  
    respostaEl.innerText = "⏳ Processando...";
  
    const apiKey = "SUA_API_KEY_AQUI"; // <- Substitua pela sua chave
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Você é um mentor de carreira para jovens iniciantes. Dê conselhos claros, simples e positivos, baseados em interesses e perfis profissionais."
          },
          {
            role: "user",
            content: input
          }
        ]
      })
    });
  
    const data = await response.json();
    const resposta = data.choices[0].message.content;
  
    respostaEl.innerText = "💬 " + resposta;
  }
  