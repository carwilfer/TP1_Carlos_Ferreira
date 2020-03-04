<template>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="pagoNaEntrega" value="true" v-model="pedido.pagoNaEntrega">
      <label class="form-check-label" for="pagoNaEntrega">Pago na entrega?</label>
    </div>
    <div class="form-group form-check-inline">
      <input type="radio" class="form-check-input" id="manha" value="Manhã" v-model="pedido.entrega">
      <label class="form-check-label" for="manha">Manhã</label>
    </div>
    <div class="form-group form-check-inline">
      <input type="radio" class="form-check-input" id="tarde" value="Tarde" v-model="pedido.entrega">
      <label class="form-check-label" for="tarde">Tarde</label>
    </div>
    <div class="form-group form-check-inline">
      <input type="radio" class="form-check-input" id="noite" value="Noite" v-model="pedido.entrega">
      <label class="form-check-label" for="noite">Noite</label>
    </div>

</template>