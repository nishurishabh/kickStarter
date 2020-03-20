# kickStarter 2.0
A react app inspired by the idea of KickStarter and tries to solve trust related issues by using ethereum platform. 

You can run my project by : 
1. Clone to your local machine
2. 'npm install' to install all the npm modules used in the project.
3. 'npm run dev' to run the project.


<h1> What is kickStarter </h1>

Kickstarter is a very famous crowd-funding platform for inventors in the community who want to make new electronic appliances and gadgets.
<ul>
  <li> Let's assume there is a inventor with a brand new idea. 
  <li> For making it, the inventor may need some capital investments for buying electroic parts from vendors.
  <li> Kickstarter helps raise this money. The people who are impressed by the idea can contribute to inventor. And the inventor in             return gives the product once he has made it. 
  <li> At first instance, KickStarter looks beautiful. But it has faced lot of problems. 
</ul>

<h1> Problems with the KickStarter </h1>
The problem is not difficult to understand. Some unethical inventors can create promising campaigns(product's idea) on the platform. Once, funds are raised these malicious inventors steal all the money. For ex. [Zano raised millions on Kickstarter](https://medium.com/kickstarter/how-zano-raised-millions-on-kickstarter-and-left-backers-with-nearly-nothing-85c0abe4a6cb)

<h1> My approach to solve the problem </h1>
The solution has two main aspects. 
<ul>
  <li> Firstly, the money is not directly sent to the campaign creater. A manager is a smart-contract which holds all the funds that is        raised. Every investor has to contribute some minimum fund in order to become a approver. 
  <li> Now, if the campaign creator wants to buy electronic parts from some vendors, he/she can create a spending request. The request          contains vendors address and the funds to be transfered. The approvers finally give their vote to the spending request. Here            comes the trick part. If the majority of the investors vote, the funds are automatically transfered to the vendors account. This        eliminates the situation of inventor stealing the money.  
</ul>

<h1> Why this approach works? </h1>
<ul>
  <li> The investors have absolute transarency of the expenditure as they can participate in the voting of every spending requests.
  <li> The money is not controlled by any person or middleman. It is controlled by logic and code. 
  <li> The honest campaign creators will always get the benefit from this paltform while the dishonest ones will never be able to make          fradulent transfers of funds to their accounts. 
</ul>

<hr>
I would like to give some highlights of the app :

1. The home page contains all the campaigns that is present on the app. Now the campaigns can be viewed, contributed. And no contracts can be deleted anywhere down the line in future. New Campaigns can be added by anyone mentioning the minimum contribution.

![Screenshot from 2019-07-23 18-40-55](https://user-images.githubusercontent.com/39476553/77155808-2085df00-6ac4-11ea-975d-01f6f9bbc3c0.png)

2. Each campaign can be viewed. The approvers, pending requests, address of manager and the campaign balance related to the campaigns. 
Also, anyone can contribute to the campaigns (greater than the min Contribution) to become a approver.
![Screenshot from 2019-07-23 18-53-49](https://user-images.githubusercontent.com/39476553/77155805-1ebc1b80-6ac4-11ea-9c56-662e25b35695.png)

3. Now an approver is the one who can and will vote for the requests associated with the campaign he/she has contributed. This solves the  fradulent transfers of money in the KickStarter. 

![Screenshot from 2019-07-23 18-52-21](https://user-images.githubusercontent.com/39476553/77155806-1f54b200-6ac4-11ea-8acc-d21ce5b8a4f5.png)


4. Now the campaign owner can create new spending request mentioning the vendor's address and value to be transferred in Ethers.

![Screenshot from 2019-07-23 18-58-40](https://user-images.githubusercontent.com/39476553/77155811-211e7580-6ac4-11ea-8542-122b355e1bcd.png)


5. At last, an approver can view all the pending requests. He can either choose to approve. Only the manager has the power to finalize the request. Once the request is finalized, the amount is transfered to the particular vendor.  

![Screenshot from 2019-07-23 19-14-36](https://user-images.githubusercontent.com/39476553/77155801-1c59c180-6ac4-11ea-9b41-7dc15f0f9703.png)



Here are the screenshots of my work : 
<ul>
  <li> https://drive.google.com/open?id=1zNH5BorA0aHfsAUV4oEc_9yT6qyurMKu </li>
  <li> https://drive.google.com/open?id=1tcQcx7EyiYVFWojcCaRmHaZ96VJ4cPsA </li>
  <li> https://drive.google.com/open?id=1CA-kVZuNT49IvvdCvHW4epOS8ddp_zP- </li>
  <li> https://drive.google.com/open?id=1Dp5sy-n9hcGJtpE7coomxykp_7yUfJvG </li>
  <li> https://drive.google.com/open?id=13MqDasRBa96CIKDUQnTEQhqTNJ6iavmp </li>
 </ul


 
