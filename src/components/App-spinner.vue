<template>
    <div class="atom-spinner">
        <div class="spinner-inner">
            <div class="spinner-line"></div>
            <div class="spinner-line"></div>
            <div class="spinner-line"></div>
            <!--Chrome renders little circles malformed :(-->
            <div class="spinner-circle">
                &#9679;
            </div>
        </div>
    </div>
</template>

<style scoped>
.atom-spinner,
.atom-spinner * {
    margin: 0 auto;
    box-sizing: border-box;
}

.atom-spinner {
    height:200px;
    width: 200px;
    overflow: hidden;
}

.atom-spinner .spinner-inner {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
}

.atom-spinner .spinner-circle {
    display: block;
    position: absolute;
    color: var(--text-color);
    font-size: calc(200px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.atom-spinner .spinner-line {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: 1s;
    border-left-width: calc(200px / 25);
    border-top-width: calc(200px / 25);
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;
}

.atom-spinner .spinner-line:nth-child(1) {
    border-left-color: #DE4959;
    box-shadow: 0 0 10px #DE4959;
    animation: atom-spinner-animation-1 1s linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(2) {
    box-shadow: 0 0 10px #3A2170;

    border-left-color: #3A2170;
    animation: atom-spinner-animation-2 1s linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
}

.atom-spinner .spinner-line:nth-child(3) {
    box-shadow: 0 0 10px #11808C;

    border-left-color: #11808C;
    animation: atom-spinner-animation-3 1s linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
}

@keyframes atom-spinner-animation-1 {
    100% {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
}

@keyframes atom-spinner-animation-2 {
    100% {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
}

@keyframes atom-spinner-animation-3 {
    100% {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
}
</style>