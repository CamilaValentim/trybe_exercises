let salario = 3000;

if (salario <= 1556.94)
{
    salario *= (1 - 0.08);
}
else if (salario <= 2594.92)
{
    salario *= (1 - 0.09);
}
else if (salario <= 5189.82)
{
    salario *= (1 - 0.11);
}
else if (salario > 5189.82)
{
    salario -= 570.88;
}

if (salario > 1903.98 && salario < 2826.65)
{
    salario -= ((salario * 0.075) - 142,80);
}
else if (salario <= 3751.05)
{
    salario -= ((salario * 0.15) - 354.8);
}
else if (salario <= 4664.68)
{
    salario -= ((salario * 0.225) - 636.13);
}
else if (salario > 4664.68)
{
    salario -= ((salario * 0.275) - 869.36);
}

console.log("O valor líquido a ser recebido é", salario);