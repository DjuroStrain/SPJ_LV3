function KompleksniBroj(sRealniDio, sImaginarniDio)
{
    this.m_sRealni = sRealniDio;
    this.m_sImaginarni = sImaginarniDio;
}

var PrviBroj = new KompleksniBroj(1,6);
var DrugiBroj = new KompleksniBroj(5,3);
var TreciBroj = new KompleksniBroj(3,4);
var CetvrtiBroj = new KompleksniBroj(4,5);
var PetiBroj = new KompleksniBroj(5,6);

var _kb = {
    ispisiKompleksniBroj: function(Broj)
    {
        return Broj.m_sRealni+"+"+Broj.m_sImaginarni+"i";
    },
    zbroji: function(Broj1, Broj2)
    {
        var realni = Number(parseInt(Broj1.m_sRealni)+parseInt(Broj2.m_sRealni));
        var imaginarni  = Number(parseInt(Broj1.m_sImaginarni)+parseInt(Broj2.m_sImaginarni));
        var broj = new KompleksniBroj(realni, imaginarni);
        return broj;
    },
    pomnozi: function(Broj1, Broj2)
    {
        var realni = Number(parseInt(Broj1.m_sRealni)*parseInt(Broj2.m_sRealni))-(parseInt(Broj1.m_sImaginarni)*parseInt(Broj2.m_sImaginarni));
        var imaginarni = Number(parseInt(Broj1.m_sRealni)*parseInt(Broj2.m_sImaginarni))+(parseInt(Broj2.m_sRealni)*parseInt(Broj1.m_sImaginarni))
        var broj = new KompleksniBroj(realni, imaginarni);
        return broj;
    }
}

function odradiOperaciju()
{
    var odabir = document.querySelector('#operacija');
    var broj1 = new KompleksniBroj(document.querySelector('#realni_dio1').value, document.querySelector('#imaginarni_dio1').value);
    var broj2 = new KompleksniBroj(document.querySelector('#realni_dio2').value, document.querySelector('#imaginarni_dio2').value);
    var rezultatRealni = document.querySelector('#realni_dio');
    var rezultatImaginarni = document.querySelector('#imaginarni_dio');

    if(odabir.value == 1)
    {
        var result = _kb.zbroji(broj1, broj2);
        rezultatRealni.value = result.m_sRealni;
        rezultatImaginarni.value = result.m_sImaginarni;
    }
    else if(odabir.value == 2)
    {
        var result = _kb.pomnozi(broj1, broj2);
        rezultatRealni.value = result.m_sRealni;
        rezultatImaginarni.value = result.m_sImaginarni;
    }
}


console.log(_kb.ispisiKompleksniBroj(PrviBroj));
console.log(_kb.zbroji(PrviBroj, DrugiBroj));
console.log(_kb.pomnozi(PrviBroj, DrugiBroj));



