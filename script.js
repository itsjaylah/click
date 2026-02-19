let powerpuff = document.querySelector(".powerpuff");
let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let message = document.querySelector(".message");




button.onclick = function(){
  console.log("button check");
  
  
  let answer1 = input1.value;
  console.log("answer1");
  let answer2 = input2.value
  console.log("answer2");
  
  if(answer1 === "purple" && answer2 === "sweet"){
    console.log("bliss");
 
    document.querySelector("div").innerHTML = "Congrats your powerpuff girl is bliss! Your powerpuff girl is bliss because of her compassion and care remain even after emotional exhaustion and hardship."
    console.log("change-pic");
    powerpuff.src="blissHeart.jpg";
     
  } else if(answer1 === "blue" && answer2 === "sweet"){
    console.log("bubbles");
    document.querySelector("div").innerHTML = "Congrats your powerpuff girl is bubbles! Your powerpuff girl is bubbles because she leads with empathy, emotionalopenness and kindness."

    
  } else if(answer1 === "pink" && answer2 === "spicy"){
    console.log("blossom");
      document.querySelector("div").innerHTML = "Congrats your powerpuff girl is blossom! Your powerpuff girl is blossom because she is sharp, confident, and assertive, adding intensity through leadership and intellect "
    
    
  }  else {answer1 === "green" && answer2 === "spicy";
    console.log("buttercup");
      document.querySelector("div").innerHTML = "Congrats your powerpuff girl is buttercup!  Your powerpuff girl is buttercup because her strength shows up as raw intensity, defensiveness and action based rather then softness ";
          }
};
