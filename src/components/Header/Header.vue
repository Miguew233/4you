<template>
    <nav class="navbar" style="background-color: transparent;">
        <div class="navbar-container">
            <div class="nav-item" ><a href="/pacotes" class="nav-link">4You Viagens</a></div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/pacotes" class="nav-link">Pacotes</a>
                </li>
                <li class="nav-item">
                    <a href="/passagens" class="nav-link">Passagens</a>
                </li>
                <li class="nav-item">
                    <a href="/hoteis" class="nav-link">Hotéis</a>
                </li>
                <li class="nav-item">
                    <a href="/login" class="nav-link">Login</a>
                </li>
                <li class="nav-item">
                    <a href="/registrar" class="nav-link btn-registrar">Registrar</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        handleClick() {
            this.$router.push('/pacotes');
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #333;
    padding: 1rem 0;
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000000;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.nav-link {
    color: #000000;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #007bff;
}

.btn-registrar {
    background-color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.btn-registrar:hover {
    background-color: #0056b3;
}

.navbar {
    position: absolute; /* ou fixed */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10; /* fica acima do hero */
    background: transparent; /* importante */
    padding: 20px 40px;
}
.nav-link {
    color: white;
}

</style>