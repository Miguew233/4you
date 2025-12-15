import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useTravelStore = defineStore('travel', () => {

  // --- FUNÇÕES AUXILIARES DE PERSISTÊNCIA ---
  // Tenta pegar do LocalStorage, se não tiver, usa o valor padrão
  const loadFromStorage = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  };

  // --- 1. STATE (Dados com Memória) ---

  // HOTÉIS
  const hoteis = ref(loadFromStorage('db_hoteis', [
    { id: 1, type: 'hotel', name: "Hotel Golden Vilage", location: "São Paulo, SP", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", price: 616.00, days: 4, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 2, type: 'hotel', name: "Majestic Palace Hotel", location: "Florianópolis, SC", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", price: 2185.00, days: 7, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 3, type: 'hotel', name: "Crowne Plaza LA", location: "Los Angeles, EUA", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&q=80", price: 4152.00, days: 7, guests: 2, hasBreakfast: false, hasWifi: true },
    { id: 4, type: 'hotel', name: "EVEN Hotel Miami", location: "Miami, EUA", image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e8f2?auto=format&fit=crop&w=400&q=80", price: 2873.00, days: 5, guests: 3, hasBreakfast: true, hasWifi: true },
    { id: 5, type: 'hotel', name: "Grand Hyatt Rio", location: "Rio de Janeiro, RJ", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80", price: 1540.00, days: 3, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 6, type: 'hotel', name: "Nord Luxxor", location: "João Pessoa, PB", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400&q=80", price: 980.00, days: 5, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 7, type: 'hotel', name: "Hotel Riu Plaza", location: "Nova York, EUA", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&w=400&q=80", price: 5200.00, days: 6, guests: 2, hasBreakfast: false, hasWifi: true }
  ]));

  // PASSAGENS
  const passagens = ref(loadFromStorage('db_passagens', [
    { id: 101, type: 'flight', name: "São Paulo", location: "Saindo de Brasília", image: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=400&q=80", price: 169.00, oldPrice: 229.00, discount: "23% OFF" },
    { id: 102, type: 'flight', name: "Florianópolis", location: "Saindo de São Paulo", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=400&q=80", price: 250.00, oldPrice: 380.00, discount: "34% OFF" },
    { id: 103, type: 'flight', name: "Los Angeles", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=400&q=80", price: 1118.00, oldPrice: 1559.00, discount: "28% OFF" },
    { id: 104, type: 'flight', name: "Miami", location: "Saindo do Rio", image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=400&q=80", price: 950.00, oldPrice: 1159.00, discount: "18% OFF" },
    { id: 105, type: 'flight', name: "Paris", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", price: 2890.00, oldPrice: 3500.00, discount: "17% OFF" },
    { id: 106, type: 'flight', name: "Lisboa", location: "Saindo de Recife", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=400&q=80", price: 3100.00, oldPrice: 4200.00, discount: "26% OFF" },
    { id: 107, type: 'flight', name: "Buenos Aires", location: "Saindo de Porto Alegre", image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=400&q=80", price: 890.00, oldPrice: 1200.00, discount: "25% OFF" }
  ]));

  // PACOTES
  const pacotes = ref(loadFromStorage('db_pacotes', [
    {
      id: 900,
      title: "Feriadão em Salvador",
      price: 2450.00,
      image: "https://images.unsplash.com/photo-1512753360377-5435e1657c7c?auto=format&fit=crop&w=400&q=80",
      days: 5,
      persons: 2,
      hotelId: 1,
      flightId: 101
    },
    {
      id: 901,
      title: "Eurotrip Paris Romântica",
      price: 6890.00,
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
      days: 7,
      persons: 2,
      hotelId: 5,
      flightId: 105
    }
  ]));

  // --- OBSERVADORES (Salvar automaticamente quando mudar) ---
  watch(hoteis, (newVal) => localStorage.setItem('db_hoteis', JSON.stringify(newVal)), { deep: true });
  watch(passagens, (newVal) => localStorage.setItem('db_passagens', JSON.stringify(newVal)), { deep: true });
  watch(pacotes, (newVal) => localStorage.setItem('db_pacotes', JSON.stringify(newVal)), { deep: true });

  // --- USUÁRIOS E SESSÃO ---
  const currentUser = ref(JSON.parse(localStorage.getItem('usuarioLogado')) || null);
  const userAvatar = ref(localStorage.getItem(`avatar_${currentUser.value?.email}`) || null);
  const reservas = ref(loadFromStorage('db_reservas', [])); // Também salvamos as reservas!
  const reviews = ref(loadFromStorage('db_reviews', [
    { id: 1, itemId: 1, type: 'hotel', userName: "Ana Clara", rating: 5, comment: "Hotel maravilhoso!", date: "2023-10-15" }
  ]));

  watch(reservas, (newVal) => localStorage.setItem('db_reservas', JSON.stringify(newVal)), { deep: true });
  watch(reviews, (newVal) => localStorage.setItem('db_reviews', JSON.stringify(newVal)), { deep: true });

  // --- GETTERS ---
  const pacotesCompletos = computed(() => {
    return pacotes.value.map(pct => {
      return {
        ...pct,
        hotel: hoteis.value.find(h => h.id === pct.hotelId) || { name: 'Hotel removido' },
        flight: passagens.value.find(f => f.id === pct.flightId) || { name: 'Voo removido', location: '' }
      }
    })
  });

  // --- ACTIONS ---

  function addHotel(novoHotel) {
    novoHotel.id = Date.now();
    novoHotel.type = 'hotel';
    hoteis.value.push(novoHotel);
  }

  function addPassagem(novaPassagem) {
    novaPassagem.id = Date.now();
    novaPassagem.type = 'flight';
    passagens.value.push(novaPassagem);
  }

  function addPacote(novoPacote) {
    novoPacote.id = Date.now();
    novoPacote.hotelId = Number(novoPacote.hotelId);
    novoPacote.flightId = Number(novoPacote.flightId);
    pacotes.value.push(novoPacote);
  }

  function login(userData) {
    currentUser.value = userData;
    localStorage.setItem('usuarioLogado', JSON.stringify(userData));
    userAvatar.value = localStorage.getItem(`avatar_${userData.email}`);
  }

  function logout() {
    currentUser.value = null;
    userAvatar.value = null;
    localStorage.removeItem('usuarioLogado');
    window.location.reload();
  }

  function updateAvatar(base64Image) {
    if (currentUser.value) {
      userAvatar.value = base64Image;
      localStorage.setItem(`avatar_${currentUser.value.email}`, base64Image);
    }
  }

  function confirmBooking(item, type) {
    const novaReserva = {
      id: Date.now(),
      type: type,
      itemId: item.id,
      date: new Date().toLocaleDateString('pt-BR'),
      status: 'confirmado',
      price: item.price,
      review: null,
      itemSnapshot: item
    };
    reservas.value.push(novaReserva);
  }

  function addReview(reservaId, reviewData) {
    const reserva = reservas.value.find(r => r.id === reservaId);
    if (reserva) {
      reserva.review = reviewData;
      reviews.value.push({
        id: Date.now(),
        userId: currentUser.value.id,
        userName: currentUser.value.nome,
        ...reviewData,
        itemId: reserva.itemId,
        type: reserva.type
      });
    }
  }

  // --- INTEGRAÇÃO COM JAVA (Somente Cliente) ---
  async function createClientAPI(userData) {
    try {
      const response = await fetch('http://localhost:8080/cliente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        alert("Cliente salvo no Banco de Dados com Sucesso! 🚀");
      } else {
        alert("Erro ao salvar no Java 😢");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
      alert("O Java está desligado? Não consegui conectar.");
    }
  }

  function updateHotel(hotelAtualizado) {
    const index = hoteis.value.findIndex(h => h.id === hotelAtualizado.id);
    if (index !== -1) {
      // Substitui o antigo pelo novo
      hoteis.value[index] = hotelAtualizado;
    }
  }

  function deletePacote(id) {
    const index = pacotes.value.findIndex(p => p.id === id);
    if (index !== -1) pacotes.value.splice(index, 1);
  }

  return {
    hoteis, passagens, pacotes, pacotesCompletos, currentUser, userAvatar, reservas, reviews,
    addHotel, addPassagem, addPacote, login, logout, updateAvatar, confirmBooking, addReview, createClientAPI,
    updateHotel, deletePacote
  };
});
