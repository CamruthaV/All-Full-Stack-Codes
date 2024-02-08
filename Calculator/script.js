function add(){
            var val = 0, op = 0;
            val = f1.bar.value;
            op = val.charAt(val.length-1);

            if (op == '+' || op == '-' || op == '*' || op == '/'){
                f1.bar.value = val.substring(0,val.length-1);
                f1.bar.value += '+';
            }
            else{
                f1.bar.value += '+';
            }
        }

        function sub(){
            var val = 0, op = 0;
            val = f1.bar.value;
            op = val.charAt(val.length-1);

            if (op == '+' || op == '-' || op == '*' || op == '/'){
                f1.bar.value = val.substring(0,val.length-1);
                f1.bar.value += '-';
            }
            else{
                f1.bar.value += '-';
            }
        }

        function mul(){
            var val = 0, op = 0;
            val = f1.bar.value;
            op = val.charAt(val.length-1);

            if (op == '+' || op == '-' || op == '*' || op == '/'){
                f1.bar.value = val.substring(0,val.length-1);
                f1.bar.value += '*';
            }
            else{
                f1.bar.value += '*';
            }
        }

        function divi(){
            var val = 0, op = 0;
            val = f1.bar.value;
            op = val.charAt(val.length-1);

            if (op == '+' || op == '-' || op == '*' || op == '/'){
                f1.bar.value = val.substring(0,val.length-1);
                f1.bar.value += '/';
            }
            else{
                f1.bar.value += '/';
            }
        }
