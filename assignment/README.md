# Assignment

Let's look back to Week 4's Lab 2, Part 2. In this lab, we used AJAX to
download a JSON file with an array of objects. Then we looped through that
array to plot each one on the map.

Now we can use our new skills with jQuery to make this program more dynamic.
Instead of hardcoding information about your dataset in the javascript file, you
will allow the user to enter this information and press a button to add markers
to the map.

#### Task 1

First, we need to copy any logic from Week 4's Lab 2, Part 2. Copy
part2-app-state.js from Week 4's Lab 2, Part 2 into main.js. Run index.html
in Week 5 Assignment and make sure your code still works properly. It should!

#### Task 2

In your index.html file, add four elements:

1. Text input field, which will represent the URL of your dataset
2. Text input field, which will represent the latitude key in your data
3. Text input field, which will represent the longitude key in your data
4. Button, which will run your script

Regarding the latitude and longitude keys: remember that each dataset has its
own key or label for these values. For example,
[philadelphia bike crashes](https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-bike-crashes-snippet.json)
uses LAT and LNG while
[solar installations](https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json)
uses X and Y or LONG\_ and LAT. The user will need to be able to enter the keys
which they hope to extract Latitude/Longitude information from in addition to
the URL for the dataset.

#### Task 3

Make sure it works.
The user should be able to type in a URL of one of our datasets,
as well as the keys for latitude and longitude, click the button, and have
their specified dataset mapped.

To do this, you will need to use jQuery to select the button and create a click
event on it. When the button is clicked, it should run a function that selects
the three input fields, checks their values, and assigns those values to
variables. Those variables should be used in your application to replace
previously hardcoded data.

