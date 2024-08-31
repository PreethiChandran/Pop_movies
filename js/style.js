function act()
{
    var a = document.getElementById("mname").value;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() 
    {
        if(http.readystate == 4 && http.status==200)
        {
            console.log(http.responseText)
            var mdata = JSON.parse(http.responseText);
            document.getElementById("footer").style.display = "block";
            document.getElementById("movies").style.display = "block";
            document.getElementById("mtitle").innerHTML = mdata.Title;
            document.getElementById("mactors").innerHTML = mdata.Actors;
            document.getElementById("mrating").innerHTML = mdata.Ratings[1].Value;
        }
    }
    http.open("get", "http://www.omdbapi.com/?t="+a+"&apikey=c429066e", false);
    http.send();
    console.log("test");
}