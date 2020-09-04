let palindrome = false;

function verificaPalindrome(x) 
{
    for (i = 0; i < (x.length)/2; i++)
    {
        if (x[i] === x[(x.length)- 1 -i])
        {
            palindrome = true;
        }
        else
        {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));