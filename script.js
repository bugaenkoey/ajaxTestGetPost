function Process() {
        var xmlhttp = new XMLHttpRequest();
        myname = document.getElementById("usertext").value;
        console.log(myname);
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "handler.php?name=" + myname);
        xmlhttp.send();
}