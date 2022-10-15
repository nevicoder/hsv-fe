<script setup>
import TagCloud from 'TagCloud';
const container = '.tagcloud';
console.log(TagCloud)
const texts = [
    '3D', 'TagCloud', 'JavaScript',
    'CSS3', 'Animation', 'Interactive',
    'Mouse', 'Rolling', 'Sphere',
    '6KB', 'v2.x',
];
const options = {};
TagCloud(container, texts, options);

</script>

<template>
    <div class="tagcloud">
    </div>
</template>
