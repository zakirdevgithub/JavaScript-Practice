// A factor that is a prime number. In other words: any 
// of the prime numbers that can be multiplied to give the original number. Example: 
// The prime factors of 15 are 3 and 5 (because 3×5=15, and 3 and 5 are prime numbers).

// Algorithm
// 1.Divide number by 1 to that number
// 2.If divide then check these number Prime or Not
// 3.if prime number then print

let number=15;

if(number != 0)
{
    for (let i = 1; i < number; i++)
    {
        if (number % i == 0)
        {
            for (let j = 2; j <=i; j++)
            {
                if (i % j == 0)
                {
                    console.log(i);
                }
            }
        }
    }
}