const lis = document.querySelectorAll("ul li");
        lis.forEach((node) => {
            node.addEventListener('mousedown', function(e){
                const value = node.innerText.trim();
                const result = document.querySelector(".result");
                const resultText = result.innerText.trim()
              
                if(resultText == '0' || resultText == 'Infinity' || resultText == 'undefined'){
                    result.innerText = '';
                }
                if(value == '='){
                    let solution = eval(resultText);
                    result.innerText = solution;
                    return true;
                }

                if(value == 'C'){
                    result.innerText = '0';
                    return true;
                }

                result.append(value);
            })
        })