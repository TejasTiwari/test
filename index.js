const createAccount = document.querySelector('.create-account')

createAccount.addEventListener('click',() => {
    location.href = "signup.html"
})

const playground = document.querySelector('.ground')

playground.addEventListener('click',() => {
    location.href = 'playground.html'
})

const list = document.querySelector('.languages')

list.addEventListener('onchange',() => {
    alert(list.value)
})

// function for display in playground

function myFunction() {
    var language = document.getElementById("mySelect").value;

    if (language === 'Python') {
        document.getElementById("demo").placeholder = "print('Hello, world!')";
    } else if (language === 'C') {
        document.getElementById("demo").placeholder = cHelloWorld;
    } else if (language === 'Java') {
        document.getElementById("demo").placeholder = javaHelloWorld;
    } else if (language === 'JavaScript') {
        document.getElementById("demo").placeholder = javaScriptHelloWorld;
    } else if (language === 'C#') {
        document.getElementById("demo").placeholder = shHelloWorld;
    } else if (language === 'C++') {
        document.getElementById("demo").placeholder = cPlusHelloWorld;
    }
}
var cHelloWorld	= (function(){ /*
    #include <stdio.h>
    int main() {
       // printf() displays the string inside quotation
       printf("Hello, World!");
       return 0;
    }
*/}).toString().split('\n').slice(1, -1).join('\n');

var javaHelloWorld	= (function(){ /*
    // Your First Program

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
*/}).toString().split('\n').slice(1, -1).join('\n');



var cPlusHelloWorld	= (function(){ /*
    // Your First C++ Program

    #include <iostream>

    int main() {
        std::cout << "Hello World!";
        return 0;
    }
*/}).toString().split('\n').slice(1, -1).join('\n');

var shHelloWorld	= (function(){ /*
    // Hello World! program
    namespace HelloWorld
    {
        class Hello {
            static void Main(string[] args)
            {
                System.Console.WriteLine("Hello World!");
            }
        }
    }
*/}).toString().split('\n').slice(1, -1).join('\n');

var javaScriptHelloWorld = (function(){/*
    <!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
*/}).toString().split('\n').slice(1, -1).join('\n');

const appStore = document.querySelector('.apple')

appStore.addEventListener('click',() => {
    location.href = "https://www.apple.com/in/ios/app-store/"
})

const googlePlay = document.querySelector('.google')

googlePlay.addEventListener('click',() => {
    location.href = 'https://play.google.com/store'
})
