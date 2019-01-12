/*
This is a problem from hackerrank's Interview preparation section ->sorting->Mark and Toys
Description:
Mark and Jane are very happy after having their first child. 
Their son loves toys, so Mark wants to buy some. 
There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? 
For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. 
He would choose the first group of  items.

See link and my description about my solution in Readme.md
*/
function maximumToys(prices, k) {
    let sum = 0;
    let count = 0;
    const sortedPrices = prices.sort((a, b) => a - b);

    for (let i = 0; i < sortedPrices.length; i++) {
        sum = sum + sortedPrices[i];

        if (sum <=k) {
            count = count + 1;
        }       
    }
    return count;
}