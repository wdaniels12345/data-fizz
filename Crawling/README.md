Walker Daniels
Datafiniti WebCrawler Project
1/31/23

webCrawler.js is designed with the intent to scrape product information from walgreens household essentials.
The only outside libraries needed for this program are axios and cheerio. 
Both of these can be easily installed with the terminal commands - 

npm install axios
npm install cheerio

Axios is neccesary because it allows the script to make http requests from node. 
Cheerio allows for html to be parsed from a website to node. 

Unfortunately this program does not display all of the information requested from the github assignment. 
I cannot get the program to display the UPC or product description. 
This is because that information is located on a seperate URL and I cannot get the crawler to traverse to any seperate pages. 

Once these libraries are installed assuming you are in the correct directory 
the program should run with the command -

node webCrawler.js

Thank you for the opportunity datafiniti!
