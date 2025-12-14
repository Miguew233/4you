<template>
  <div id="app">
    <div class="container">
      <section class="section">
        <h2>Quem Somos</h2>
        <p>A 4You Viagens é uma agência especializada em criar experiências de viagem personalizadas e inesquecíveis. Com mais de 10 anos de experiência, nos dedicamos a tornar seus sonhos de viagem em realidade.</p>
        <p>Nossa equipe de especialistas está comprometida em oferecer serviços de qualidade, atendimento excepcional e destinos incríveis ao redor do mundo.</p>
      </section>

      <section class="section">
        <h2>Nossa Missão</h2>
        <p>Proporcionar experiências de viagem autênticas, seguras e memoráveis, conectando pessoas com destinos extraordinários e criando histórias que duram uma vida toda.</p>
      </section>

      <section class="section">
        <h2>Nossos Valores</h2>
        <div class="values">
          <div class="value-card">
            <i class="fas fa-star"></i>
            <h3>Excelência</h3>
            <p>Entrega de qualidade superior em todos os serviços oferecidos.</p>
          </div>
          <div class="value-card">
            <i class="fas fa-shield-alt"></i>
            <h3>Confiança</h3>
            <p>Transparência e honestidade em todas as nossas transações.</p>
          </div>
          <div class="value-card">
            <i class="fas fa-lightbulb"></i>
            <h3>Inovação</h3>
            <p>Constantemente buscamos novas formas de melhorar a experiência.</p>
          </div>
          <div class="value-card">
            <i class="fas fa-heart"></i>
            <h3>Paixão</h3>
            <p>Amor genuíno por viagens e satisfação do cliente.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>Por Que Escolher a 4You Viagens?</h2>
        <ul>
          <li>Pacotes personalizados adaptados ao seu orçamento</li>
          <li>Atendimento 24/7 durante suas viagens</li>
          <li>Parcerias com os melhores hotéis e operadoras</li>
          <li>Preços competitivos e promoções exclusivas</li>
          <li>Experiências autênticas e seguras</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Import Font Awesome via CDN (adicione ao index.html do projeto Vue) */
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  margin-top: 20px;
}

nav a {
  color: white;
  margin: 0 20px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 10px 15px;
  border-radius: 5px;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.section {
  margin-bottom: 80px;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.section:hover {
  transform: translateY(-5px);
}

h2 {
  color: #00796b;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: linear-gradient(135deg, #00b19f 0%, #005048 100%);
  margin: 10px auto;
  border-radius: 2px;
}

h3 {
  color: #00796b;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
}

h3 i {
  margin-right: 10px;
  color: #00b250;
}

p {
  margin-bottom: 20px;
  font-size: 1.1em;
}

.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.value-card {
  background: linear-gradient(135deg, #f9f9f9 0%, #e8f5e8 100%);
  padding: 30px;
  border-left: 6px solid #009688;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-align: center;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 178, 80, 0.2);
}

.value-card i {
  font-size: 2em;
  color: #00632d;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

ul li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  position: relative;
  padding-left: 30px;
}

ul li::before {
  content: '✓';
  color: #00b250;
  font-weight: bold;
  position: absolute;
  left: 0;
}

ul li:last-child {
  border-bottom: none;
}

/* Responsividade */
@media (max-width: 768px) {
  header h1 {
    font-size: 2em;
  }
  nav a {
    margin: 0 10px;
    padding: 8px 12px;
  }
  .container {
    padding: 40px 15px;
  }
  .section {
    padding: 30px 20px;
  }
  h2 {
    font-size: 2em;
  }
  .values {
    grid-template-columns: 1fr;
  }
}
</style>
