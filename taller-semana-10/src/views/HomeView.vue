<template>
  <div>
    <h1>Página Principal</h1>
    <button @click="$router.push('/ruta1')">Ir a Ruta 1</button>
    <button @click="$router.push('/ruta2')">Ir a Ruta 2</button>
    <button @click="$router.push('/ruta3')">Ir a Ruta 3</button>
    <button @click="$router.push('/ruta4')">Ir a Ruta 4</button>
    <button @click="$router.push('/ruta5')">Ir a Ruta 5</button>

    <div>
      <input v-model="inputText" class="input-ancho" placeholder="Ingresa las palabras secretas" />
      <button @click="comprobar">Comprobar</button>
    </div>

    <p>{{ resultado }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: '',
      secretWords: ['pan', 'leche', 'perro', 'papa', 'queso'],
      resultado: ''
    };
  },
  methods: {
    comprobar() {
      const palabrasIngresadas = this.inputText.split(' ');
      if (palabrasIngresadas.length === 5 && palabrasIngresadas.every((p, i) => p === this.secretWords[i])) {
        this.resultado = '¡Mensaje correcto!';
      } else {
        this.resultado = 'El mensaje es incorrecto.';
      }
    }
  }
};
</script>

<style>
.input-ancho {
  width: 100%;
  max-width: 600px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
}
</style>
