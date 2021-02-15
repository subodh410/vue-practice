const app = Vue.createApp({
    //data functions
    // template:"<h2>In Template</h2>"
    data() {
        return {
            title: "any",
            title2: "any2",
            time: 24,
            showButton: true,
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            // alert("clicked");
            this.title2 = title

        },
        toggleShowButton() {
            this.showButton = !this.showButton;
        },
        handleEvent(e) {
            console.log(e, e.type)
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY
        }
    }
});

app.mount("#app");