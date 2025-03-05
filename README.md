# Honma Trading Club

Front of Honma Trading Club website.
Honma Trading Club is a community and a training program to learn trading fundamentals, Forex oriented. The goal is to help anyone that wish to improve their trading skills, knownledge, strategy and mindset.

The website shows who is Honma founder, what are the different training programs offered and a payment system through subscription.

## Stack

- Made with Vite
- Tailwind CSS
- Shadcn
- Stripe

## To launch locally

```js
yarn dev
```

### Use local backend with Stripe

Stripe is a payment platform that allows you to accept payments online.

To use the local frontend with your local backend, you need to launch your backend over https.

To do so, you can use ngrok to forward requests to your local server.
If your backend is running on port 3100, you can run the following command:

```js
ngrok http 3100
```
