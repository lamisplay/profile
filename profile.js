let image = document.getElementById('image')
let text = document.getElementById('text')
index = 0



let arrobj = [
    {
        Name: "Full Name:  anibi ifeoluwa",
        age: "Age: 25",
        Nationality: "Nationality: Nigeria",
        Email: "Email:anibi2009@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "44.JPEG"
    },

    {
        Name: "Full Name: Adeyemi Babatunde",
        age: "Age: 21",
        Nationality: "Nationality:Nigeria",
        Email: "Email:babatunde333@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "22.JPEG"
    },

    {
        Name: "Full Name: martins  ajoke",
        age: "Age: 25",
        Nationality: "Nationality:Nigeria",
        Email: "Email:ajoke345@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "55.JPG"
    },

    {
        Name: "Full Name: Lawal Salam",
        age: "Age: 25",
        Nationality: "Nationality:Nigeria",
        Email: "Email: lawalsala7654@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "111.PNG"
    },

    {
        Name: "Full Name: Adeniyi damola",
        age: "Age: 29",
        Nationality: "Nationality:Nigeria",
        Email: "Email: neyo454@gmail.com",
        Skincolor: " SkinColor:Brown",
        img: "22.JPEG"
    }


]

display() 


function display() {
    image.src = arrobj[index].img
    text.innerHTML = `<h3 id="myh3"> 
        ${arrobj[index].Name}<br>
        ${arrobj[index].age} <br> 
        ${arrobj[index].Nationality} <br>
        ${arrobj[index].Email} <br>
        ${arrobj[index].Skincolor} 
         </h3> `
}
//minus 1 for the last index of a array
function next() {
    if (index == arrobj.length - 1) {
        index = 0
    } else {
        index++
    }

    display()

}

function prev() {
    if (index == 0) {
        index = arrobj.length - 1
    } else {
        index--
    }
    display()
}