const app = new Framework7({
    root: "#app",

    name: "Critotex",

    id: "com.criotex",

    panel:{
        swipe: true,
    },

    routes: routes, 

    view:{
        animate : true,
    },
});

var mainView = app.views.create('.view-main');