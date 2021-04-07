# fabric-scraper
A little web scraper that sends a text alert when fabric is back in stock

# Serverless
An AWS Lambda function is configured to run the scraper using the [Serverless Framework](https://www.serverless.com/framework/docs/).

# AWS
The AWS Lambda function is triggered daily via AWS Event Bridge. Credentials are configured as Lambda env variables.

# Cheerio
Axios is used to make a request to the website, Big Duck Canvas, and Cheerio looks for the "Add to Cart" button on the product page.

# Twilio
If the Add to Cart button is found, Twilio will send a text message alert.
