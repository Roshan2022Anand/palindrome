const input = document.getElementById("text-input");
const checkBtn = document.getElementById('check-btn');
const ans = document.getElementById("result");
const isPalindrome=()=>{
  let index = 0;
  if(input.value == ""){
    alert("Please input a value")
    return;
  }
  let text = input.value.toLowerCase();
  let newText = [];
  text = Array.from(text);
  for(let i = 0;i < text.length;i++){
    if(/^[a-zA-Z0-9]+$/.test(text[i])){
        newText[index] = text[i];
        index++;
    }
  }
  let rev = newText;
  rev = rev.reverse().join("");
  newText = newText.reverse().join("");
  if(newText === rev){
    ans.innerText = `${input.value} is a palindrome`;
  }else{
    ans.innerText = `${input.value} is not a palindrome`;
  }
  input.value = "";
}
checkBtn.onclick = isPalindrome;