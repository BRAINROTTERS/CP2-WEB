document.getElementById("contatoForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      this.reset();
    });