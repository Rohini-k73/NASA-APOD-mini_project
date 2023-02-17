
console.log("hello")

//loadNASAData()

function loadNASAData() {

    console.log("loadNASAData");

    //before we call, show a loading image

    let loadingimage1 = "https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp";
    let loadingimage2 = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";
    document.getElementById("image").src = loadingimage2;

    //fetch call 

    let apikey = "otyMHISmnyb3vcfCmNLa0v6HEByNZe6eSDcohsIa";
    let url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;

    console.log(url);


    fetch(url).then(function (response) {
        return response.json();
    }
    ).then(function (json) {

        //console.log(json);

        let title = json.title;
        let date = json.date;
        let explanation = json.explanation;
        let url = json.url;
        let media_type = json.media_type;
        let hdurl = json.hdurl;

        console.log(`title: ${title}`);
        console.log(`date: ${date}`);
        console.log(`explanation: ${explanation}`);
        console.log(`url: ${url}`);
        console.log(`media_type: ${media_type}`);
        console.log(`hdurl: ${hdurl}`);

        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("explanation").innerHTML = explanation;

        document.getElementById("image").src = hdurl;



       

    }).catch(function (error) {
        console.log(error);
    });



}

// reset
 function reset (){

    document.getElementById("title").innerHTML = "TITLE WILL COME HERE";
        document.getElementById("date").innerHTML = "DATE WILL COME HERE";
        document.getElementById("explanation").innerHTML = "EXPLANATION WILL COME HERE";

        document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxefKIYj-f-Hxoxm7wmYOaT7nxaBjtqukjcX6cGNpwQPU1v2DO742a1aee9q6sbH0FKQ&usqp=CAU";
 }






























