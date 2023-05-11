// console.log("hellojs");
let cl = console.log;

const showModelBtn = document.getElementById("showModelBtn");
const backDrop = document.getElementById("backDrop");
const mymodel = document.getElementById("mymodel");
const movieClose = [...document.querySelectorAll(".movieClose")];
const title = document.getElementById("title");
const imgUrl = document.getElementById("imgUrl");
const rating = document.getElementById("rating");
const moviesContainer = document.getElementById("moviesContainer");
const movieform = document.getElementById("movieform");


let movie = [];
const KoreanDrama = (Drama) => {
    let result = "";
    Drama.forEach(dra => {
        result += `<div class="col-md-4 col-sm-6 mb-20">
        <div class="card-group">
            <div class="card border-0">
                <div class="card-header bg-primary text-white">
                    <h2>${dra.movie_title}</h2>
                </div>
                <div class="card-body">
                    <img src="${dra.movie_imgUrl}"
                        class="card-img-top" alt="">
                </div>
                <div class="card-footer">
                    <p>5/${dra.movie_rating}</p>
                </div>
            </div>
        </div>
    </div>`
    })
    moviesContainer.innerHTML=result;

}



const onshowHideModelBtn = () =>{
    mymodel.classList.toggle("visible");
    backDrop.classList.toggle("visible");
}

const onSubmitHandler =(eve) =>{
    eve.preventDefault()
    movieobj = {
        movie_title:title.value,
        movie_imgUrl:imgUrl.value,
        movie_rating:rating.value
    }

    movie.push(movieobj);
    KoreanDrama(movie)
    eve.target.reset()
    mymodel.classList.toggle("visible");
    backDrop.classList.toggle("visible");
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Movie Added Successfully',
        showConfirmButton: false,
        timer: 3000
      })

}

showModelBtn.addEventListener("click",onshowHideModelBtn);

movieClose.forEach(ele=>ele.addEventListener("click",onshowHideModelBtn));

movieform.addEventListener("submit",onSubmitHandler);