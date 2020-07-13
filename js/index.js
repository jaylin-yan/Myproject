
window.onload = function()
{
    var navul = document.getElementById("nav-ul");
    var lis = navul.children;
    for(var i=0;i<lis.length;i++)
    {
        lis[i].index = i;
        lis[i].onmouseover = function()
        {

            for(j=0;j<lis.length;j++){
                lis[j].className = "";
            }
            this.className = "current";
           
        }

        lis[i].onmouseout = function()
        {
           this.className = "";
           lis[0].className = "current";
        }

    }
}