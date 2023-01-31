//Walker Daniels 
//Datafiniti webcrawling project
//1/28/23
//The purpose of this program is to scrape product information from walgreens and display it

//the libraries used for this example are axios and cheerio.
const axios = require("axios");
const cheerio = require("cheerio");


//This function requests the html where walgreens household essential items are located. 
//It builds the product object where our info is stored and uses it to display at the end of the program.
const fetchProduct = async () => 
{
   try {

    //Here I have yet to discover how to crawl from walgreens main URL to the URL below where househould essentials are located.
    //Therefore for this program to work it must begin from the household essentials page.
       const response = await axios.get('https://www.walgreens.com/store/c/productlist/N=20000912');

       const html = response.data;

       const $ = cheerio.load(html);

       const product = [];
   
//This section uses specific html information from walgreens and displays that info in accordance with what it represents. 
//For example, div.brand is the tag in the walgreens html that represents the product brand. When the program is run it should display 
//something along the lines of  'lysol' or 'clorox'. 
 $('li.item.card.card__product').each((_idx, el) => {
        const prod = $(el)

        const brand = prod.find('div.brand').text()

        const title = prod.find('strong.description').text()

        const image = prod.find('figure.product__img > img').attr('src')

        const price = prod.find('div.product__price-contain').text()

        const link = prod.find('li.item.card.card__product > div > div > a').attr('href')


//This block of code was written with the intent to take the link of each seperate product
//and load them seperately so as to be able to retrieve the product description and UPC number.
//It is neccesary because neither of that information is available from the main previous link where all the products are displayed. 
//However I cannot get this block of code to work. I am receiving a syntax error regarding the 'await' on line 47. 
//If I remove the await the whole thing breaks. 
/*------------------------------------------------------------------------
        try {
            const response = await axios.get(`https://walgreens.com${link}`);
     
            const html = response.data;
     
            const $ = cheerio.load(html);
        
    $('li.prodSpec').each((_idx, el) => {
        const description = prod.find('td.data-reactid').text()
        const upc = prod.find('td.data-reactid').text()
        
*///----------------------------------------------------------------------



    //This is where the output of the product info is formatted. 
    let element = {

        brand,
        title,
        //description,
        image,
        link: `https://walgreens.com${link}`, //this syntax is neccesary because the html tag on its own will not actually redirect you to the correct page without. 
        price,
       // upc, 
    }

            product.push(element)
       });

       return product;

   } catch (error) {
       throw error;
   }
};


//Here we display our product info to the console. 
fetchProduct().then((product) => console.log(product));
