// Question 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly average,
// a specific week’s average, and all the weeks’ averages.

class Temperature {
  // Name and Datastore constructor
  constructor(name) {
    this.name = name;
    this.dataStore = [];
  }

  // Method to add temperature data into the datastore array
  add(...temp) {
    this.dataStore.push(...temp);
  }

  // Method to calculate a specific week's average
  average() {
    // calculate total value in datastore array using reduce
    let total = this.dataStore.reduce((a, b) => a + b);

    // average temperature calculation
    let averageTemp = (total / this.dataStore.length).toFixed(2);

    console.log(`${this.name} average temperature: ${averageTemp}`);
  }
}

// Extends Temperature class for Weekly and Monthly Temperature to store data in Multi-Dimensional Array
class CalcTemp extends Temperature {
  constructor(name) {
    super(name);
  }

  // Method to calculate all week's average
  weeklyAverage() {
    let weeklyTotal = 0;
    let weeklyAverageTemp = 0;

    console.log(`${this.name} weekly temperature`);

    // Outer loop loops through the rows of the Multi-dimensional array
    // Inner loop loops through the columns of the Multi-dimensional array
    for (let row = 0; row < this.dataStore.length; row++) {
      for (let col = 0; col < this.dataStore[row].length; col++) {
        weeklyTotal += this.dataStore[row][col];
      }

      weeklyAverageTemp = weeklyTotal / this.dataStore[row].length;
      weeklyTotal = 0;

      console.log(
        `Week ${parseInt(
          row + 1
        )} average temperature: ${weeklyAverageTemp.toFixed(2)}`
      );
    }
  }

  // Method to calculate monthly average
  monthlyAverage() {
    let monthlyTotal = 0;
    let monthlyAverageTemp = 0;

    for (let row = 0; row < this.dataStore.length; row++) {
      for (let col = 0; col < this.dataStore[row].length; col++) {
        monthlyTotal += this.dataStore[row][col];
      }
    }
    monthlyAverageTemp = monthlyTotal / this.dataStore.length;
    console.log(`${this.name} Average Temperature: ${monthlyAverageTemp}`);
  }
}

// Temperature Data for Week 1 in January
let janWeekOne = new Temperature("Week 1");
janWeekOne.add(53, 45, 56, 56, 98, 85, 65);

// Temperature Data for Week 2 in January
let janWeekTwo = new Temperature("Week 2");
janWeekTwo.add(45, 56, 43, 44, 56, 32, 56);

// Temperature Data for Week 3 in January
let janWeekThree = new Temperature("Week 3");
janWeekThree.add(46, 58, 89, 52);

// Temperature Data for Week 4 in January
let janWeekFour = new Temperature("Week 4");
janWeekFour.add(56, 56, 23, 56, 78, 65, 68);

// Temperature data for January
let janTemp = new CalcTemp("January");
janTemp.add(
  janWeekOne.dataStore,
  janWeekTwo.dataStore,
  janWeekThree.dataStore,
  janWeekFour.dataStore
);

console.log(`###################################`);
janWeekOne.average();
janWeekTwo.average();
janWeekThree.average();
janWeekFour.average();

console.log(`###################################`);
janTemp.weeklyAverage();

console.log(`###################################`);
janTemp.monthlyAverage();
console.log(`###################################`);
