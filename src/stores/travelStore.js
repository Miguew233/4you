import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTravelStore = defineStore('travel', () => {

  // --- 1. STATE (Dados Centrais) ---

  const hoteis = ref([
    { id: 1, type: 'hotel', name: "Hotel Golden Vilage", location: "São Paulo, SP", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80", price: 616.00, days: 4, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 2, type: 'hotel', name: "Majestic Palace Hotel", location: "Florianópolis, SC", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80", price: 2185.00, days: 7, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 3, type: 'hotel', name: "Crowne Plaza LA", location: "Los Angeles, EUA", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=400&q=80", price: 4152.00, days: 7, guests: 2, hasBreakfast: false, hasWifi: true },
    { id: 4, type: 'hotel', name: "EVEN Hotel Miami", location: "Miami, EUA", image: "https://images.unsplash.com/photo-1571896349842-6e53ce41e8f2?auto=format&fit=crop&w=400&q=80", price: 2873.00, days: 5, guests: 3, hasBreakfast: true, hasWifi: true },
    { id: 5, type: 'hotel', name: "Grand Hyatt Rio", location: "Rio de Janeiro, RJ", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80", price: 1540.00, days: 3, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 6, type: 'hotel', name: "Nord Luxxor", location: "João Pessoa, PB", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=400&q=80", price: 980.00, days: 5, guests: 2, hasBreakfast: true, hasWifi: true },
    { id: 7, type: 'hotel', name: "Hotel Riu Plaza", location: "Nova York, EUA", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0d665a?auto=format&fit=crop&w=400&q=80", price: 5200.00, days: 6, guests: 2, hasBreakfast: false, hasWifi: true }
  ]);

  const passagens = ref([
    { id: 101, type: 'flight', name: "São Paulo", location: "Saindo de Brasília", image: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=400&q=80", price: 169.00, oldPrice: 229.00, discount: "23% OFF" },
    { id: 102, type: 'flight', name: "Florianópolis", location: "Saindo de São Paulo", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=400&q=80", price: 250.00, oldPrice: 380.00, discount: "34% OFF" },
    { id: 103, type: 'flight', name: "Los Angeles", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1534190239940-9ba8944ea261?auto=format&fit=crop&w=400&q=80", price: 1118.00, oldPrice: 1559.00, discount: "28% OFF" },
    { id: 104, type: 'flight', name: "Miami", location: "Saindo do Rio", image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=400&q=80", price: 950.00, oldPrice: 1159.00, discount: "18% OFF" },
    { id: 105, type: 'flight', name: "Paris", location: "Saindo de SP", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", price: 2890.00, oldPrice: 3500.00, discount: "17% OFF" },
    { id: 106, type: 'flight', name: "Lisboa", location: "Saindo de Recife", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd81?auto=format&fit=crop&w=400&q=80", price: 3100.00, oldPrice: 4200.00, discount: "26% OFF" },
    { id: 107, type: 'flight', name: "Buenos Aires", location: "Saindo de Porto Alegre", image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=400&q=80", price: 890.00, oldPrice: 1200.00, discount: "25% OFF" }
  ]);

  const pacotes = ref([
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
  ]);

  // --- 2. GETTERS (Filtros Inteligentes) ---
  const pacotesCompletos = computed(() => {
    return pacotes.value.map(pct => {
      return {
        ...pct,
        // Procura o objeto completo baseado no ID salvo
        hotel: hoteis.value.find(h => h.id === pct.hotelId) || { name: 'Hotel não encontrado' },
        flight: passagens.value.find(f => f.id === pct.flightId) || { origin: 'Indisponível', destination: 'Indisponível' }
      }
    })
  });

  // --- 3. ACTIONS (Funções) ---

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

  // --- AQUI ESTAVA FALTANDO! A FUNÇÃO DE CRIAR PACOTE ---
  function addPacote(novoPacote) {
    novoPacote.id = Date.now();
    // Garante que o ID venha como número (caso o select mande string)
    novoPacote.hotelId = Number(novoPacote.hotelId);
    novoPacote.flightId = Number(novoPacote.flightId);

    pacotes.value.push(novoPacote);
  }

  // --- DADOS DO USUÁRIO (MOCK) ---
  const currentUser = ref({
    id: 1,
    name: "João Viajante",
    email: "joao@email.com",
    avatar: "https://i.pravatar.cc/150?img=11", // Foto aleatória
    joined: "2023-01-15"
  });

  // --- RESERVAS (COMPRAS) ---
  const reservas = ref([
    {
      id: 501,
      type: 'pacote', // ou 'hotel' ou 'voo'
      itemId: 900,    // ID do Pacote (Feriadão em Salvador)
      date: '2025-02-10', // Data da compra
      status: 'confirmado', // confirmado, concluido, cancelado
      price: 2450.00
    },
    {
      id: 502,
      type: 'hotel',
      itemId: 3, // Crowne Plaza
      date: '2024-12-01',
      status: 'concluido', // Já viajou (Pode avaliar!)
      price: 4152.00,
      review: null // Ainda não avaliou
    }
  ]);

  // --- AVALIAÇÕES GERAIS ---
  // Adicione isso para já ter avaliações aparecendo na apresentação
  const reviews = ref([
    { id: 1, itemId: 1, type: 'hotel', userName: "Ana Clara", rating: 5, comment: "Hotel maravilhoso, café da manhã top!", date: "2023-10-15" },
    { id: 2, itemId: 1, type: 'hotel', userName: "Carlos B.", rating: 4, comment: "Muito bom, mas o wifi oscilou.", date: "2023-11-02" },
    { id: 3, itemId: 101, type: 'flight', userName: "Marcos S.", rating: 5, comment: "Voo tranquilo e no horário.", date: "2023-09-20" }
  ]);

  // --- ACTIONS ---
  function addReview(reservaId, reviewData) {
    // 1. Encontra a reserva
    const reserva = reservas.value.find(r => r.id === reservaId);
    if (reserva) {
      reserva.review = reviewData; // Salva na reserva que já foi avaliado

      // 2. Salva na lista global de reviews (para mostrar na Home futuramente)
      reviews.value.push({
        id: Date.now(),
        userId: currentUser.value.id,
        userName: currentUser.value.name,
        userAvatar: currentUser.value.avatar,
        ...reviewData,
        itemId: reserva.itemId,
        type: reserva.type
      });
    }
  };

  // --- ACTION DE COMPRA SIMPLIFICADA (TCC MODE) ---
  function confirmBooking(item, type) {
    // Cria o objeto da reserva
    const novaReserva = {
      id: Date.now(),
      type: type, // 'hotel', 'voo', 'pacote'
      itemId: item.id,
      date: new Date().toLocaleDateString('pt-BR'), // Data de hoje
      status: 'confirmado',
      price: item.price,
      review: null,
      // Salva uma cópia do item para facilitar a exibição na lista
      itemSnapshot: item
    };

    reservas.value.push(novaReserva);
  }



  return {
    hoteis,
    passagens,
    pacotes,
    pacotesCompletos,
    addHotel,
    addPassagem,
    addPacote,
    addReview,
    currentUser,
    reservas,
    reviews,
    confirmBooking
  };
});
