function Grad(sNazivGrada, nBrojStanovnika, nLatituda, nLongituda)
{
    this.m_sNazivGrada = sNazivGrada;
    this.m_nBrojStanovvnika = nBrojStanovnika;
    this.m_nLatituda = nLatituda;
    this.m_nLongituda = nLongituda;
}

var oVirovitica =  new Grad("Virovitica", 21291, 45.831939, 17.383889);
var oSlatina = new Grad("Slatina", 13686, 45.7, 17.71);
var oBjelovar = new Grad("Bjelovar", 40276, 45.91, 16.84);
var oOsijek = new Grad("Osijek", 108048, 45.551, 18.694);
var oZagreb = new Grad("Zagreb", 802338, 45.8, 15.97);


Grad.prototype.dajVelicinuGrada = function()
{
    if(this.m_nBrojStanovvnika < 30000)
    {
        return 1;
    }
    else if(this.m_nBrojStanovvnika >= 30000 && this.m_nBrojStanovvnika < 200000)
    {
        return 2;
    }
    else
    {
        return 3;
    }
}

console.log(oVirovitica.dajVelicinuGrada());
console.log(oZagreb.dajVelicinuGrada());

function dajUdaljenost(gradPrvi, gradDrugi)
{

    var R = 6371;
    var dLat = deg2rad(gradDrugi.m_nLatituda-gradPrvi.m_nLatituda);
    var dLon = deg2rad(gradDrugi.m_nLongituda-gradPrvi.m_nLongituda); 
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(gradPrvi.m_nLatituda)) * Math.cos(deg2rad(gradDrugi.m_nLatituda)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var Udaljenost = R * c;
    return Math.round(Udaljenost);
}

//Stupnjevi u radijane
function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  console.log(dajUdaljenost(oZagreb,oVirovitica));