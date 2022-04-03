import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { db } from '~/db.server';

const sample_event = [
    {
      "session_id": "2031675876-609960823-3422290020-358895401",
      "element_hash": "eyJpZCI6IiIsInVybCI6InRyYWNraW5nLnpjbGFya2UucmVwbC5jbyIsInRhZyI6IkEiLCJib2R5IjoiTG9naW4ifQ==",
      "url": "tracking.zclarke.repl.co",
      "metadata": {
        "element_index": 8,
        "url_path": "/",
        "url_params": "https://tracking.zclarke.repl.co/#about_page",
        "page_html": "\n    <h1>Banking Application</h1>\n    <a id=\"\" href=\"#login_page\">Login</a>\n    <a id=\"\" href=\"#financial_advice\">Financial Advice</a>\n    <a id=\"\" href=\"#about_page\">About Us</a>\n    <a id=\"customer_support\" href=\"#support_page\">Customer Support</a>\n\n    <h2 id=\"login_page\">Login Page</h2>\n    <p>This is the login page, which provides a form to login</p>\n        <input id=\"username\" placeholder=\"Full Name\"><br>    \n    <input id=\"password\" placeholder=\"Phone Number (Optional)\"><br>\n       <a id=\"login_button\" href=\"#acct_info\">Click to Login Us</a>\n\n    <h2 id=\"financial_advice\">Financial Planning Page</h2>\n    <p>This is the financial planning page, which provides information about how to plan for your financial future</p>\n    \n    <h2 id=\"about_page\">About Page</h2>\n        <p>This is the about page that tells you about the history of the bank</p>\n    <h2 id=\"support_page\">Support Page</h2>        \n    <p>This is the support page that provides a form to contact customer support</p>\n    <input id=\"full_name\" placeholder=\"Full Name\"><br>    \n    <input id=\"phone_num\" placeholder=\"Phone Number (Optional)\"><br>\n        <input id=\"request\" placeholder=\"What is your issue?\"><br>\n    \n    <button id=\"customer_support\">Submit Customer Feedback</button>\n\n\n<h2 id=\"acct_info\">Account Page</h2>        \n    <p>This is the page that shows your bank balance</p>\n    <h3>Checking- $1000</h3>\n    <h3>Saving- $100</h3>\n    <script src=\"simple_sdk.js\"></script>\n  \n",
        "id": "",
        "tag": "A",
        "body": "Login",
        "mouse": {
          "x": 169,
          "y": 7
        },
        "scroll": {
          "x": 0,
          "y": 0
        },
        "viewport": {
          "width": 906,
          "height": 569
        }
      },
      "utc": 1647816612736
    },
    {
      "session_id": "2031675876-609960823-3422290020-358895401",
      "element_hash": "eyJpZCI6InVzZXJuYW1lIiwidXJsIjoidHJhY2tpbmcuemNsYXJrZS5yZXBsLmNvIiwidGFnIjoiSU5QVVQiLCJib2R5IjoiIn0=",
      "url": "tracking.zclarke.repl.co",
      "metadata": {
        "element_index": 14,
        "url_path": "/",
        "url_params": "https://tracking.zclarke.repl.co/#login_page",
        "page_html": "\n    <h1>Banking Application</h1>\n    <a id=\"\" href=\"#login_page\">Login</a>\n    <a id=\"\" href=\"#financial_advice\">Financial Advice</a>\n    <a id=\"\" href=\"#about_page\">About Us</a>\n    <a id=\"customer_support\" href=\"#support_page\">Customer Support</a>\n\n    <h2 id=\"login_page\">Login Page</h2>\n    <p>This is the login page, which provides a form to login</p>\n        <input id=\"username\" placeholder=\"Full Name\"><br>    \n    <input id=\"password\" placeholder=\"Phone Number (Optional)\"><br>\n       <a id=\"login_button\" href=\"#acct_info\">Click to Login Us</a>\n\n    <h2 id=\"financial_advice\">Financial Planning Page</h2>\n    <p>This is the financial planning page, which provides information about how to plan for your financial future</p>\n    \n    <h2 id=\"about_page\">About Page</h2>\n        <p>This is the about page that tells you about the history of the bank</p>\n    <h2 id=\"support_page\">Support Page</h2>        \n    <p>This is the support page that provides a form to contact customer support</p>\n    <input id=\"full_name\" placeholder=\"Full Name\"><br>    \n    <input id=\"phone_num\" placeholder=\"Phone Number (Optional)\"><br>\n        <input id=\"request\" placeholder=\"What is your issue?\"><br>\n    \n    <button id=\"customer_support\">Submit Customer Feedback</button>\n\n\n<h2 id=\"acct_info\">Account Page</h2>        \n    <p>This is the page that shows your bank balance</p>\n    <h3>Checking- $1000</h3>\n    <h3>Saving- $100</h3>\n    <script src=\"simple_sdk.js\"></script>\n  \n",
        "id": "username",
        "tag": "INPUT",
        "body": "",
        "mouse": {
          "x": 169,
          "y": 7
        },
        "scroll": {
          "x": 0,
          "y": 117.33333587646484
        },
        "viewport": {
          "width": 906,
          "height": 569
        }
      },
      "utc": 1647816613920
    },
    {
      "session_id": "2031675876-609960823-3422290020-358895401",
      "element_hash": "eyJpZCI6ImxvZ2luX2J1dHRvbiIsInVybCI6InRyYWNraW5nLnpjbGFya2UucmVwbC5jbyIsInRhZyI6IkEiLCJib2R5IjoiQ2xpY2sgdG8gTG9naW4gVXMifQ==",
      "url": "tracking.zclarke.repl.co",
      "metadata": {
        "element_index": 18,
        "url_path": "/",
        "url_params": "https://tracking.zclarke.repl.co/#login_page",
        "page_html": "\n    <h1>Banking Application</h1>\n    <a id=\"\" href=\"#login_page\">Login</a>\n    <a id=\"\" href=\"#financial_advice\">Financial Advice</a>\n    <a id=\"\" href=\"#about_page\">About Us</a>\n    <a id=\"customer_support\" href=\"#support_page\">Customer Support</a>\n\n    <h2 id=\"login_page\">Login Page</h2>\n    <p>This is the login page, which provides a form to login</p>\n        <input id=\"username\" placeholder=\"Full Name\"><br>    \n    <input id=\"password\" placeholder=\"Phone Number (Optional)\"><br>\n       <a id=\"login_button\" href=\"#acct_info\">Click to Login Us</a>\n\n    <h2 id=\"financial_advice\">Financial Planning Page</h2>\n    <p>This is the financial planning page, which provides information about how to plan for your financial future</p>\n    \n    <h2 id=\"about_page\">About Page</h2>\n        <p>This is the about page that tells you about the history of the bank</p>\n    <h2 id=\"support_page\">Support Page</h2>        \n    <p>This is the support page that provides a form to contact customer support</p>\n    <input id=\"full_name\" placeholder=\"Full Name\"><br>    \n    <input id=\"phone_num\" placeholder=\"Phone Number (Optional)\"><br>\n        <input id=\"request\" placeholder=\"What is your issue?\"><br>\n    \n    <button id=\"customer_support\">Submit Customer Feedback</button>\n\n\n<h2 id=\"acct_info\">Account Page</h2>        \n    <p>This is the page that shows your bank balance</p>\n    <h3>Checking- $1000</h3>\n    <h3>Saving- $100</h3>\n    <script src=\"simple_sdk.js\"></script>\n  \n",
        "id": "login_button",
        "tag": "A",
        "body": "Click to Login Us",
        "mouse": {
          "x": 169,
          "y": 7
        },
        "scroll": {
          "x": 0,
          "y": 117.33333587646484
        },
        "viewport": {
          "width": 906,
          "height": 569
        }
      },
      "utc": 1647816621552
    },
    {
      "session_id": "2031675876-609960823-3422290020-358895401",
      "element_hash": "eyJpZCI6ImZ1bGxfbmFtZSIsInVybCI6InRyYWNraW5nLnpjbGFya2UucmVwbC5jbyIsInRhZyI6IklOUFVUIiwiYm9keSI6IiJ9",
      "url": "tracking.zclarke.repl.co",
      "metadata": {
        "element_index": 25,
        "url_path": "/",
        "url_params": "https://tracking.zclarke.repl.co/#acct_info",
        "page_html": "\n    <h1>Banking Application</h1>\n    <a id=\"\" href=\"#login_page\">Login</a>\n    <a id=\"\" href=\"#financial_advice\">Financial Advice</a>\n    <a id=\"\" href=\"#about_page\">About Us</a>\n    <a id=\"customer_support\" href=\"#support_page\">Customer Support</a>\n\n    <h2 id=\"login_page\">Login Page</h2>\n    <p>This is the login page, which provides a form to login</p>\n        <input id=\"username\" placeholder=\"Full Name\"><br>    \n    <input id=\"password\" placeholder=\"Phone Number (Optional)\"><br>\n       <a id=\"login_button\" href=\"#acct_info\">Click to Login Us</a>\n\n    <h2 id=\"financial_advice\">Financial Planning Page</h2>\n    <p>This is the financial planning page, which provides information about how to plan for your financial future</p>\n    \n    <h2 id=\"about_page\">About Page</h2>\n        <p>This is the about page that tells you about the history of the bank</p>\n    <h2 id=\"support_page\">Support Page</h2>        \n    <p>This is the support page that provides a form to contact customer support</p>\n    <input id=\"full_name\" placeholder=\"Full Name\"><br>    \n    <input id=\"phone_num\" placeholder=\"Phone Number (Optional)\"><br>\n        <input id=\"request\" placeholder=\"What is your issue?\"><br>\n    \n    <button id=\"customer_support\">Submit Customer Feedback</button>\n\n\n<h2 id=\"acct_info\">Account Page</h2>        \n    <p>This is the page that shows your bank balance</p>\n    <h3>Checking- $1000</h3>\n    <h3>Saving- $100</h3>\n    <script src=\"simple_sdk.js\"></script>\n  \n",
        "id": "full_name",
        "tag": "INPUT",
        "body": "",
        "mouse": {
          "x": 169,
          "y": 7
        },
        "scroll": {
          "x": 0,
          "y": 234
        },
        "viewport": {
          "width": 906,
          "height": 569
        }
      },
      "utc": 1647816623425
    },
    {
      "session_id": "2031675876-609960823-3422290020-358895401",
      "element_hash": "eyJpZCI6InJlcXVlc3QiLCJ1cmwiOiJ0cmFja2luZy56Y2xhcmtlLnJlcGwuY28iLCJ0YWciOiJJTlBVVCIsImJvZHkiOiIifQ==",
      "url": "tracking.zclarke.repl.co",
      "metadata": {
        "element_index": 29,
        "url_path": "/",
        "url_params": "https://tracking.zclarke.repl.co/#acct_info",
        "page_html": "\n    <h1>Banking Application</h1>\n    <a id=\"\" href=\"#login_page\">Login</a>\n    <a id=\"\" href=\"#financial_advice\">Financial Advice</a>\n    <a id=\"\" href=\"#about_page\">About Us</a>\n    <a id=\"customer_support\" href=\"#support_page\">Customer Support</a>\n\n    <h2 id=\"login_page\">Login Page</h2>\n    <p>This is the login page, which provides a form to login</p>\n        <input id=\"username\" placeholder=\"Full Name\"><br>    \n    <input id=\"password\" placeholder=\"Phone Number (Optional)\"><br>\n       <a id=\"login_button\" href=\"#acct_info\">Click to Login Us</a>\n\n    <h2 id=\"financial_advice\">Financial Planning Page</h2>\n    <p>This is the financial planning page, which provides information about how to plan for your financial future</p>\n    \n    <h2 id=\"about_page\">About Page</h2>\n        <p>This is the about page that tells you about the history of the bank</p>\n    <h2 id=\"support_page\">Support Page</h2>        \n    <p>This is the support page that provides a form to contact customer support</p>\n    <input id=\"full_name\" placeholder=\"Full Name\"><br>    \n    <input id=\"phone_num\" placeholder=\"Phone Number (Optional)\"><br>\n        <input id=\"request\" placeholder=\"What is your issue?\"><br>\n    \n    <button id=\"customer_support\">Submit Customer Feedback</button>\n\n\n<h2 id=\"acct_info\">Account Page</h2>        \n    <p>This is the page that shows your bank balance</p>\n    <h3>Checking- $1000</h3>\n    <h3>Saving- $100</h3>\n    <script src=\"simple_sdk.js\"></script>\n  \n",
        "id": "request",
        "tag": "INPUT",
        "body": "",
        "mouse": {
          "x": 169,
          "y": 7
        },
        "scroll": {
          "x": 0,
          "y": 234
        },
        "viewport": {
          "width": 906,
          "height": 569
        }
      },
      "utc": 1647816626218
    },
    {
      "session_id": "2031675876-609960823-3422290020-358895401",
      "element_hash": "eyJpZCI6ImN1c3RvbWVyX3N1cHBvcnQiLCJ1cmwiOiJ0cmFja2luZy56Y2xhcmtlLnJlcGwuY28iLCJ0YWciOiJCVVRUT04iLCJib2R5IjoiU3VibWl0IEN1c3RvbWVyIEZlZWRiYWNrIn0=",
      "url": "tracking.zclarke.repl.co",
      "metadata": {
        "element_index": 31,
        "url_path": "/",
        "url_params": "https://tracking.zclarke.repl.co/#acct_info",
        "page_html": "\n    <h1>Banking Application</h1>\n    <a id=\"\" href=\"#login_page\">Login</a>\n    <a id=\"\" href=\"#financial_advice\">Financial Advice</a>\n    <a id=\"\" href=\"#about_page\">About Us</a>\n    <a id=\"customer_support\" href=\"#support_page\">Customer Support</a>\n\n    <h2 id=\"login_page\">Login Page</h2>\n    <p>This is the login page, which provides a form to login</p>\n        <input id=\"username\" placeholder=\"Full Name\"><br>    \n    <input id=\"password\" placeholder=\"Phone Number (Optional)\"><br>\n       <a id=\"login_button\" href=\"#acct_info\">Click to Login Us</a>\n\n    <h2 id=\"financial_advice\">Financial Planning Page</h2>\n    <p>This is the financial planning page, which provides information about how to plan for your financial future</p>\n    \n    <h2 id=\"about_page\">About Page</h2>\n        <p>This is the about page that tells you about the history of the bank</p>\n    <h2 id=\"support_page\">Support Page</h2>        \n    <p>This is the support page that provides a form to contact customer support</p>\n    <input id=\"full_name\" placeholder=\"Full Name\"><br>    \n    <input id=\"phone_num\" placeholder=\"Phone Number (Optional)\"><br>\n        <input id=\"request\" placeholder=\"What is your issue?\"><br>\n    \n    <button id=\"customer_support\">Submit Customer Feedback</button>\n\n\n<h2 id=\"acct_info\">Account Page</h2>        \n    <p>This is the page that shows your bank balance</p>\n    <h3>Checking- $1000</h3>\n    <h3>Saving- $100</h3>\n    <script src=\"simple_sdk.js\"></script>\n  \n",
        "id": "customer_support",
        "tag": "BUTTON",
        "body": "Submit Customer Feedback",
        "mouse": {
          "x": 169,
          "y": 7
        },
        "scroll": {
          "x": 0,
          "y": 234
        },
        "viewport": {
          "width": 906,
          "height": 569
        }
      },
      "utc": 1647816629634
    }
]

sample_event.map(async function(event){
    await prisma.event.create({
        data:event
    })
})


export {}