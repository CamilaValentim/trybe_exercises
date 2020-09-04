let trueOrFalse = false;

function verificaFimPalavra(string1, string2)
{
    for (let i = 0; i < string2.length; i += 1)
    {
        let caractere1 = string1.length - (i + 1);
        let caractere2 = string2.length - (i + 1);

        if (string2.charAt(caractere2) === string1.charAt(caractere1))
        {
            trueOrFalse = true;
        }
        else
        {
            trueOrFalse = false;
            break;
        }
    }
    return trueOrFalse;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));