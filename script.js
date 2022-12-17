
let quotesRandom = document.getElementById('quotes');
let authorName = document.getElementById('author');
let quoteBtn = document.getElementById('btn');
quoteBtn.addEventListener("click",()=>{
    getDataQuotes();
   
});

const getDataQuotes = ()=>{
    quoteBtn.classList.add('loading')
    quoteBtn.innerText = 'Loading Quote...'
    url = "https://api.quotable.io/random";
    fetch(url).then((request) =>{
        return request.json();
    }).then((result)=>{
        quotesRandom.innerText =result.content;
        authorName.innerText =  result.author;
        quoteBtn.innerText = 'New Quote'
        quoteBtn.classList.remove('loading');           
    })
}