<template>
  <footer>
    <div class="footer-container">
      <div class="footer-section">
        <h4><i class="fas fa-info-circle"></i>4You Viagens</h4>
        <p>&copy; 2025 4You Viagens. Todos os direitos reservados.</p>
        <p>Agência especializada em experiências de viagem personalizadas.</p>
      </div>

      <div class="footer-section">
        <h4><i class="fas fa-envelope"></i> Contato</h4>
        <p>
          <a href="mailto:contato@4youviagens.com.br">contato@4youviagens.com.br</a><br>
          <a href="tel:+55123456789">(12) 3456-7890</a>
        </p>
      </div>

      <div class="footer-section">
        <h4><i class="fas fa-share-alt"></i> Redes Sociais</h4>
        <div class="social-links">
          <a href="#" aria-label="Facebook" class="social-link"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter" class="social-link"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p><small><a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a></small></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
footer {
  background: linear-gradient(135deg, #333 0%, #222 100%);
  color: white;
  padding: 50px 20px 20px;
  margin-top: 60px;
  position: relative;
}

footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #009688 0%, #00796b 100%);
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 20px;
  text-align: center;
}

.footer-section h4 {
  margin-bottom: 15px;
  color: #00796b;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-section h4 i {
  margin-right: 10px;
}

.footer-section p {
  margin-bottom: 10px;
  font-size: 1em;
  line-height: 1.5;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-link {
  color: #009688;
  font-size: 1.5em;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  color: #004d40;
  background: #009688;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 178, 80, 0.3);
}

footer a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

footer a:hover {
  color: #009688;
  text-decoration: underline;
}

.footer-bottom {
  border-top: 1px solid #555;
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
}

.footer-bottom a {
  margin: 0 10px;
}

/* Responsividade */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  .footer-section {
    margin: 15px 0;
  }
  .social-links {
    justify-content: center;
  }
}
</style>
