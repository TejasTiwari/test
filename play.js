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

    document.getElementById("demo2").placeholder = "Hello world!";
}

var cHelloWorld = (function() {
    /*
    #include <stdio.h>
    int main() {
       // printf() displays the string inside quotation
       printf("Hello, World!");
       return 0;
    }
*/
}).toString().split('\n').slice(1, -1).join('\n');

var javaHelloWorld = (function() {
    /*
    // Your First Program

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
*/
}).toString().split('\n').slice(1, -1).join('\n');



var cPlusHelloWorld = (function() {
    /*
    // Your First C++ Program

    #include <iostream>

    int main() {
        std::cout << "Hello World!";
        return 0;
    }
*/
}).toString().split('\n').slice(1, -1).join('\n');

var shHelloWorld = (function() {
    /*
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
*/
}).toString().split('\n').slice(1, -1).join('\n');

var javaScriptHelloWorld = (function() {
    /*
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
    */
}).toString().split('\n').slice(1, -1).join('\n');
