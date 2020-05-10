# Big Basket Notifier

<img src="/assets/icon.jpeg" alt="Site Logo" height="100" title="Site Logo" align="right" />

### 🤔 What's Big Basket Notifier?
A watcher that hits the Bigbasket's API for checking the availability of slots.
Developed during COVID-19 pandemic to notify the user once a slot to buy groceries is available.

### 💡 IDEA:
During the inital days of COVID-19, when it wasn't declared as pandemic by [WHO](https://who.int/), the slots for buying groceries on Big Basket started to decrease, even though one has Big Basket Star Membership. It was very difficult to go out and buy the groceries. So in order to solve this issue, I developed this watcher which keeps checking for the slots every 5 mins, once its available it sends the local SMS on the user's phone saying that slot is available.

It is deployed on [AWS Lambda](https://aws.amazon.com/lambda/) function and configured a cron job to make it run every 10 mins.

For sending the SMS on the user's phone, I've used [Twilio](https://www.twilio.com/)
which allows me to send sms programmatically.

#### Screenshot:
<img src="/assets/Screenshot1.jpeg" height="500px"/>

### 💻 Steps to enable:

1.  Open Chrome and head over to bigbasket.com and login into your account, click on basket.

2.  Open Chrome Dev Tools, toggle device toolbar and make it a mobile view then navigate to networks tab and look for this URL /get-app-data-dynamic

3.  Right click on it and copy its cURL to the clipboard.

4.  Import it in the postman and look for headers section.

5.  one-by-one copy all the parameters in the config.js file and place it in the root directory of the project.

6.  Also copy body from the tab next to headers and paste it in the same object at the bottom.

config.js will look something like this.

```
module.exports = {
  headers: {
    authority:'',
    accept:'',
    'sec-fetch-dest':'',
    'user-agent':'',
    dnt:'',
    'content-type':'',
    origin:'',
    'sec-fetch-site':'',
    'sec-fetch-mode':'',
    referer:'',
    'accept-language': '',
    cookie:'',
    'Content-Type': ''
  },
  bbURL: 'https://www.bigbasket.com/mapi/v3.4.0/get-app-data-dynamic/',
  body:
    '',

  };
```

Once that's done.

Head over to the terminal and first of all install all the dependencies by 

`npm i`

then do `npm start`

## ❤️ Credits

- [Big Basket](https://bigbasket.com)
- [Amazon Web Services (AWS)](https://aws.amazon.com/)
- [Twilio](https://www.twilio.com/)

## 🎓 License

MIT
