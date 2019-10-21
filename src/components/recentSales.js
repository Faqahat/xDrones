import React,{useEffect} from "react";
import toaster from "toasted-notes";
import  "../design/style.css";
import ShoppingCart from "../images/shopping-cart.png"


const RecentSales = () => {

    useEffect(() => {
        loop();
      });
    const loop = () =>{
        setTimeout(() =>
        {
            
           displayNotification()
            loop();
        }, Math.floor(Math.random() * 15000) + 5000); 
    }

    const  displayNotification = () => {
        
        var namesArray = ["Jacob", "Michael", "Matthew", "Joshua", "Christopher", "Nicholas", "Andrew", "Joseph", "Daniel", "Tyler", "William", "Brandon", "Ryan", "John", "Zachary", "David", "Anthony", "James", "Justin", "Alexander", "Jonathan", "Christian", "Austin", "Dylan", "Ethan", "Benjamin", "Noah", "Samuel", "Robert", "Nathan", "Cameron", "Kevin", "Thomas", "Jose", "Hunter", "Jordan", "Kyle", "Caleb", "Jason", "Logan", "Aaron", "Eric", "Brian", "Gabriel", "Adam", "Jack", "Isaiah", "Juan", "Luis", "Connor", "Charles", "Elijah", "Isaac", "Steven", "Evan", "Jared", "Sean", "Timothy", "Luke", "Cody", "Nathaniel", "Alex", "Seth", "Mason", "Richard", "Carlos", "Angel", "Patrick", "Devin", "Bryan", "Cole", "Jackson", "Ian", "Garrett", "Trevor", "Jesus", "Chase", "Adrian", "Mark", "Blake", "Sebastian", "Antonio", "Lucas", "Jeremy", "Gavin", "Miguel", "Julian", "Dakota", "Alejandro", "Jesse", "Dalton", "Bryce", "Tanner", "Kenneth", "Stephen", "Jake", "Victor", "Spencer", "Marcus", "Paul", "Brendan", "Jeremiah", "Xavier", "Jeffrey", "Tristan", "Jalen", "Jorge", "Edward", "Riley", "Wyatt", "Colton", "Joel", "Maxwell", "Aidan", "Travis", "Shane", "Colin", "Dominic", "Carson", "Vincent", "Derek", "Oscar", "Grant", "Eduardo", "Peter", "Henry", "Parker", "Hayden", "Collin", "George", "Bradley", "Mitchell", "Devon", "Ricardo", "Shawn", "Taylor", "Nicolas", "Francisco", "Gregory", "Liam", "Kaleb", "Preston", "Erik", "Alexis", "Owen", "Omar", "Diego", "Dustin", "Corey", "Fernando", "Clayton", "Carter", "Ivan", "Jaden", "Javier", "Alec", "Johnathan", "Scott", "Manuel", "Cristian", "Alan", "Raymond", "Brett", "Max", "Andres", "Gage", "Mario", "Dawson", "Dillon", "Cesar", "Wesley", "Levi", "Jakob", "Chandler", "Martin", "Malik", "Edgar", "Trenton", "Sergio", "Josiah", "Nolan", "Marco", "Peyton", "Harrison", "Hector", "Micah", "Roberto", "Drew", "Brady", "Erick", "Conner", "Jonah", "Casey", "Jayden", "Emmanuel", "Edwin", "Andre", "Phillip", "Brayden", "Landon", "Giovanni", "Bailey", "Ronald", "Braden", "Damian", "Donovan", "Ruben", "Frank", "Pedro", "Gerardo", "Andy", "Chance", "Abraham", "Calvin", "Trey", "Cade", "Donald", "Derrick", "Payton", "Darius", "Enrique", "Keith", "Raul", "Jaylen", "Troy", "Jonathon", "Cory", "Marc", "Skyler", "Rafael", "Trent", "Griffin", "Colby", "Johnny", "Eli", "Chad", "Armando", "Kobe", "Caden", "Cooper", "Marcos", "Elias", "Brenden", "Israel", "Avery", "Zane", "Dante", "Josue", "Zackary", "Allen", "Mathew", "Dennis", "Leonardo", "Ashton", "Philip", "Julio", "Miles", "Damien", "Ty", "Gustavo", "Drake", "Jaime", "Simon", "Jerry", "Curtis", "Kameron", "Lance", "Brock", "Bryson", "Alberto", "Dominick", "Jimmy", "Kaden", "Douglas", "Gary", "Brennan", "Zachery", "Randy", "Louis", "Larry", "Nickolas", "Tony", "Albert", "Fabian", "Keegan", "Saul", "Danny", "Tucker", "Damon", "Myles", "Arturo", "Corbin", "Deandre", "Ricky", "Kristopher", "Lane", "Pablo", "Darren", "Zion", "Jarrett", "Alfredo", "Micheal", "Angelo", "Carl", "Oliver", "Kyler", "Tommy", "Walter", "Dallas", "Jace", "Quinn", "Theodore", "Grayson", "Lorenzo", "Joe", "Arthur", "Bryant", "Brent", "Roman", "Russell", "Ramon", "Lawrence", "Moises", "Aiden", "Quentin", "Tyrese", "Jay", "Tristen", "Emanuel", "Salvador", "Terry", "Morgan", "Jeffery", "Esteban", "Tyson", "Braxton", "Branden", "Brody", "Craig", "Marvin", "Ismael", "Rodney", "Isiah", "Maurice", "Marshall", "Ernesto", "Emilio", "Brendon", "Kody", "Eddie", "Malachi", "Abel", "Keaton", "Jon", "Shaun", "Skylar", "Nikolas", "Ezekiel", "Santiago", "Kendall", "Axel", "Camden", "Trevon", "Bobby", "Conor", "Jamal", "Lukas", "Malcolm", "Zackery", "Jayson", "Javon", "Reginald", "Zachariah", "Desmond", "Roger", "Felix", "Dean", "Johnathon", "Quinton", "Ali", "Davis", "Gerald", "Demetrius", "Rodrigo", "Billy", "Rene", "Reece", "Justice", "Kelvin", "Leo", "Guillermo", "Chris", "Kevon", "Steve", "Frederick", "Clay", "Weston", "Dorian", "Hugo", "Orlando", "Roy", "Terrance", "Kai", "Khalil", "Graham", "Noel", "Nathanael", "Willie", "Terrell", "Tyrone", "Camron", "Mauricio", "Amir", "Darian", "Jarod", "Nelson", "Kade", "Reese", "Kristian", "Garret", "Marquis", "Rodolfo", "Dane", "Felipe", "Todd", "Elian", "Walker", "Mateo", "Jaylon", "Kenny", "Bruce", "Ezra", "Ross", "Damion", "Francis", "Tate", "Byron", "Reid", "Warren", "Randall", "Bennett", "Jermaine", "Triston", "Jaquan", "Harley", "Jessie", "Franklin", "Duncan", "Charlie", "Reed", "Blaine", "Braeden", "Holden", "Ahmad", "Issac", "Kendrick", "Melvin", "Sawyer", "Solomon", "Moses", "Jaylin", "Sam", "Cedric", "Mohammad", "Alvin", "Beau", "Jordon", "Elliot", "Lee", "Darrell", "Jarred", "Mohamed", "Davion", "Wade", "Tomas", "Jaxon", "Uriel", "Deven", "Maximilian", "Rogelio", "Gilberto", "Ronnie", "Julius", "Allan", "Brayan", "Deshawn", "Joey", "Terrence", "Noe", "Alfonso", "Ahmed", "Tyree", "Tyrell", "Jerome", "Devan", "Neil", "Ramiro", "Pierce", "Davon", "Devonte", "Jamie", "Leon", "Adan", "Eugene", "Stanley", "Marlon", "Quincy", "Leonard", "Wayne", "Will", "Alvaro", "Ernest", "Harry", "Addison", "Ray", "Alonzo", "Jadon", "Jonas", "Keyshawn", "Rolando", "Mohammed", "Tristin", "Donte", "Dominique", "Leonel", "Wilson", "Gilbert", "Coby", "Dangelo", "Kieran", "Colten", "Keenan", "Koby", "Jarrod", "Dale", "Harold", "Toby", "Dwayne", "Elliott", "Osvaldo", "Cyrus", "Kolby", "Sage", "Coleman", "Declan", "Adolfo", "Ariel", "Brennen", "Darryl", "Trace", "Orion", "Shamar", "Efrain", "Keshawn", "Rudy", "Ulises", "Darien", "Braydon", "Ben", "Vicente", "Nasir", "Dayton", "Joaquin", "Karl", "Dandre", "Isaias", "Rylan", "Sterling", "Cullen", "Quintin", "Stefan", "Brice", "Lewis", "Gunnar", "Humberto", "Nigel", "Alfred", "Agustin", "Asher", "Daquan", "Easton", "Salvatore", "Jaron", "Nathanial", "Ralph", "Everett", "Hudson", "Marquise", "Tobias", "Glenn", "Antoine", "Jasper", "Elvis", "Kane", "Sidney", "Ezequiel", "Tylor", "Aron", "Dashawn", "Devyn", "Mike", "Silas", "Jaiden", "Jayce", "Deonte", "Romeo", "Deon", "Cristopher", "Freddy", "Kurt", "Kolton", "River", "August", "Roderick", "Clarence", "Derick", "Jamar", "Raphael", "Rohan", "Kareem", "Muhammad", "Demarcus", "Sheldon", "Markus", "Cayden", "Luca", "Tre", "Jamison", "Jean", "Rory", "Brad", "Clinton", "Jaylan", "Titus", "Emiliano", "Jevon", "Julien", "Alonso", "Lamar", "Cordell", "Gordon", "Ignacio", "Jett", "Keon", "Baby", "Cruz", "Rashad", "Tariq", "Armani", "Deangelo", "Milton", "Geoffrey", "Elisha", "Moshe", "Bernard", "Asa", "Bret", "Darion", "Darnell", "Izaiah", "Irvin", "Jairo", "Howard", "Aldo", "Zechariah", "Ayden", "Garrison", "Norman", "Stuart", "Kellen", "Travon", "Shemar", "Dillan", "Junior", "Darrius", "Rhett", "Barry", "Kamron", "Jude", "Rigoberto", "Amari", "Jovan", "Octavio", "Perry", "Kole", "Misael", "Hassan", "Jaren", "Latrell", "Roland", "Quinten", "Ibrahim", "Justus", "German", "Gonzalo", "Nehemiah", "Forrest", "Mackenzie", "Anton", "Chaz", "Talon", "Guadalupe", "Austen"]
        var lettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "Z"];
        var citiesArray = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
        var randomNameNumber = Math.floor(Math.random() * namesArray.length);
        var randomLastnameNumber = Math.floor(Math.random() * lettersArray.length);
        var randomCityNumber = Math.floor(Math.random() * citiesArray.length);
    
        var randomName = namesArray[randomNameNumber];
        var randomLastname = lettersArray[randomLastnameNumber];
        var randomCity = citiesArray[randomCityNumber];
        var randomMinutes = Math.floor(Math.random() * 10) + 5;

        toaster.notify(({ onClose }) => (
            <div className="ftxsp-wrapper" >
                    <div className="ftxsp-left"><img src={ShoppingCart} alt=""/>
                    </div><div className="ftxsp-right"><div className="ftxsp-head"><span id="random-name-placeholder">{randomName}</span> 
                    <span id="random-lastname-placeholder">  {randomLastname}</span>. from <span id="random-city-placeholder">{randomCity}</span></div>
                    <div className="ftxsp-body">Bought <span className="ftxsp-body-product">xDrone Pro</span></div><div className="ftxsp-footer">
                    <span id="random-time-placeholder">{randomMinutes}</span> minutes ago</div></div></div>
              ),
              {
                  position: "bottom-right",
                  duration: 5000
              });
              
       
    }
    return (<></>)
}

export default RecentSales;



