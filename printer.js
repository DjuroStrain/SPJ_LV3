function Printer(nivo_tonera, dvostranoIspisivanje)
{
    this.nivo_tonera = Math.min(Math.max(parseInt(nivo_tonera), 0),100);
    this.dvostranoIspisivanje = dvostranoIspisivanje;
    this.ukupanBrojStranica = 0;
}

Printer.prototype.dodajBoju = function()
{
    if(this.nivo_tonera == 100)
    {
        console.log("Printer je pun");
    }
    else{
        this.nivo_tonera = 100;
        console.log("Printer je napunjen");
    }
}


Printer.prototype.printaj = function(brojStranica)
{
        var brojStranica2 = 0;
        for(var i = 0; i < brojStranica; i++)
        {   
            if(this.nivo_tonera > 0)
            {
                if(this.dvostranoIspisivanje == true)
                {
                    this.nivo_tonera -= 0.2;
                    brojStranica2 += 0.5;
                }

                else
                {
                    this.nivo_tonera -= 0.1;
                    brojStranica2++;
                }

            }
            else{
                return "Printer je prazan";
            }
        }
        return "Broj stranica:"+Math.round(brojStranica2)+" i Nivo tonera: "+Math.round(this.nivo_tonera);   
}




var Samsung_M283x = new Printer(100, true);
var Epson_Sx105 = new Printer(90, false);
var Cannon_Pixma = new Printer(85, true);
var HP_Smart_tank_500 = new Printer(95, false);

console.log(Samsung_M283x.printaj(15));
console.log(HP_Smart_tank_500.printaj(16));
//console.log(VratiBrojStranica(Samsung_M283x));
