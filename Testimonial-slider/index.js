const testimonials = [
    {
       name: "Peter James",
       photoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       text: "The cell phones you offer are of excellent quality, with great durability and performance. This really makes us confident in the brand",
    },

    {
        name: "Maycon whayne",
        photoUrl:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Software updates are an important point. Although they are released regularly, they sometimes seem to bring no The customer support is exceptional, with quick responses and effective solutions to our problems. This makes all the difference in the user experience.",
    },

    {
        name: "Clarise J",
        photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Software updates are an important point. Although they are released regularly, they sometimes seem to bring no significant improvements. A greater emphasis on innovation in updates can help keep users happier.",
    },
    
    {
        name: "Jack Sparrow",
        photoUrl: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Cell phone battery life could be better. On some models, it doesn't last as long as expected, which can be frustrating for users who rely on their phone all day.",
    }
]


const userNameEl = document.getElementById("user-name-testimonial");
const textEl = document.getElementById("text-testimonial");
const imgEl = document.getElementById("img-testimonial");

let index = 0 ;
updateTestimonial();

function updateTestimonial () {
    const {name, photoUrl, text} = testimonials[index];

    imgEl.src = photoUrl;
    userNameEl.innerText = name;
    textEl.innerText = text;
    index ++ ;
    if(index === testimonials.length) {
        index = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000)



}










