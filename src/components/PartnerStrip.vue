<template>
  <div class="strip card">
    <button class="nav left" @click="shift(-1)" aria-label="向左">
      ‹
    </button>
    <div class="viewport">
      <div class="track" :style="{ transform: `translateX(-${offset}px)` }">
        <div v-for="p in looped" :key="p._k" class="logo">
          <img :src="p.logo" :alt="p.name" />
        </div>
      </div>
    </div>
    <button class="nav right" @click="shift(1)" aria-label="向右">
      ›
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  partners: { type: Array, required: true }
});

const offset = ref(0);
const step = 190;

const looped = computed(() => {
  const base = props.partners ?? [];
  const doubled = [...base, ...base, ...base].map((p, idx) => ({ ...p, _k: `${p.id}-${idx}` }));
  return doubled;
});

function shift(dir) {
  const next = offset.value + dir * step;
  offset.value = Math.max(0, next);
}
</script>

<style scoped>
.strip{
  position: relative;
  padding: 14px 46px;
  overflow: hidden;
}
.viewport{ overflow: hidden; }
.track{
  display:flex;
  gap: 18px;
  transition: transform 220ms ease;
  will-change: transform;
}
.logo{
  width: 172px;
  height: 66px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: #fff;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 10px;
  flex: 0 0 auto;
}
.logo img{
  max-height: 42px;
  opacity: 0.9;
  filter: saturate(1.05);
}
.nav{
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.9);
  cursor:pointer;
  font-size: 20px;
  color: rgba(15,23,42,0.7);
}
.nav.left{ left: 10px; }
.nav.right{ right: 10px; }
</style>


