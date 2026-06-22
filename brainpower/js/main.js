function animate(id, max){
    let value = 0;

    const interval = setInterval(() => {

        value++;

        document.getElementById(id).innerText = value;

        if(value >= max){
            clearInterval(interval);
        }

    },20);
}

animate("students",500);
animate("teachers",35);
animate("subjects",20);
animate("grades",1000);