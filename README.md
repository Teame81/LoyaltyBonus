# Loyalty Bonus

## NOT A COMPLETE GUIDE... (Work in progress)

Loyalty Bonus is a web app for dealing with bonus calulation for consultants.
Im using a .NET core(3.1.4) API and using Angular(10.1.0) for the SPA-Frontend.

## Installation and start of development servers

Install Node, Angular and dotnet.
Use git to clone this project.
Link: [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install git.

```bash
git clone https://github.com/Teame81/LoyaltyBonus.git
cd LoyaltyBonus.API
dotnet ef migrations add init
dotnet ef database update
dotnet run
cd ..
cd LoyaltyBonus-SPA
npm install
ng serve
```

You should now have both development servers upp and running. Press to view the frontend [localhost](http://localhost:4200).

## Postman
Import this link to you postman to test the API.
https://www.getpostman.com/collections/5849a5298147efa28dbb

## License

[MIT](https://choosealicense.com/licenses/mit/)
