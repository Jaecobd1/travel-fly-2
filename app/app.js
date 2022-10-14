function initListeners() {
    $("a").click(function(e) {
        let btnId = e.currentTarget.id;
        console.log("clicked " + btnId);
        MODEL.changePageContent(btnId);
    })

}


$(document).ready(function() {
    initListeners();
    MODEL.changePageContent("home");
    appListener();
})

function route() {
    let hashTag = window.location.hash;
    let pageName = hashTag.replace("#", "");
    let pageContent = pageName + "Content";

    if (pageName == "") {
        pageContent = "homeContent";
    }

    MODEL.modelPageName(pageContent);
}

// function initListeners() {
//     $(window).on("hashchange", route);
//     route();

// }

// $(document).ready(function() {
//     initListeners();
//     console.log(MODEL.myName);

// });

// function route() {
//     let hashTag = window.location.hash;
//     let pageName = hashTag.replace("#", "");
//     let pageContent = pageName + "Content";

//     if (pageName == "") {
//         pageContent = "homeContent";
//     }

//     MODEL.modelPageName(pageContent);
// }

// function initListeners() {
//     $(window).on("hashchange", route);
//     route();

// }

// $(document).ready(function() {
//     initListeners();
//     console.log(MODEL.myName);

// });