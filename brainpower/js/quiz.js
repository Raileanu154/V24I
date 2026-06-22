function filterSubjects(level){

    const subjects = document.querySelectorAll(".subject");

    subjects.forEach(subject => {

        if(level === "all"){
            subject.style.display = "block";
        }
        else if(subject.classList.contains(level)){
            subject.style.display = "block";
        }
        else{
            subject.style.display = "none";
        }

    });

}

function checkAnswer(answer){

    const result = document.getElementById("result");

    if(answer === 12){
        result.innerHTML = "Răspuns corect!";
    }
    else{
        result.innerHTML = "Răspuns greșit!";
    }

}